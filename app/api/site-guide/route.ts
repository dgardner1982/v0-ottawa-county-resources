import { generateText } from 'ai'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const messageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().trim().min(1).max(500),
})

const requestSchema = z.object({ messages: z.array(messageSchema).min(1).max(8) })

const guidePages = [
  { label: 'Housing resources', href: '/?category=Housing#resources', summary: 'Housing assistance, shelter, homelessness support, rent help, affordable housing, and recovery housing in Ottawa County.', aliases: ['housing', 'shelter', 'homeless', 'homelessness', 'rent help', 'rental assistance', 'eviction', 'affordable housing', 'housing assistance', 'place to stay', 'emergency shelter', 'home'] },
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

const resourceCategories = [
  { label: 'Mental Health', href: '/?category=Mental%20Health#resources', aliases: ['mental health', 'behavioral health', 'counseling', 'therapy', 'psychiatric', 'emotional support', 'anxiety', 'depression', 'health'] },
  { label: 'Housing', href: '/?category=Housing#resources', aliases: ['housing', 'shelter', 'homeless', 'homelessness', 'rent help', 'rental assistance', 'eviction', 'affordable housing', 'housing assistance', 'place to stay'] },
  { label: 'Health Care', href: '/?category=Health%20Care#resources', aliases: ['health care', 'healthcare', 'medical care', 'doctor', 'clinic', 'medical services', 'health'] },
  { label: 'Dental', href: '/?category=Dental#resources', aliases: ['dental', 'dentist', 'teeth'] },
  { label: 'Food', href: '/?category=Food#resources', aliases: ['food', 'food assistance', 'food pantry', 'groceries', 'meal'] },
  { label: 'Substance Recovery', href: '/?category=Substance%20Recovery#resources', aliases: ['substance recovery', 'addiction recovery', 'recovery support', 'substance use treatment'] },
  { label: 'Medicated Assisted Treatment', href: '/?category=Medicated%20Assisted%20Treatment#resources', aliases: ['medication assisted treatment', 'medicated assisted treatment', 'mat', 'suboxone treatment', 'methadone treatment'] },
  { label: 'Overdose Prevention/Free Naloxone(Narcan)', href: '/?category=Overdose%20Prevention%2FFree%20Naloxone%28Narcan%29#resources', aliases: ['naloxone', 'narcan', 'overdose prevention', 'overdose reversal'] },
  { label: 'Harm Reduction', href: '/?category=Harm%20Reduction#resources', aliases: ['harm reduction', 'safer use', 'needle exchange', 'syringe services'] },
  { label: 'Domestic Violence', href: '/?category=Domestic%20Violence#resources', aliases: ['domestic violence', 'abuse', 'safety from partner', 'intimate partner violence'] },
  { label: 'Employment', href: '/?category=Employment#resources', aliases: ['employment', 'job', 'jobs', 'work'] },
  { label: 'Legal', href: '/?category=Legal#resources', aliases: ['legal', 'lawyer', 'legal aid'] },
  { label: 'Clothing and Furniture', href: '/?category=Clothing%20and%20Furniture#resources', aliases: ['clothing', 'furniture'] },
  { label: 'Government Services', href: '/?category=Government%20Services#resources', aliases: ['government services', 'public benefits', 'social services'] },
  { label: 'Parenting/Youth', href: '/?category=Parenting%2FYouth#resources', aliases: ['parenting', 'youth', 'teen', 'children'] },
  { label: 'Prenatal/Maternal', href: '/?category=Prenatal%2FMaternal#resources', aliases: ['prenatal', 'maternal', 'pregnancy', 'pregnant'] },
  { label: 'Seniors', href: '/?category=Seniors#resources', aliases: ['senior', 'seniors', 'older adult', 'elderly'] },
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

function editDistance(left: string, right: string) {
  const row = Array.from({ length: right.length + 1 }, (_, index) => index)
  for (let i = 1; i <= left.length; i++) {
    let diagonal = row[0]
    row[0] = i
    for (let j = 1; j <= right.length; j++) {
      const above = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (left[i - 1] === right[j - 1] ? 0 : 1))
      diagonal = above
    }
  }
  return row[right.length]
}

function tokenMatches(queryToken: string, aliasToken: string) {
  if (queryToken === aliasToken || queryToken.includes(aliasToken) || aliasToken.includes(queryToken)) return true
  if (queryToken.length < 4 || aliasToken.length < 4) return false
  return editDistance(queryToken, aliasToken) <= (Math.max(queryToken.length, aliasToken.length) > 7 ? 2 : 1)
}

const substancePages = substanceSlugs.map((slug) => {
  const name = substanceNames[slug] ?? slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return {
    label: `${name} education page`,
    href: `/drug/${slug}`,
    aliases: [name, slug.replace(/-/g, ' '), ...(substanceAliases[slug] ?? [])],
  }
})

function findCategoryMatches(query: string) {
  const normalizedQuery = normalizeSearchText(query)
  const matches = resourceCategories.flatMap((category) => {
    const matchingAliases = category.aliases
      .map(normalizeSearchText)
      .filter((alias) => alias.length > 2 && ` ${normalizedQuery} `.includes(` ${alias} `))
    const score = matchingAliases.reduce((longest, alias) => Math.max(longest, alias.length), 0)
    return score ? [{ category, score }] : []
  }).sort((a, b) => b.score - a.score)

  if (!matches.length) return []
  const bestScore = matches[0].score
  return matches.filter(({ score }) => score === bestScore).slice(0, 3).map(({ category }) => ({ label: category.label, href: category.href }))
}

function findRelevantLinks(query: string) {
  const normalizedQuery = normalizeSearchText(query)
  const categoryMatches = findCategoryMatches(query)
  if (categoryMatches.length) return categoryMatches

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
    const aliases = [...((page as { aliases?: string[] }).aliases ?? []), page.label, page.summary, page.href]
      .map(normalizeSearchText)
    const aliasTokens = aliases.flatMap((alias) => alias.split(' ')).filter((token) => token.length > 2)
    const exactPhrase = aliases.some((alias) => alias.length > 3 && normalizedQuery.includes(alias))
    const score = words.reduce((total, word) => total + (aliasTokens.some((token) => tokenMatches(word, token)) ? 1 : 0), 0)
    return { page, score: score + (exactPhrase ? 3 : 0) }
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).slice(0, 3)

  return (matched.length ? matched : [{ page: guidePages[1], score: 0 }]).map(({ page }) => ({ label: page.label, href: page.href }))
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

  const categoryMatches = findCategoryMatches(latestQuestion.content)
  if (categoryMatches.length > 1) {
    return NextResponse.json({
      answer: `Do you mean ${categoryMatches.map(({ label }) => label).join(' or ')}? Choose the matching resource category below.`,
      links: categoryMatches,
    })
  }
  if (categoryMatches.length === 1) {
    const category = categoryMatches[0]
    if (category.label === 'Mental Health' && /\b(suicid|kill myself|end my life|self harm)\b/i.test(latestQuestion.content)) {
      return NextResponse.json({ answer: 'If you or someone else may be in immediate danger, call 911. For mental health or suicide crisis support in the United States, call or text 988. Open the Mental Health resources below for local support.', links: categoryMatches })
    }
    return NextResponse.json({ answer: `I found the ${category.label} resources. Open the matching category below to see relevant local services.`, links: categoryMatches })
  }

  const links = findRelevantLinks(latestQuestion.content)
  const housingLink = links[0]?.href.includes('category=Housing') ? links[0] : undefined
  if (housingLink) {
    return NextResponse.json({
      answer: 'I found the Housing section of the resource directory. For additional local referrals, call 2-1-1.',
      links: [housingLink],
    })
  }

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
