import { motion } from 'framer-motion';
import profileGif from '../assets/ChatGPT GIF Oct 20, 2026, 06_43_52 PM.gif';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaPython, FaGraduationCap, FaMapMarkerAlt, FaBullseye, FaHeart } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiDart, SiFirebase, SiFlutter } from 'react-icons/si';

// Tech icons mapping
const techIcons: { name: string; icon: React.ReactNode; color: string }[] = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
  { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
];

// Info cards data
const infoCards = [
  {
    label: 'Education',
    value: 'S1 Informatika, Universitas Teknokrat Indonesia',
    icon: <FaGraduationCap />,
  },
  {
    label: 'Focus',
    value: 'Frontend Developer, Mobile Developer',
    icon: <FaBullseye />,
  },
  {
    label: 'Location',
    value: 'Bandar Lampung, Indonesia',
    icon: <FaMapMarkerAlt />,
  },
  {
    label: 'Interest',
    value: 'Web Development, Mobile App, Technology',
    icon: <FaHeart />,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-[#080808] overflow-hidden"
    >
      <div className="relative w-full max-w-[95vw] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        
        {/* 3 Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column - About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Section Title */}
            <div className="mb-4">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7F7F7] mb-2"
              >
                About Me
              </motion.h2>
              {/* Red underline */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                exit={{ width: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-[#F01E2C]"
              />
            </div>

            {/* Description */}
            <div className="space-y-3 text-[#A4A4A4] text-base md:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Saya adalah mahasiswa Informatika di Universitas Teknokrat Indonesia dengan minat besar dalam pengembangan website, aplikasi mobile, dan teknologi software.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Fokus saya saat ini adalah menguasai teknologi frontend modern seperti React dan TypeScript, serta mengembangkan aplikasi mobile menggunakan Flutter.
              </motion.p>
            </div>
          </motion.div>

          {/* Center Column - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* GIF profil */}
            <div className="relative flex items-center justify-center h-full w-full">
              <img 
                src={profileGif}
                alt="Animasi profil Rafi Ramadhani" 
                className="w-full max-w-[620px] h-auto max-h-[68vh] object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 100, filter: "blur(10px)" }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center gap-3"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-[#101010] border border-[#240607] rounded-lg p-4 hover:border-[#F01E2C]/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-[#F01E2C] text-xl">
                    {card.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#F01E2C] tracking-wider uppercase">
                    {card.label}
                  </span>
                </div>
                <p className="text-base text-[#F7F7F7] leading-relaxed pl-7">
                  {card.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack - Full Width at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.7 }}
            className="text-sm font-semibold text-[#F7F7F7] tracking-wide uppercase mb-4 text-center"
          >
            Tech Stack
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: -30 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#101010] border border-[#240607] rounded-lg hover:border-[#F01E2C]/50 transition-all duration-300 hover:scale-110"
                title={tech.name}
              >
                <div 
                  className="text-2xl md:text-3xl transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
