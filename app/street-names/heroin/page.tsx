import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Heroin Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for heroin.',
};

export default function HeroinStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Heroin"
      guideHref="/drug/heroin"
      guideLabel="Back to Heroin guide"
      accent="rose"
      intro="Heroin is known by many street names that vary by region and dealer. Understanding these names helps recognize when someone may be discussing heroin use."
      names={[
        'Dope', 'Smack', 'Horse', 'H', 'Black Tar', 'Brown', 'Junk', 'Skag', 'China White',
        'Mexican Mud', 'Tar', 'Hero', 'Big H', 'Boy', 'White Horse', 'Poison', 'Mud',
        'Dragon', 'Stuff', 'Gear', 'Big Bag', 'Piece', 'Bundle', 'Paper', 'Deck', 'Bin',
        'Brick', 'Cut', 'Load', 'Riddle', 'Dinero', 'Pantopon', 'Morpho', 'Hera', 'Hard',
        'Scag', 'TNT', 'Snowball', 'Thai', 'Dragon Chasing', 'Chasing the Dragon',
      ]}
      info={{
        title: 'Why learn these names?',
        tone: 'bullets',
        items: [
          { text: 'Recognize when someone is discussing heroin use' },
          { text: 'Street names frequently change and vary by location' },
          { text: 'Help identify paraphernalia and usage indicators' },
          { text: 'Support awareness in family and community' },
        ],
      }}
    />
  );
}
