import type { Metadata } from 'next';
import { CareersClient } from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Brunoise AI team. Help us build the future of personalized nutrition.',
};

export default function CareersPage() {
  return <CareersClient />;
}
