import type { Metadata } from 'next';
import { PressClient } from './PressClient';

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press kit, media resources, and brand assets for Brunoise AI.',
};

export default function PressPage() {
  return <PressClient />;
}
