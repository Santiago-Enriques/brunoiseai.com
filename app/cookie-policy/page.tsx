import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Brunoise AI uses cookies and similar tracking technologies on its website.',
};

const sections = [
  { title: 'What Are Cookies?', content: 'Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide analytics information to site owners.' },
  { title: 'Cookies We Use', content: ['Essential cookies: Required for the website to function. These include session management and security tokens. You cannot opt out of these.', 'Analytics cookies: We use privacy-respecting analytics (no personally identifiable data) to understand how visitors interact with our site so we can improve it.', 'Preference cookies: We remember your cookie consent choice and any display preferences you set.'] },
  { title: 'What We Do NOT Do', content: ['We do not use third-party advertising cookies.', 'We do not sell data collected via cookies to any third party.', 'We do not use cookies to track you across other websites.', 'We do not use fingerprinting or other privacy-invasive tracking techniques.'] },
  { title: 'Your Choices', content: 'When you first visit our site, we show you a cookie banner where you can accept or decline non-essential cookies. You can also change your browser settings to refuse all cookies, though this may affect the functionality of the site. To withdraw consent at any time, clear your browser cookies and revisit the site.' },
  { title: 'Third-Party Links', content: 'Our website may contain links to third-party websites. We are not responsible for the cookie practices of those sites. We recommend you review their privacy and cookie policies separately.' },
  { title: 'Mobile App', content: 'The Brunoise AI iOS app does not use browser cookies. The app uses on-device storage and Apple\'s frameworks for authentication and data persistence. See our Privacy Policy for full details on how the app handles your data.' },
  { title: 'Updates to This Policy', content: 'We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this policy periodically.' },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Cookie Policy"
      lastUpdated="January 1, 2026"
      intro="This Cookie Policy explains how Brunoise AI uses cookies and similar technologies on the brunoiseai.com website. The Brunoise AI mobile app does not use cookies — this policy applies only to our website."
      sections={sections}
    />
  );
}
