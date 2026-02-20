'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Star, Shield, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };

const steps = [
  { n: '1', title: 'Install TestFlight', desc: 'Download the free TestFlight app from the App Store on your iPhone or iPad.' },
  { n: '2', title: 'Tap the Link Below', desc: 'Hit the Download button below. TestFlight will open automatically and prompt you to install Brunoise AI.' },
  { n: '3', title: 'Start Eating Better', desc: 'Create your profile, set your goal, and get your first AI-generated meal plan in under a minute.' },
];

const highlights = [
  { icon: Zap, label: 'Instant setup', sub: 'Ready in under 60 seconds' },
  { icon: Star, label: '300+ Recipes', sub: 'From 15+ global cuisines' },
  { icon: Shield, label: 'Privacy first', sub: 'Sign in with Apple' },
  { icon: CheckCircle2, label: 'Free on TestFlight', sub: 'No credit card needed' },
];

export function DownloadClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(255,123,84,0.2) 0%, transparent 55%)' }} />

        {/* Hero */}
        <section className="relative py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="flex justify-center">
                <span className="text-7xl filter drop-shadow-lg">🍳</span>
              </motion.div>
              <motion.span variants={fadeUp} className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">
                Available on iOS
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Download{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b54] to-[#ff9f7a]">
                  Brunoise AI
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-xl mx-auto">
                Your personal AI chef is one tap away. Available now on TestFlight — free for early access testers.
              </motion.p>

              {/* Main CTA */}
              <motion.div variants={fadeUp} className="flex justify-center pt-2">
                <motion.a
                  href="https://testflight.apple.com/join/tUjXgTe4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#ff7b54] hover:bg-[#e56a45] text-white font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-[#ff7b54]/30 hover:shadow-[#ff7b54]/50 transition-all text-base"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Smartphone className="w-6 h-6" />
                  Download on TestFlight
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
              <motion.p variants={fadeUp} className="text-xs text-gray-600">
                Requires iPhone with iOS 16+ · TestFlight (free) required
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ff7b54]/10 border border-[#ff7b54]/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#ff7b54]" />
                  </div>
                  <p className="text-white text-sm font-semibold">{label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section ref={ref} className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">Setup</span>
              <h2 className="text-3xl font-bold text-white mt-3">How to get started</h2>
            </motion.div>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#ff7b54]/25 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7b54] to-[#ff9f7a] flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-[#ff7b54]/20">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Android note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
            >
              <p className="text-sm text-gray-500">
                <span className="text-gray-300 font-medium">Android coming soon.</span>{' '}
                Want to be notified?{' '}
                <a href="mailto:support@brunoiseai.com?subject=Android%20Waitlist" className="text-[#ff7b54] hover:underline">
                  Join the waitlist →
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
