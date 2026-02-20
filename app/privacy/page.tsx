import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Brunoise AI collects, uses, and protects your personal data.',
};

const sections = [
  { title: 'Information We Collect', content: ['Account information: name, email address, and profile data you provide during sign-up (via Sign in with Apple or email).', 'Health & fitness data: height, weight, age, fitness goals, and dietary preferences you choose to enter.', 'Food & nutrition data: meals you log, photos you scan, and nutritional information associated with your diet.', 'Usage data: how you interact with the app, features used, and crash reports to help us improve the product.', 'Device information: device type, operating system version, and app version for compatibility and support.'] },
  { title: 'How We Use Your Information', content: ['To generate personalized meal plans and nutrition recommendations calibrated to your goals.', 'To train and improve our AI models — only using anonymized, aggregated data, never your personal profile.', 'To send you meal reminders and in-app notifications (which you can disable at any time).', 'To provide customer support when you contact us.', 'To comply with legal obligations and enforce our Terms of Service.'] },
  { title: 'Data Sharing', content: 'We do not sell your personal data. Period. We may share anonymized, aggregated data with research partners to improve nutritional science. We use a small number of trusted third-party service providers (cloud hosting, analytics) who are contractually required to protect your data and process it only on our behalf.' },
  { title: 'Apple Sign-In & Health Data', content: 'When you sign in with Apple, we receive only the information Apple chooses to share (typically your name and a private email relay). We never request access to Apple Health data without your explicit permission within the app, and this data is never shared with third parties.' },
  { title: 'Data Retention', content: 'We retain your personal data for as long as your account is active, or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us at privacy@brunoiseai.com. We will process deletion requests within 30 days.' },
  { title: 'Your Rights', content: ['Access: request a copy of the data we hold about you.', 'Correction: ask us to correct inaccurate data.', 'Deletion: request that we delete your account and personal data.', 'Portability: receive your data in a machine-readable format.', 'Opt-out: unsubscribe from marketing communications at any time.'] },
  { title: 'Security', content: 'We use industry-standard encryption in transit (TLS) and at rest. Access to user data is restricted to a small number of engineers with a need-to-know. We conduct regular security reviews. Despite these measures, no system is 100% secure — please use a strong, unique password and enable any available 2FA.' },
  { title: 'Children', content: 'Brunoise AI is not directed to children under 13 (or 16 in the European Economic Area). We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us immediately.' },
  { title: 'Changes to This Policy', content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via in-app notification or email at least 14 days before they take effect. Continued use of the app after the effective date constitutes acceptance of the updated policy.' },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Privacy Policy"
      lastUpdated="January 1, 2026"
      intro="At Brunoise AI, your privacy is foundational — not an afterthought. This policy explains what personal data we collect, why we collect it, how we protect it, and the choices you have. We've written it in plain language because we believe you deserve to understand exactly how your data is used."
      sections={sections}
    />
  );
}
