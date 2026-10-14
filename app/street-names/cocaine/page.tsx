import type { Metadata } from 'next';
import { StreetNamesPage } from '@/components/street-names-page';

export const metadata: Metadata = {
  title: 'Cocaine Street Names | Ottawa County Recovery Alliance',
  description: 'A reference list of common street names for cocaine and crack cocaine.',
};

export default function CocaineStreetNamesPage() {
  return (
    <StreetNamesPage
      substance="Cocaine"
      guideHref="/drug/cocaine"
      guideLabel="Back to Cocaine guide"
      accent="cyan"
      intro="Cocaine has numerous street names that vary by region. It can be in powder form or crack form, each with its own specific terminology."
      names={[
        'Coke', 'Blow', 'Powder', 'Snow', 'Flake', 'White', 'Nose Candy', 'Bump', 'Icing',
        'Yeyo', 'Yay', 'Dust', 'Cocaine', 'Carload', 'Candy', 'Charlie', 'Champagne',
        'Chops', 'Crack', 'Croak', 'Fell', 'Freebase', 'Gail', 'Gak',
        'Gator', 'Gin', 'Girl', 'Glory', 'Go', 'Gold', 'Gonzales', 'Gore', 'Gravel',
        'Coca', 'Dynamite', 'Excellent', 'Extract', 'Fishscale', 'Freeze', 'Fries',
      ]}
      info={{
        title: 'Forms and potency',
        tone: 'warning',
        items: [
          { label: 'Powder cocaine:', text: 'Snorted or injected; effects last 5-30 minutes' },
          { label: 'Crack cocaine:', text: 'Smoked; effects last 5-10 minutes but more intense' },
          { text: 'Sometimes mixed with fentanyl, drastically increasing overdose risk' },
          { text: 'Is involved in 59% of overdose deaths involving stimulants' },
        ],
      }}
    />
  );
}
