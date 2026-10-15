export interface Experience {
  id: string;
  type: 'education' | 'internship' | 'activity';
  title: string;
  organization: string;
  period: string;
  description?: string;
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'education-universitas-teknokrat',
    type: 'education',
    title: 'Mahasiswa S1 Informatika',
    organization: 'Universitas Teknokrat Indonesia',
    period: '2023 - Sekarang',
    description: 'NIM: 23312139. Fokus pada pengembangan web, aplikasi mobile, dan teknologi software.',
    isCurrent: true,
  },
  {
    id: 'activity-hima-informatika',
    type: 'activity',
    title: 'Himpunan Mahasiswa Informatika',
    organization: 'Hima Informatika, Universitas Teknokrat Indonesia',
    period: '2024 - 2025',
    description: 'Aktif dalam kegiatan organisasi dan pengembangan skill di bidang teknologi.',
  },
  {
    id: 'activity-bem-ftik',
    type: 'activity',
    title: 'BEM Fakultas Teknik dan Ilmu Komputer',
    organization: 'BEM FTIK, Universitas Teknokrat Indonesia',
    period: '2025 - Sekarang',
    description: 'Berkontribusi dalam kegiatan kemahasiswaan dan pengembangan soft skill.',
    isCurrent: true,
  },
  {
    id: 'internship-kominfo',
    type: 'internship',
    title: 'Magang',
    organization: 'Kominfo Provinsi Lampung',
    period: '2026 - Sekarang',
    description: 'Magang di bidang teknologi informasi dan komunikasi.',
    isCurrent: true,
  },
];
