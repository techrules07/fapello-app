/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, ShieldCheck, Smartphone, Star, HardDrive, RefreshCw, Home, Clock, Info } from 'lucide-react';
import { motion } from 'motion/react';
import phoneScreen11 from './assets/11.png';
import phoneScreen12 from './assets/12.png';
import phoneScreen13 from './assets/13.png';
import phoneScreen14 from './assets/14.png';
import logo from './assets/logo_1.png';

const phoneScreens = [phoneScreen11, phoneScreen12, phoneScreen13, phoneScreen14];

export default function App() {
  const stats = [
    { label: 'Installs', value: '50K+', icon: <Download className="w-5 h-5" /> },
    { label: 'App Size', value: '31MB', icon: <HardDrive className="w-5 h-5" /> },
    { label: 'Content Sync', value: '24/7', icon: <RefreshCw className="w-5 h-5" /> },
    { label: 'Rating', value: '4.9/5', icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col relative overflow-x-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[30%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 py-4 md:px-20 lg:px-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 overflow-hidden">
              <img src={logo} alt="Fapello" className="h-6 w-6 object-contain" />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">Fapello App</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-4 lg:px-40">
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Top row: copy + download (left) · stats (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-8 text-left"
              >
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">
                    Android Release
                  </span>
                  <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                    Experience Fapello <br />
                    <span className="text-primary">on your Android.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                    Access the ultimate platform for creators and fans directly from your mobile. Enjoy a seamless, high-performance experience with our official APK.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/techrules07/fapello-app/releases/download/v1.0/fapello.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25 active:scale-95"
                  >
                    <Download className="w-6 h-6" />
                    Download APK
                  </a>
                  <div className="flex items-center gap-3 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl bg-white/50 dark:bg-slate-900/50">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                    <div className="text-xs">
                      <p className="font-bold">Secure Download</p>
                      <p className="text-slate-500">v1.1.0 • Verified APK</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats — beside hero copy on large screens */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full rounded-2xl border border-primary/10 bg-white dark:bg-slate-900/50 p-6 shadow-sm"
              >
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                      className="flex flex-col items-center text-center gap-1"
                    >
                      <div className="text-primary mb-1">{stat.icon}</div>
                      <span className="text-2xl sm:text-3xl font-black text-primary">{stat.value}</span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Phone mockups — horizontal row (2×2 on small, 4 across on md+) */}
            <div className="relative w-full pt-2">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,420px)] w-[min(95vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
              <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 place-items-center gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
                {phoneScreens.map((screenSrc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px]"
                  >
                    <div className="aspect-[9/18.5] w-full rounded-[2.5rem] border-[5px] border-slate-800 bg-slate-900 p-2.5 shadow-2xl sm:rounded-[3rem] sm:border-[6px] sm:p-3">
                      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white sm:rounded-[2.2rem]">
                        <div className="absolute top-0 flex h-5 w-full justify-center bg-slate-900 sm:h-6">
                          <div className="h-3 w-16 rounded-b-lg bg-slate-900 sm:h-4 sm:w-20 sm:rounded-b-xl" />
                        </div>
                        <div
                          className="h-full w-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${screenSrc})` }}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      {/* <nav className="md:hidden sticky bottom-0 border-t border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pb-8 pt-4">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <a href="#" className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <Clock className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Updates</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <Info className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-wider">About</span>
          </a>
        </div>
      </nav> */}

      {/* Desktop Footer */}
      {/* <footer className="hidden md:block py-12 px-6 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto border-t border-primary/5 pt-8">
          <p>© 2026 Fapello App. All rights reserved. Official Android Release.</p>
        </div>
      </footer> */}
    </div>
  );
}
