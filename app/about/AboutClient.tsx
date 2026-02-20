'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Heart, Leaf, Zap, Globe, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };

const values = [
  { icon: Heart, title: 'People First', desc: 'Every feature we build starts with a simple question: does this genuinely help someone eat better and feel great?' },
  { icon: Zap, title: 'AI That Works', desc: 'We obsess over accuracy. Our models are trained on verified nutritional data and validated by registered dietitians.' },
  { icon: Leaf, title: 'Sustainable Eating', desc: 'Crash diets don\'t work. We focus on sustainable, enjoyable nutrition that fits your life long-term.' },
  { icon: Globe, title: 'Global Palate', desc: '300+ recipes from 15+ world cuisines. Nutrition doesn\'t have to be boring chicken and rice.' },
];

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

const team: TeamMember[] = [
  { name: 'QuailR2', role: 'CEO & Lead Developer', bio: 'Raised from a hispanic background, Quail wants to reinvent the app store. He wants to do this step by step. He is starting off with a cooking app.', initials: 'Q2', gradient: 'from-[#110082] to-[#8C00FF]', socials: 'https://twitter.com/@QuailR3' }
];

const milestones = [
  { year: 'January 2025', title: 'The Idea', desc: 'Quail saw his cousin having problems in his intestines, which resulted in him not feeling well, and thus, his cousin got diagnosed with Celiac.' },
  { year: 'January 2026', title: 'First Prototype', desc: 'The prototype started with the bare functions, premade meal plans, barely functioning food scanning. But it seemed like everything was going perfect, and it was!' },
  { year: 'February 10, 2026', title: 'TestFlight Launch', desc: 'Then, it happened. Brunoise AI launched on TestFlight with 300+ recipes and food scanner.' },
 // { year: '', title: 'Growing Community', desc: 'Thousands of athletes and fitness enthusiasts joined, shaping the product with feedback and results.' },
];

export function AboutClient() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.4 });

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(ellipse at 60% 30%, rgba(255,123,84,0.18) 0%, transparent 55%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={isHeaderInView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="text-center space-y-6"
          >
            <motion.span variants={fadeUp} className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              We believe nutrition should be{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b54] to-[#ff9f7a]">personal</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Brunoise AI was born from a simple frustration: existing nutrition apps treated everyone the same. We set out to
              build an AI chef that actually understands you — your goals, your taste, your schedule.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, amount: 0.3 });
              return (
                <motion.div
                  key={v.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-7 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-[#ff7b54]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ff7b54]/10 border border-[#ff7b54]/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#ff7b54]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">How We Got Here</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff7b54]/50 via-[#ff7b54]/20 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true, amount: 0.5 });
                return (
                  <motion.div
                    key={m.year}
                    ref={ref}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-6 pl-2"
                  >
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff7b54] to-[#ff9f7a] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#ff7b54]/25 z-10 relative" />
                    </div>
                    <div className="flex-1 pb-2">
                      <span className="text-[#ff7b54] text-xs font-semibold uppercase tracking-wider">{m.year}</span>
                      <h3 className="text-white font-semibold text-lg mt-0.5 mb-2">{m.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">The People</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, amount: 0.3 });
              return (
                <motion.div
                  key={m.name}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-7 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-[#ff7b54]/30 transition-colors flex flex-col"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${m.gradient} flex items-center justify-center text-white text-xl font-bold mb-5 shadow-lg`}>
                    {m.initials}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-0.5">{m.name}</h3>
                  <p className="text-[#ff7b54] text-sm font-medium mb-3">{m.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{m.bio}</p>
                  <div className="flex gap-2 mt-5">
                    {m.socials.linkedin && <a href={m.socials.linkedin} className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#ff7b54]/20 border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-[#ff7b54] transition-all"><Linkedin className="w-3.5 h-3.5" /></a>}
                    {m.socials.twitter && <a href={m.socials.twitter} className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#ff7b54]/20 border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-[#ff7b54] transition-all"><Twitter className="w-3.5 h-3.5" /></a>}
                    {m.socials.github && <a href={m.socials.github} className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#ff7b54]/20 border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-[#ff7b54] transition-all"><Github className="w-3.5 h-3.5" /></a>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want to be part of the story?</h2>
          <p className="text-gray-400 mb-8">We&apos;re always looking for passionate people to join our team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <motion.span
                className="inline-flex items-center gap-2 bg-[#ff7b54] hover:bg-[#e56a45] text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff7b54]/25 transition-all text-sm cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Open Roles <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/5 transition-all text-sm cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Us
              </motion.span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
