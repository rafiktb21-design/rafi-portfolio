import { motion } from 'framer-motion';
import { ExternalLink, Download } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    scale: 0.9,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
    },
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-[#080808] border border-[#240607] rounded-lg overflow-hidden hover:border-[#F01E2C]/70 transition-all duration-500"
    >
      {/* Glow effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-[#F01E2C]/0 via-[#F01E2C]/5 to-[#F01E2C]/0 pointer-events-none"
      />

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10" />
        <motion.img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          className="absolute inset-0 bg-[#F01E2C] z-10"
        />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-[#F7F7F7] group-hover:text-[#F01E2C] transition-colors duration-300">
            {project.title}
          </h3>
          <motion.span 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className={`text-xs px-2 py-1 rounded-full ${
              project.status === 'completed' 
                ? 'bg-green-500/20 text-green-400' 
                : project.status === 'in-progress'
                ? 'bg-yellow-500/20 text-yellow-400'
                : 'bg-[#A4A4A4]/20 text-[#A4A4A4]'
            }`}
          >
            {project.status === 'completed' ? 'Selesai' : project.status === 'in-progress' ? 'Dalam Proses' : 'Direncanakan'}
          </motion.span>
        </div>

        <p className="text-[#A4A4A4] text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="text-xs px-3 py-1 bg-[#240607] text-[#A4A4A4] rounded border border-[#240607] hover:border-[#F01E2C]/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-3 py-1 bg-[#240607] text-[#A4A4A4] rounded">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && project.githubUrl !== '#' ? (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-sm text-[#A4A4A4] hover:text-[#F01E2C] transition-colors"
            >
              <FaGithub size={16} />
              GitHub
            </motion.a>
          ) : null}
          {project.liveUrl && project.liveUrl !== '#' ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-sm text-[#A4A4A4] hover:text-[#F01E2C] transition-colors"
            >
              {project.liveUrl.includes('drive.google.com') ? (
                <>
                  <Download size={16} />
                  Download
                </>
              ) : project.liveUrl.includes('roblox.com') ? (
                <>
                  <ExternalLink size={16} />
                  Coba Sekarang
                </>
              ) : (
                <>
                  <ExternalLink size={16} />
                  Live Demo
                </>
              )}
            </motion.a>
          ) : null}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#F01E2C]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.article>
  );
}
