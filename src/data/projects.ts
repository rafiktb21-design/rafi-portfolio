export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Website Portfolio',
    description: 'Website portfolio personal dengan desain cinematic dark theme, dibangun menggunakan React, TypeScript, dan Tailwind CSS.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: '/images/project-portfolio.png',
    githubUrl: 'https://github.com/rafiktb21-design/',
    liveUrl: 'https://rafi-portfolio.vercel.app',
    status: 'completed',
  },
  {
    id: 'water-reminder-app',
    title: 'Aplikasi Mobile Pengingat Minum',
    description: 'Aplikasi pengingat minum air berbasis Android yang dibangun dengan Flutter & Firebase. Mengatur jadwal minum otomatis sepanjang hari, memverifikasi kepatuhan lewat absen foto dengan lokasi real-time, serta dilengkapi sistem login multi-akun dan fitur pelacak siklus menstruasi.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Android'],
    thumbnail: '/images/project-water-reminder.png',
    status: 'completed',
  },
  {
    id: 'photobooth-website',
    title: 'Website Photobooth',
    description: 'Website photobooth dengan fitur kamera dan filter, dibangun menggunakan React dan Tailwind CSS.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WebRTC'],
    thumbnail: '/images/project-photobooth.png',
    status: 'completed',
  },
  {
    id: 'roblox-horror-game',
    title: 'Game Roblox Horror Bertema Sekolah',
    description: 'Membuat game menggunakan Roblox Studio dengan bahasa Lua. Game ini bergenre horror dengan tema sekolah yang menyeramkan, dilengkapi dengan atmosfer yang mencekam, efek suara yang mendukung, dan gameplay puzzle yang menantang.',
    technologies: ['Roblox Studio', 'Lua', 'Game Development', '3D Design'],
    thumbnail: '/images/project-roblox-game.png',
    status: 'in-progress',
  },
];
