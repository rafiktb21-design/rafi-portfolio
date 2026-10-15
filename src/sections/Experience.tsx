import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-[#080808] overflow-hidden"
    >
      {/* Background accents with animation */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_top_left,_#240607/40_0%,_transparent_70%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_bottom_right,_#240607/40_0%,_transparent_70%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#F01E2C/15_0%,_transparent_70%)]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Experience"
            subtitle="Perjalanan pendidikan dan pengalaman yang telah saya jalani"
          />
        </motion.div>

        <ExperienceTimeline experiences={experiences} />

        {/* Note about experience */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5 }}
          className="text-center text-[#A4A4A4] text-sm mt-16"
        >
          Pengalaman magang dan kegiatan lainnya akan diperbarui seiring waktu.
        </motion.p>
      </div>
    </section>
  );
}
