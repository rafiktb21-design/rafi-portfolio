import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { socialLinks } from '../data/socials';

const iconComponents = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] border-t border-[#240607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            className="text-xl font-black tracking-wider text-[#F7F7F7] hover:text-[#F01E2C] transition-colors mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RAFI <span className="text-[#F01E2C]">PORTFOLIO</span>
          </motion.button>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            {['Home', 'About', 'Project', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#A4A4A4] hover:text-[#F7F7F7] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = iconComponents[social.icon as keyof typeof iconComponents];
              
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 rounded-full bg-[#101010] border border-[#240607] flex items-center justify-center text-[#A4A4A4] hover:text-[#F01E2C] hover:border-[#F01E2C]/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#240607] to-transparent mb-6" />

          {/* Copyright */}
          <p className="text-center text-sm text-[#A4A4A4] mb-4">
            © {currentYear} Rafi Ramadhani. All rights reserved.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-[#A4A4A4] hover:text-[#F01E2C] transition-colors"
            whileHover={{ y: -2 }}
          >
            <ArrowUp size={16} className="group-hover:animate-bounce" />
            Kembali ke atas
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
