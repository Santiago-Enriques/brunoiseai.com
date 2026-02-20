import type { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Brunoise AI — the team and mission behind your personal AI chef.',
};

export default function AboutPage() {
  return <AboutClient />;
}
