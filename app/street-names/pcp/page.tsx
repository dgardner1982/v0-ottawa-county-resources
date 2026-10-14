import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'PCP Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for PCP.',
};

export default function PcpStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="PCP"
      guideHref="/drug/pcp"
      guideLabel="Back to PCP guide"
      accent="fuchsia"
      heading="Street names for PCP"
      intro="PCP goes by many different names. Learning these can help identify use and have informed conversations about dangers."
      names={[
        'PCP', 'Phencyclidine', 'Angel Dust', 'Dust', 'Peace Pill', 'Lovely',
        'Killer Weed', 'Embalming Fluid', 'Rocket Fuel', 'Ozone', 'Wack', 'Sherm',
        'Sherman', 'Wet', 'Dip', 'Superjoint', 'Fry', 'Frying', 'Death Trip',
        'Hog', 'Horse Tranquilizer', 'Elephant Tranquilizer', 'Boat', 'Zoom', 'Goon',
      ]}
    />
  );
}
