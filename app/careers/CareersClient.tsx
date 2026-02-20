'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, ArrowRight, ChevronDown, Search } from 'lucide-react';

const perks = [
  { emoji: '🌍', title: 'Remote-first', desc: 'Work from anywhere. We have team members across 3 continents.' },
  { emoji: '🏥', title: 'Health & Wellness', desc: 'Full health coverage + monthly wellness stipend to use on what matters to you.' },
  { emoji: '📚', title: 'Learning Budget', desc: '$2,000/year for courses, books, conferences, or anything that sharpens your craft.' },
  { emoji: '🍳', title: 'Meal Plan Perk', desc: 'Free Brunoise AI premium forever + weekly chef-prepared meal kit delivery.' },
  { emoji: '💻', title: 'Top-tier Equipment', desc: 'Latest MacBook Pro, ergonomic setup, and any peripherals you need.' },
  { emoji: '🏖️', title: 'Unlimited PTO', desc: 'We trust you. Take what you need. Minimum 20 days encouraged.' },
];

const roles = [
  { id: 1, title: 'Senior iOS Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time', description: 'We\'re looking for an experienced iOS engineer to help us build world-class native features for Brunoise AI. You\'ll work on everything from the food scanner to meal planning flows.', requirements: ['5+ years iOS development', 'Swift / SwiftUI expertise', 'Experience with ML on-device (Core ML a plus)', 'Strong UI/UX sensibility'] },
  { id: 2, title: 'ML Engineer — Nutrition Models', dept: 'AI / ML', location: 'Remote', type: 'Full-time', description: 'Help us make our nutrition AI smarter. You\'ll train and fine-tune models for food recognition, macro calculation, and personalized meal recommendations.', requirements: ['3+ years ML engineering', 'Python, PyTorch or TensorFlow', 'Experience with vision models (CLIP, ResNet, etc.)', 'Interest in nutrition / health a bonus'] },
  { id: 3, title: 'Product Designer', dept: 'Design', location: 'Remote', type: 'Full-time', description: 'Own the end-to-end design of new product features. You\'ll work closely with engineering and our nutrition science team to create experiences that make healthy eating feel effortless.', requirements: ['4+ years product design', 'Figma proficiency', 'iOS design experience', 'Strong portfolio with health/wellness apps a plus'] },
  { id: 4, title: 'Growth Marketer', dept: 'Marketing', location: 'Remote', type: 'Full-time', description: 'Build and run our growth engine. From TestFlight conversion to social media, you\'ll own the channels that bring new users to Brunoise AI.', requirements: ['3+ years growth or performance marketing', 'Experience with App Store Optimization', 'Data-driven mindset', 'Passion for fitness / nutrition'] },
  { id: 5, title: 'Registered Dietitian (Part-time)', dept: 'Science', location: 'Remote', type: 'Part-time', description: 'Review and validate AI-generated meal plans and nutrition content. Help us maintain the highest scientific standards across the app.', requirements: ['RD or RDN credential', 'Sports nutrition background preferred', 'Comfortable reviewing AI-generated content', 'Available ~10h/week'] },
];

function JobCard({ role }: { role: typeof roles[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[#ff7b54]/25 transition-colors"
    >
      <button onClick={() => setOpen(!open)} className="w-full text-left p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold text-lg">{role.title}</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="flex items-center gap-1 text-xs text-gray-400"><MapPin className="w-3 h-3" />{role.location}</span>
              <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="w-3 h-3" />{role.type}</span>
              <span className="text-xs bg-[#ff7b54]/10 text-[#ff7b54] border border-[#ff7b54]/20 rounded-full px-2 py-0.5 font-medium">{role.dept}</span>
            </div>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 mt-1">
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/[0.05] pt-5">
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{role.description}</p>
              <div className="mb-6">
                <p className="text-white text-sm font-semibold mb-3">Requirements</p>
                <ul className="space-y-2">
                  {role.requirements.map(r => (
                    <li key={r} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-[#ff7b54] mt-0.5">•</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={`mailto:careers@brunoiseai.com?subject=Application — ${role.title}`}>
                <motion.span
                  className="inline-flex items-center gap-2 bg-[#ff7b54] hover:bg-[#e56a45] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CareersClient() {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const depts = ['All', ...Array.from(new Set(roles.map(r => r.dept)))];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filtered = roles.filter(r =>
    (deptFilter === 'All' || r.dept === deptFilter) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.dept.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255,123,84,0.15) 0%, transparent 55%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="space-y-5">
            <span className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Build the future of nutrition</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">We&apos;re a small, ambitious team on a mission to make personalized nutrition accessible to everyone. Come build with us.</p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">Benefits</span>
            <h2 className="text-3xl font-bold text-white mt-3">Why Brunoise AI?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, amount: 0.3 });
              return (
                <motion.div
                  key={perk.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#ff7b54]/25 transition-colors"
                >
                  <div className="text-3xl mb-3">{perk.emoji}</div>
                  <h3 className="text-white font-semibold mb-1">{perk.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section ref={ref} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10">
            <span className="text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">Open Positions</span>
            <h2 className="text-3xl font-bold text-white mt-3">{roles.length} roles open now</h2>
          </motion.div>

          {/* Search & filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search roles…"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-gray-600 text-sm outline-none focus:border-[#ff7b54]/50 transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {depts.map(d => (
                <button
                  key={d}
                  onClick={() => setDeptFilter(d)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${deptFilter === d ? 'bg-[#ff7b54] text-white' : 'bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white'}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {filtered.length ? filtered.map(role => <JobCard key={role.id} role={role} />) : (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-500 py-8">No roles match your search.</motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* General application */}
          <div className="mt-10 p-6 rounded-2xl bg-[#ff7b54]/5 border border-[#ff7b54]/15 text-center">
            <p className="text-white font-semibold mb-1">Don&apos;t see your role?</p>
            <p className="text-gray-400 text-sm mb-4">We&apos;re always interested in exceptional people. Send us your resume and tell us how you&apos;d contribute.</p>
            <a href="mailto:careers@brunoiseai.com" className="inline-flex items-center gap-2 text-[#ff7b54] text-sm font-semibold hover:underline">
              careers@brunoiseai.com <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
