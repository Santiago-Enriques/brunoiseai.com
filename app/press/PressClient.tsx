'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Mail, ArrowRight, FileText, Image, Palette } from 'lucide-react';

const facts = [
  { label: 'Founded', value: '2022' },
  { label: 'Headquarters', value: 'Remote-first' },
  { label: 'Team size', value: '4 people' },
  { label: 'Recipes', value: '300+' },
  { label: 'Cuisines', value: '15+' },
  { label: 'Platform', value: 'iOS (TestFlight)' },
];

const coverageItems = [
  { outlet: 'TechCrunch', headline: '"Brunoise AI is the nutrition tracking app athletes actually want"', date: 'Nov 2024', url: '#' },
  { outlet: 'Product Hunt', headline: '#2 Product of the Day — Brunoise AI launches on TestFlight', date: 'Oct 2024', url: '#' },
  { outlet: 'AppAdvice', headline: '"The AI food scanner that finally gets macros right"', date: 'Sep 2024', url: '#' },
];

const assets = [
  { icon: Image, label: 'Logo Pack', sub: 'SVG, PNG — light & dark variants', href: '#' },
  { icon: Palette, label: 'Brand Guidelines', sub: 'Colors, typography, usage rules', href: '#' },
  { icon: FileText, label: 'Press Release', sub: 'Latest announcement (PDF)', href: '#' },
  { icon: Download, label: 'Full Press Kit', sub: 'All assets in one ZIP', href: '#' },
];

export function PressClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255,123,84,0.15) 0%, transparent 55%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="space-y-5">
            <span className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">Press & Media</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Press Room</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Everything journalists and creators need to cover Brunoise AI. For press inquiries, contact{' '}
              <a href="mailto:press@brunoiseai.com" className="text-[#ff7b54] hover:underline">press@brunoiseai.com</a>.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* About blurb */}
            <div ref={ref}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                <h2 className="text-2xl font-bold text-white mb-4">About Brunoise AI</h2>
                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <p>Brunoise AI is a mobile nutrition app that uses artificial intelligence to create fully personalized meal plans for athletes and fitness enthusiasts. Founded in 2022, the company is on a mission to make science-backed nutrition accessible, enjoyable, and effortless for everyone.</p>
                  <p>The app features a food scanner powered by computer vision, a library of 300+ recipes from 15+ global cuisines, automatic macro tracking calibrated to each user&apos;s fitness goal, and smart meal reminders. Brunoise AI is currently available on iOS via Apple TestFlight.</p>
                </div>
              </motion.div>
            </div>

            {/* Coverage */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">In the Press</h2>
              <div className="space-y-4">
                {coverageItems.map((item, i) => {
                  const itemRef = useRef(null);
                  const inView = useInView(itemRef, { once: true, amount: 0.5 });
                  return (
                    <motion.a
                      key={item.outlet}
                      ref={itemRef}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ x: 4, transition: { duration: 0.15 } }}
                      className="block p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#ff7b54]/30 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-bold text-[#ff7b54] uppercase tracking-wider">{item.outlet}</span>
                          <p className="text-white text-sm font-medium mt-1 leading-snug">{item.headline}</p>
                          <p className="text-gray-600 text-xs mt-1">{item.date}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#ff7b54] transition-colors shrink-0 mt-1" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Press kit assets */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Press Assets</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {assets.map(({ icon: Icon, label, sub, href }, i) => {
                  const aRef = useRef(null);
                  const inView = useInView(aRef, { once: true, amount: 0.4 });
                  return (
                    <motion.a
                      key={label}
                      ref={aRef}
                      href={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{ y: -4, transition: { duration: 0.15 } }}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#ff7b54]/30 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#ff7b54]/10 border border-[#ff7b54]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff7b54]/20 transition-colors">
                        <Icon className="w-4 h-4 text-[#ff7b54]" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{label}</p>
                        <p className="text-gray-500 text-xs">{sub}</p>
                      </div>
                      <Download className="w-4 h-4 text-gray-600 group-hover:text-[#ff7b54] transition-colors ml-auto" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Fact sheet */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#ff7b54]" /> Quick Facts
              </h3>
              <div className="space-y-3">
                {facts.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                    <span className="text-gray-500 text-xs">{label}</span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#ff7b54]/5 border border-[#ff7b54]/15 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff7b54]" /> Press Contact
              </h3>
              <p className="text-gray-400 text-sm mb-4">For interviews, quotes, or media enquiries, reach out directly.</p>
              <a href="mailto:press@brunoiseai.com" className="block text-[#ff7b54] text-sm font-semibold hover:underline">
                press@brunoiseai.com
              </a>
              <p className="text-gray-600 text-xs mt-1">Response within 4 hours on business days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
