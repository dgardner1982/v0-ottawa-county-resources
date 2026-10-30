import Fuse from 'fuse.js'
import {
  BriefcaseBusiness,
  Brain,
  Baby,
  HeartPulse,
  Home,
  LifeBuoy,
  MapPin,
  Pill,
  Scale,
  ShieldAlert,
  ShieldPlus,
  Shirt,
  Smile,
  Syringe,
  Landmark,
  Users,
  Utensils,
  type LucideIcon,
} from 'lucide-react'
import { RESOURCES, type Resource } from './resource-data'

export const NALOXONE_CATEGORY = 'Overdose Prevention/Free Naloxone(Narcan)'

interface CategoryMeta {
  label: string
  icon: LucideIcon
}

const CATEGORY_META: Record<string, CategoryMeta> = {
  'Clothing and Furniture': { label: 'Clothing & furniture', icon: Shirt },
  Dental: { label: 'Dental', icon: Smile },
  'Domestic Violence': { label: 'Domestic violence', icon: ShieldAlert },
  Employment: { label: 'Employment', icon: BriefcaseBusiness },
  Food: { label: 'Food', icon: Utensils },
  'Government Services': { label: 'Government', icon: Landmark },
  'Harm Reduction': { label: 'Harm reduction', icon: Syringe },
  'Health Care': { label: 'Health care', icon: HeartPulse },
  Housing: { label: 'Housing', icon: Home },
  Legal: { label: 'Legal', icon: Scale },
  'Medicated Assisted Treatment': { label: 'MAT (Suboxone, methadone)', icon: Pill },
  'Mental Health': { label: 'Mental health', icon: Brain },
  [NALOXONE_CATEGORY]: { label: 'Free Narcan', icon: ShieldPlus },
  'Prenatal/Maternal': { label: 'Pregnancy & babies', icon: Baby },
  Seniors: { label: 'Seniors', icon: Users },
  'Substance Recovery': { label: 'Substance recovery', icon: LifeBuoy },
}

export function categoryMeta(category: string): CategoryMeta {
  return CATEGORY_META[category] ?? { label: category, icon: MapPin }
}

export interface Need {
  id: string
  label: string
  category: string
}

export const NEEDS: Need[] = [
  { id: 'food', label: 'I need food', category: 'Food' },
  { id: 'housing', label: 'I need a place to stay', category: 'Housing' },
  { id: 'recovery', label: 'I want help with drugs or alcohol', category: 'Substance Recovery' },
  { id: 'mental', label: "I'm struggling emotionally", category: 'Mental Health' },
  { id: 'narcan', label: 'I need free Narcan', category: NALOXONE_CATEGORY },
  { id: 'safety', label: "I don't feel safe at home", category: 'Domestic Violence' },
  { id: 'work', label: 'I need a job', category: 'Employment' },
  { id: 'health', label: 'I need a doctor or dentist', category: 'Health Care' },
]

export const SEARCH_EXAMPLES = [
  "I'm hungry",
  'detox near Holland',
  'I need Narcan',
  'kicked out of my apartment',
  'Suboxone',
  'felony-friendly jobs',
  'diapers and formula',
  "I'm scared to go home",
]

const INTENTS: { terms: string[]; categories: string[] }[] = [
  { terms: ['hungry', 'food', 'meal', 'pantry', 'eat', 'groceries', 'starving', 'snap', 'bridges'], categories: ['Food'] },
  {
    terms: ['homeless', 'shelter', 'housing', 'rent', 'evicted', 'eviction', 'kicked out', 'place to stay', 'sober living', 'apartment', 'sleep'],
    categories: ['Housing'],
  },
  {
    terms: ['addiction', 'drug', 'drugs', 'alcohol', 'rehab', 'detox', 'sober', 'sobriety', 'withdrawal', 'recovery', 'using', 'relapse', 'drinking', 'treatment'],
    categories: ['Substance Recovery', 'Medicated Assisted Treatment'],
  },
  { terms: ['suboxone', 'methadone', 'buprenorphine', 'vivitrol', 'naltrexone', 'opioid', 'mat'], categories: ['Medicated Assisted Treatment'] },
  {
    terms: ['sad', 'depressed', 'depression', 'anxiety', 'anxious', 'suicide', 'suicidal', 'counseling', 'therapy', 'therapist', 'crisis', 'panic', 'trauma', 'stress', 'ptsd', 'mental', 'lonely'],
    categories: ['Mental Health'],
  },
  { terms: ['narcan', 'naloxone', 'overdose', 'reverse'], categories: [NALOXONE_CATEGORY, 'Harm Reduction'] },
  {
    terms: ['abuse', 'abused', 'domestic', 'violence', 'unsafe', 'scared', 'afraid', 'partner', 'assault', 'not safe'],
    categories: ['Domestic Violence'],
  },
  { terms: ['job', 'jobs', 'work', 'employment', 'resume', 'hire', 'hiring', 'felony', 'record', 'second chance', 'unemployed'], categories: ['Employment'] },
  { terms: ['doctor', 'clinic', 'medical', 'sick', 'nurse', 'insurance', 'medicaid', 'vision', 'health'], categories: ['Health Care'] },
  { terms: ['dentist', 'dental', 'teeth', 'tooth'], categories: ['Dental'] },
  { terms: ['lawyer', 'attorney', 'legal', 'court', 'custody', 'probation', 'expunge', 'expungement'], categories: ['Legal'] },
  {
    terms: ['pregnant', 'pregnancy', 'baby', 'babies', 'diapers', 'formula', 'maternal', 'prenatal', 'newborn', 'wic'],
    categories: ['Prenatal/Maternal'],
  },
  { terms: ['senior', 'elderly', 'older', 'aging', 'meals on wheels', 'medicare'], categories: ['Seniors'] },
  { terms: ['clothes', 'clothing', 'furniture', 'thrift', 'coat'], categories: ['Clothing and Furniture'] },
  { terms: ['needle', 'syringe', 'clean works', 'test strips', 'harm reduction'], categories: ['Harm Reduction'] },
  { terms: ['id', 'license', 'social security', 'secretary of state', 'birth certificate'], categories: ['Government Services'] },
]

export const AREAS = [
  { id: 'holland', label: 'Holland & Zeeland', pattern: /holland|zeeland|hamilton|west olive/i },
  { id: 'tri-cities', label: 'Grand Haven & Spring Lake', pattern: /grand haven|spring lake|ferrysburg/i },
  { id: 'east', label: 'Hudsonville, Jenison & Allendale', pattern: /hudsonville|jenison|georgetown|allendale|coopersville|grandville|marne/i },
  { id: 'nearby', label: 'Grand Rapids & Muskegon', pattern: /grand rapids|muskegon|norton shores|allegan|wyoming|kentwood/i },
] as const

export const ANYWHERE_AREA = { id: 'anywhere', label: 'Phone, online & countywide' } as const

export interface PhoneAction {
  href: string
  display: string
  kind: 'tel' | 'sms'
}

const VANITY_KEYPAD: Record<string, string> = {
  A: '2', B: '2', C: '2', D: '3', E: '3', F: '3', G: '4', H: '4', I: '4', J: '5', K: '5', L: '5', M: '6',
  N: '6', O: '6', P: '7', Q: '7', R: '7', S: '7', T: '8', U: '8', V: '8', W: '9', X: '9', Y: '9', Z: '9',
}

export function parsePhone(raw: string): PhoneAction | null {
  const text = raw.trim()
  if (!text) return null

  const textLine = text.match(/^text\s+(\w+)\s+to\s+(\d{3,6})/i)
  if (textLine) {
    return { href: `sms:${textLine[2]}?&body=${encodeURIComponent(textLine[1])}`, display: `Text ${textLine[1]} to ${textLine[2]}`, kind: 'sms' }
  }

  if (/^988$/.test(text)) return { href: 'tel:988', display: '988', kind: 'tel' }

  const standard = text.match(/(?:\+?1[\s.-]?)?\(?(\d{3})\)?[\s.-]?(\d{3})[\s.-]?(\d{4})(?:\s*(?:ext\.?|x)\s*(\d{1,5}))?/i)
  if (standard) {
    const [, area, prefix, line, ext] = standard
    return {
      href: `tel:+1${area}${prefix}${line}${ext ? `,${ext}` : ''}`,
      display: `(${area}) ${prefix}-${line}${ext ? ` ext. ${ext}` : ''}`,
      kind: 'tel',
    }
  }

  const vanity = text.match(/1?-?(\d{3})-([A-Z]{3})-([A-Z]{4})/i)
  if (vanity) {
    const digits = (vanity[2] + vanity[3]).toUpperCase().split('').map((c) => VANITY_KEYPAD[c]).join('')
    return {
      href: `tel:+1${vanity[1]}${digits}`,
      display: `1-${vanity[1]}-${digits.slice(0, 3)}-${digits.slice(3)}`,
      kind: 'tel',
    }
  }

  return null
}

export function cleanAddress(address: string): string[] {
  return address
    .replace(/<[^>]*>/g, '')
    .split('|')
    .map((part) => part.trim())
    .filter(Boolean)
}

export interface DirectoryItem extends Resource {
  id: string
  categoryLabel: string
  areas: string[]
  phoneAction: PhoneAction | null
  isAlwaysOpen: boolean
  addressLines: string[]
  hostname: string | null
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function hostnameOf(url?: string) {
  if (!url) return null
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

const seenIds = new Map<string, number>()

export const DIRECTORY: DirectoryItem[] = RESOURCES.map((resource) => {
  const base = slugify(`${resource.name}-${resource.category}`)
  const count = (seenIds.get(base) ?? 0) + 1
  seenIds.set(base, count)

  const geoText = `${resource.address} ${resource.officeAddress ?? ''}`
  const areas: string[] = AREAS.filter((area) => area.pattern.test(geoText)).map((area) => area.id)
  if (areas.length === 0) areas.push(ANYWHERE_AREA.id)

  return {
    ...resource,
    id: count === 1 ? base : `${base}-${count}`,
    categoryLabel: categoryMeta(resource.category).label,
    areas,
    phoneAction: parsePhone(resource.phone),
    isAlwaysOpen: /24\/7|24[-\s]hour/i.test(`${resource.name} ${resource.info} ${resource.hours ?? ''} ${resource.phone}`),
    addressLines: cleanAddress(resource.address),
    hostname: hostnameOf(resource.website),
  }
})

export const DIRECTORY_BY_ID = new Map(DIRECTORY.map((item) => [item.id, item]))

export const CATEGORIES: { key: string; label: string; count: number; icon: LucideIcon }[] = Array.from(
  new Set(DIRECTORY.map((item) => item.category)),
)
  .map((key) => ({
    key,
    label: categoryMeta(key).label,
    icon: categoryMeta(key).icon,
    count: DIRECTORY.filter((item) => item.category === key).length,
  }))
  .sort((a, b) => b.count - a.count)

const fuse = new Fuse(DIRECTORY, {
  keys: [
    { name: 'name', weight: 3 },
    { name: 'categoryLabel', weight: 1.5 },
    { name: 'info', weight: 1 },
    { name: 'addressLines', weight: 0.6 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true,
  minMatchCharLength: 2,
})

export function matchIntentCategories(query: string): string[] {
  const normalized = query.toLowerCase().replace(/[^a-z0-9\s']/g, ' ').replace(/\s+/g, ' ').trim()
  if (normalized.length < 2) return []
  const tokens = normalized.split(' ')
  const matched = new Set<string>()

  for (const intent of INTENTS) {
    const hit = intent.terms.some((term) => {
      if (term.includes(' ')) return normalized.includes(term)
      return tokens.some((token) => token === term || (token.length >= 3 && term.length > 3 && term.startsWith(token)))
    })
    if (hit) intent.categories.forEach((category) => matched.add(category))
  }
  return Array.from(matched)
}

export interface SearchOutcome {
  items: DirectoryItem[]
  intentCategories: string[]
}

export function searchDirectory(query: string): SearchOutcome {
  const trimmed = query.trim()
  if (trimmed.length < 2) return { items: DIRECTORY, intentCategories: [] }

  const intentCategories = matchIntentCategories(trimmed)
  const scores = new Map<string, { item: DirectoryItem; score: number }>()

  for (const hit of fuse.search(trimmed)) {
    scores.set(hit.item.id, { item: hit.item, score: hit.score ?? 0.5 })
  }
  for (const item of DIRECTORY) {
    if (intentCategories.includes(item.category)) {
      const existing = scores.get(item.id)
      const score = Math.min(existing?.score ?? 1, 0.2)
      scores.set(item.id, { item, score })
    }
  }

  const items = Array.from(scores.values())
    .sort((a, b) => a.score - b.score || a.item.name.localeCompare(b.item.name))
    .map((entry) => entry.item)
  return { items, intentCategories }
}

export function formatForSharing(items: DirectoryItem[]): string {
  return items
    .map((item) => {
      const lines = [item.name]
      if (item.phoneAction) lines.push(item.phoneAction.display)
      if (item.addressLines[0]) lines.push(item.addressLines[0])
      return lines.join(' - ')
    })
    .join('\n')
}
