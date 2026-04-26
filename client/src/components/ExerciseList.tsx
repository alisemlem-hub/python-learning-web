/*
 * ExerciseList — Checklist of exercises with hints
 * Tropical Classroom Theme: warm accents, playful checkboxes
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Lightbulb, CheckSquare, Square, Flame } from 'lucide-react';
import type { Exercise } from '@/data/content';

interface ExerciseListProps {
  exercises: Exercise[];
  completedIds: number[];
  onToggle: (id: number) => void;
}

const difficultyConfig = {
  mudah: { color: 'text-tropical-green', bg: 'bg-tropical-green/10', label: 'Mudah' },
  sedang: { color: 'text-tropical-yellow', bg: 'bg-tropical-yellow/10', label: 'Sedang' },
  sulit: { color: 'text-tropical-coral', bg: 'bg-tropical-coral/10', label: 'Sulit' },
};

export default function ExerciseList({ exercises, completedIds, onToggle }: ExerciseListProps) {
  const [expandedHint, setExpandedHint] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {exercises.map((exercise, index) => {
        const isCompleted = completedIds.includes(exercise.id);
        const diff = difficultyConfig[exercise.difficulty];
        const showHint = expandedHint === exercise.id;

        return (
          <motion.div
            key={exercise.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl border-2 transition-all ${
              isCompleted ? 'border-tropical-green/30 bg-tropical-green/5' : 'border-border bg-card'
            }`}
          >
            <div className="p-4">
              <div className="flex items-start gap-3">
                <button
                  onClick={() => onToggle(exercise.id)}
                  className="mt-0.5 shrink-0 transition-transform hover:scale-110"
                >
                  {isCompleted ? (
                    <CheckSquare size={22} className="text-tropical-green" />
                  ) : (
                    <Square size={22} className="text-muted-foreground" />
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className={`font-bold ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                      {exercise.title}
                    </h4>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${diff.bg} ${diff.color}`}>
                      {diff.label}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isCompleted ? 'text-muted-foreground' : 'text-foreground/80'}`}>
                    {exercise.description}
                  </p>
                </div>
              </div>

              {/* Hint toggle */}
              <button
                onClick={() => setExpandedHint(showHint ? null : exercise.id)}
                className="flex items-center gap-1.5 mt-3 ml-9 text-xs font-semibold text-tropical-teal hover:text-tropical-teal/80 transition-colors"
              >
                <Lightbulb size={14} />
                {showHint ? 'Sembunyikan Petunjuk' : 'Lihat Petunjuk'}
                <ChevronDown size={14} className={`transition-transform ${showHint ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 ml-9 p-3 rounded-lg bg-tropical-teal/5 border border-tropical-teal/20">
                      <p className="text-sm text-tropical-teal leading-relaxed">
                        <Flame size={14} className="inline mr-1" />
                        {exercise.hint}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
