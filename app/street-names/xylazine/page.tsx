import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Xylazine Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for xylazine (tranq).',
};

export default function XylazineStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Xylazine"
      guideHref="/drug/xylazine"
      guideLabel="Back to Xylazine guide"
      accent="red"
      heading="Street names for xylazine"
      intro="Xylazine goes by many different names. Learning these can help identify use and have informed conversations about dangers."
      names={[
        'Xylazine', 'Tranq', 'Tranquility', 'Trank', 'Horse', 'Horse Tranquilizer',
        'Elephant Tranquilizer', 'Xyla', 'Xylazine Hybrid', 'Xyl', 'Zombie Drug',
        'Sleep-Causing Drug', 'Tranq Dope', 'Tranq Fentanyl Mix', 'Deer Drug',
        'Rompun', 'Sedative', 'Party Drug', 'Club Drug', 'Trapjaw', 'Tranq-Heroin Mix',
      ]}
    />
  );
}
