import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { dayContents } from '../data/content';

interface DayProgress {
  sectionsRead: string[];
  quizCompleted: boolean;
  quizScore: number;
  exercisesCompleted: number[];
  lastVisited: string;
}

interface ProgressState {
  [day: number]: DayProgress;
}

interface ProgressContextType {
  progress: ProgressState;
  markSectionRead: (day: number, sectionId: string) => void;
  completeQuiz: (day: number, score: number) => void;
  toggleExercise: (day: number, exerciseId: number) => void;
  getDayProgress: (day: number) => number;
  getOverallProgress: () => number;
  getTotalQuizScore: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

const STORAGE_KEY = 'python-learning-progress';

function loadProgress(): ProgressState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

const defaultDayProgress: DayProgress = {
  sectionsRead: [],
  quizCompleted: false,
  quizScore: 0,
  exercisesCompleted: [],
  lastVisited: '',
};

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const getDay = useCallback((day: number): DayProgress => {
    return progress[day] || { ...defaultDayProgress };
  }, [progress]);

  const markSectionRead = useCallback((day: number, sectionId: string) => {
    setProgress(prev => {
      const dp = prev[day] || { ...defaultDayProgress };
      if (dp.sectionsRead.includes(sectionId)) return prev;
      return {
        ...prev,
        [day]: {
          ...dp,
          sectionsRead: [...dp.sectionsRead, sectionId],
          lastVisited: new Date().toISOString(),
        },
      };
    });
  }, []);

  const completeQuiz = useCallback((day: number, score: number) => {
    setProgress(prev => {
      const dp = prev[day] || { ...defaultDayProgress };
      return {
        ...prev,
        [day]: {
          ...dp,
          quizCompleted: true,
          quizScore: Math.max(dp.quizScore, score),
          lastVisited: new Date().toISOString(),
        },
      };
    });
  }, []);

  const toggleExercise = useCallback((day: number, exerciseId: number) => {
    setProgress(prev => {
      const dp = prev[day] || { ...defaultDayProgress };
      const exercises = dp.exercisesCompleted.includes(exerciseId)
        ? dp.exercisesCompleted.filter(id => id !== exerciseId)
        : [...dp.exercisesCompleted, exerciseId];
      return {
        ...prev,
        [day]: {
          ...dp,
          exercisesCompleted: exercises,
          lastVisited: new Date().toISOString(),
        },
      };
    });
  }, []);

  const getDayProgress = useCallback((day: number): number => {
    const dp = getDay(day);
    const content = dayContents.find(d => d.day === day);
    if (!content) return 0;
    const totalSections = content.sections.length;
    const totalExercises = content.exercises.length;
    const totalItems = totalSections + 1 + totalExercises;
    const done = dp.sectionsRead.length + (dp.quizCompleted ? 1 : 0) + dp.exercisesCompleted.length;
    return Math.round((done / totalItems) * 100);
  }, [getDay]);

  const getOverallProgress = useCallback((): number => {
    let total = 0;
    for (let day = 1; day <= 7; day++) {
      total += getDayProgress(day);
    }
    return Math.round(total / 7);
  }, [getDayProgress]);

  const getTotalQuizScore = useCallback((): number => {
    let total = 0;
    for (let day = 1; day <= 7; day++) {
      total += getDay(day).quizScore;
    }
    return total;
  }, [getDay]);

  const resetProgress = useCallback(() => {
    setProgress({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markSectionRead,
        completeQuiz,
        toggleExercise,
        getDayProgress,
        getOverallProgress,
        getTotalQuizScore,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
