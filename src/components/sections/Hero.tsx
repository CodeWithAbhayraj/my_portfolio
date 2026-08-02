import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Floating background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-primary-400/20 blur-3xl animate-float" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-accent-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[12%] left-[40%] h-64 w-64 rounded-full bg-primary-300/10 blur-3xl animate-float" />
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
          style={{
            backgroundImage: 'var(--tw-bg-grid, none)',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
            <motion.span
              variants={item}
              className="chip mb-5 border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800/60 dark:bg-primary-950/40 dark:text-primary-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
              </span>
              Available for opportunities
            </motion.span>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </motion.h1>

            <motion.div variants={item} className="mt-3 flex flex-wrap gap-2 text-lg font-semibold text-slate-700 sm:text-xl dark:text-slate-200">
              <span className="rounded-lg bg-primary-50 px-3 py-1 text-primary-700 dark:bg-primary-950/40 dark:text-primary-300">
                {profile.roles[0]}
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="rounded-lg bg-slate-100 px-3 py-1 dark:bg-slate-800/60">
                {profile.roles[1]}
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={16} className="text-primary-500" />
              {profile.location}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a href={profile.resumeUrl} download className="btn-primary">
                <Download size={18} /> Download Resume
              </a>
              <a href="#projects" className="btn-secondary">
                <FolderGit2 size={18} /> View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} /> Contact Me
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-primary-400"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-primary-400"
              >
                <FaLinkedin size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 mx-auto lg:order-2"
          >
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary-600 via-accent-500 to-primary-400 opacity-60 blur-md animate-spin-slow" />
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-primary-300/50 dark:border-primary-700/40 animate-spin-slow" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-card dark:border-slate-900 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 top-10 hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-card sm:block dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                Java
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-6 bottom-12 hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-card sm:block dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                Spring Boot
              </motion.div>

             <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 bottom-12 hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-card sm:block dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                React
              </motion.div>


               <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-6 top-12 hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-card sm:block dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                Data-Base
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                 className="absolute left-1/2 -bottom-4 -translate-x-1/2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-card dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              
              >
                Devops
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
