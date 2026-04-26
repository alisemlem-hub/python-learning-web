/*
 * QuizComponent — Interactive quiz with scoring and feedback
 * Tropical Classroom Theme: colorful options, celebration on completion
 */
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { QuizQuestion } from '@/data/content';

interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  previousScore?: number;
}

export default function QuizComponent({ questions, onComplete, previousScore }: QuizComponentProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

  const question = questions[currentQ];

  const handleSelect = useCallback((index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    const newAnswers = [...answers];
    newAnswers[currentQ] = index;
    setAnswers(newAnswers);
    if (index === question.correct) {
      setScore(prev => prev + 1);
    }
  }, [answered, answers, currentQ, question.correct]);

  const handleNext = useCallback(() => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const finalScore = score + (selected === question.correct ? 0 : 0);
      setFinished(true);
      onComplete(score);
    }
  }, [currentQ, questions.length, score, selected, question.correct, onComplete]);

  const handleRestart = useCallback(() => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setAnswers(new Array(questions.length).fill(null));
  }, [questions.length]);

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    const isGreat = percentage >= 80;
    const isOk = percentage >= 50;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 px-6"
      >
        <div className="mb-6">
          {isGreat ? (
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-tropical-green/20 mb-4">
              <Trophy size={40} className="text-tropical-green" />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-tropical-yellow/20 mb-4">
              <Trophy size={40} className="text-tropical-orange" />
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2">
          {isGreat ? 'Luar Biasa!' : isOk ? 'Bagus!' : 'Tetap Semangat!'}
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Skor kamu: <span className="font-bold text-foreground">{score}/{questions.length}</span> ({percentage}%)
        </p>
        {previousScore !== undefined && previousScore > 0 && (
          <p className="text-sm text-muted-foreground mb-4">
            Skor terbaik sebelumnya: {previousScore}/{questions.length}
          </p>
        )}
        <div className="w-full max-w-xs mx-auto bg-muted rounded-full h-4 mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`h-full rounded-full ${isGreat ? 'bg-tropical-green' : isOk ? 'bg-tropical-yellow' : 'bg-tropical-coral'}`}
          />
        </div>
        <Button onClick={handleRestart} variant="outline" className="gap-2">
          <RotateCcw size={16} />
          Coba Lagi
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-sm font-semibold text-muted-foreground">
          {currentQ + 1}/{questions.length}
        </span>
        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
          <motion.div
            initial={false}
            animate={{ width: `${((currentQ + (answered ? 1 : 0)) / questions.length) * 100}%` }}
            className="h-full bg-tropical-green rounded-full"
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-sm font-semibold text-tropical-green">{score} benar</span>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-lg font-bold mb-4 leading-relaxed">{question.question}</h4>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correct;
              const isSelected = index === selected;
              let optionClass = 'quiz-option border-2 rounded-xl p-4 transition-all cursor-pointer flex items-start gap-3';

              if (answered) {
                if (isCorrect) {
                  optionClass += ' border-tropical-green bg-tropical-green/10';
                } else if (isSelected && !isCorrect) {
                  optionClass += ' border-tropical-coral bg-tropical-coral/10';
                } else {
                  optionClass += ' border-border opacity-50';
                }
              } else {
                optionClass += ' border-border hover:border-tropical-green/50 hover:bg-tropical-green/5';
              }

              return (
                <motion.button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={optionClass}
                  whileHover={!answered ? { scale: 1.01 } : {}}
                  whileTap={!answered ? { scale: 0.99 } : {}}
                  disabled={answered}
                >
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold shrink-0 mt-0.5 ${
                    answered && isCorrect
                      ? 'bg-tropical-green text-white'
                      : answered && isSelected && !isCorrect
                      ? 'bg-tropical-coral text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-left flex-1 font-medium">{option}</span>
                  {answered && isCorrect && <CheckCircle size={20} className="text-tropical-green shrink-0 mt-0.5" />}
                  {answered && isSelected && !isCorrect && <XCircle size={20} className="text-tropical-coral shrink-0 mt-0.5" />}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 rounded-xl bg-muted/50 border border-border"
              >
                <p className="text-sm leading-relaxed">
                  <span className="font-bold text-tropical-green">Penjelasan: </span>
                  {question.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          {answered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 flex justify-end"
            >
              <Button onClick={handleNext} className="gap-2 bg-tropical-green hover:bg-tropical-green/90 text-white">
                {currentQ < questions.length - 1 ? (
                  <>
                    Selanjutnya
                    <ArrowRight size={16} />
                  </>
                ) : (
                  <>
                    Lihat Hasil
                    <Trophy size={16} />
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
