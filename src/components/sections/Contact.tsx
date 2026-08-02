import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: '#' },
];

const socials = [
  { icon: FaGithub, href: profile.socials.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  // { icon: FaXTwitter, href: profile.socials.twitter, label: 'Twitter' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Basic validation
    if (!data.get('name') || !data.get('email') || !data.get('message')) return;
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="gradient-text">connect</span></>}
          subtitle="Have a role, project, or question? I'd love to hear from you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="card flex h-full flex-col p-6">
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 rounded-xl border border-slate-200/70 p-4 transition-colors hover:border-primary-300 dark:border-slate-800 dark:hover:border-primary-700/60"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {label}
                      </div>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <p className="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                  Follow me
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-primary-400"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" placeholder="What is this about?" />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-900"
                />
              </div>

              <button type="submit" className="btn-primary mt-6 w-full">
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-center text-sm text-green-600 dark:text-green-400"
                >
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-900"
      />
    </div>
  );
}
