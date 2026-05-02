import { motion } from 'framer-motion'

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-600 dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300">
        <span className="h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeading
