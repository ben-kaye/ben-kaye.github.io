// Single source of truth for site copy, links, and work items.

export const site = {
  name: 'Ben Kaye',
  title: 'Ben Kaye - Spatial AI',
  description:
    'Ben Kaye is a researcher in 3D computer vision at the Visual Geometry Group, University of Oxford, and the founder of a Y Combinator-backed robotics startup.',
  url: 'https://ben-kaye.github.io',
  role: 'Computer Vision PhD student at Visual Geometry Group, University of Oxford',
  bio: [
    'I research learned 3D reconstruction. Actively seeking a research internship Summer 2027.'
  ],
  email: 'kaye@robots.ox.ac.uk',
  location: 'Oxford, UK',
};

export type Author = { name: string; eq?: boolean; me?: boolean };

export type Link = { label: string; href: string };

export type WorkItem = {
  title: string;
  year: string;
  blurb: string;
  links: Link[];
  tag?: string;
  published?: boolean;
  authors?: Author[];
  image?: string;
};

export const work: WorkItem[] = [
  {
    title: 'DualPM: Dual Posed-Canonical Point Maps for 3D Shape and Pose Reconstruction',
    year: '2025',
    blurb:
      'Single-image 3D shape and pose recovery for deformable objects such as animals. By predicting paired posed and canonical point maps, deformation falls out as a difference. We train on synthetic data and get state-of-the-art results on real images.',
    tag: 'CVPR 2025 · Highlight',
    published: true,
    authors: [
      { name: 'Ben Kaye', eq: true, me: true },
      { name: 'Tomas Jakab', eq: true },
      { name: 'Shangzhe Wu' },
      { name: 'Christian Rupprecht' },
      { name: 'Andrea Vedaldi' },
    ],
    links: [
      { label: 'Project page', href: 'https://dualpm.github.io' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2412.04464' },
      { label: 'Code', href: 'https://github.com/DualPM/DualPM_Paper' },
    ],
    image: '/img/dualpm.webp',
  },
];

export const links: Link[] = [
  { label: 'Email', href: 'mailto:kaye@robots.ox.ac.uk' },
  { label: 'GitHub', href: 'https://github.com/ben-kaye' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=2alhGi4AAAAJ' },
  { label: 'CV', href: '/cv' },
];

export const aboutFacts = [
  { when: '2023–present', role: 'PhD student, Visual Geometry Group, University of Oxford', detail: 'Supervised by Andrea Vedaldi and Tomas Jakab.' },
  { when: '2025–2026', role: 'Co-founder, Remy AI (YC W26)', detail: 'Foundation models for warehouse robotics.' },
  { when: '2023–2025', role: 'Consultant, OrganOx', detail: 'Advancing liver transplant protocols.' },
  { when: '2022–2023', role: 'Embedded systems engineer, OrganOx', detail: 'Medical devices for transplant surgery.' },
  { when: '2018–2022', role: 'MEng Engineering Science, University of Oxford', detail: 'First-class honours.' },
];
