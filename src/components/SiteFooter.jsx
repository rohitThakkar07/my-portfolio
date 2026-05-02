import { Github, Linkedin, Mail, MapPin, Heart } from 'lucide-react'
import { profile, socialLinks } from '../data/portfolioData'
import ButtonLink from './ButtonLink'

const iconMap = { github: Github, linkedin: Linkedin, email: Mail }

const SiteFooter = () => {
  return (
    <footer id="contact" className="relative z-10 mt-8 border-t border-slate-200/70 bg-white/60 backdrop-blur-xl dark:border-white/8 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              Let's Connect
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              Ready to build something together.
            </h3>
            {/* <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Open to internships, freelance work, and collaborative product ideas.
            </p> */}
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              <MapPin size={12} />
              {profile.location}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <ButtonLink key={link.label} href={link.href} target="_blank" variant="secondary" size="sm">
                  <Icon size={15} />
                  {link.label}
                </ButtonLink>
              )
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 dark:border-white/5">
          <p className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
            Built with <Heart size={12} className="text-teal-500" /> by {profile.name} · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
