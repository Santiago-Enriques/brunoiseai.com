'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Power,
  Globe,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Users,
  BarChart3,
  RefreshCw,
  Lock,
  Bell,
  ChevronRight,
  X,
  Wrench,
  FileText,
  ArrowLeft,
  Upload,
} from 'lucide-react';

// ─── Change this before deploying ────────────────────────────────────────────
const ADMIN_PASSWORD = 'brunoise-admin-2025';

// ─── Login gate ───────────────────────────────────────────────────────────────
function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(255,123,84,0.15) 0%, transparent 60%)' }} />
      <motion.div
        animate={shake ? { x: [0, -12, 12, -8, 8, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-sm"
      >
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-2xl">🍳</span>
            <span className="text-xl font-bold text-[#ff7b54]">Brunoise</span>
            <span className="text-xs bg-[#ff7b54]/20 text-[#ff7b54] border border-[#ff7b54]/30 rounded px-2 py-0.5 font-semibold tracking-wide">ADMIN</span>
          </div>
          <h1 className="text-white text-2xl font-bold mb-1">Admin Panel</h1>
          <p className="text-gray-500 text-sm mb-8">Enter your admin password to continue.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Admin password"
                autoFocus
                className={`w-full bg-white/[0.05] border ${error ? 'border-red-500/60' : 'border-white/[0.1]'} rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-600 text-sm outline-none focus:border-[#ff7b54]/60 transition-colors`}
              />
            </div>
            <AnimatePresence>
              {error && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 text-xs">
                  Incorrect password. Try again.
                </motion.p>
              )}
            </AnimatePresence>
            <button type="submit" className="w-full bg-[#ff7b54] hover:bg-[#e56a45] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
              Sign In
            </button>
          </form>
          <div className="mt-6 pt-5 border-t border-white/[0.06]">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-400 text-xs transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back to site
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, sub }: { icon: React.ElementType; label: string; value: string; sub: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5">
      <div className="w-9 h-9 rounded-lg bg-[#ff7b54]/10 border border-[#ff7b54]/20 flex items-center justify-center mb-3">
        <Icon className="w-4 h-4 text-[#ff7b54]" />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
      <p className="text-xs text-gray-600 mt-1">{sub}</p>
    </div>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'warning'; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className={`fixed bottom-6 right-6 flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-xl z-50 text-sm font-medium ${
        type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
      }`}
    >
      {type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
      {message}
      <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100"><X className="w-3 h-3" /></button>
    </motion.div>
  );
}

// ─── Sitemap uploader ─────────────────────────────────────────────────────────
function SitemapPanel({ showToast }: { showToast: (msg: string, t?: 'success' | 'warning') => void }) {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [xmlPreview, setXmlPreview] = useState<string | null>(null);

  const handleFile = (file: File) => {
    if (!file.name.endsWith('.xml')) {
      showToast('Only .xml files are accepted.', 'warning');
      return;
    }
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = e => setXmlPreview((e.target?.result as string).slice(0, 600) + (file.size > 600 ? '\n…' : ''));
    reader.readAsText(file);
    showToast(`${file.name} loaded — deploy to publish.`);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-[#ff7b54]/10 border border-[#ff7b54]/20 flex items-center justify-center">
          <FileText className="w-5 h-5 text-[#ff7b54]" />
        </div>
        <div>
          <h2 className="text-white font-semibold">Sitemap</h2>
          <p className="text-xs text-gray-500">Upload a custom sitemap.xml to replace the auto-generated one</p>
        </div>
      </div>

      {/* Auto-generated notice */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#ff7b54]/5 border border-[#ff7b54]/15 mb-5">
        <CheckCircle2 className="w-4 h-4 text-[#ff7b54] shrink-0 mt-0.5" />
        <div className="text-xs text-gray-400 leading-relaxed">
          <span className="text-white font-medium">Auto-generated sitemap is active</span> at{' '}
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-[#ff7b54] hover:underline font-mono">
            brunoiseai.com/sitemap.xml
          </a>
          . To override it, drop a custom <span className="font-mono text-gray-300">sitemap.xml</span> below and place it in{' '}
          <span className="font-mono text-gray-300">/public/sitemap.xml</span> of your repo before deploying.
        </div>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          dragging ? 'border-[#ff7b54] bg-[#ff7b54]/5' : 'border-white/[0.1] hover:border-white/20'
        }`}
      >
        <Upload className="w-8 h-8 text-gray-600 mx-auto mb-3" />
        <p className="text-sm text-gray-400 mb-2">Drag & drop your <span className="font-mono text-white">sitemap.xml</span> here</p>
        <p className="text-xs text-gray-600 mb-4">or</p>
        <label className="inline-block cursor-pointer bg-white/[0.06] hover:bg-white/10 border border-white/[0.1] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
          Browse file
          <input type="file" accept=".xml" className="sr-only" onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} />
        </label>
      </div>

      {/* Preview */}
      <AnimatePresence>
        {xmlPreview && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 font-medium">Preview — <span className="text-white font-mono">{fileName}</span></span>
              <button onClick={() => { setXmlPreview(null); setFileName(null); }} className="text-gray-600 hover:text-gray-400 text-xs">Clear</button>
            </div>
            <pre className="bg-black/40 border border-white/[0.06] rounded-xl p-4 text-xs text-gray-400 overflow-auto max-h-48 font-mono leading-relaxed">
              {xmlPreview}
            </pre>
            <p className="text-xs text-gray-600 mt-3">
              Copy this file to <span className="font-mono text-gray-400">/public/sitemap.xml</span> in your repo. Next.js will serve it at <span className="font-mono text-gray-400">/sitemap.xml</span> and it will override the auto-generated one.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main dashboard ───────────────────────────────────────────────────────────
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState("We're currently undergoing scheduled maintenance. We'll be back shortly!");
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'warning' } | null>(null);
  const [confirmingShutdown, setConfirmingShutdown] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const showToast = (message: string, type: 'success' | 'warning' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleMaintenanceToggle = () => {
    if (!maintenanceMode) {
      setConfirmingShutdown(true);
    } else {
      setMaintenanceMode(false);
      showToast('Site is back online.', 'success');
    }
  };

  const confirmShutdown = () => {
    setMaintenanceMode(true);
    setConfirmingShutdown(false);
    showToast('Maintenance mode enabled.', 'warning');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(255,123,84,0.12) 0%, transparent 50%)' }} />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-black/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">🍳</span>
            <span className="font-bold text-[#ff7b54]">Brunoise AI</span>
            <span className="text-xs bg-[#ff7b54]/15 text-[#ff7b54] border border-[#ff7b54]/25 rounded px-2 py-0.5 font-semibold tracking-wide">ADMIN</span>
          </div>
          <div className="flex items-center gap-3">
            {/* Status pill */}
            <div className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border font-medium ${
              maintenanceMode ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' : 'bg-green-500/10 border-green-500/30 text-green-400'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${maintenanceMode ? 'bg-amber-400' : 'bg-green-400'}`} />
              {maintenanceMode ? 'Maintenance' : 'Online'}
            </div>
            <button
              onClick={() => { setNotifications(!notifications); showToast(notifications ? 'Notifications off.' : 'Notifications on.'); }}
              className={`p-2 rounded-lg border transition-colors ${notifications ? 'border-[#ff7b54]/30 text-[#ff7b54] bg-[#ff7b54]/10' : 'border-white/[0.08] text-gray-500'}`}
              title="Toggle notifications"
            >
              <Bell className="w-4 h-4" />
            </button>
            <Link href="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 text-xs transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> View site
            </Link>
            <button onClick={onLogout} className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Sign out</button>
          </div>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <p className="text-gray-500 text-sm mb-10">Manage your Brunoise AI website.</p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard icon={Globe} label="Uptime this month" value="99.9%" sub="↑ Excellent" />
          <StatCard icon={Users} label="Visitors today" value="1,248" sub="↑ 14% vs yesterday" />
          <StatCard icon={BarChart3} label="Waitlist signups" value="3,421" sub="↑ 87 this week" />
          <StatCard icon={Clock} label="Last deployment" value="2h ago" sub="v0.4.2 — stable" />
        </div>

        {/* Controls grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Maintenance mode */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${maintenanceMode ? 'bg-amber-500/15 border border-amber-500/30' : 'bg-[#ff7b54]/10 border border-[#ff7b54]/20'}`}>
                {maintenanceMode ? <Wrench className="w-5 h-5 text-amber-400" /> : <Power className="w-5 h-5 text-[#ff7b54]" />}
              </div>
              <div>
                <h2 className="text-white font-semibold">Maintenance Mode</h2>
                <p className="text-xs text-gray-500">Take the site offline for visitors</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 font-medium mb-2 block">Maintenance Message</label>
                <textarea
                  value={maintenanceMessage}
                  onChange={e => setMaintenanceMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#ff7b54]/50 transition-colors resize-none"
                />
              </div>
              <div className={`flex items-center gap-3 p-3 rounded-xl border text-sm ${
                maintenanceMode ? 'bg-amber-500/8 border-amber-500/20 text-amber-300' : 'bg-green-500/8 border-green-500/20 text-green-300'
              }`}>
                {maintenanceMode
                  ? <><AlertTriangle className="w-4 h-4 shrink-0" /> Site is in maintenance mode.</>
                  : <><CheckCircle2 className="w-4 h-4 shrink-0" /> Site is live and accessible.</>
                }
              </div>
              <button
                onClick={handleMaintenanceToggle}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                  maintenanceMode ? 'bg-green-500 hover:bg-green-400 text-white' : 'bg-amber-500 hover:bg-amber-400 text-black'
                }`}
              >
                {maintenanceMode
                  ? <><Power className="w-4 h-4" /> Bring Site Back Online</>
                  : <><Wrench className="w-4 h-4" /> Enable Maintenance Mode</>
                }
              </button>
            </div>
          </div>

          {/* Quick actions */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-1">Quick Actions</h2>
            <p className="text-xs text-gray-500 mb-5">Common admin operations</p>
            <div className="space-y-2">
              {[
                { icon: RefreshCw, label: 'Clear CDN Cache', sub: 'Force fresh content delivery', action: () => showToast('CDN cache cleared.') },
                { icon: Globe, label: 'View Live Site', sub: 'Open brunoiseai.com', action: () => window.open('https://brunoiseai.com', '_blank') },
                { icon: BarChart3, label: 'Export Analytics', sub: 'Download CSV of recent metrics', action: () => showToast('Analytics export queued — check your email.') },
                { icon: Bell, label: 'Send Waitlist Update', sub: 'Notify all waitlist subscribers', action: () => showToast('Waitlist email queued for delivery.') },
              ].map(({ icon: Icon, label, sub, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className="w-full flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-[#ff7b54]/25 transition-all group text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#ff7b54]/10 border border-[#ff7b54]/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#ff7b54]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">{label}</p>
                    <p className="text-xs text-gray-500 truncate">{sub}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#ff7b54] transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sitemap panel — full width */}
        <SitemapPanel showToast={showToast} />

        {/* Activity log */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 mt-6">
          <h2 className="text-white font-semibold mb-1">Recent Activity</h2>
          <p className="text-xs text-gray-500 mb-5">Latest admin events</p>
          <div className="space-y-3">
            {[
              { time: 'Just now', text: 'Admin panel accessed', color: 'bg-[#ff7b54]' },
              { time: '2h ago', text: 'Site deployed — v0.4.2', color: 'bg-green-500' },
              { time: '1d ago', text: 'Waitlist export downloaded', color: 'bg-blue-500' },
              { time: '3d ago', text: 'Maintenance window completed (12 min)', color: 'bg-amber-500' },
              { time: '5d ago', text: 'CDN cache purged', color: 'bg-purple-500' },
            ].map(({ time, text, color }, i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b border-white/[0.04] last:border-0">
                <div className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                <p className="text-sm text-gray-300 flex-1">{text}</p>
                <p className="text-xs text-gray-600 shrink-0">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Confirm maintenance modal */}
      <AnimatePresence>
        {confirmingShutdown && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#111] border border-white/[0.1] rounded-2xl p-8 max-w-sm w-full shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Enable Maintenance Mode?</h3>
              <p className="text-gray-400 text-sm mb-6">This will take the site offline for all visitors until you bring it back online.</p>
              <div className="flex gap-3">
                <button onClick={() => setConfirmingShutdown(false)} className="flex-1 py-2.5 rounded-xl border border-white/[0.1] text-gray-300 hover:text-white text-sm font-medium">Cancel</button>
                <button onClick={confirmShutdown} className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm">Yes, go offline</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  return authenticated
    ? <Dashboard onLogout={() => setAuthenticated(false)} />
    : <LoginGate onLogin={() => setAuthenticated(true)} />;
}
