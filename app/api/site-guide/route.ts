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

const substanceSlugs = [
  '2c-b', '7-hydroxymitragynine', 'adderall', 'alcohol', 'alkyl-nitrites', 'alprazolam',
  'anabolic-steroids', 'barbiturates', 'bromazolam', 'carfentanil', 'carisoprodol', 'cocaine',
  'codeine', 'crack-cocaine', 'cyclorphine', 'dexmethylphenidate', 'dextromethorphan', 'dmt',
  'duster', 'fentanyl', 'gabapentin', 'ghb', 'hemp-derived-cannabinoids', 'heroin', 'hydrocodone',
  'hydromorphone', 'kava', 'ketamine', 'kratom', 'lsd', 'mdma', 'medetomidine', 'meperidine',
  'mescaline', 'methadone', 'methamphetamine', 'modafinil', 'morphine', 'nicotine', 'nitazine',
  'nitrous-oxide', 'oxycodone', 'oxymorphone', 'parafluorofentanyl', 'pcp', 'phenibut', 'pregabalin',
  'psilocybin', 'ritalin', 'salvia', 'solvents-aerosols', 'suboxone', 'synthetic-cannabinoids',
  'synthetic-cathinones', 'tapentadol', 'thc', 'tianeptine', 'tramadol', 'vyvanse', 'xylazine', 'zolpidem',
]

const substanceNames: Record<string, string> = {
  '2c-b': '2C-B', '7-hydroxymitragynine': '7-Hydroxymitragynine', dmt: 'DMT', ghb: 'GHB',
  lsd: 'LSD', mdma: 'MDMA', pcp: 'PCP', thc: 'THC',
}

const substanceAliases: Record<string, string[]> = {
  '2c-b': ['2cb'],
  '7-hydroxymitragynine': ['7-oh', '7 oh'],
  alcohol: ['drinking', 'beer', 'wine'],
  alprazolam: ['xanax'],
  'anabolic-steroids': ['steroids', 'anabolic steroids'],
  carisoprodol: ['soma'],
  cocaine: ['coke'],
  'crack-cocaine': ['crack'],
  dmt: ['dimethyltryptamine'],
  'hemp-derived-cannabinoids': ['delta 8', 'delta-8', 'delta 10', 'delta-10'],
  ketamine: ['special k'],
  lsd: ['acid'],
  mdma: ['molly', 'ecstasy'],
  methamphetamine: ['meth', 'crystal meth', 'ice'],
  'nitrous-oxide': ['whippets', 'laughing gas', 'nitrous'],
  pcp: ['angel dust'],
  psilocybin: ['magic mushrooms', 'shrooms'],
  'solvents-aerosols': ['inhalants', 'huffing', 'aerosols', 'solvents'],
  'synthetic-cannabinoids': ['synthetic cannabis', 'synthetic marijuana', 'synthetic weed', 'spice', 'k2'],
  thc: ['cannabis', 'marijuana', 'weed', 'pot', 'tetrahydrocannabinol'],
}

function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ')
}

const substancePages = substanceSlugs.map((slug) => {
  const name = substanceNames[slug] ?? slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return {
    label: `${name} education page`,
    href: `/drug/${slug}`,
    aliases: [name, slug.replace(/-/g, ' '), ...(substanceAliases[slug] ?? [])],
  }
})

function findRelevantLinks(query: string) {
  const normalizedQuery = normalizeSearchText(query)
  const paddedQuery = ` ${normalizedQuery} `
  const substanceMatches = substancePages.map((page) => {
    const score = page.aliases
      .map((alias) => normalizeSearchText(alias))
      .filter((alias) => paddedQuery.includes(` ${alias} `))
      .reduce((longest, alias) => Math.max(longest, alias.length), 0)
    return { page, score }
  }).filter(({ score }) => score > 0)

  if (substanceMatches.length) {
    const highestScore = Math.max(...substanceMatches.map(({ score }) => score))
    return substanceMatches
      .filter(({ score }) => score === highestScore)
      .map(({ page }) => ({ label: page.label, href: page.href }))
      .slice(0, 3)
  }

  const stopWords = new Set(['about', 'can', 'do', 'find', 'for', 'get', 'help', 'how', 'i', 'is', 'me', 'need', 'please', 'site', 'the', 'there', 'to', 'what', 'where', 'with', 'you'])
  const words = (normalizedQuery.match(/[a-z0-9]+/g) ?? []).filter((word) => word.length > 2 && !stopWords.has(word))
  const matched = guidePages.map((page) => {
    const searchable = new Set(normalizeSearchText(`${page.label} ${page.summary} ${page.href}`).match(/[a-z0-9]+/g) ?? [])
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
  const substanceLink = links.find(({ href }) => href.startsWith('/drug/'))
  if (substanceLink) {
    const substanceName = substanceLink.label.replace(/ education page$/i, '')
    return NextResponse.json({
      answer: `For information about ${substanceName}, open the individual education page linked below.`,
      links,
    })
  }

  const navigationIndex = [
    ...guidePages.map(({ label, href, summary }) => `${label} (${href}): ${summary}`),
    ...substancePages.map(({ label, href }) => `${label} (${href})`),
  ].join('\n')
  try {
    const { text } = await generateText({
      model: 'nvidia/nemotron-3.5-lightning-free',
      system: `You are the navigation assistant for the Ottawa County Recovery Resource and Education Hub. Help people find relevant pages on this website, using only the verified site index below. Do not invent services, provider details, phone numbers, eligibility rules, hours, or page URLs. If the site index does not answer the question, say so plainly and direct the visitor to the resource directory (/\#resources) or call 2-1-1 for local service referrals. Keep replies brief, supportive, and plain language. This is not medical, legal, or crisis counseling. Answer in 1–3 complete plain-text sentences and never return an empty answer. For non-emergency housing needs, direct people only to the resource directory and 2-1-1. Mention 911 only for immediate danger or a life-threatening emergency, never as general housing advice. For suicide or mental health crisis in the United States, call or text 988. Never make a diagnosis or advise starting/stopping treatment. When a visitor asks about a specific substance, direct them to that substance’s individual education page from the index; do not substitute the Resource directory or general education landing page. Refer to internal pages by their exact paths in the index only.\n\nVerified site index:\n${navigationIndex}`,
      prompt: latestQuestion.content,
      maxOutputTokens: 2048,
    })

    const answer = text.trim() || 'I found the most relevant page for your question. Open the page linked below.'
    return NextResponse.json({ answer, links })
  } catch {
    return NextResponse.json({
      answer: 'I found the most relevant page for your question. Open the page linked below.',
      links,
    })
  }
}
