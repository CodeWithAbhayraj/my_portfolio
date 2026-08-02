import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { projects, projectFilters } from '@/data/portfolio';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title={<>Featured <span className="gradient-text">work</span></>}
          subtitle="A selection of projects I've built — filter by technology to explore."
        />

        {/* Filters */}
        <div className="no-scrollbar mt-10 flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                filter === f
                  ? 'bg-primary-600 text-white shadow-soft'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-primary-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="card card-hover group overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <span className="absolute left-4 top-4 chip border-white/20 bg-white/15 text-white backdrop-blur">
                    {p.category}
                  </span>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-white">
                    {p.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="chip text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <Check size={13} className="flex-none text-primary-500" strokeWidth={3} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary flex-1 px-4 py-2.5 text-xs"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex-1 px-4 py-2.5 text-xs"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
