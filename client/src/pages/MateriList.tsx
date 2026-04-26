/*
 * MateriList — Overview of all 7 days with progress
 * Tropical Classroom Theme: colorful timeline, warm accents
 */
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, ArrowRight, BookOpen, HelpCircle, Dumbbell } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useProgress } from '@/contexts/ProgressContext';
import { dayContents } from '@/data/content';

const dayColors = [
  { bg: 'bg-[#FFB347]', text: 'text-[#FFB347]', light: 'bg-[#FFB347]/10', border: 'border-[#FFB347]/30' },
  { bg: 'bg-[#2ECC71]', text: 'text-[#2ECC71]', light: 'bg-[#2ECC71]/10', border: 'border-[#2ECC71]/30' },
  { bg: 'bg-[#FF6B6B]', text: 'text-[#FF6B6B]', light: 'bg-[#FF6B6B]/10', border: 'border-[#FF6B6B]/30' },
  { bg: 'bg-[#4ECDC4]', text: 'text-[#4ECDC4]', light: 'bg-[#4ECDC4]/10', border: 'border-[#4ECDC4]/30' },
  { bg: 'bg-[#9B59B6]', text: 'text-[#9B59B6]', light: 'bg-[#9B59B6]/10', border: 'border-[#9B59B6]/30' },
  { bg: 'bg-[#E67E22]', text: 'text-[#E67E22]', light: 'bg-[#E67E22]/10', border: 'border-[#E67E22]/30' },
  { bg: 'bg-[#1ABC9C]', text: 'text-[#1ABC9C]', light: 'bg-[#1ABC9C]/10', border: 'border-[#1ABC9C]/30' },
];

export default function MateriList() {
  const { getDayProgress, progress } = useProgress();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Daftar Materi
          </h1>
          <p className="text-muted-foreground mb-8">
            Pelajari Python langkah demi langkah. Setiap hari berisi materi, kuis, dan latihan soal.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-6">
            {dayContents.map((day, index) => {
              const dayProgress = getDayProgress(day.day);
              const isCompleted = dayProgress === 100;
              const colors = dayColors[index];
              const dp = progress[day.day];

              return (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link href={`/materi/${day.day}`}>
                    <div className="group flex gap-4 md:gap-6 items-start">
                      {/* Timeline dot */}
                      <div className="hidden md:flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                          isCompleted ? 'bg-tropical-green' : colors.light
                        } border-2 ${isCompleted ? 'border-tropical-green' : colors.border} transition-all group-hover:scale-110`}>
                          {isCompleted ? (
                            <CheckCircle size={20} className="text-white" />
                          ) : (
                            <span className="text-lg">{day.icon}</span>
                          )}
                        </div>
                      </div>

                      {/* Card */}
                      <div className={`flex-1 bg-card rounded-2xl border-2 ${
                        isCompleted ? 'border-tropical-green/20' : 'border-border'
                      } shadow-sm hover:shadow-md transition-all group-hover:-translate-y-0.5 overflow-hidden`}>
                        <div className="p-5 md:p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="md:hidden text-xl">{day.icon}</span>
                                <span className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                                  Hari {day.day}
                                </span>
                                {isCompleted && (
                                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-tropical-green/10 text-tropical-green">
                                    Selesai
                                  </span>
                                )}
                              </div>
                              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-tropical-green transition-colors">
                                {day.title}
                              </h3>

                              {/* Topics */}
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {day.topics.map(topic => (
                                  <span
                                    key={topic}
                                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${colors.light} ${colors.text}`}
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>

                              {/* Stats */}
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <BookOpen size={12} />
                                  {day.sections.length} materi
                                </span>
                                <span className="flex items-center gap-1">
                                  <HelpCircle size={12} />
                                  {day.quiz.length} kuis
                                </span>
                                <span className="flex items-center gap-1">
                                  <Dumbbell size={12} />
                                  {day.exercises.length} latihan
                                </span>
                              </div>
                            </div>

                            {/* Progress circle */}
                            <div className="flex flex-col items-center gap-1 shrink-0">
                              <div className="relative w-14 h-14">
                                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                                  <circle cx="28" cy="28" r="24" fill="none" stroke="currentColor" strokeWidth="4" className="text-muted/50" />
                                  <circle
                                    cx="28" cy="28" r="24" fill="none"
                                    stroke="currentColor" strokeWidth="4"
                                    strokeDasharray={`${(dayProgress / 100) * 150.8} 150.8`}
                                    strokeLinecap="round"
                                    className={isCompleted ? 'text-tropical-green' : colors.text}
                                  />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                                  {dayProgress}%
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div className="mt-3 flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${colors.bg}`}
                                style={{ width: `${dayProgress}%` }}
                              />
                            </div>
                            <ArrowRight size={14} className="text-muted-foreground group-hover:text-tropical-green transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
