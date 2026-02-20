'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Twitter, Instagram, Mail, Heart } from 'lucide-react';

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Download', href: '/download' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Security', href: '/security' },
    ],
  },
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer id="contact" className="relative pt-16 lg:pt-24 pb-8 border-t border-white/[0.08]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Brand col */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#ff7b54] mb-4 hover:opacity-90 transition-opacity">
              <span>🍳</span> Brunoise AI
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Smart meal planning and nutrition tracking tailored to your fitness goals.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'mailto:support@brunoiseai.com', icon: Mail, label: 'Email' },
                { href: 'https://twitter.com/brunoiseai', icon: Twitter, label: 'Twitter' },
                { href: 'https://instagram.com/brunoiseai', icon: Instagram, label: 'Instagram' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-[#ff7b54]/15 border border-white/[0.08] hover:border-[#ff7b54]/30 flex items-center justify-center text-gray-400 hover:text-[#ff7b54] transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, section], sectionIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (sectionIndex + 1) * 0.1 + 0.1 }}
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#ff7b54] transition-colors text-sm inline-block hover:translate-x-0.5 transition-transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="py-6 border-t border-white/[0.08]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto">
            <span className="font-semibold">Medical Disclaimer:</span> Brunoise AI is not a medical device and does not provide medical advice. Consult with a healthcare professional before starting any diet or fitness program. Results may vary.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Brunoise AI. All rights reserved.</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#ff7b54] fill-[#ff7b54]" /> for fitness enthusiasts
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
