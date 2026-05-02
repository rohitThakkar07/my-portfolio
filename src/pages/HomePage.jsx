import { ArrowRight, Download, FileText, Github, Linkedin, Mail, Sparkles, Monitor, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import ButtonLink from '../components/ButtonLink'
import SectionHeading from '../components/SectionHeading'
import { profile, projects, services, skills, socialLinks, stats } from '../data/portfolioData'

const iconMap = { GitHub: Github, LinkedIn: Linkedin, Email: Mail }

// Map service icon string names to Lucide components
const serviceIconMap = { Monitor, Code2, Sparkles }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
})

const HomePage = () => {
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-12 sm:py-16 lg:px-8">

      {/* Hero */}
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            <Sparkles size={12} />
            Available for work
          </motion.div>

          <motion.h1 {...fadeUp(0.08)} className="mt-5 font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-2 block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">
              {profile.role}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            {profile.intro}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/projects" size="md">
              View Projects
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href={profile.resumePdf} download variant="secondary" size="md">
              <Download size={16} />
              Download PDF
            </ButtonLink>
            <ButtonLink href={profile.resumeDocx} download variant="secondary" size="md">
              <FileText size={16} />
              Download DOCX
            </ButtonLink>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((item) => {
              const Icon = iconMap[item.label]
              return (
                <ButtonLink key={item.label} href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} variant="ghost" size="sm">
                  <Icon size={16} />
                  {item.label}
                </ButtonLink>
              )
            })}
          </motion.div>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[44px] bg-gradient-to-br from-teal-400/20 to-cyan-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-slate-900">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-[360px] w-full rounded-[24px] object-cover"
            />
            {/* <div className="mt-4 rounded-[20px] bg-slate-950 px-5 py-4 dark:bg-slate-800">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">Available For</p>
              <p className="mt-1.5 text-base font-semibold text-white">Freelance & Internships</p>
            </div> */}
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/3"
          >
            <p className="font-display text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">{stat.label}</p>
          </motion.article>
        ))}
      </section>

      {/* Skills */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Skills"
          title="Frontend-first with growing full-stack range."
          description="Core tools I use to turn designs into clean, responsive, and interactive products."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/3"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">{skill.level}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can help build."
          description="The type of work I'm best positioned to deliver right now."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const ServiceIcon = serviceIconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400">
                  <ServiceIcon size={20} strokeWidth={1.8} />   {/* ← renders the icon */}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* Featured Work */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected projects."
            description="A quick preview before the full projects page."
          />
          <ButtonLink to="/projects" variant="ghost" size="sm" className="shrink-0">
            View all <ArrowRight size={14} />
          </ButtonLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/3 dark:hover:shadow-teal-500/5"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {Array.isArray(project.summary) ? project.summary[0] : project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <ButtonLink
                    {...(project.liveInternal ? { to: project.liveUrl } : { href: project.liveUrl })}
                    target={!project.liveInternal && project.liveUrl?.startsWith('http') ? '_blank' : undefined}
                    size="sm"
                  >
                    Live Preview
                  </ButtonLink>
                  <ButtonLink href={project.sourceUrl} target="_blank" variant="secondary" size="sm">
                    Source Code
                  </ButtonLink>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage