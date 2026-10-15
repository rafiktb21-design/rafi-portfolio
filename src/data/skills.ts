export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Mobile Development',
    items: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    category: 'Backend & Tools',
    items: ['Node.js', 'Git', 'GitHub', 'Python'],
  },
  {
    category: 'Other Skills',
    items: ['Responsive Design', 'UI/UX Design', 'Problem Solving'],
  },
];
