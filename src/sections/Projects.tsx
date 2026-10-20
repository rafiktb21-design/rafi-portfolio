import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 36 : -36,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -36 : 36,
    opacity: 0,
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
    <section id="project" className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#101010] py-12 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F01E2C]/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
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
            className="group absolute -left-6 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#F01E2C] bg-[#F01E2C] text-white shadow-[0_0_0_6px_rgba(240,30,44,0.12)] transition-all duration-300 hover:scale-110 hover:bg-[#FF3845] hover:shadow-[0_0_0_10px_rgba(240,30,44,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex"
          >
            <ChevronLeft size={26} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </button>

          <div className="relative min-h-[500px] overflow-hidden border border-white/10 bg-[#080808] sm:min-h-[440px] lg:min-h-[min(56vh,500px)]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={project.id}
                custom={direction}
                variants={slideVariants}
                initial={reduceMotion ? { opacity: 0 } : 'enter'}
                animate="center"
                exit={reduceMotion ? { opacity: 0 } : 'exit'}
                transition={{ x: { duration: 0.32, ease: 'easeOut' }, opacity: { duration: 0.26, ease: 'easeOut' } }}
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
            className="group absolute -right-6 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#F01E2C] bg-[#F01E2C] text-white shadow-[0_0_0_6px_rgba(240,30,44,0.12)] transition-all duration-300 hover:scale-110 hover:bg-[#FF3845] hover:shadow-[0_0_0_10px_rgba(240,30,44,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex"
          >
            <ChevronRight size={26} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Proyek sebelumnya" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F01E2C] text-white shadow-[0_0_0_4px_rgba(240,30,44,0.12)] md:hidden"><ChevronLeft size={21} /></button>
          {projects.map((item, index) => <button key={item.id} type="button" onClick={() => goTo(index)} aria-label={`Lihat ${item.title}`} className={`h-1.5 transition-all ${index === activeIndex ? 'w-10 bg-[#F01E2C]' : 'w-4 bg-white/25 hover:bg-white/60'}`} />)}
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Proyek berikutnya" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F01E2C] text-white shadow-[0_0_0_4px_rgba(240,30,44,0.12)] md:hidden"><ChevronRight size={21} /></button>
        </div>
      </div>
    </section>
  );
}
