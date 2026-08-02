import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { certificates } from '@/data/portfolio';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certificates"
          title={<>Certifications & <span className="gradient-text">achievements</span></>}
          subtitle="Continuous learning, verified by recognized programs and platforms."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-soft backdrop-blur">
                  <Award size={16} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-bold leading-snug text-slate-900 dark:text-white">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-primary-600 dark:text-primary-400">{c.org}</p>
                <p className="mt-1 text-xs text-slate-400">{c.date}</p>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary mt-4 w-full px-4 py-2.5 text-xs"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
