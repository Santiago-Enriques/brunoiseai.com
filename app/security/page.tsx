import type { Metadata } from 'next';
import { SecurityClient } from './SecurityClient';

export const metadata: Metadata = {
  title: 'Security',
  description: 'How Brunoise AI keeps your data secure. Our security practices, responsible disclosure, and contact info.',
};

export default function SecurityPage() {
  return <SecurityClient />;
}
