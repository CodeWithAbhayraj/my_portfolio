import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-primary-200 dark:border-primary-900"
          />
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-600 dark:border-t-primary-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-display text-sm font-semibold tracking-widest text-slate-400 uppercase"
        >
          Loading
        </motion.p>
      </div>
    </div>
  );
}
