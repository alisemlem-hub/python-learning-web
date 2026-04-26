/*
 * TopicView — Browse content by topic category
 * Tropical Classroom Theme: topic cards with warm colors
 */
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { topicCategories, dayContents } from '@/data/content';

const topicColors = [
  'from-[#FFB347] to-[#FF8C42]',
  'from-[#2ECC71] to-[#27AE60]',
  'from-[#9B59B6] to-[#8E44AD]',
  'from-[#FF6B6B] to-[#E74C3C]',
  'from-[#4ECDC4] to-[#26D0CE]',
  'from-[#3498DB] to-[#2980B9]',
  'from-[#E67E22] to-[#D35400]',
  'from-[#1ABC9C] to-[#16A085]',
];

export default function TopicView() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Jelajahi Berdasarkan Topik
          </h1>
          <p className="text-muted-foreground mb-8">
            Cari materi berdasarkan topik yang ingin kamu pelajari.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicCategories.map((topic, index) => {
            const relatedDays = topic.days.map(d => dayContents.find(dc => dc.day === d)).filter(Boolean);
            const totalSections = relatedDays.reduce((sum, d) => sum + (d?.sections.length || 0), 0);
            const totalQuiz = relatedDays.reduce((sum, d) => sum + (d?.quiz.length || 0), 0);

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 overflow-hidden group">
                  {/* Color header */}
                  <div className={`h-24 bg-gradient-to-br ${topicColors[index]} relative flex items-center justify-center`}>
                    <span className="text-5xl opacity-90">{topic.icon}</span>
                    <div className="absolute inset-0 bg-black/5" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-tropical-green transition-colors">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {topic.description}
                    </p>

                    {/* Related days */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.days.map(d => (
                        <Link key={d} href={`/materi/${d}`}>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-muted hover:bg-tropical-green/10 hover:text-tropical-green transition-colors">
                            <BookOpen size={10} />
                            Hari {d}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{totalSections} sub-materi · {totalQuiz} kuis</span>
                      <Link href={`/materi/${topic.days[0]}`}>
                        <span className="flex items-center gap-1 text-tropical-green font-semibold hover:underline">
                          Mulai <ArrowRight size={12} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
