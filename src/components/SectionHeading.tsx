import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
};


export default function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 ${
          center ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
