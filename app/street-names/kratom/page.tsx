import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Kratom Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names and strains for kratom.',
};

export default function KratomStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Kratom"
      guideHref="/drug/kratom"
      guideLabel="Back to Kratom guide"
      accent="teal"
      heading="Street names for kratom"
      intro="Kratom goes by many different names and strains. Learning these can help identify use and have informed conversations about dangers."
      names={[
        'Kratom', 'Ketum', 'Kakuam', 'Ithang', 'Biak-Biak', 'Thom', 'Speciosa',
        'Enhanced', 'Extract', 'Toss and Wash', 'K', 'Mitragyna', 'Kratom Tea',
        'Green Malay', 'White Vein', 'Red Vein', 'Gold', 'Trainwreck', 'Fusion',
      ]}
      note="Kratom strains and variants are constantly being marketed under new names. If you encounter unfamiliar terms being used in connection with substance use, it's worth investigating further."
    />
  );
}
