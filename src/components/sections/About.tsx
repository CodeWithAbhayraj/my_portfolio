import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { about } from '@/data/portfolio';
import Counter from '@/components/Counter';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          title={<>Get to <span className="gradient-text">know me</span></>}
          subtitle="A quick introduction to who I am, what I care about, and what I bring to the table."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-950/60 dark:text-primary-400">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="card card-hover flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="font-display text-3xl font-extrabold text-primary-600 dark:text-primary-400">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
