import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, GitFork, BookOpen, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '@/components/SectionHeading';
import { githubUsername } from '@/data/portfolio';

type GitHubUser = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
};

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

export default function GitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    Promise.all([
      fetch(`https://api.github.com/users/${githubUsername}`).then((r) => {
        if (!r.ok) throw new Error('profile');
        return r.json();
      }),
      fetch(
        `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`,
      ).then((r) => {
        if (!r.ok) throw new Error('repos');
        return r.json();
      }),
    ])
      .then(([u, r]) => {
        if (!active) return;
        setUser(u);
        setRepos(Array.isArray(r) ? r : []);
        setError(null);
      })
      .catch(() => {
        if (!active) return;
        setError('Unable to load GitHub data right now.');
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="github" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="GitHub"
          title={<>Open source on <span className="gradient-text">GitHub</span></>}
          subtitle="My profile, stats, and latest repositories — fetched live from the GitHub API."
        />

        {error ? (
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center text-sm text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300">
            {error} Set your GitHub username in the portfolio data file to see live data.
          </div>
        ) : (
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="card p-6 lg:col-span-1"
            >
              {loading || !user ? (
                <div className="animate-pulse space-y-4">
                  <div className="mx-auto h-24 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <div className="mx-auto h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-12 rounded bg-slate-200 dark:bg-slate-800" />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-primary-100 dark:ring-primary-950/60">
                    <img src={user.avatar_url} alt={user.login} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                    {user.name ?? user.login}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400">@{user.login}</p>
                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                    {user.bio || 'Developer & open source contributor.'}
                  </p>

                  <div className="mt-6 grid w-full grid-cols-3 gap-3">
                    <Stat icon={Users} value={user.followers} label="Followers" />
                    <Stat icon={GitFork} value={user.following} label="Following" />
                    <Stat icon={BookOpen} value={user.public_repos} label="Repos" />
                  </div>

                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-6 w-full"
                  >
                    <FaGithub size={18} /> Visit GitHub Profile
                  </a>
                </div>
              )}
            </motion.div>

            {/* Contribution graph + repos */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6 lg:col-span-2"
            >
              <h3 className="mb-4 font-display text-base font-bold text-slate-900 dark:text-white">
                Contribution Graph
              </h3>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <img
                  src={`https://ghchart.rshah.org/${githubUsername}`}
                  alt="GitHub contribution graph"
                  className="h-auto w-full"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-800 dark:bg-slate-900"
                >
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&theme=default`}
                    alt="GitHub statistics"
                    className="mx-auto"
                    loading="lazy"
                  />
                </a>
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-800 dark:bg-slate-900"
                >
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true`}
                    alt="Top languages"
                    className="mx-auto"
                    loading="lazy"
                  />
                </a>
              </div>

              <h3 className="mb-3 mt-6 font-display text-base font-bold text-slate-900 dark:text-white">
                Latest Repositories
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {loading
                  ? [...Array(4)].map((_, i) => (
                      <div key={i} className="h-24 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
                    ))
                  : repos.slice(0, 6).map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-700/60"
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate font-semibold text-slate-800 group-hover:text-primary-600 dark:text-slate-100 dark:group-hover:text-primary-400">
                            {repo.name}
                          </span>
                          <ExternalLink size={14} className="flex-none text-slate-400" />
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                          {repo.description || 'No description provided.'}
                        </p>
                        <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <span className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star size={12} /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork size={12} /> {repo.forks_count}
                          </span>
                        </div>
                      </a>
                    ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-800 dark:bg-slate-900">
      <Icon size={16} className="mx-auto text-primary-500" />
      <div className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">
        {value}
      </div>
      <div className="text-[11px] text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}
