import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { socialLinks } from '../data/socials';

const iconComponents = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-6"
    >
      {/* Social Icons */}
      <div className="flex flex-col items-center gap-5">
        {socialLinks.map((social, index) => {
          const Icon = iconComponents[social.icon as keyof typeof iconComponents];
          
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="p-2 text-[#A4A4A4] hover:text-[#F01E2C] transition-colors duration-300"
              whileHover={{ scale: 1.2, x: 4 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </div>

      {/* Vertical Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="w-px bg-gradient-to-b from-transparent via-[#F01E2C]/50 to-transparent"
      />
    </motion.div>
  );
}
