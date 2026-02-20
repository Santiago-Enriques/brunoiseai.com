import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions for using Brunoise AI.',
};

const sections = [
  { title: 'Acceptance of Terms', content: 'By downloading, installing, or using Brunoise AI, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the app. We reserve the right to modify these terms at any time.' },
  { title: 'Eligibility', content: 'You must be at least 13 years old to use Brunoise AI. If you are under 18, you represent that your legal guardian has reviewed and agreed to these Terms on your behalf.' },
  { title: 'Account Responsibilities', content: ['You are responsible for maintaining the confidentiality of your account credentials.', 'You agree to provide accurate, current, and complete information during registration.', 'You must notify us immediately of any unauthorized use of your account.', 'You are responsible for all activities that occur under your account.'] },
  { title: 'Permitted Use', content: ['Brunoise AI is for personal, non-commercial use only unless you have entered into a separate commercial agreement with us.', 'You agree not to reverse-engineer, decompile, or attempt to extract the source code of the app.', 'You may not use the app to collect or harvest data from other users.', 'You may not use automated scripts or bots to access the app.'] },
  { title: 'Medical Disclaimer', content: 'Brunoise AI is a nutrition planning tool, not a medical device. The app does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before starting a new diet or fitness program, especially if you have a medical condition. Nutritional information is provided for informational purposes only and may not be 100% accurate for all foods.' },
  { title: 'User-Generated Content', content: 'When you submit content (such as food logs or feedback), you grant us a limited, non-exclusive license to use that content to provide and improve the service. You retain all ownership rights. We do not claim ownership of your personal health data.' },
  { title: 'Intellectual Property', content: 'All content in Brunoise AI — including the app design, algorithms, recipe database, and branding — is the property of Brunoise AI and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.' },
  { title: 'Termination', content: 'We may suspend or terminate your account if you violate these Terms. You may delete your account at any time from the app settings. Upon termination, your right to use the app ends immediately, and we will delete your personal data per our Privacy Policy.' },
  { title: 'Limitation of Liability', content: 'To the fullest extent permitted by law, Brunoise AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the app. Our total liability to you for any claims shall not exceed $100 or the amount you paid us in the past 12 months, whichever is greater.' },
  { title: 'Governing Law', content: 'These Terms are governed by and construed in accordance with the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration, except that either party may seek injunctive relief in a court of competent jurisdiction.' },
];

export default function TermsPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of Service"
      lastUpdated="January 1, 2026"
      intro="These Terms of Service govern your use of the Brunoise AI mobile application and related services. Please read them carefully before using the app. If you have any questions, contact us at legal@brunoiseai.com."
      sections={sections}
    />
  );
}
