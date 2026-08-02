import { motion } from 'framer-motion';
import type { TimelineItem } from '@/data/portfolio';

type Props = {
  items: TimelineItem[];
  accent?: string;
};

export default function Timeline({ items }: Props) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500 via-primary-300 to-transparent sm:left-1/2" />

      <div className="space-y-10">
        {items.map((item, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative pl-12 sm:pl-0 ${
                left ? 'sm:pr-[52%]' : 'sm:pl-[52%]'
              }`}
            >
              {/* Dot */}
              <span
                className={`absolute left-[10px] top-2 z-10 h-3 w-3 rounded-full border-2 border-white bg-primary-600 shadow-glow sm:left-1/2 sm:-translate-x-1/2 dark:border-slate-950`}
              />

              <div className="card card-hover p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="chip border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800/60 dark:bg-primary-950/40 dark:text-primary-300">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                  {item.org}
                </p>
                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                )}
                {item.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="chip text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
