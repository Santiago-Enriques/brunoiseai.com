'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('brunoise-cookies');
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('brunoise-cookies', 'accepted');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50"
        >
          <div className="bg-[#111] border border-white/[0.1] rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#ff7b54]/15 border border-[#ff7b54]/25 flex items-center justify-center shrink-0">
                <Cookie className="w-4 h-4 text-[#ff7b54]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">We use cookies</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We use cookies to improve your experience.{' '}
                  <Link href="/cookie-policy" className="text-[#ff7b54] hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShow(false)}
                className="flex-1 py-2 rounded-lg border border-white/[0.08] text-gray-400 hover:text-white text-xs font-medium transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 py-2 rounded-lg bg-[#ff7b54] hover:bg-[#e56a45] text-white text-xs font-medium transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
