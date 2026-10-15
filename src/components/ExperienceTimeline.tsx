import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase, Users } from 'lucide-react';
import { useRef } from 'react';
import type { Experience } from '../data/experience';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const iconMap = {
  education: GraduationCap,
  internship: Briefcase,
  activity: Users,
};

const colorMap = {
  education: 'from-blue-500 to-blue-600',
  internship: 'from-[#F01E2C] to-[#FF3845]',
  activity: 'from-purple-500 to-purple-600',
};

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Static Background Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 bg-[#240607]" />

      {/* Animated Progress Line - follows scroll */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 overflow-hidden">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-[#F01E2C] via-[#FF3845] to-[#F01E2C]"
        >
          {/* Glow effect at the bottom of the line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-[#F01E2C] blur-md" />
        </motion.div>
      </div>

      <div className="space-y-16 md:space-y-20">
        {experiences.map((exp, index) => {
          const Icon = iconMap[exp.type];
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1,
                ease: "easeOut"
              }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot with Animation */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                className={`absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-br ${colorMap[exp.type]} transform md:-translate-x-1/2 border-4 border-[#080808] z-10`}
                style={{
                  boxShadow: '0 0 20px rgba(240,30,44,0.5)'
                }}
              >
                {exp.isCurrent && (
                  <motion.span 
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [1, 0.6, 1]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`w-full md:w-1/2 pl-10 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative bg-[#101010] border border-[#240607] rounded-lg p-6 hover:border-[#F01E2C]/70 transition-all duration-300 overflow-hidden group ${isEven ? 'md:mr-6' : 'md:ml-6'}`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F01E2C]/0 via-[#F01E2C]/5 to-[#F01E2C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`relative z-10 flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorMap[exp.type]} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={22} className="text-white" />
                    </motion.div>
                    <div className={isEven ? 'md:text-right' : 'md:text-left'}>
                      <p className="text-sm text-[#F01E2C] font-semibold">{exp.period}</p>
                      {exp.isCurrent && (
                        <motion.span 
                          className="text-xs text-green-400 font-medium"
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Sedang Berjalan
                        </motion.span>
                      )}
                    </div>
                  </div>

                  <h3 className="relative z-10 text-xl font-bold text-[#F7F7F7] mb-2">
                    {exp.title}
                  </h3>
                  <p className="relative z-10 text-[#F01E2C] text-sm font-medium mb-3">
                    {exp.organization}
                  </p>
                  {exp.description && (
                    <p className="relative z-10 text-[#A4A4A4] text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {/* Corner accent */}
                  <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-16 h-16 bg-gradient-to-br from-[#F01E2C]/20 to-transparent rounded-bl-lg`} />
                </motion.div>
              </motion.div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
