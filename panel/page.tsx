import type { Metadata } from 'next';
import { AdminPanel } from './AdminPanel';

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Brunoise AI admin panel',
  robots: { index: false, follow: false },
};

export default function PanelPage() {
  return <AdminPanel />;
}
