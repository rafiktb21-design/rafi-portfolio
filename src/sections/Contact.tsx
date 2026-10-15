import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SectionHeading } from '../components/SectionHeading';
import { socialLinks } from '../data/socials';

const iconComponents = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#080808] overflow-hidden"
    >
      {/* Background accents with animation */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,_#240607/50_0%,_transparent_70%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_#F01E2C/20_0%,_transparent_70%)]"
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
            title="Let's Connect"
            subtitle="Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >


          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
          >
            {/* Email */}
            <motion.a
              href="mailto:rafiktb21@gmail.com"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-[#101010] border border-[#240607] rounded-lg p-6 hover:border-[#F01E2C]/70 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F01E2C]/0 via-[#F01E2C]/5 to-[#F01E2C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F01E2C] to-[#FF3845] flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Mail size={26} className="text-white" />
              </motion.div>
              <h3 className="relative z-10 font-semibold text-[#F7F7F7] mb-1 text-lg">Email</h3>
              <p className="relative z-10 text-sm text-[#A4A4A4]">
                rafiktb21@gmail.com
              </p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/raffttt_/"
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-[#101010] border border-[#240607] rounded-lg p-6 hover:border-[#F01E2C]/70 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F01E2C]/0 via-[#F01E2C]/5 to-[#F01E2C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F01E2C] to-[#FF3845] flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <FaInstagram size={26} className="text-white" />
              </motion.div>
              <h3 className="relative z-10 font-semibold text-[#F7F7F7] mb-1 text-lg">Instagram</h3>
              <p className="relative z-10 text-sm text-[#A4A4A4]">
                @raffttt_
              </p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://api.whatsapp.com/send/?phone=62895613412010&text=Hai+saya+berminat+berkolaborasi+dengan+anda&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-[#101010] border border-[#240607] rounded-lg p-6 hover:border-[#F01E2C]/70 transition-all duration-300 overflow-hidden cursor-pointer sm:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F01E2C]/0 via-[#F01E2C]/5 to-[#F01E2C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F01E2C] to-[#FF3845] flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <MessageCircle size={26} className="text-white" />
              </motion.div>
              <h3 className="relative z-10 font-semibold text-[#F7F7F7] mb-1 text-lg">WhatsApp</h3>
              <p className="relative z-10 text-sm text-[#A4A4A4]">
                +62 895-6134-12010
              </p>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = iconComponents[social.icon as keyof typeof iconComponents];
              
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  viewport={{ once: false }}
                  transition={{ 
                    delay: 0.7 + index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="w-14 h-14 rounded-full bg-[#101010] border border-[#240607] flex items-center justify-center text-[#A4A4A4] hover:text-[#F01E2C] hover:border-[#F01E2C]/70 transition-all duration-300 shadow-lg"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}
