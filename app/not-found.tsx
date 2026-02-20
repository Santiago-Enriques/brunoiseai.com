'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(255,123,84,0.15) 0%, transparent 60%)' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center px-4"
      >
        <motion.div
          className="text-8xl mb-6"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          🍳
        </motion.div>
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ff7b54] to-[#ff9f7a] mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page not found</h2>
        <p className="text-gray-400 mb-10 max-w-sm mx-auto">
          Looks like this recipe doesn&apos;t exist. Head back home and let the AI chef find you something better.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <motion.span
              className="inline-flex items-center gap-2 bg-[#ff7b54] hover:bg-[#e56a45] text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Home className="w-4 h-4" /> Go Home
            </motion.span>
          </Link>
          <button onClick={() => window.history.back()}>
            <motion.span
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowLeft className="w-4 h-4" /> Go Back
            </motion.span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
