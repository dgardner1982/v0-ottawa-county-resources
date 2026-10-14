import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Methadone Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for methadone.',
};

export default function MethadoneStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Methadone"
      guideHref="/drug/methadone"
      guideLabel="Back to Methadone guide"
      accent="cyan"
      heading="Street names for methadone"
      intro="Methadone goes by many different names. Learning these can help identify use and have informed conversations about dangers."
      names={[
        'Methadone', 'Done', 'Wafers', 'Dolophine', 'Physeptone', 'Amidone',
        'Synthetic Heroin', 'Diesel', 'Meth', 'Medicine', 'Jungle Juice',
        'Tang', 'Cherry Juice', 'Pink', 'Red', 'Liquid', 'Liquid Handcuffs',
        'Muddy Waters', 'Reds', 'Double Trouble', 'Keep Well',
      ]}
    />
  );
}
