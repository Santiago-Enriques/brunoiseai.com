'use client';

import { useState } from 'react';
import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Twitter, Instagram, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };

const topics = ['General Question', 'Bug Report', 'Feature Request', 'Partnership', 'Press Inquiry', 'Other'];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactClient() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.5 });

  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.topic) e.topic = 'Please select a topic';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setFormState('loading');
    // Simulate send — replace with your actual API call
    await new Promise(r => setTimeout(r, 1500));
    setFormState('success');
  };

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }));
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255,123,84,0.15) 0%, transparent 55%)' }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            ref={headerRef}
            className="text-center mb-16"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span variants={fadeUp} className="inline-block text-[#ff7b54] text-sm font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4">
              We&apos;d love to hear from you
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-xl mx-auto">
              Have a question, idea, or just want to say hi? Send us a message and we&apos;ll get back to you within 24 hours.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'support@brunoiseai.com', href: 'mailto:support@brunoiseai.com', sub: 'We reply within 24 hours' },
                { icon: Twitter, label: 'Twitter', value: '@brunoiseai', href: 'https://twitter.com/brunoiseai', sub: 'DMs open' },
                { icon: Instagram, label: 'Instagram', value: '@brunoiseai', href: 'https://instagram.com/brunoiseai', sub: 'Follow for updates' },
              ].map(({ icon: Icon, label, value, href, sub }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#ff7b54]/30 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ff7b54]/10 border border-[#ff7b54]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff7b54]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#ff7b54]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{label}</p>
                    <p className="text-white text-sm font-semibold">{value}</p>
                    <p className="text-xs text-gray-600">{sub}</p>
                  </div>
                </motion.a>
              ))}

              {/* Response time */}
              <div className="p-5 rounded-2xl bg-[#ff7b54]/5 border border-[#ff7b54]/15 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-[#ff7b54]" />
                  <span className="text-sm font-semibold text-white">Response Time</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Our team typically responds within <span className="text-[#ff7b54] font-medium">1–2 business days</span>. For urgent issues, DM us on Twitter.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5"
                      >
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </motion.div>
                      <h3 className="text-white text-xl font-bold mb-2">Message sent!</h3>
                      <p className="text-gray-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
                      <button onClick={() => { setFormState('idle'); setForm({ name: '', email: '', topic: '', message: '' }); }} className="mt-6 text-[#ff7b54] text-sm hover:underline">
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="text-xs text-gray-400 font-medium mb-2 block">Your Name</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={set('name')}
                            placeholder="Alex Chen"
                            className={`w-full bg-white/[0.04] border ${errors.name ? 'border-red-500/60' : 'border-white/[0.08]'} rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none focus:border-[#ff7b54]/50 transition-colors`}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                        </div>
                        {/* Email */}
                        <div>
                          <label className="text-xs text-gray-400 font-medium mb-2 block">Email Address</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={set('email')}
                            placeholder="alex@example.com"
                            className={`w-full bg-white/[0.04] border ${errors.email ? 'border-red-500/60' : 'border-white/[0.08]'} rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none focus:border-[#ff7b54]/50 transition-colors`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                        </div>
                      </div>

                      {/* Topic */}
                      <div>
                        <label className="text-xs text-gray-400 font-medium mb-2 block">Topic</label>
                        <select
                          value={form.topic}
                          onChange={set('topic')}
                          className={`w-full bg-white/[0.04] border ${errors.topic ? 'border-red-500/60' : 'border-white/[0.08]'} rounded-xl px-4 py-3 text-sm outline-none focus:border-[#ff7b54]/50 transition-colors appearance-none ${form.topic ? 'text-white' : 'text-gray-600'}`}
                        >
                          <option value="" className="bg-[#111] text-gray-400">Select a topic…</option>
                          {topics.map(t => <option key={t} value={t} className="bg-[#111] text-white">{t}</option>)}
                        </select>
                        {errors.topic && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.topic}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-xs text-gray-400 font-medium mb-2 block">Message</label>
                        <textarea
                          value={form.message}
                          onChange={set('message')}
                          rows={5}
                          placeholder="Tell us what's on your mind…"
                          className={`w-full bg-white/[0.04] border ${errors.message ? 'border-red-500/60' : 'border-white/[0.08]'} rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none focus:border-[#ff7b54]/50 transition-colors resize-none`}
                        />
                        <div className="flex justify-between items-center mt-1">
                          {errors.message
                            ? <p className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>
                            : <span />
                          }
                          <span className="text-xs text-gray-600">{form.message.length} chars</span>
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="w-full bg-[#ff7b54] hover:bg-[#e56a45] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {formState === 'loading' ? (
                          <motion.div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                        ) : (
                          <><Send className="w-4 h-4" /> Send Message</>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
