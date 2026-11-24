import { generateText } from 'ai'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const messageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().trim().min(1).max(500),
})

const requestSchema = z.object({ messages: z.array(messageSchema).min(1).max(8) })

const guidePages = [
  { label: 'Resource directory', href: '/#resources', summary: 'Search the full directory by keyword or browse categories including mental health, substance recovery, food, housing, health care, dental, domestic violence, employment, transportation, financial resources, naloxone, and more.' },
  { label: 'Medication-assisted treatment resources', href: '/mat-resources', summary: 'Information about medication-assisted treatment and providers.' },
  { label: 'Support groups', href: '/support-groups', summary: 'Community support group information.' },
  { label: 'Education and substance information', href: '/education', summary: 'Educational content about substances and substance use.' },
  { label: 'Naloxone locations', href: '/naloxone-locations', summary: 'Find locations that provide naloxone.' },
  { label: 'Domestic violence resources', href: '/domestic-violence-resources', summary: 'Support and services for domestic violence.' },
  { label: 'Double Up Food Bucks', href: '/double-up-food-bucks', summary: 'Information about the Double Up Food Bucks program.' },
  { label: 'Events calendar', href: '/calendar', summary: 'Community events and calendar submissions.' },
  { label: 'Get involved', href: '/get-involved', summary: 'Ways to participate in prevention and recovery efforts.' },
  { label: 'Medical disclaimer', href: '/medical-disclaimer', summary: 'Limits and intended use of the site’s health information.' },
]

function findRelevantLinks(query: string) {
  const stopWords = new Set(['about', 'can', 'do', 'find', 'for', 'get', 'help', 'how', 'i', 'is', 'me', 'need', 'please', 'site', 'the', 'there', 'to', 'what', 'where', 'with', 'you'])
  const words = (query.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter((word) => word.length > 2 && !stopWords.has(word))
  const matched = guidePages.map((page) => {
    const searchable = new Set(`${page.label} ${page.summary} ${page.href}`.toLowerCase().match(/[a-z0-9]+/g) ?? [])
    const score = words.reduce((total, word) => total + (searchable.has(word) ? 1 : 0), 0)
    return { page, score }
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).slice(0, 3)

  return (matched.length ? matched : [{ page: guidePages[0], score: 0 }]).map(({ page }) => ({ label: page.label, href: page.href }))
}

export async function POST(request: Request) {
  let input: z.infer<typeof requestSchema>
  try {
    input = requestSchema.parse(await request.json())
  } catch {
    return NextResponse.json({ error: 'Please enter a question of up to 500 characters.' }, { status: 400 })
  }

  const latestQuestion = input.messages.at(-1)
  if (!latestQuestion || latestQuestion.role !== 'user') {
    return NextResponse.json({ error: 'Please ask a question to continue.' }, { status: 400 })
  }

  const links = findRelevantLinks(latestQuestion.content)
  const navigationIndex = guidePages.map(({ label, href, summary }) => `${label} (${href}): ${summary}`).join('\n')
  try {
    const { text } = await generateText({
      model: 'nvidia/nemotron-3.5-lightning-free',
      system: `You are the navigation assistant for the Ottawa County Recovery Resource and Education Hub. Help people find relevant pages on this website, using only the verified site index below. Do not invent services, provider details, phone numbers, eligibility rules, hours, or page URLs. If the site index does not answer the question, say so plainly and direct the visitor to the resource directory (/\#resources) or call 2-1-1 for local service referrals. Keep replies brief, supportive, and plain language. This is not medical, legal, or crisis counseling. Answer in 1–3 complete plain-text sentences and never return an empty answer. For non-emergency housing needs, direct people only to the resource directory and 2-1-1. Mention 911 only for immediate danger or a life-threatening emergency, never as general housing advice. For suicide or mental health crisis in the United States, call or text 988. Never make a diagnosis or advise starting/stopping treatment. Refer to internal pages by their exact paths in the index only.\n\nVerified site index:\n${navigationIndex}`,
      prompt: latestQuestion.content,
      maxOutputTokens: 2048,
    })

    const answer = text.trim() || 'I could not generate a clear answer just now. Use the verified page below, search the Resource Directory, or call 2-1-1 for local referrals.'
    return NextResponse.json({ answer, links })
  } catch {
    return NextResponse.json({ error: 'The site guide is temporarily unavailable. Please use the resource directory or call 2-1-1 for local referrals.' }, { status: 503 })
  }
}
