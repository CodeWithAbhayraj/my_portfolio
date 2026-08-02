import { Code2, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { navItems, profile } from '@/data/portfolio';

const socials = [
  { icon: FaGithub, href: profile.socials.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  // { icon: FaXTwitter, href: profile.socials.twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 text-white shadow-glow">
                <Code2 size={18} />
              </span>
              {profile.name}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {profile.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:justify-self-end">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-primary-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a
              href="#home"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
            >
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-400 dark:border-slate-800">
          © 2026 {profile.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
