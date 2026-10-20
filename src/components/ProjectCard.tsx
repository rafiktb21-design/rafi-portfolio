import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

function actionLabel(project: Project) {
  if (project.liveUrl?.includes('drive.google.com')) return 'Unduh aplikasi';
  if (project.liveUrl?.includes('roblox.com')) return 'Lihat pengalaman';
  return 'Buka proyek';
}

function ActionIcon({ project }: { project: Project }) {
  if (project.liveUrl?.includes('drive.google.com')) return <Download size={16} />;
  return project.liveUrl?.includes('roblox.com') ? <ExternalLink size={16} /> : <ArrowUpRight size={17} />;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const status = project.status === 'completed' ? 'Selesai' : project.status === 'in-progress' ? 'Sedang dikembangkan' : 'Direncanakan';

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group relative border border-white/10 bg-[#0b0b0b] ${featured ? 'grid overflow-hidden lg:grid-cols-[1.25fr_1fr]' : 'grid overflow-hidden sm:grid-cols-[190px_1fr]'}`}
    >
      <div className={`relative overflow-hidden bg-[#161010] ${featured ? 'min-h-[260px] lg:min-h-[420px]' : 'min-h-[190px]'}`}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 border border-white/20 bg-[#080808]/80 px-3 py-1.5 text-xs font-medium text-[#F7F7F7] backdrop-blur-sm">
          {status}
        </span>
      </div>

      <div className={`flex flex-col ${featured ? 'p-7 md:p-9' : 'p-6'}`}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <p className="text-sm font-medium text-[#F01E2C]">Proyek {String(index + 1).padStart(2, '0')}</p>
          {!featured && <span className="text-xs text-[#A4A4A4]">{status}</span>}
        </div>
        <h3 className={`${featured ? 'text-3xl md:text-4xl' : 'text-xl'} font-bold leading-tight tracking-tight text-[#F7F7F7]`}>
          {project.title}
        </h3>
        <p className={`mt-4 max-w-[58ch] text-sm leading-7 text-[#A4A4A4] ${featured ? 'md:text-base' : ''}`}>
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="border border-white/10 px-2.5 py-1 text-xs text-[#D1D1D1]">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F01E2C] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF3845] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F7F7]"
            >
              {actionLabel(project)}
              <ActionIcon project={project} />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#D1D1D1] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F7F7]"
            >
              <FaGithub size={17} />
              Kode sumber
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
