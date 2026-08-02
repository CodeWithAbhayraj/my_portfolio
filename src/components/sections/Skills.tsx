import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { skillGroups } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  HeartHandshake,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title={<>My <span className="gradient-text">technical toolkit</span></>}
          subtitle="Technologies and tools I use to design, build, and ship reliable software."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: gi * 0.08 }}
                className="card card-hover p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span key={s.name} className="chip">
                      {s.name}
                    </span>
                  ))}
                </div>

                {group.skills.some((s) => s.level != null) && (
                  <div className="mt-5 space-y-3">
                    {group.skills
                      .filter((s) => s.level != null)
                      .map((s) => (
                        <div key={s.name}>
                          <div className="mb-1 flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                            <span>{s.name}</span>
                            <span>{s.level}%</span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${s.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, ease: 'easeOut' }}
                              className="h-full rounded-full bg-gradient-to-r from-primary-600 to-accent-500"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
