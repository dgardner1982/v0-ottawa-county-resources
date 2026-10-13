import { SubstanceProfilePage, profiles } from '@/components/substance-profile-page';

export default function KetaminePage() {
  return <SubstanceProfilePage profile={profiles.ketamineGuide ?? profiles.alcohol} />;
}
