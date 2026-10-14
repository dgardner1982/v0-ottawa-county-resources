import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Methamphetamine Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for methamphetamine.',
};

export default function MethamphetamineStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Methamphetamine"
      guideHref="/drug/methamphetamine"
      guideLabel="Back to Methamphetamine guide"
      accent="amber"
      heading="Street names for methamphetamine"
      intro="Methamphetamine goes by many different names. Learning these can help identify use and have informed conversations about dangers."
      names={[
        'Meth', 'Crystal', 'Crank', 'Speed', 'Ice', 'Glass', 'Tina', 'T',
        'Jib', 'Tweak', 'Go Fast', 'Trash', 'Bikers Coffee', 'Hot Ice', 'Shards',
        'Yaba', 'Shaboo', 'Sketch', 'Zip', 'Gak', 'Chalk', 'Christina', 'Christine',
        'Crissy', 'Cristina', 'Pervitin', 'Redneck Cocaine', 'Biker Meth', 'Rocket Fuel',
      ]}
    />
  );
}
