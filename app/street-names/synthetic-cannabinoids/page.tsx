import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Synthetic Cannabinoid Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street and marketing names for synthetic cannabinoids such as Spice and K2.',
};

export default function SyntheticCannabinoidsStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Synthetic Cannabinoids"
      guideHref="/synthetic-cannabinoids"
      guideLabel="Back to Synthetic Cannabinoids guide"
      accent="teal"
      intro="These substances are marketed under hundreds of names to evade legal restrictions. Names are constantly changing as manufacturers attempt to bypass drug identification protocols."
      names={[
        'Spice', 'K2', 'Mr. Nice Guy', 'Black Mamba', 'Bliss', 'Bombay Blue', 'Crazy Clown',
        'Demon Plant', 'Fake Weed', 'Genie', 'Krypton', 'Legal Weed', 'Liquid Incense', 'Northern Lights',
        'Paradise', 'Serenity', 'Solar Flare', 'Spike', 'Ultra Senso', 'Voodoo', 'Wicked X',
        'Zohai', 'Herbal Incense', 'Potpourri', 'Plants Food', 'Not For Human Consumption', 'Clock Tower',
        'C-1', 'Yucatan Fire', 'Smacked', 'Dank', 'Puff', 'Skunk', 'Ninja', 'Apache', 'Catnip',
      ]}
      info={{
        title: 'Why so many names?',
        tone: 'bullets',
        items: [
          { label: 'Legal evasion:', text: 'When one name becomes controlled, manufacturers create new ones' },
          { label: 'Deceptive marketing:', text: 'Labeled as "Legal," "Herbal Incense," or "Plant Food"' },
          { label: 'Regional variation:', text: 'Different names used in different areas' },
          { label: 'Rapid evolution:', text: 'New formulations require new marketing names' },
        ],
      }}
    />
  );
}
