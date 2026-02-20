import type { Metadata } from 'next';
import { DownloadClient } from './DownloadClient';

export const metadata: Metadata = {
  title: 'Download',
  description: 'Download Brunoise AI on iOS via TestFlight. Your personal AI chef is one tap away.',
};

export default function DownloadPage() {
  return <DownloadClient />;
}
