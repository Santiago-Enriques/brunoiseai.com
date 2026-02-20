'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, Server, Eye, AlertTriangle, CheckCircle2, Mail } from 'lucide-react';

const practices = [
  {
    icon: Lock,
    title: 'Encryption in Transit',
    desc: 'All data transmitted between your device and our servers is encrypted using TLS 1.3. We enforce HTTPS everywhere and use HSTS to prevent downgrade attacks.',
    status: 'Active',
  },
  {
    icon: Server,
    title: 'Encryption at Rest',
    desc: 'Your personal data, including meal logs and health information, is encrypted at rest using AES-256. Encryption keys are managed using industry best practices.',
    status: 'Active',
  },
  {
    icon: Shield,
    title: 'Sign in with Apple',
    desc: 'We support Sign in with Apple, which uses Apple\'s privacy-preserving authentication system. We never receive or store your Apple ID password.',
    status: 'Active',
  },
  {
    icon: Eye,
    title: 'Minimal Data Access',
    desc: 'Only a small number of engineers have access to production systems, and only when necessary. All access is logged and audited.',
    status: 'Active',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    desc: 'We maintain a documented incident response plan. In the event of a breach that affects your data, we will notify you within 72 hours as required by law.',
    status: 'Active',
  },
  {
    icon: CheckCircle2,
    title: 'Regular Security Reviews',
    desc: 'Our code undergoes regular internal security reviews. We plan to commission third-party penetration testing as the product matures.',
    status: 'Planned Q3 2026',
  },
];

const scope = [
  'Authentication and authorization vulnerabilities',
  'Injection attacks (SQL, XSS, etc.)',
  'Insecure direct object references',
  'Sensitive data exposure',
  'Security misconfigurations',
  'Broken access control',
];

const outOfScope = [
  'Denial of service attacks',
  'Social engineering of Brunoise AI staff',
  'Physical attacks against our infrastructure',
  'Issues in third-party services we use',
  'Automated scanning results without a demonstrated proof of concept',
];

export function SecurityClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255,123,84,0.15) 0%, transparent 55%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="space-y-5">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#ff7b54]/10 border border-[#ff7b54]/25 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#ff7b54]" />
              </div>
            </div>
            <span className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">Trust & Safety</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Security at Brunoise AI</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Your health data is sensitive. We take security seriously at every level — from the code we write to the infrastructure we run.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security practices */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">How We Protect You</span>
            <h2 className="text-3xl font-bold text-white mt-3">Security Practices</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((p, i) => {
              const Icon = p.icon;
              const pRef = useRef(null);
              const inView = useInView(pRef, { once: true, amount: 0.3 });
              return (
                <motion.div
                  key={p.title}
                  ref={pRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#ff7b54]/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ff7b54]/10 border border-[#ff7b54]/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#ff7b54]" />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-semibold leading-snug">{p.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${p.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsible disclosure */}
      <section ref={ref} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-[#ff7b54] text-sm font-semibold uppercase tracking-wider">Bug Bounty</span>
            <h2 className="text-3xl font-bold text-white mt-3">Responsible Disclosure</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              We welcome security research and responsible disclosure. If you&apos;ve discovered a vulnerability, please reach out before publishing — we&apos;ll work quickly to address it and credit you publicly if you&apos;d like.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* In scope */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-green-500/5 border border-green-500/15"
            >
              <h3 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> In Scope
              </h3>
              <ul className="space-y-2">
                {scope.map(s => (
                  <li key={s} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-green-400 mt-0.5 shrink-0">•</span> {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Out of scope */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-6 rounded-2xl bg-red-500/5 border border-red-500/15"
            >
              <h3 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Out of Scope
              </h3>
              <ul className="space-y-2">
                {outOfScope.map(s => (
                  <li key={s} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-red-400 mt-0.5 shrink-0">•</span> {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-7 rounded-2xl bg-[#ff7b54]/5 border border-[#ff7b54]/15 text-center"
          >
            <Mail className="w-8 h-8 text-[#ff7b54] mx-auto mb-3" />
            <h3 className="text-white font-semibold text-lg mb-2">Report a Vulnerability</h3>
            <p className="text-gray-400 text-sm mb-5">Please encrypt your report using our PGP key (available on request) and send it to:</p>
            <a
              href="mailto:security@brunoiseai.com"
              className="inline-flex items-center gap-2 bg-[#ff7b54] hover:bg-[#e56a45] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              <Mail className="w-4 h-4" /> security@brunoiseai.com
            </a>
            <p className="text-gray-600 text-xs mt-4">We aim to acknowledge reports within 24 hours and provide a fix timeline within 7 days.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
