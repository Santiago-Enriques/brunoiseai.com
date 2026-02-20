'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Section {
  title: string;
  content: string | string[];
}

interface LegalPageProps {
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export function LegalPage({ badge, title, lastUpdated, intro, sections }: LegalPageProps) {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.4 });

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,123,84,0.15) 0%, transparent 55%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider mb-4">{badge}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-gray-500 text-sm">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-base leading-relaxed mb-10 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
          >
            {intro}
          </motion.p>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => {
              const sectionRef = useRef(null);
              const sInView = useInView(sectionRef, { once: true, amount: 0.3 });
              return (
                <motion.div
                  key={section.title}
                  ref={sectionRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={sInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-[#ff7b54] text-sm font-mono">{String(i + 1).padStart(2, '0')}</span>
                    {section.title}
                  </h2>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2">
                      {section.content.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                          <span className="text-[#ff7b54] mt-1 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-sm leading-relaxed">{section.content}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Contact note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 p-6 rounded-2xl bg-[#ff7b54]/5 border border-[#ff7b54]/15 text-center"
          >
            <p className="text-gray-400 text-sm">
              Questions about this policy?{' '}
              <a href="mailto:legal@brunoiseai.com" className="text-[#ff7b54] hover:underline font-medium">
                legal@brunoiseai.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
