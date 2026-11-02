'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Input } from '@/components/ui/input';
import {
  AlertTriangle,
  Atom,
  Brain,
  Droplets,
  FlaskConical,
  Leaf,
  Microscope,
  Pill,
  ShieldAlert,
  Sparkles,
  Syringe,
  TestTube,
  Wind,
  Wine,
  Zap,
  Search,
} from 'lucide-react';

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState('infograph');
  const [supportTab, setSupportTab] = useState<'resources' | 'support'>('resources');
  const [searchQuery, setSearchQuery] = useState('');

  const substanceResources = [
    { name: 'Free Naloxone/Narcan', type: 'Overdose Prevention', description: 'Free naloxone kits and locations throughout Ottawa County.', href: '/naloxone-locations' },
    { name: 'Overdose Prevention Training', type: 'Overdose Prevention', description: 'Free training for individuals and organizations. Call 616-393-4489 or email dgardner@miottawa.org.', href: 'tel:6163934489' },
    { name: 'Grand Rapids Red Project', type: 'Harm Reduction', description: 'Comprehensive harm reduction services and a mobile health unit serving the area.', href: 'https://www.redproject.org' },
    { name: 'Arbor Circle - Holland', type: 'Substance Recovery', description: 'Substance use treatment and recovery programs. Call (616) 396-2301.', href: 'https://arborcircle.org' },
    { name: 'Reach for Recovery', type: 'Substance Recovery', description: 'Counseling, recovery community connection, and outpatient and residential programs.', href: 'https://reachforrecovery.org' },
    { name: 'Community Mental Health of Ottawa County', type: 'Substance Recovery', description: 'Access services in Holland or Grand Haven, with crisis support available 24/7.', href: 'https://www.miottawa.org/cmh' },
    { name: 'New Vision Withdrawal Management', type: 'Substance Recovery', description: 'Inpatient detoxification and withdrawal management at Trinity Health Grand Haven Hospital.', href: 'https://trinityhealthmichigan.org' },
    { name: 'Samaritas', type: 'Medication-Assisted Treatment', description: 'Medication-assisted treatment and integrated recovery support in Holland and Grand Haven.', href: 'https://www.samaritas.org' },
  ];

  const supportGroups = [
    { name: 'Alcoholics Anonymous (AA)', description: 'Fellowship for people recovering from alcohol addiction using a 12-step program.', href: 'https://www.aa.org' },
    { name: 'Narcotics Anonymous (NA)', description: 'Peer support for recovery from drug addiction through 12-step principles.', href: 'https://www.na.org' },
    { name: 'SMART Recovery', description: 'A science-based approach emphasizing self-empowerment and a four-point program.', href: 'https://www.smartrecovery.org' },
    { name: 'Crystal Meth Anonymous (CMA)', description: 'Support specifically for people struggling with methamphetamine addiction.', href: 'https://www.crystalmeth.org' },
    { name: 'Cocaine Anonymous (CA)', description: 'A 12-step program for cocaine and other stimulant addiction.', href: 'https://www.ca.org' },
    { name: 'Al-Anon/Alateen', description: 'Support for families and friends affected by someone else’s drinking.', href: 'https://www.al-anon.org' },
    { name: 'Nar-Anon', description: 'Support for families and friends affected by someone’s drug addiction.', href: 'https://www.nar-anon.org' },
    { name: 'Recovery Dharma', description: 'A mindfulness-based, Buddhist-inspired approach to addiction recovery.', href: 'https://www.recoverydharma.org' },
  ];
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };
  
  const drugs: { name: string; symbol: typeof Pill; slug: string; color: string; bgColor: string; image?: string }[] = [
    { name: "Alcohol", symbol: Wine, slug: "alcohol", color: "border-amber-600", bgColor: "bg-amber-50" },
    { name: "Bromazolam", symbol: Pill, slug: "bromazolam", color: "border-slate-700", bgColor: "bg-slate-50" },
    { name: "7-Hydroxymitragynine", symbol: Leaf, slug: "7-hydroxymitragynine", color: "border-lime-600", bgColor: "bg-lime-50" },
    { name: "Alprazolam", symbol: Pill, slug: "alprazolam", color: "border-sky-600", bgColor: "bg-sky-50" },
    { name: "Adderall", symbol: Zap, slug: "adderall", color: "border-orange-600", bgColor: "bg-orange-50" },
    { name: "Nicotine", symbol: Pill, slug: "nicotine", color: "border-teal-600", bgColor: "bg-teal-50" },
    { name: "Cocaine", symbol: Pill, slug: "cocaine", color: "border-red-500", bgColor: "bg-red-50" },
    { name: "Crack Cocaine", symbol: Atom, slug: "crack-cocaine", color: "border-red-700", bgColor: "bg-red-50" },
    { name: "Dextromethorphan", symbol: FlaskConical, slug: "dextromethorphan", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "GHB", symbol: Droplets, slug: "ghb", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "MDMA", symbol: Sparkles, slug: "mdma", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Oxycodone", symbol: Pill, slug: "oxycodone", color: "border-amber-600", bgColor: "bg-amber-50" },
    { name: "Pregabalin", symbol: Brain, slug: "pregabalin", color: "border-green-600", bgColor: "bg-green-50" },
    { name: "Gabapentin", symbol: Brain, slug: "gabapentin", color: "border-green-700", bgColor: "bg-green-50" },
    { name: "Cyclorphine", symbol: ShieldAlert, slug: "cyclorphine", color: "border-purple-700", bgColor: "bg-purple-100" },
    { name: "Fentanyl", symbol: AlertTriangle, slug: "fentanyl", color: "border-red-600", bgColor: "bg-red-100" },
    { name: "Hemp-Derived Cannabinoids", symbol: Leaf, slug: "hemp-derived-cannabinoids", color: "border-green-600", bgColor: "bg-green-100" },
    { name: "Heroin", symbol: Syringe, slug: "heroin", color: "border-amber-700", bgColor: "bg-amber-50" },
    { name: "Nitrous Oxide", symbol: Wind, slug: "nitrous-oxide", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Duster", symbol: Wind, slug: "duster", color: "border-cyan-600", bgColor: "bg-cyan-50" },
       { name: "Solvents / Aerosols", symbol: Wind, slug: "solvents-aerosols", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Ketamine", symbol: TestTube, slug: "ketamine", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Kratom", symbol: Leaf, slug: "kratom", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Medetomidine", symbol: Microscope, slug: "medetomidine", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Methadone", symbol: Pill, slug: "methadone", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Hydrocodone", symbol: Pill, slug: "hydrocodone", color: "border-violet-600", bgColor: "bg-violet-50" },
    { name: "Hydromorphone", symbol: Syringe, slug: "hydromorphone", color: "border-violet-800", bgColor: "bg-violet-100" },
  { name: "Codeine", symbol: Pill, slug: "codeine", color: "border-purple-600", bgColor: "bg-purple-50" },
  { name: "Tramadol", symbol: Pill, slug: "tramadol", color: "border-fuchsia-600", bgColor: "bg-fuchsia-50" },
  { name: "Oxymorphone", symbol: Syringe, slug: "oxymorphone", color: "border-rose-700", bgColor: "bg-rose-50" },
  { name: "Morphine", symbol: Pill, slug: "morphine", color: "border-slate-700", bgColor: "bg-slate-100" },
    { name: "Methamphetamine", symbol: Zap, slug: "methamphetamine", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Nitazine", symbol: Pill, slug: "nitazine", color: "border-yellow-600", bgColor: "bg-yellow-50" },
    { name: "PCP", symbol: FlaskConical, slug: "pcp", color: "border-red-700", bgColor: "bg-red-200" },
    { name: "Psilocybin", symbol: Leaf, slug: "psilocybin", color: "border-emerald-600", bgColor: "bg-emerald-50" },
    { name: "LSD", symbol: Sparkles, slug: "lsd", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "DMT", symbol: Sparkles, slug: "dmt", color: "border-indigo-700", bgColor: "bg-indigo-50" },
    { name: "Mescaline", symbol: Leaf, slug: "mescaline", color: "border-emerald-700", bgColor: "bg-emerald-50" },
    { name: "2C-B", symbol: Sparkles, slug: "2c-b", color: "border-fuchsia-700", bgColor: "bg-fuchsia-50" },
    { name: "Salvia Divinorum", symbol: Leaf, slug: "salvia", color: "border-teal-700", bgColor: "bg-teal-50" },
    { name: "Vyvanse", symbol: Zap, slug: "vyvanse", color: "border-orange-700", bgColor: "bg-orange-50" },
    { name: "Focalin", symbol: Pill, slug: "dexmethylphenidate", color: "border-blue-700", bgColor: "bg-blue-50" },
    { name: "Modafinil", symbol: Zap, slug: "modafinil", color: "border-sky-700", bgColor: "bg-sky-50" },
    { name: "Synthetic Cathinones", symbol: Zap, slug: "synthetic-cathinones", color: "border-red-700", bgColor: "bg-red-50" },
    { name: "Alkyl Nitrites", symbol: Pill, slug: "alkyl-nitrites", color: "border-sky-600", bgColor: "bg-sky-50" },
    { name: "Zolpidem", symbol: Pill, slug: "zolpidem", color: "border-sky-600", bgColor: "bg-sky-50" },
    { name: "Anabolic-Androgenic Steroids", symbol: Zap, slug: "anabolic-steroids", color: "border-amber-700", bgColor: "bg-amber-50" },
    { name: "Ritalin", symbol: Pill, slug: "ritalin", color: "border-indigo-600", bgColor: "bg-indigo-50" },
    { name: "Tianeptine", symbol: Pill, slug: "tianeptine", color: "border-cyan-600", bgColor: "bg-cyan-50" },
 { name: "Kava", symbol: Pill, slug: "kava", color: "border-cyan-600", bgColor: "bg-cyan-50" },
 { name: "Phenibut", symbol: Pill, slug: "phenibut", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Suboxone", symbol: Pill, slug: "suboxone", color: "border-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Synthetic Cannabinoids", symbol: Leaf, slug: "synthetic-cannabinoids", color: "border-teal-500", bgColor: "bg-teal-50" },
    { name: "THC", symbol: Leaf, slug: "thc", color: "border-lime-500", bgColor: "bg-lime-50" },
    { name: "Carfentanil", symbol: AlertTriangle, slug: "carfentanil", color: "border-red-800", bgColor: "bg-red-50" },
    { name: "Parafluorofentanyl", symbol: AlertTriangle, slug: "parafluorofentanyl", color: "border-orange-700", bgColor: "bg-orange-50" },
    { name: "Meperidine / Pethidine", symbol: Syringe, slug: "meperidine", color: "border-violet-700", bgColor: "bg-violet-50" },
    { name: "Tapentadol", symbol: Pill, slug: "tapentadol", color: "border-sky-700", bgColor: "bg-sky-50" },
    { name: "Barbiturates", symbol: Pill, slug: "barbiturates", color: "border-slate-700", bgColor: "bg-slate-50" },
 { name: "Carisoprodol", symbol: Pill, slug: "carisoprodol", color: "border-slate-700", bgColor: "bg-slate-50" },
    { name: "Xylazine", symbol: FlaskConical, slug: "xylazine", color: "border-purple-500", bgColor: "bg-purple-50" }
  ];

  const substanceImages: Record<string, string> = {
    '2c-b': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTfgkVN--dYcKc55Q9yigB1nvXMuq9gaMR2p2-qGXfjWivSHj4wC4erWllV9bk_BtNcRCbS-M_uqPwSm7Y',
    '7-hydroxymitragynine': 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSODgrYgx2z9bWoe2dqiSzRMeX7P7WWPC1OJ4hfoJAo0puxnM95pQwanYPlnr4ze_UV2Bi2W7cNk6-CR34',
    adderall: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQH-gpmFGzjXILg0FqP9M1B7d22UT8OJ_Nx0ZlfrGnPJT2JMdWV7d8aw0DNXJkJ4wLfP84UR0mL1A69fSY',
    'alkyl-nitrites': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTzb_nN-Y4pnc3tl5IVQfq2VXyfSin64NaDMrW73VTy8UAona6tIv0XGaQSQLoHnF4yvzmzNV9BxwJ1kUA',
    'anabolic-steroids': 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSHOsMJ8z2eFYJbH7mCC2rD_f8vnaFl002mx3xPRO8TWA5HeeqSsj7zUzrxrOUH774wxqBvkD6b-iSQucs',
    dexmethylphenidate: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQiB30lHtEpRprpAfGo3lToufDDQ9meUt8SZQoj7a0qCZH2oN72LiIbMANtPQT_9cn38cVhd3bXVLt97r8',
    gabapentin: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSdxcS8eXWztbUHvjUpRB4pyvkHhn_VUTJ7dvTjs-6-nfypCK-wKSdQal5EUqDciV6D5dcjO8Rrj6snOM4',
    ghb: 'https://images.ctfassets.net/ip74mqmfgvqf/2z3arlHW9S6MUSsqcImSWg/0c88cbdbd6b4819658027d89ebd352b0/FRANK_drug_image_ghb.jpg?fit=scale&f=bottom&q=70&fm=webp&w=3840',
    mescaline: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starr_070320-5799_Echinopsis_pachanoi.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    modafinil: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTuxVQO9eruV1ZZYdcKU0bRRGGeG6FjJAS1tYgYnqVvbE_u8rMixD5iZqAaL_nxGT50pOU4zAZSCnnEuw4',
    alcohol: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcStXHdUhFaCABQ1jpeLLGJok9Yogo9YcUlUXL1xQsVV_hAUYTxTiGvdwBeflvEBneexNnNb6WbPwSnWj6I',
    alprazolam: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR6FW80k1h4L_RzyTH6HNeHixeDbKSdprv0Tx_VsuktkXFzVrXrd8vtb46hQMhzhgsmH8O846sE91bAoVU',
    barbiturates: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR2hxCXglyf8YBCatxdYRi6--UWf4iO3em-87BheN2uAoXdObFghPx3p15n2xhFMznNhDB7MODklALaiik',
    bromazolam: 'https://www.hanleycenter.org/wp-content/uploads/2024/03/bromazolam.jpg',
    carfentanil: 'https://summitbhc.com/wp-content/uploads/2017/05/carfentanil.jpg',
    codeine: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRKZccQz_AsBNSwaLGAttGeEHTu7ridyD5qYptqLa_2khofjEflMuHNWWo2CeclSKOoqpdXuRd0x35JaBE',
    cocaine: 'https://medlineplus.gov/images/Cocaine_share.jpg',
    'crack-cocaine': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Rocks_of_crack_cocaine.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    cyclorphine: 'https://www.narcotics.com/wp-content/uploads/2026/03/new-synthetic-opioid-cyclorphine-raises-overdose-risk.jpg',
    dextromethorphan: 'https://thenestledrecovery.com/wp-content/uploads/What-is-DXM-Addiction-1024x800.jpg',
    dmt: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQlKcup2bXI_6YFkK0gbPBRrYoI8t4YQKGLXLISWBv2xq8c7DX3cxu1S5QAnSVA7_J7AzPCBRZjUNVtqdE',
    duster: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSL-N3p69vEkXyoOzYKfW42Qan37EJY43103KVCYsKkJT9_ZbEEWok-HYYtLLq-slaFrHz1_gpaTC1ixf8',
    fentanyl: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQu-lpXGNgmxzsv4m6IL6mQYp-7Hqgbb-TtV-UXQPixoczgLhuq9IguZ3vOA7qvYPmn7_jgdC3rI6rPfKU',
    'hemp-derived-cannabinoids': 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSuPDsrc8MU2dvPAGKfKfdMlKqQr9Hc6Z9m-tob_7MR5XyoUg3a7fhuiEQvauALzu9fnhNKdhiV2ikHUrw',
    heroin: 'https://bocarecoverycenter.com/wp-content/uploads/2023/09/brown-heroin-scaled.jpg',
    hydrocodone: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTRAvdod2BfzmOoqsVZzuL6lOXwOlLMUBUeWuqIZV6JQqUA2Mu9v4VB9rim4fv2YotQ-qxSbrnVk8kK7Fk',
    hydromorphone: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT3ohlV-qqKPJOY_ugAGQtxpoxjH2H3toQ9sJt_HvkQoYL7L7P5Lg7nZQf3NQ8ERYV-N_MLe75WcCrPB-s',
    ketamine: 'https://cdn.adf.org.au/media/images/ketamine-social.2e16d0ba.fill-1200x1200.webp',
    kratom: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSH3ZqfKFC2cB2riN41U25Sxm8Hur7F2igxrCtxn2TNVDnWn4LwTwEPAo8pmKVNfwGFvy9jWpSgcL1dN4g',
    lsd: 'https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FgxuGvWYeyC6S2rbasLyV7w%2Fnormalized.jpg&width=800',
    mdma: 'https://images.ctfassets.net/ip74mqmfgvqf/564b953afSI0iKU448sOAK/dad96622c34abc30b0076373ae859dae/FRANK_news_ecstasy_2.jpg?fit=scale&f=bottom&q=70&fm=webp&w=3840',
    medetomidine: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQWqo_mbfbvRJ1UYbrMomPPCyJGX0k_MhkcGe-Bvogvm1ayH_CViVA3X5l562N6eecdDu-RdE2M7pMm4Io',
    meperidine: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR_aS9zKvpjc1nZf0tYDDR5WzuznvoEKZp_3FRyDSOGxtp9NDDjcfJtsV-ReqCcqnlHkGo63lxzyBE-QyY',
    methadone: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQAAcgkEqgQomj5W-bVAsS0VobGSmK4RufOi53z2hJqGdYJX7RukIswsInn7JLfJGMWfN4ZHBNAkhoDJSw',
    methamphetamine: 'https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine',
    morphine: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcToVlCcKd2oIea253fVBpRZ8EUXU7cvPyTkjeXW_YOc1UEV_nKnjGGyt6iCesyaS6zCpLS5XKloTPzoSro',
    nicotine: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQheeX-LnT1AaHHLGoCw7baUfLF8lOiiIT7f5GWiG5T1NpLqzOl_FbKvHujLZqTwGk2jZqa0siX-ctjETo',
    nitazine: 'https://wp.anrclinic.com/wp-content/uploads/2024/10/image2-1-1024x692.webp',
    'nitrous-oxide': 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSh97b6xzAil4eztsb7AfaU6H2OCMGnZx1EiF9-INSWNqzbUTW-Cz_7fnnr13OcxzDDBsJv_ZGRj-kx7h0',
    oxycodone: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT4kqVXdnedf7S7LgEMlTqHXfE7nsNNRZ0r2RNdw0SfHZWg2xo30LYJ4ObzQpAlRKhGXZLk2DHy10YvrBs',
    oxymorphone: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ-HIIeu5VmO_hE56jqP-jw6mCAxDpPoTXdDlNygMxBcfN7W4rNl8GclpvdzXHxwGKJVuS6di655cEtj_Y',
    parafluorofentanyl: 'https://media.labcompare.com/m/53/article/611571.jpg',
    pcp: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ8pSTB13rQcJAnr4uUvSW_pbuPUplURyjOoA1dyBfKwZxAhSTb4XycZIfnIEtbp79wLXduq4aU4Vce1yM',
    pregabalin: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQuBI3dcLWnauZr0k_nk4IGkT57KEVI_g3uBuOp8ec1ZbMEZy7_BvO0eidzvkEhxC6gV4N-hZaCw_HtJU',
    psilocybin: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Psilocybe_semilanceata_6514.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    ritalin: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQaxE7-fNgK2punuE0AnRnetlcqbKZdmTZzUEJ1Iep3jmn65aqCt29J_ouAxgIFvnKNcws07inBLZOavpY',
    salvia: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Salvia_divinorum_-_Herba_de_Maria.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    suboxone: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQIOMVlxwnyt0DjlyIlyQtowQGCg1RSoYLXNTCJKjmaVhPIsE7aaHLpYYt0844jxZXOIBR_aXGsqKJmZlw',
    'synthetic-cathinones': 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRciodumvlOExVp2NxZotzFswfMR-Ksyrf5DY_qWZer8NVxsdZVEHQeEz9yiW6OYdTPRcNfOOV1OivvkOg',
    'synthetic-cannabinoids': 'https://media.defense.gov/2011/Jan/05/2000295332/2000/2000/0/110105-F-9999B-003.JPG',
    tapentadol: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQTACBWJ9_FjQfRWljGbOtiGkRKYbG8-M48-TX0_et7XiQ8lGirgwPJHrCF02x4ci_LgN0hId_t1U-mPkA',
    thc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQB_G-Zb7kQhRzGPEpR8PrYn-gV8UfZLlokl5_6VmxznIagNPlu1mVFQnK4nsRkffvesQUC164riMb47HQ',
    tianeptine: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ70zv4fW6OVOb-BegmKOBvrkbhWl4DLdgbPvXkoxMwrzfrzEG2Xoefa2I2nIOUOTBTzuhNrcc60Uzn5mU',
    tramadol: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTAuIkxzitwYPmm_ZuN1ljTJsxxlOvePSi7Ez8GUWcuDvnkLTBFdnMF3SvmCmCMVJCKGpMREJzfccc45gk',
    vyvanse: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRNtSKS-PhG1-irx2-QHYLQ2b16iVvfJhhRv7bSdO4CrboaZ_T7p6_dHo4Kjs6bNO-LZaOHsMtvnxSLjmw',
    xylazine: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTBneWHk_659F9qtuFnE1kpquM-JCFfWOR-EVrqx7DrYSNle6g1A_FAZfozytfL3C8gswzOHBlo0J0BhFA',
    zolpidem: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSxd6Vvj4urvEJx71f3ZXbGCe6joKZm_wMbKkZnZLKWjTntFdViWrt3nAJsBghTT0_CxBBMQUxpUcVDm9Y',
  };

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  const categories = [
    { name: 'Opioids & Pain Medications', eyebrow: 'High overdose risk', description: 'Guides covering opioid effects, dependence, interactions, and emergency response.', slugs: ['fentanyl', 'carfentanil', 'parafluorofentanyl', 'heroin', 'oxycodone', 'hydrocodone', 'hydromorphone', 'codeine', 'tramadol', 'oxymorphone', 'morphine', 'methadone', 'suboxone', 'nitazine', 'meperidine', 'tapentadol', 'cyclorphine'] },
    { name: 'Sedatives & Depressants', eyebrow: 'Slow the nervous system', description: 'Learn how sedatives affect breathing, coordination, dependence, and withdrawal.', slugs: ['alcohol', 'bromazolam', 'alprazolam', 'barbiturates', 'carisoprodol', 'ghb', 'zolpidem', 'pregabalin', 'gabapentin', 'xylazine', 'medetomidine'] },
    { name: 'Stimulants', eyebrow: 'Energy & alertness', description: 'Understand stimulant effects, cardiovascular risks, and safer response steps.', slugs: ['adderall', 'methamphetamine', 'cocaine', 'crack-cocaine', 'vyvanse', 'dexmethylphenidate', 'modafinil', 'ritalin', 'synthetic-cathinones', 'nicotine'] },
    { name: 'Psychedelics & Dissociatives', eyebrow: 'Perception & consciousness', description: 'Explore altered perception, dissociation, set and setting, and acute safety concerns.', slugs: ['lsd', 'psilocybin', 'dmt', 'mescaline', '2c-b', 'salvia', 'pcp', 'ketamine', 'dextromethorphan', 'mdma'] },
    { name: 'Cannabinoids & Plant-Based Substances', eyebrow: 'Botanical & cannabinoid guides', description: 'Clear information about cannabis products, kratom, and synthetic cannabinoids.', slugs: ['thc', 'hemp-derived-cannabinoids', 'synthetic-cannabinoids', 'kratom', '7-hydroxymitragynine', 'kava'] },
    { name: 'Inhalants', eyebrow: 'Household and pressurized products', description: 'Learn about duster, poppers, nitrous oxide, and volatile solvents or aerosols that can cause sudden oxygen loss and cardiac arrest.', slugs: ['duster', 'alkyl-nitrites', 'nitrous-oxide', 'solvents-aerosols'] },
    { name: 'Other Substances', eyebrow: 'Additional guides', description: 'Additional substances and products with unique effects or exposure risks.', slugs: ['anabolic-steroids', 'phenibut', 'tianeptine'] },
  ];

  const drugNames = new Map(drugs.map((drug) => [drug.slug, drug.name]));

  return (
    <>
      <div className="sticky top-0 z-50 flex flex-col items-center justify-center gap-1 border-b border-white/20 bg-slate-950 px-3 py-2 text-center text-xs font-bold uppercase leading-tight tracking-[0.02em] text-white shadow-lg sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1 sm:px-4 sm:text-sm sm:tracking-[0.04em]">
        <span><span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-[#fb7185]" />Call <a href="tel:211" className="text-[#24f2a2] underline underline-offset-4 hover:text-white">2-1-1</a> for local resources</span>
        <span className="hidden text-slate-500 sm:inline">/</span>
        <span><span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-[#fb7185]" />Life-threatening emergency? <a href="tel:911" className="text-[#ff4d4d] underline underline-offset-4 hover:text-white">Call 9-1-1</a></span>
        <span className="hidden text-slate-500 sm:inline">/</span>
        <span><span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-[#fb7185]" />Suicide crisis support: <a href="tel:988" className="text-[#ff5454] underline underline-offset-4 hover:text-white">Call 9-8-8</a></span>
      </div>
      <header className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute -left-24 top-8 -z-10 h-72 w-72 animate-float-orb rounded-full bg-teal-400/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 animate-float-orb rounded-full bg-fuchsia-500/20 blur-3xl [animation-delay:2s]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(45,212,191,0.18),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#123b46_100%)]" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="animate-slide-in-up text-left">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-200 backdrop-blur"><span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_14px_#5eead4]" /> Learn with confidence</div>
              <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl">Education that helps you <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 bg-clip-text text-transparent">move forward.</span></h1>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">Explore clear, current substance guides and harm-reduction information designed to help you make informed choices.</p>
              <div className="mt-9 grid max-w-2xl grid-cols-2 gap-4"><Link href="/" className="group inline-flex items-center justify-center gap-3 rounded-full bg-teal-300 px-6 py-3.5 font-bold text-slate-950 shadow-[0_10px_35px_-12px_#5eead4] transition duration-300 hover:-translate-y-1 hover:bg-white">Explore resources <span className="transition-transform group-hover:translate-x-1">→</span></Link><Link href="/education" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-cyan-200 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-white/10 hover:text-white">Learn something new <span className="text-cyan-200 transition-transform group-hover:translate-x-1 group-hover:text-white">→</span></Link><Link href="/support-groups" className="group col-span-2 inline-flex w-fit justify-self-center items-center gap-3 rounded-full border border-amber-200/40 bg-amber-200/10 px-6 py-3.5 font-bold text-amber-100 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-200/20">Explore support groups <span className="transition-transform group-hover:translate-x-1">→</span></Link></div>
            </div>
            <div className="relative animate-scale-in [animation-delay:180ms]"><div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-teal-400/20 via-transparent to-fuchsia-400/20 blur-2xl" /><div className="animate-border-glow relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur-xl"><Link href="/" aria-label="Go to Ottawa County Recovery Alliance homepage"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg" alt="Ottawa County Recovery Alliance" className="h-auto w-full rounded-[1.4rem] object-cover transition duration-500 hover:scale-[1.02]" /></Link></div></div>
          </div>
        </div>
      </header>

      <main id="guides" className="relative isolate overflow-hidden bg-[#41cfdf] [border-color:rgba(235,229,230,0.05)] px-5 py-16 text-slate-900 sm:px-8 lg:py-20"><div className="pointer-events-none absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" /><div className="pointer-events-none absolute -right-32 top-[40rem] -z-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" /><div className="relative mx-auto max-w-7xl">
        <div className="animate-slide-in-up relative mb-12 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-teal-700 via-cyan-600 to-slate-900 p-8 text-white shadow-[0_24px_55px_-30px_rgba(13,148,136,0.8)] sm:p-10">
          <h2 className="text-3xl font-bold mb-3">Knowledge Saves Lives</h2>
          <p className="text-xl">Learn about emerging substances, recognize dangers, and discover paths to recovery. This information is for harm reduction and education based on current CDC and public health data. <Link href="/medical-disclaimer" className="font-bold italic text-[#ff5454] underline decoration-cyan-200 underline-offset-4 transition hover:text-white">Medical Disclaimer</Link></p>
        </div>

        <div className="mb-10">
          <label htmlFor="substance-search" className="sr-only">
            Search substance guides
          </label>
          <div className="relative mx-auto max-w-3xl">
            <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" />
            <Input
              id="substance-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search substance guides..."
              className="inline-flex h-14 w-full rounded-3xl border border-teal-300/30 bg-[rgba(86,249,200,0.47)] pl-12 pr-[11px] text-lg font-semibold text-[#282020] shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1),0_2px_4px_-2px_rgb(0_0_0_/_0.1)] placeholder:text-slate-700 focus-visible:border-teal-500 focus-visible:ring-teal-300/30"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex justify-center gap-4 border-b border-slate-300" ref={contentRef}>
          <button
            onClick={() => handleTabClick('infograph')}
            className={`whitespace-nowrap px-6 py-3 text-[30px] font-semibold transition ${
              activeTab === 'infograph'
? 'rounded-xl border border-white bg-[rgba(223,84,242,0.95)] text-[#0f0f10] underline shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)]'
  : 'text-slate-400 hover:text-slate-900'
            }`}
          >
            Drugs of Misuse: Information & Effects
          </button>
        </div>

        {/* Drug Boxes Tab */}
        {activeTab === 'infograph' && (
          <div className="mb-12 space-y-12">
            {filteredDrugs.length > 0 ? categories.map((category, categoryIndex) => {
              const categoryDrugs = filteredDrugs
                .filter((drug) => category.slugs.includes(drug.slug))
                .sort((a, b) => (drugNames.get(a.slug) ?? a.name).localeCompare(drugNames.get(b.slug) ?? b.name));
              if (!categoryDrugs.length) return null;
              return (
                <section key={category.name} aria-labelledby={`category-${categoryIndex}`} className="animate-slide-in-up" style={{ animationDelay: `${categoryIndex * 80}ms` }}>
                  <div className="mb-5 flex flex-col gap-3 border-l-4 border-fuchsia-400 pl-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-800/70">{category.eyebrow}</p>
                      <h2 id={`category-${categoryIndex}`} className="mt-1 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{category.name}</h2>
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-slate-800/75">{category.description}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {categoryDrugs.map((drug, idx) => {
                      const href = drug.slug === 'synthetic-cannabinoids' ? '/synthetic-cannabinoids' : `/drug/${drug.slug}`;
                      return (
                        <Link key={drug.slug} href={href} className="group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-500/50">
                          <div style={{ animationDelay: `${Math.min((categoryIndex * 4 + idx) * 35, 560)}ms` }} className="resource-card flex h-64 cursor-pointer flex-col items-center justify-center rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 text-center shadow-[0_18px_24px_-10px_rgba(2,8,23,0.9),0_8px_14px_-8px_rgba(15,23,42,0.75)] transition duration-500 group-hover:-translate-y-2 group-hover:border-teal-300/50 group-hover:shadow-[0_25px_55px_-24px_rgba(45,212,191,0.55)]">
                            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-teal-300/25 bg-gradient-to-br from-teal-300/20 to-fuchsia-400/10 text-teal-200 shadow-[0_0_28px_-10px_rgba(94,234,212,0.9)] transition duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-teal-200/60">
                              {(drug.image ?? substanceImages[drug.slug]) ? <img src={drug.image ?? substanceImages[drug.slug]} alt={`${drug.name} reference`} className="h-14 w-14 rounded-xl object-contain" /> : <drug.symbol aria-hidden="true" className="h-11 w-11 stroke-[1.6]" />}
                            </div>
                            <h3 className="text-lg font-black leading-tight tracking-tight text-white">{drug.name}{drug.slug === 'alprazolam' && <span className="block text-sm font-semibold text-cyan-300">(Xanax)</span>}{drug.slug === '7-hydroxymitragynine' && <span className="block text-sm font-semibold text-cyan-300">(7-OH)</span>}{drug.slug === 'dextromethorphan' && <span className="block text-sm font-semibold text-cyan-300">(DXM)</span>}{drug.slug === 'alkyl-nitrites' && <span className="block text-sm font-semibold text-cyan-300">(Poppers)</span>}{drug.slug === 'zolpidem' && <span className="block text-sm font-semibold text-cyan-300">(Ambien)</span>}{drug.slug === 'synthetic-cathinones' && <span className="block text-sm font-semibold text-cyan-300">(Bath Salts)</span>}</h3>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            }) : (
              <p className="rounded-2xl border border-dashed border-teal-300/40 bg-teal-300/10 p-8 text-center text-lg text-slate-900">No substance guides match “{searchQuery}”.</p>
            )}
          </div>
        )}

        {/* Interactive Infograph Tab - Now removed, showing drug boxes instead */}
        

        {/* Resources and Support Groups tabs */}
        {activeTab === 'support' && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overdose Prevention</h3>
                <ul className="space-y-2 text-gray-700"><li>Recognize unresponsiveness, blue lips, and slow breathing.</li><li>Call 9-1-1; Good Samaritan protection applies.</li><li>Use Narcan if available and place the person in recovery position.</li><li>Stay until emergency services arrive.</li></ul>
              </div>
              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Harm Reduction</h3>
                <ul className="space-y-2 text-gray-700"><li>Never use alone and keep emergency contacts accessible.</li><li>Use sterile equipment every time.</li><li>Start with a small test dose when using new supplies.</li><li>Seek professional help; treatment works.</li></ul>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recovery Resources</h3>
                <ul className="space-y-2 text-gray-700"><li>Medication-Assisted Treatment (MAT).</li><li>Residential and outpatient treatment programs.</li><li>Support groups for community and accountability.</li><li>Mental health support.</li></ul>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support for Loved Ones</h3>
                <ul className="space-y-2 text-gray-700"><li>Set healthy boundaries with compassion.</li><li>Learn about addiction as a medical condition.</li><li>Encourage professional help.</li><li>Take care of your own mental health.</li></ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">{supportTab === 'resources' ? 'Substance Use Resources' : 'Support Group Information'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(supportTab === 'resources' ? substanceResources : supportGroups).map((item) => (
                <article key={item.name} className="rounded-lg border border-teal-200 bg-white p-6 shadow-sm">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-700">{'type' in item ? String(item.type) : 'Peer Support'}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                  <p className="mt-3 leading-6 text-gray-700">{item.description}</p>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="mt-4 inline-block font-semibold text-teal-700 underline">Learn more</a>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-[1.75rem] border border-teal-300/20 bg-gradient-to-br from-teal-700 via-cyan-700 to-slate-900 p-8 text-center text-white shadow-[0_24px_55px_-30px_rgba(13,148,136,0.8)]">
          <h3 className="text-2xl font-bold mb-3">Ready to Get Help?</h3>
          <p className="mb-6 text-lg">Recovery is possible. Find resources and support in Ottawa County.</p>
          <Link href="/">
            <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-3 rounded text-lg transition">Browse Recovery Resources</button>
          </Link>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
