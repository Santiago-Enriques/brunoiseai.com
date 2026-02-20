'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Target,
  UtensilsCrossed,
  BarChart3,
  Camera,
  Bell,
  Lock,
  ChevronDown,
  Smartphone,
  Sparkles,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
} from 'lucide-react';

// ─── Shared animation variants ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glows */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(255,123,84,0.18) 0%, transparent 60%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,123,84,0.3), transparent)' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7b54]/10 border border-[#ff7b54]/25 text-[#ff7b54] text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Nutrition
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Your Personal{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b54] to-[#ff9f7a]">
              AI Chef
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Smart meal planning and nutrition tracking tailored to your fitness goals. Whether you&apos;re bulking, cutting,
            or maintaining, get personalized meal plans that actually work.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <motion.a
              href="https://testflight.apple.com/join/tUjXgTe4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff7b54] hover:bg-[#e56a45] text-white font-semibold px-7 py-4 rounded-xl shadow-xl shadow-[#ff7b54]/25 hover:shadow-[#ff7b54]/40 transition-all text-sm"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Smartphone className="w-4 h-4" />
              Download for iOS (TestFlight)
            </motion.a>
            <motion.button
              onClick={scrollToFeatures}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-7 py-4 rounded-xl transition-all text-sm hover:bg-white/5"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More <ChevronDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Floating stat pills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center pt-6"
          >
            {[
              { label: '300+ Recipes', emoji: '🍽️' },
              { label: '15+ Cuisines', emoji: '🌍' },
              { label: '100% Personalized', emoji: '🎯' },
            ].map((s) => (
              <span key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-gray-300">
                {s.emoji} {s.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Features ──────────────────────────────────────────────────────────────
const features = [
  { icon: Target, title: 'Goal-Based Meal Plans', desc: "AI-powered daily meal plans that match your calorie and macro targets. Bulking, cutting, or maintaining — we got you." },
  { icon: UtensilsCrossed, title: '300+ Global Recipes', desc: 'Authentic dishes from 15+ cuisines with step-by-step instructions and full nutritional breakdowns. Goodbye boring chicken.' },
  { icon: BarChart3, title: 'Macro Tracking', desc: 'Intelligent tracking that understands your goal. Higher protein for cuts, balanced macros for bulking — all auto-calculated.' },
  { icon: Camera, title: 'Food Scanner', desc: 'Snap a photo to identify ingredients and get instant nutritional info. AI-powered visual tracking that just works.' },
  { icon: Bell, title: 'Smart Reminders', desc: 'Customizable meal notifications to keep you consistent. Never skip a meal or miss your nutrition targets again.' },
  { icon: Lock, title: 'Privacy First', desc: 'Sign in with Apple for secure auth. Your data stays private with end-to-end encryption and optional cloud sync.' },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="p-7 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-[#ff7b54]/30 transition-colors group"
    >
      <div className="w-12 h-12 rounded-xl bg-[#ff7b54]/10 border border-[#ff7b54]/20 flex items-center justify-center mb-5 group-hover:bg-[#ff7b54]/20 transition-colors">
        <Icon className="w-5 h-5 text-[#ff7b54]" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

function Features() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <motion.span className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider mb-4" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Everything You Need</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Powerful features designed for athletes and fitness enthusiasts who take nutrition seriously.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────
const steps = [
  { n: '1', title: 'Set Your Goal', desc: 'Tell us if you\'re bulking, cutting, or maintaining. We\'ll calculate your optimal calorie and macro targets.' },
  { n: '2', title: 'Get Your Plan', desc: 'Receive AI-generated daily meal plans with breakfast, lunch, dinner, and snacks that hit your targets.' },
  { n: '3', title: 'Cook & Track', desc: 'Follow step-by-step recipes from global cuisines. Track your meals and see your progress toward your goals.' },
  { n: '4', title: 'Achieve Results', desc: 'Stay consistent with meal reminders and daily recipe recommendations. Reach your fitness goals with proper nutrition.' },
];

function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(255,123,84,0.1) 0%, transparent 60%)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider mb-4">Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Get started in minutes with a personalized nutrition plan.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const stepRef = useRef(null);
            const stepInView = useInView(stepRef, { once: true, amount: 0.4 });
            return (
              <motion.div
                key={step.n}
                ref={stepRef}
                initial={{ opacity: 0, y: 40 }}
                animate={stepInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative p-7 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff7b54] to-[#ff9f7a] flex items-center justify-center text-white font-bold text-lg mb-5 shadow-lg shadow-[#ff7b54]/20">
                  {step.n}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 text-[#ff7b54]/30 z-10">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────
const stats = [
  { value: '300+', label: 'Chef-Tested Recipes', emoji: '🍽️' },
  { value: '15+', label: 'Global Cuisines', emoji: '🌍' },
  { value: '100%', label: 'Personalized Plans', emoji: '🎯' },
];

function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="relative py-20">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,123,84,0.04), transparent)' }} />
      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff7b54] to-[#ff9f7a] mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team ──────────────────────────────────────────────────────────────────
const team = [
  { name: 'QuailR2', role: 'CEO & Lead Developer', bio: 'Raised from a hispanic background, Quail wants to reinvent the app store. He wants to do this step by step. He is starting off with a cooking app.', initials: 'Q2', gradient: 'from-[#ff7b54] to-[#ff9f7a]', linkedin: '#', twitter: '#' },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-[#ff7b54]/30 transition-colors flex flex-col"
    >
      <motion.div
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg`}
        whileHover={{ scale: 1.05, rotate: -3 }}
      >
        {member.initials}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-[#ff7b54] text-sm font-semibold mb-4">{member.role}</p>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{member.bio}</p>
      <div className="flex gap-3 mt-6">
        {member.linkedin && <a href={member.linkedin} className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-[#ff7b54]/20 border border-white/[0.08] hover:border-[#ff7b54]/40 flex items-center justify-center text-gray-400 hover:text-[#ff7b54] transition-all"><Linkedin className="w-4 h-4" /></a>}
        {member.twitter && <a href={member.twitter} className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-[#ff7b54]/20 border border-white/[0.08] hover:border-[#ff7b54]/40 flex items-center justify-center text-gray-400 hover:text-[#ff7b54] transition-all"><Twitter className="w-4 h-4" /></a>}
        {member.github && <a href={member.github} className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-[#ff7b54]/20 border border-white/[0.08] hover:border-[#ff7b54]/40 flex items-center justify-center text-gray-400 hover:text-[#ff7b54] transition-all"><Github className="w-4 h-4" /></a>}
      </div>
    </motion.div>
  );
}

function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="team" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(255,123,84,0.12) 0%, transparent 55%)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider mb-4">The People Behind It</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">A small, focused group of engineers, scientists, and designers who care deeply about nutrition and technology.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────
function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="download">
      <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,123,84,0.15) 0%, transparent 60%)' }} />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="space-y-6"
        >
          <span className="text-5xl">🍳</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Start eating smarter{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b54] to-[#ff9f7a]">today</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">Join thousands of athletes already using Brunoise AI to hit their nutrition goals. Available now on TestFlight.</p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <motion.a
              href="https://testflight.apple.com/join/tUjXgTe4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#ff7b54] hover:bg-[#e56a45] text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-[#ff7b54]/30 transition-all text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Smartphone className="w-4 h-4" /> Download for iOS
            </motion.a>
            <Link href="/contact">
              <motion.span
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/5 transition-all text-sm cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Team />
      <CTA />
    </>
  );
}
