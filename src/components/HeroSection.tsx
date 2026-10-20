import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import '../styles/animations.css';

// Generate random particles
const particles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 15,
  duration: 10 + Math.random() * 15,
  size: 1 + Math.random() * 4,
}));

export function HeroSection() {
  const scrollToProject = () => {
    const element = document.getElementById('project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex overflow-hidden bg-[#080808]"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080808]" />
      
      {/* Radial gradient maroon glow - center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[120%] h-[100%] bg-[radial-gradient(ellipse_at_center,_#240607_0%,_#080808_60%)]" />
      </div>

      {/* Intense red glow behind photo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,_#F01E2C/30_0%,_#240607/50_35%,_transparent_70%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full bg-[#F01E2C]"
            style={{
              left: `${particle.left}%`,
              bottom: '-10px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#080808_100%)]" />

      {/* Large Name - Behind Photo */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-10">
        <div className="text-center w-full px-2 md:px-8">
          {/* RAFI - with gradient animation */}
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[25vw] md:text-[18vw] lg:text-[14vw] font-black leading-[0.8] tracking-tight animate-name-gradient name-3d"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            RAFI
          </motion.h1>
          {/* RAMADHANI - with gradient animation, slightly delayed */}
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[22vw] md:text-[15vw] lg:text-[11vw] font-black leading-[0.85] tracking-[0.02em] animate-name-gradient name-3d"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              animationDelay: '0.3s',
            }}
          >
            RAMADHANI
          </motion.h1>
        </div>
      </div>

      {/* Profile Photo - Bottom Aligned */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -100, scale: 0.9 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center z-20 pointer-events-none"
      >
        {/* Intense glow behind photo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(ellipse_at_center_bottom,_#F01E2C/40_0%,_#240607/60_30%,_transparent_60%)] blur-3xl animate-glow-pulse" />
        
        {/* Photo container - Bottom Aligned */}
        <div className="relative flex items-end justify-center">
          {/* Red rim glow around photo */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-gradient-to-t from-[#F01E2C]/50 via-[#F01E2C]/20 to-transparent blur-2xl opacity-60" />
          
          {/* Photo - Large, bottom aligned */}
          <img
            src="/images/rafi-profile.png"
            alt="Rafi Ramadhani"
            className="relative h-[85vh] w-auto object-contain object-bottom drop-shadow-[0_0_120px_rgba(240,30,44,0.7)]"
          />
        </div>
      </motion.div>

      {/* Left Bottom - Info & Buttons */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -100, y: -50 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute left-6 md:left-12 lg:left-16 bottom-20 md:bottom-24 z-30 max-w-xs md:max-w-sm"
      >
        {/* Role & Info */}
        <div className="mb-6">
          <p className="text-sm md:text-base lg:text-lg font-medium tracking-[0.2em] text-[#A4A4A4] uppercase mb-1">
            Informatics Student & Developer
          </p>
          <p className="text-xs md:text-sm lg:text-base text-[#F01E2C] font-medium tracking-wide">
            Universitas Teknokrat Indonesia
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          {/* View My Work Button */}
          <motion.button
            onClick={scrollToProject}
            className="group relative px-6 py-2.5 md:px-8 md:py-3 bg-[#F01E2C] text-white font-semibold text-xs md:text-sm tracking-wider overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">VIEW MY WORK</span>
            <div className="absolute inset-0 bg-[#FF3845] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>

          {/* Contact Me Button */}
          <motion.button
            onClick={scrollToContact}
            className="group relative px-6 py-2.5 md:px-8 md:py-3 bg-transparent border border-[#F01E2C] text-white font-semibold text-xs md:text-sm tracking-wider overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">CONTACT ME</span>
            <div className="absolute inset-0 bg-[#F01E2C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => {
          const element = document.getElementById('about');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 right-6 md:right-12 lg:right-16 z-30 text-[#A4A4A4] hover:text-[#F01E2C] transition-colors cursor-pointer"
        aria-label="Scroll ke About"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}
