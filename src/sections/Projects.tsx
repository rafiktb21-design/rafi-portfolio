import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '-72%' : '72%',
    rotateY: direction > 0 ? 22 : -22,
    scale: 0.9,
    opacity: 0.45,
    zIndex: 2,
  }),
  center: {
    x: 0,
    rotateY: 0,
    scale: 1,
    opacity: 1,
    zIndex: 3,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '18%' : '-18%',
    rotateY: direction > 0 ? -12 : 12,
    scale: 0.94,
    opacity: 0.32,
    zIndex: 1,
  }),
};

function actionText(url?: string) {
  if (url?.includes('drive.google.com')) return 'Unduh aplikasi';
  if (url?.includes('roblox.com')) return 'Lihat pengalaman';
  return 'Buka proyek';
}

function ActionIcon({ url }: { url?: string }) {
  return url?.includes('drive.google.com') ? <Download size={16} /> : <ExternalLink size={16} />;
}

export function Projects() {
  const [[activeIndex, direction], setSlide] = useState([0, 0]);
  const reduceMotion = useReducedMotion();
  const project = projects[activeIndex];

  const goTo = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + projects.length) % projects.length;
    setSlide([normalizedIndex, nextIndex > activeIndex || (activeIndex === projects.length - 1 && normalizedIndex === 0) ? 1 : -1]);
  };

  return (
    <section id="project" className="relative overflow-hidden bg-[#101010] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F01E2C]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-10 lg:px-20">
        <SectionHeading
          title="Projects"
          subtitle="Pilihan karya digital yang saya rancang, bangun, dan terus kembangkan."
        />

        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#F01E2C]" />
            <p className="text-sm text-[#A4A4A4]">Koleksi proyek</p>
          </div>
          <p className="text-sm text-[#A4A4A4]">{String(activeIndex + 1).padStart(2, '0')} <span className="mx-1 text-[#F01E2C]">/</span> {String(projects.length).padStart(2, '0')}</p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Proyek sebelumnya"
            className="absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-x-[calc(100%+1.5rem)] -translate-y-1/2 items-center justify-center border border-white/20 bg-[#080808] text-white transition-colors hover:border-[#F01E2C] hover:bg-[#F01E2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="relative min-h-[670px] overflow-hidden border border-white/10 bg-[#080808] [perspective:1800px] sm:min-h-[580px] lg:min-h-[470px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.article
                key={project.id}
                custom={direction}
                variants={slideVariants}
                initial={reduceMotion ? { opacity: 0 } : 'enter'}
                animate="center"
                exit={reduceMotion ? { opacity: 0 } : 'exit'}
                transition={{ x: { type: 'spring', stiffness: 175, damping: 24 }, rotateY: { type: 'spring', stiffness: 150, damping: 22 }, opacity: { duration: 0.35 }, scale: { duration: 0.45 } }}
                style={{ transformStyle: 'preserve-3d', transformOrigin: direction > 0 ? 'left center' : 'right center' }}
                drag={reduceMotion ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) goTo(activeIndex + 1);
                  if (info.offset.x > 80) goTo(activeIndex - 1);
                }}
                className="absolute inset-0 grid cursor-grab select-none overflow-hidden active:cursor-grabbing lg:grid-cols-[1.16fr_0.84fr]"
              >
                <div className="relative min-h-[285px] overflow-hidden lg:min-h-0">
                  <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover" draggable={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#080808]/25" />
                  <span className="absolute left-5 top-5 border border-white/25 bg-[#080808]/85 px-3 py-1.5 text-xs font-medium text-[#F7F7F7] backdrop-blur-sm">
                    {project.status === 'completed' ? 'Selesai' : 'Sedang dikembangkan'}
                  </span>
                </div>

                <div className="flex flex-col p-7 md:p-9">
                  <p className="text-sm font-medium text-[#F01E2C]">Proyek {String(activeIndex + 1).padStart(2, '0')}</p>
                  <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#F7F7F7] md:text-4xl">{project.title}</h3>
                  <p className="mt-5 max-w-[52ch] text-sm leading-7 text-[#A4A4A4] md:text-base">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => <span key={tech} className="border border-white/10 px-2.5 py-1 text-xs text-[#D1D1D1]">{tech}</span>)}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#F01E2C] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF3845] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{actionText(project.liveUrl)} <ActionIcon url={project.liveUrl} /></a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#D1D1D1] transition-colors hover:text-white"><FaGithub size={17} /> Kode sumber</a>}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Proyek berikutnya"
            className="absolute right-0 top-1/2 z-20 hidden h-14 w-14 translate-x-[calc(100%+1.5rem)] -translate-y-1/2 items-center justify-center border border-white/20 bg-[#080808] text-white transition-colors hover:border-[#F01E2C] hover:bg-[#F01E2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Proyek sebelumnya" className="flex h-10 w-10 items-center justify-center border border-white/20 text-white md:hidden"><ChevronLeft size={20} /></button>
          {projects.map((item, index) => <button key={item.id} type="button" onClick={() => goTo(index)} aria-label={`Lihat ${item.title}`} className={`h-1.5 transition-all ${index === activeIndex ? 'w-10 bg-[#F01E2C]' : 'w-4 bg-white/25 hover:bg-white/60'}`} />)}
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Proyek berikutnya" className="flex h-10 w-10 items-center justify-center border border-white/20 text-white md:hidden"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}
