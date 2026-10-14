import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Fentanyl Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for fentanyl and counterfeit pills.',
};

export default function FentanylStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Fentanyl"
      guideHref="/drug/fentanyl"
      guideLabel="Back to Fentanyl guide"
      accent="red"
      intro="Fentanyl is 50-100 times more potent than heroin and is often mixed into other drugs without the user's knowledge, increasing overdose risk dramatically."
      names={[
        'Fent', 'China White', 'Apache', 'Tango', 'Dance Fever', 'Goodfellas', 'Jackpot',
        'Lethal Injection', 'Murder 8', 'Poison', 'Super Fent', 'Fentyl', 'Fent Dope',
        'TNT', 'China Girl', 'Drug Store Heroin', 'Percopop', 'Perc30', 'M30', 'Blues',
        'Pressies', '30s', 'Tabs', 'Fetty', 'Fetty Wap', 'White Stuff', 'Bricks', 'Droplets',
        'Master Drug', 'Red Lips', 'Tampons', 'Rubber Cement', 'Candy', 'Compressed',
      ]}
      info={{
        title: 'Critical information',
        tone: 'warning',
        items: [
          { text: 'Fentanyl is mixed into heroin, cocaine, and counterfeit pills without user knowledge' },
          { text: 'A dose as small as 2 milligrams can be lethal' },
          { text: 'Rapid onset means overdose can happen within minutes' },
          { text: 'Tolerance can develop quickly, increasing overdose risk' },
        ],
      }}
    />
  );
}
