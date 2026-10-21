import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 32 : -32,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -32 : 32,
    opacity: 0,
  }),
};

function actionText(url?: string) {
  if (url?.includes('drive.google.com')) return 'Unduh Aplikasi';
  if (url?.includes('roblox.com')) return 'Lihat Pengalaman';
  return 'Buka Proyek';
}

function ActionIcon({ url }: { url?: string }) {
  return url?.includes('drive.google.com') ? <Download size={14} /> : <ExternalLink size={14} />;
}

export function Projects() {
  const [[activeIndex, direction], setSlide] = useState([0, 0]);
  const reduceMotion = useReducedMotion();
  const project = projects[activeIndex];

  const goTo = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + projects.length) % projects.length;
    setSlide([
      normalizedIndex,
      nextIndex > activeIndex || (activeIndex === projects.length - 1 && normalizedIndex === 0) ? 1 : -1,
    ]);
  };

  return (
    <section
      id="project"
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#080808] py-6 sm:py-8 lg:py-0"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[radial-gradient(ellipse_at_center,_#F01E2C/10_0%,_transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F01E2C]/50 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative mx-auto w-full max-w-4xl xl:max-w-5xl px-4 sm:px-8 md:px-12 lg:px-14 flex flex-col justify-center"
      >
        <SectionHeading
          title="Projects"
          subtitle="Pilihan karya digital yang saya rancang, bangun, dan kembangkan."
          className="mb-3 sm:mb-4 text-center"
        />

        {/* Header bar: indicator & counter */}
        <div className="mb-2.5 flex items-center justify-between px-1">
          <div className="flex items-center gap-2.5">
            <span className="h-1 w-5 rounded-full bg-[#F01E2C]" />
            <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#A4A4A4] uppercase">Koleksi Proyek</p>
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px] sm:text-xs text-[#A4A4A4]">
            <span className="font-bold text-white">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="text-[#F01E2C]">/</span>
            <span>{String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Card showcase wrapper with desktop navigation arrows */}
        <div className="relative">
          {/* Desktop Prev Button */}
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Proyek sebelumnya"
            className="group absolute -left-5 lg:-left-6 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#141414]/90 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#F01E2C] hover:bg-[#F01E2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F01E2C] md:flex cursor-pointer"
          >
            <ChevronLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          {/* Project Card Container */}
          <div className="relative min-h-[480px] sm:min-h-[440px] lg:h-[390px] xl:h-[410px] overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-white/20">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={project.id}
                custom={direction}
                variants={slideVariants}
                initial={reduceMotion ? { opacity: 0 } : 'enter'}
                animate="center"
                exit={reduceMotion ? { opacity: 0 } : 'exit'}
                transition={{ x: { duration: 0.28, ease: 'easeOut' }, opacity: { duration: 0.22, ease: 'easeOut' } }}
                drag={reduceMotion ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) goTo(activeIndex + 1);
                  if (info.offset.x > 60) goTo(activeIndex - 1);
                }}
                className="absolute inset-0 grid cursor-grab select-none overflow-hidden active:cursor-grabbing lg:grid-cols-12"
              >
                {/* Image Section */}
                <div className="group relative h-44 sm:h-48 lg:h-full lg:col-span-7 overflow-hidden bg-[#121212]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    draggable={false}
                  />
                  {/* Subtle edge gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0e0e0e]" />

                  {/* Status Badge */}
                  <div className="absolute left-3.5 top-3.5 flex items-center gap-2 rounded-full border border-white/15 bg-black/75 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === 'completed' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                      }`}
                    />
                    <span>{project.status === 'completed' ? 'Selesai' : 'Sedang dikembangkan'}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between p-4 sm:p-5 lg:p-6 lg:col-span-5 bg-[#0e0e0e]">
                  <div>
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[#F01E2C] uppercase">
                      PROYEK {String(activeIndex + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-bold leading-tight tracking-tight text-[#F7F7F7]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#A4A4A4] line-clamp-3 lg:line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack & Action buttons */}
                  <div className="mt-3 pt-2.5 border-t border-white/5 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] sm:text-[11px] text-[#D1D1D1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#F01E2C] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-[#F01E2C]/20 transition-all hover:bg-[#FF3845] hover:shadow-[#F01E2C]/40 active:scale-95 cursor-pointer"
                        >
                          {actionText(project.liveUrl)} <ActionIcon url={project.liveUrl} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#D1D1D1] transition-all hover:bg-white/10 hover:text-white active:scale-95 cursor-pointer"
                        >
                          <FaGithub size={14} /> Kode Sumber
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Desktop Next Button */}
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Proyek berikutnya"
            className="group absolute -right-5 lg:-right-6 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#141414]/90 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#F01E2C] hover:bg-[#F01E2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F01E2C] md:flex cursor-pointer"
          >
            <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Bottom Pagination & Mobile Controls */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Proyek sebelumnya"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#141414] text-white hover:bg-[#F01E2C] transition-colors md:hidden cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Lihat ${item.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? 'w-7 bg-[#F01E2C]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Proyek berikutnya"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#141414] text-white hover:bg-[#F01E2C] transition-colors md:hidden cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
