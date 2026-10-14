import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'THC Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names and product types for THC and cannabis.',
};

export default function ThcStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="THC"
      guideHref="/drug/thc"
      guideLabel="Back to THC guide"
      accent="teal"
      heading="Street names for THC"
      intro="THC goes by many different names and product types. Learning these can help identify use and have informed conversations about risks."
      names={[
        'THC', 'Weed', 'Pot', 'Grass', 'Dope', 'Hash', 'Hashish', 'Marijuana',
        'Ganja', 'Mary Jane', 'Reefer', 'Spliff', 'Joint', 'Blunt', 'Fatty',
        'Greenery', 'Chronic', 'Bud', 'Trees', 'Herb', 'Dank', 'Loud', 'Skunk',
        'Indica', 'Sativa', 'Hybrid', 'Edibles', 'Concentrates', 'Shatter', 'Wax',
      ]}
      note="Names are constantly changing as new products and variants emerge. High-potency products and concentrates pose increased risks. If you encounter unfamiliar terms being used in connection with substance use, it's worth investigating further."
    />
  );
}
