import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Resume"
          title={<>My <span className="gradient-text">resume</span></>}
          subtitle="A quick overview of my experience, skills, and education in a single document."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-[1.6fr_1fr]">
              {/* Preview */}
              <div className="relative bg-slate-100 p-6 dark:bg-slate-900/60">
                <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-950">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                      <FileText size={28} />
                    </div>
                    <p className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                      {profile.name} — Resume
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {profile.roles.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-center gap-4 p-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    Download my resume
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    Get the full one-page summary of my experience, projects, and education.
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-800"></code>
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a href={profile.resumeUrl} download className="btn-primary">
                    <Download size={18} /> Download Resume
                  </a>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <Eye size={18} /> View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
