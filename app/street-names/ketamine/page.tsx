import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Ketamine Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for ketamine.',
};

export default function KetamineStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Ketamine"
      guideHref="/drug/ketamine"
      guideLabel="Back to Ketamine guide"
      accent="fuchsia"
      heading="Street names for ketamine"
      intro="Ketamine goes by many different names. Learning these can help identify use and have informed conversations about dangers."
      names={[
        'Special K', 'K', 'Ket', 'Vitamin K', 'Kitty', 'Kit Kat', 'Super K', 'K-Hole',
        'Lady K', 'Ket Ket', 'Purple', 'Pink', 'Lovely', 'Wonka', 'Woozle', 'Bump',
        'White', 'Horse', 'Dust', 'Trank', 'Tranq', 'Donkey Dust', 'Ketty', 'K-Hole Sessions',
      ]}
    />
  );
}
