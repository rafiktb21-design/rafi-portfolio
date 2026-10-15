// Social media links
// Note: Replace placeholder URLs with actual links

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon identifier
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/raffttt_/',
    icon: 'instagram',
    ariaLabel: 'Kunjungi profil Instagram Rafi Ramadhani',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafi-ramadhani/',
    icon: 'linkedin',
    ariaLabel: 'Kunjungi profil LinkedIn Rafi Ramadhani',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rafiktb21-design/',
    icon: 'github',
    ariaLabel: 'Kunjungi profil GitHub Rafi Ramadhani',
  },
];
