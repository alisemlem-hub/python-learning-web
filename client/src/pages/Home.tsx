/*
 * Home / Dashboard Page
 * Tropical Classroom Theme: hero banner, day cards, progress overview, motivational quotes
 */
import { useMemo, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  BookOpen, Trophy, CheckCircle, Clock, ArrowRight,
  Sparkles, RotateCcw, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import { useProgress } from '@/contexts/ProgressContext';
import { dayContents, motivationalQuotes } from '@/data/content';

const HERO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663597698981/A5CLD2ZQUrT2Efx2ELSJro/hero-banner-FBLHJawazSMLgAWNQWi4ZB.webp';
const PATTERN_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663597698981/A5CLD2ZQUrT2Efx2ELSJro/study-bg-pattern-jQBJJWX2hDXeF87w4MQT8S.webp';

const dayColors = [
  'from-[#FFB347] to-[#FF6B6B]',
  'from-[#2ECC71] to-[#27AE60]',
  'from-[#FF6B6B] to-[#E74C3C]',
  'from-[#4ECDC4] to-[#26D0CE]',
  'from-[#9B59B6] to-[#8E44AD]',
  'from-[#E67E22] to-[#D35400]',
  'from-[#1ABC9C] to-[#16A085]',
];

const dayEmojis = ['🚀', '📦', '🔢', '📝', '📋', '🔒', '🎯'];

export default function Home() {
  const { progress, getDayProgress, getOverallProgress, getTotalQuizScore, resetProgress } = useProgress();
  const [showReset, setShowReset] = useState(false);

  const overallProgress = getOverallProgress();
  const totalQuizScore = getTotalQuizScore();
  const totalQuizQuestions = dayContents.reduce((sum, d) => sum + d.quiz.length, 0);

  const quote = useMemo(() => {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  }, []);

  const completedDays = useMemo(() => {
    return dayContents.filter(d => getDayProgress(d.day) === 100).length;
  }, [getDayProgress]);

  const nextDay = useMemo(() => {
    for (const d of dayContents) {
      if (getDayProgress(d.day) < 100) return d.day;
    }
    return null;
  }, [getDayProgress]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_URL} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container relative py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tropical-green/10 text-tropical-green text-sm font-semibold mb-4">
              <Sparkles size={14} />
              Belajar Python dengan Seru!
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              30 Hari Belajar Python
              <br />
              <span className="bg-gradient-to-r from-tropical-green to-tropical-teal bg-clip-text text-transparent">
                Hari 1 — 7
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed max-w-lg">
              Mulai perjalanan coding-mu dari nol! Materi lengkap, kuis interaktif, dan latihan soal — semua dalam Bahasa Indonesia.
            </p>

            {nextDay ? (
              <Link href={`/materi/${nextDay}`}>
                <Button size="lg" className="gap-2 bg-tropical-green hover:bg-tropical-green/90 text-white shadow-lg shadow-tropical-green/25">
                  {overallProgress > 0 ? 'Lanjutkan Belajar' : 'Mulai Belajar'}
                  <ArrowRight size={18} />
                </Button>
              </Link>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-tropical-yellow/20 text-tropical-orange font-bold">
                <Trophy size={18} />
                Semua materi selesai! Keren!
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="container -mt-2 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: 'Progress', value: `${overallProgress}%`, icon: BookOpen, color: 'text-tropical-green', bg: 'bg-tropical-green/10' },
            { label: 'Hari Selesai', value: `${completedDays}/7`, icon: CheckCircle, color: 'text-tropical-teal', bg: 'bg-tropical-teal/10' },
            { label: 'Skor Kuis', value: `${totalQuizScore}/${totalQuizQuestions}`, icon: Trophy, color: 'text-tropical-yellow', bg: 'bg-tropical-yellow/10' },
            { label: 'Hari Aktif', value: `${Object.keys(progress).length}`, icon: Clock, color: 'text-tropical-coral', bg: 'bg-tropical-coral/10' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="bg-card rounded-xl border border-border p-4 shadow-sm"
            >
              <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${stat.bg} mb-2`}>
                <stat.icon size={18} className={stat.color} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="container mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden p-6 md:p-8"
          style={{
            backgroundImage: `url(${PATTERN_URL})`,
            backgroundSize: '400px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-tropical-green/90 to-tropical-teal/90" />
          <div className="relative text-white">
            <p className="text-lg md:text-xl font-bold leading-relaxed mb-2">"{quote.quote}"</p>
            <p className="text-sm opacity-80">— {quote.author}</p>
          </div>
        </motion.div>
      </section>

      {/* Day Cards */}
      <section className="container mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Peta Perjalanan
          </h2>
          <Link href="/materi">
            <span className="text-sm font-semibold text-tropical-green hover:underline flex items-center gap-1">
              Lihat Semua <ChevronRight size={14} />
            </span>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dayContents.map((day, index) => {
            const dayProgress = getDayProgress(day.day);
            const isCompleted = dayProgress === 100;
            const dp = progress[day.day];

            return (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link href={`/materi/${day.day}`}>
                  <div className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 overflow-hidden">
                    {/* Color header */}
                    <div className={`h-2 bg-gradient-to-r ${dayColors[index]}`} />
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{dayEmojis[index]}</span>
                          <div>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                              Hari {day.day}
                            </p>
                            <h3 className="font-bold text-base group-hover:text-tropical-green transition-colors">
                              {day.title}
                            </h3>
                          </div>
                        </div>
                        {isCompleted && (
                          <CheckCircle size={20} className="text-tropical-green shrink-0" />
                        )}
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {day.topics.slice(0, 3).map(topic => (
                          <span
                            key={topic}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                          >
                            {topic}
                          </span>
                        ))}
                        {day.topics.length > 3 && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            +{day.topics.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Progress */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${dayProgress}%` }}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                            className={`h-full rounded-full bg-gradient-to-r ${dayColors[index]}`}
                          />
                        </div>
                        <span className="text-xs font-bold text-muted-foreground w-10 text-right">
                          {dayProgress}%
                        </span>
                      </div>

                      {/* Info row */}
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span>{day.sections.length} materi</span>
                        <span>{day.quiz.length} kuis</span>
                        <span>{day.exercises.length} latihan</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Reset Progress */}
      <section className="container mb-12">
        <div className="flex items-center justify-center">
          {!showReset ? (
            <button
              onClick={() => setShowReset(true)}
              className="text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
            >
              <RotateCcw size={12} />
              Reset Progress
            </button>
          ) : (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-destructive/5 border border-destructive/20">
              <p className="text-sm text-destructive font-medium">Yakin reset semua progress?</p>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => { resetProgress(); setShowReset(false); }}
              >
                Ya, Reset
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowReset(false)}
              >
                Batal
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-6">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Dibuat dengan ❤️ untuk belajar Python. Konten berdasarkan{' '}
            <a href="https://github.com/Asabeneh/30-Days-Of-Python" target="_blank" rel="noopener noreferrer" className="text-tropical-green hover:underline font-semibold">
              30 Days Of Python
            </a>
            {' '}oleh Asabeneh.
          </p>
        </div>
      </footer>
    </div>
  );
}
