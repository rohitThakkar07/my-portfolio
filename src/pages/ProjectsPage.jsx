import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import ButtonLink from '../components/ButtonLink'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/portfolioData'

const ProjectsPage = () => {
  const [featuredProject, ...otherProjects] = projects

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-12 sm:py-16 lg:px-8">

      {/* Featured */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="A selection of projects with real destinations, clean presentation, and working demos."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-white/10 dark:bg-white/3"
        >
          <div className="grid lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                  {featuredProject.category}
                </p>
                {featuredProject.badge && (
                  <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
                    {featuredProject.badge}
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white lg:text-3xl">
                {featuredProject.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {featuredProject.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {featuredProject.stack.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={featuredProject.liveUrl} target="_blank" size="sm">
                  <ExternalLink size={14} /> Live Preview
                </ButtonLink>
                <ButtonLink href={featuredProject.sourceUrl} target="_blank" variant="secondary" size="sm">
                  <Github size={14} /> Source Code
                </ButtonLink>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Learnings for featured */}
      <section className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/3 lg:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">Key Learnings — {featuredProject.title}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {featuredProject.highlights.map((item) => (
            <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600 dark:border-white/8 dark:bg-white/4 dark:text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="More Work"
          title="Additional builds."
          description="Smaller projects with direct access to source and demos."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/3"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                    {project.category}
                  </p>
                  {project.badge && (
                    <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
                      {project.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{project.summary}</p>
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
                    <ExternalLink size={14} /> Live Preview
                  </ButtonLink>
                  <ButtonLink href={project.sourceUrl} target="_blank" variant="secondary" size="sm">
                    <Github size={14} /> Source Code
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

export default ProjectsPage
