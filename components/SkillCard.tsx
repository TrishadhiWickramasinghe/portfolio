'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillCardProps {
  title: string;
  icon: IconType;
  description?: string;
}

export function SkillCard({ title, icon: Icon, description }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      }}
      className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 text-center"
    >
      <motion.div
        className="mb-4 flex justify-center"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
          <Icon className="text-3xl text-blue-600 dark:text-blue-300" />
        </div>
      </motion.div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
