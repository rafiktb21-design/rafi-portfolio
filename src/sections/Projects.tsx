import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  return (
    <section
      id="project"
      className="relative py-24 md:py-32 bg-[#101010] overflow-hidden"
    >
      {/* Background accents with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#240607] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#240607] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#F01E2C/20_0%,_transparent_70%)]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Projects"
            subtitle="Proyek-proyek yang telah dan sedang saya kerjakan"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Note about more projects */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="text-center text-[#A4A4A4] text-sm mt-12"
        >
          Lebih banyak proyek akan ditambahkan seiring waktu.
        </motion.p>
      </div>
    </section>
  );
}
