import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Inhalant Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for inhalants.',
};

export default function InhalantsStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Inhalants"
      guideHref="/drug/inhalants"
      guideLabel="Back to Inhalants guide"
      accent="amber"
      heading="Street names for inhalants"
      intro="Inhalants go by many different names. Learning these can help identify use and have informed conversations about dangers."
      names={[
        'Poppers', 'Snappers', 'Inhalables', 'Whippits', 'Laughing Gas', 'Video Head Cleaner',
        'Room Odorizer', 'Leather Cleaner', 'Alkyl Nitrites', 'Butyl Nitrite', 'Isobutyl Nitrite',
        'Amyl Nitrite', 'Rush', 'Thrust', 'Liquid Gold', 'Amsterdam', 'English', 'Hardware',
        'Hot Stuff', 'Locker Room', 'Pump', 'TNT', 'Video Cleaner', 'Room Scent', 'Spray Cleaner',
      ]}
    />
  );
}
