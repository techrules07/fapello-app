/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, ShieldCheck, Star, HardDrive, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import phoneScreen11 from './assets/11.png';
import phoneScreen12 from './assets/12.png';
import phoneScreen13 from './assets/13.png';
import phoneScreen14 from './assets/14.png';
import phoneScreen15 from './assets/15.png';
import phoneScreen16 from './assets/16.png';
import logo from './assets/logo_1.png';

const APK_URL = 'https://github.com/appgenie07/Fapello/releases/download/fapello/fapello.apk';

function PhoneMockup({ src, delay, size = 'lg' }: { src: string; delay: number; size?: 'lg' | 'sm' }) {
  const outer = size === 'lg'
    ? 'w-[44vw] max-w-[195px] sm:max-w-[215px]'
    : 'w-full max-w-[150px] sm:max-w-[165px]';
  const frame = size === 'lg'
    ? 'rounded-[2.4rem] border-[5px] p-2.5'
    : 'rounded-[2rem] border-[4px] p-2';
  const inner = size === 'lg' ? 'rounded-[1.9rem]' : 'rounded-[1.5rem]';
  const notchBar = size === 'lg' ? 'h-5 w-16' : 'h-4 w-12';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={outer}
    >
      <div className={`aspect-[9/18.5] w-full ${frame} border-slate-800 bg-slate-900 shadow-2xl`}>
        <div className={`relative h-full w-full overflow-hidden ${inner} bg-black`}>
          <div className="absolute top-0 flex h-5 w-full justify-center bg-slate-900">
            <div className={`h-3 ${notchBar} rounded-b-lg bg-slate-900`} />
          </div>
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const stats = [
    { label: 'Installs', value: '50K+', icon: <Download className="w-4 h-4" /> },
    { label: 'Size', value: '6MB', icon: <HardDrive className="w-4 h-4" /> },
    { label: 'Sync', value: '24/7', icon: <RefreshCw className="w-4 h-4" /> },
    { label: 'Rating', value: '4.9★', icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col relative overflow-x-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] -left-[10%] w-[40%] h-[30%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 overflow-hidden">
            <img src={logo} alt="Fapello" className="h-5 w-5 object-contain" />
          </div>
          <h2 className="text-lg font-extrabold tracking-tight">Fapello App</h2>
        </div>
      </header>

      <main className="flex-grow">
        {/* ── Hero: title + CTA + two big mockups ── */}
        <section className="px-4 pt-5 pb-2 max-w-xl mx-auto lg:max-w-7xl lg:px-40">
          {/* Short headline */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-4"
          >
            <h1 className="text-2xl md:text-4xl font-black leading-tight tracking-tight">
              Fapello <span className="text-primary">for Android</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Official APK · Free · 50K+ installs
            </p>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center gap-2 mb-6"
          >
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-white font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/30 active:scale-95"
            >
              <Download className="w-6 h-6" />
              Download APK (6 MB)
            </a>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              <span>v1.6.0 · Verified · Safe</span>
            </div>
          </motion.div>

          {/* Two hero mockups */}
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] w-[90vw] max-h-[380px] max-w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[80px]" />
            <div className="relative z-10 flex justify-center gap-4 sm:gap-6">
              <PhoneMockup src={phoneScreen15} delay={0.2} size="lg" />
              <PhoneMockup src={phoneScreen16} delay={0.3} size="lg" />
            </div>
          </div>
        </section>

        {/* ── More screenshots ── */}
        <section className="px-4 max-w-xl mx-auto lg:max-w-7xl lg:px-40">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
            More screenshots
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vw] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 place-items-center gap-3 sm:gap-5">
              {[phoneScreen11, phoneScreen12, phoneScreen13, phoneScreen14].map((src, i) => (
                <PhoneMockup key={i} src={src} delay={0.5 + i * 0.07} size="sm" />
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats strip — below everything, above sticky bar ── */}
        <section className="px-4 pt-6 pb-6 max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="grid grid-cols-4 gap-2 rounded-2xl border border-primary/10 bg-white dark:bg-slate-900/50 p-4 shadow-sm"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-0.5">
                <div className="text-primary">{stat.icon}</div>
                <span className="text-base font-black text-primary">{stat.value}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Sticky bottom download bar */}
      <div className="sticky bottom-0 z-50 px-4 py-3 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-primary/10">
        <a
          href={APK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full max-w-sm mx-auto rounded-2xl bg-primary px-8 py-3.5 text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-primary/30 active:scale-95"
        >
          <Download className="w-5 h-5" />
          Download APK (6 MB)
        </a>
      </div>
    </div>
  );
}
