/*
 * Navbar — Top navigation bar
 * Tropical Classroom Theme: warm background, playful mascot
 */
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { BookOpen, LayoutDashboard, FolderOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useProgress } from '@/contexts/ProgressContext';

const MASCOT_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663597698981/A5CLD2ZQUrT2Efx2ELSJro/python-mascot-fCJkskDmhmEsHSTfjDv75L.webp';

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getOverallProgress } = useProgress();
  const progress = getOverallProgress();

  const links = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/materi', label: 'Materi', icon: BookOpen },
    { href: '/topik', label: 'By Topik', icon: FolderOpen },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <img src={MASCOT_URL} alt="Python Mascot" className="w-9 h-9 object-contain" />
          <div className="flex flex-col">
            <span className="text-base font-bold text-foreground leading-tight" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Belajar Python
            </span>
            <span className="text-[10px] font-semibold text-tropical-green leading-tight">
              Hari 1 — 15
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(link => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link key={link.href} href={link.href}>
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-tropical-green/10 text-tropical-green'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={16} />
                  {link.label}
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Progress badge (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-tropical-green/10">
            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-tropical-green rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-bold text-tropical-green">{progress}%</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-white/95 backdrop-blur-lg"
        >
          <div className="container py-3 space-y-1">
            {links.map(link => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold ${
                      active
                        ? 'bg-tropical-green/10 text-tropical-green'
                        : 'text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon size={18} />
                    {link.label}
                  </div>
                </Link>
              );
            })}
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-tropical-green rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-bold text-tropical-green">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
