/*
 * DayDetail — Full learning page for a single day
 * Tropical Classroom Theme: tabbed content, warm accents
 */
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useParams, Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, HelpCircle, Dumbbell, ChevronLeft, ChevronRight,
  CheckCircle, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import QuizComponent from '@/components/QuizComponent';
import ExerciseList from '@/components/ExerciseList';
import { useProgress } from '@/contexts/ProgressContext';
import { dayContents } from '@/data/content';

type TabType = 'materi' | 'kuis' | 'latihan';

const dayColors = [
  'from-[#FFB347] to-[#FF6B6B]',
  'from-[#2ECC71] to-[#27AE60]',
  'from-[#FF6B6B] to-[#E74C3C]',
  'from-[#4ECDC4] to-[#26D0CE]',
  'from-[#9B59B6] to-[#8E44AD]',
  'from-[#E67E22] to-[#D35400]',
  'from-[#1ABC9C] to-[#16A085]',
];

export default function DayDetail() {
  const params = useParams<{ day: string }>();
  const [, setLocation] = useLocation();
  const dayNum = parseInt(params.day || '1');
  const [activeTab, setActiveTab] = useState<TabType>('materi');
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const { progress, markSectionRead, completeQuiz, toggleExercise, getDayProgress } = useProgress();

  const content = useMemo(() => dayContents.find(d => d.day === dayNum), [dayNum]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('materi');
    setActiveSectionIndex(0);
  }, [dayNum]);

  // Mark section as read when viewing
  useEffect(() => {
    if (content && activeTab === 'materi') {
      const section = content.sections[activeSectionIndex];
      if (section) {
        markSectionRead(dayNum, section.id);
      }
    }
  }, [content, activeTab, activeSectionIndex, dayNum, markSectionRead]);

  const handleQuizComplete = useCallback((score: number) => {
    completeQuiz(dayNum, score);
  }, [completeQuiz, dayNum]);

  const handleExerciseToggle = useCallback((id: number) => {
    toggleExercise(dayNum, id);
  }, [toggleExercise, dayNum]);

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Hari tidak ditemukan</h2>
          <Link href="/">
            <Button>Kembali ke Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  const dayProgress = getDayProgress(dayNum);
  const dp = progress[dayNum] || { sectionsRead: [], quizCompleted: false, quizScore: 0, exercisesCompleted: [] };
  const colorGradient = dayColors[dayNum - 1] || dayColors[0];

  const tabs: { id: TabType; label: string; icon: typeof BookOpen; count?: number }[] = [
    { id: 'materi', label: 'Materi', icon: BookOpen, count: content.sections.length },
    { id: 'kuis', label: 'Kuis', icon: HelpCircle, count: content.quiz.length },
    { id: 'latihan', label: 'Latihan', icon: Dumbbell, count: content.exercises.length },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className={`bg-gradient-to-r ${colorGradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative py-8 md:py-10">
          <Link href="/materi">
            <span className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white mb-3 font-medium">
              <ChevronLeft size={16} />
              Kembali ke Daftar Materi
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-4xl md:text-5xl">{content.icon}</span>
            <div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">Hari {content.day}</p>
              <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                {content.title}
              </h1>
            </div>
          </div>
          {/* Progress */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 max-w-xs h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${dayProgress}%` }}
              />
            </div>
            <span className="text-sm font-bold text-white">{dayProgress}%</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-background border-b border-border">
        <div className="container flex gap-1 py-2 overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-tropical-green/10 text-tropical-green'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon size={16} />
                {tab.label}
                {tab.count && (
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-tropical-green/20' : 'bg-muted'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'materi' && (
            <motion.div
              key="materi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid md:grid-cols-[240px_1fr] gap-6"
            >
              {/* Section sidebar */}
              <div className="md:sticky md:top-36 md:self-start">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-1">
                  Daftar Materi
                </h3>
                <div className="space-y-1">
                  {content.sections.map((section, index) => {
                    const isRead = dp.sectionsRead.includes(section.id);
                    const isCurrent = index === activeSectionIndex;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSectionIndex(index)}
                        className={`w-full text-left flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all ${
                          isCurrent
                            ? 'bg-tropical-green/10 text-tropical-green font-semibold'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {isRead ? (
                          <CheckCircle size={14} className="text-tropical-green shrink-0" />
                        ) : (
                          <Eye size={14} className="shrink-0 opacity-40" />
                        )}
                        <span className="truncate">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section content */}
              <div className="min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSectionIndex}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                      <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                        {content.sections[activeSectionIndex].title}
                      </h2>
                      <div
                        className="prose prose-sm max-w-none
                          prose-headings:font-bold prose-headings:text-foreground
                          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                          prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-4
                          prose-li:text-foreground/80 prose-li:leading-relaxed
                          prose-ul:my-3 prose-ol:my-3
                          prose-a:text-tropical-green prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                          prose-strong:text-foreground prose-strong:font-bold
                          prose-code:text-tropical-coral prose-code:font-medium
                          prose-pre:bg-[#16213e] prose-pre:rounded-xl prose-pre:my-4
                        "
                        dangerouslySetInnerHTML={{ __html: content.sections[activeSectionIndex].content }}
                      />
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                      <Button
                        variant="outline"
                        onClick={() => setActiveSectionIndex(prev => prev - 1)}
                        disabled={activeSectionIndex === 0}
                        className="gap-2"
                      >
                        <ChevronLeft size={16} />
                        Sebelumnya
                      </Button>
                      {activeSectionIndex < content.sections.length - 1 ? (
                        <Button
                          onClick={() => setActiveSectionIndex(prev => prev + 1)}
                          className="gap-2 bg-tropical-green hover:bg-tropical-green/90 text-white"
                        >
                          Selanjutnya
                          <ChevronRight size={16} />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => setActiveTab('kuis')}
                          className="gap-2 bg-tropical-yellow hover:bg-tropical-yellow/90 text-foreground"
                        >
                          Lanjut ke Kuis
                          <HelpCircle size={16} />
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {activeTab === 'kuis' && (
            <motion.div
              key="kuis"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-tropical-yellow/20 flex items-center justify-center">
                    <HelpCircle size={20} className="text-tropical-orange" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                      Kuis Hari {content.day}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {content.quiz.length} pertanyaan pilihan ganda
                    </p>
                  </div>
                </div>
                <QuizComponent
                  questions={content.quiz}
                  onComplete={handleQuizComplete}
                  previousScore={dp.quizScore}
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'latihan' && (
            <motion.div
              key="latihan"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-tropical-coral/20 flex items-center justify-center">
                    <Dumbbell size={20} className="text-tropical-coral" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                      Latihan Hari {content.day}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Centang setelah kamu selesai mengerjakan
                    </p>
                  </div>
                </div>
              </div>
              <ExerciseList
                exercises={content.exercises}
                completedIds={dp.exercisesCompleted || []}
                onToggle={handleExerciseToggle}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Day Navigation */}
      <div className="container pb-12">
        <div className="flex items-center justify-between pt-6 border-t border-border">
          {dayNum > 1 ? (
            <Link href={`/materi/${dayNum - 1}`}>
              <Button variant="outline" className="gap-2">
                <ChevronLeft size={16} />
                Hari {dayNum - 1}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {dayNum < 7 ? (
            <Link href={`/materi/${dayNum + 1}`}>
              <Button className="gap-2 bg-tropical-green hover:bg-tropical-green/90 text-white">
                Hari {dayNum + 1}
                <ChevronRight size={16} />
              </Button>
            </Link>
          ) : (
            <Link href="/">
              <Button className="gap-2 bg-tropical-green hover:bg-tropical-green/90 text-white">
                Kembali ke Dashboard
                <ChevronRight size={16} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
