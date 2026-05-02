import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { experience, passions, profile, timeline } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import ButtonLink from '../components/ButtonLink'
import { BookOpen, Gamepad2, Telescope } from 'lucide-react'
const passionIconMap = { BookOpen, Gamepad2, Telescope }

const AboutPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-12 sm:py-16 lg:px-8">

      {/* Header */}
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <SectionHeading
          eyebrow="About Me"
          title="Building thoughtful interfaces with steady growth."
          description="I enjoy creating modern web experiences that are clean, responsive, and easy to use. My best work sits at the intersection of visual design, frontend engineering, and practical product thinking."
        />
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/3">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">Quick Snapshot</p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">Name:</span>
              {profile.name}
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <MapPin size={14} className="text-teal-500" />
              {profile.location}
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">Focus:</span>
              React, UI systems, modern frontend
            </div>
            <div className="pt-2">
              <ButtonLink href={profile.email} variant="primary" size="sm">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      {experience?.length > 0 && (
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Experience"
            title="Real work, real teams."
            description="Professional experience that shapes how I approach building products."
          />
          <div className="grid gap-4">
            {experience.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/3"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                      <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-500/10 dark:text-teal-400">
                        {exp.type}
                      </span>
                    </div>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
                    >
                      {exp.company}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar size={12} />
                    {exp.startDate} — {exp.endDate ?? 'Present'}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{exp.description}</p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span key={s} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Timeline */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Journey"
          title="Learning through real projects and consistent iteration."
          description="A quick look at how my development path has evolved so far."
        />
        <div className="relative grid gap-4">
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-teal-500/60 to-transparent hidden sm:block" />
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/3 sm:grid-cols-[160px_1fr] sm:pl-10"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                {item.period}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Passions */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Beyond Code"
          title="Interests that keep creativity active."
          description="The habits and hobbies that shape how I learn, focus, and solve problems."
        />
        <div className="grid gap-4 md:grid-cols-3">
         {passions.map((item, index) => {
  const PassionIcon = passionIconMap[item.icon]
  return (
    <motion.article
      key={item.title}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
        <PassionIcon size={20} strokeWidth={1.8} />
      </div>
      <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
    </motion.article>
  )
})}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
