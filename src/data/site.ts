// Single source of truth for site copy, links, and work items.

export const site = {
  name: 'Ben Kaye',
  title: 'Ben Kaye - Spatial AI',
  description:
    'Ben Kaye is a researcher in 3D computer vision at the Visual Geometry Group, University of Oxford, and the founder of a Y Combinator-backed robotics startup.',
  url: 'https://ben-kaye.github.io',
  role: 'PhD candidate, Visual Geometry Group, Oxford',
  bio: [
    'I research learned 3D reconstruction.',
    'I stepped away to co-found Remy AI, a YC-backed robotics startup, and have since returned to research.',
    'Before the PhD, I built embedded systems for transplant surgery medical devices.',
    'Actively seeking a research internship Summer 2027.'
  ],
  email: 'kaye@robots.ox.ac.uk',
  location: 'Oxford, UK',
};

export type Author = { name: string; eq?: boolean; me?: boolean };

export type WorkItem = {
  title: string;
  year: string;
  blurb: string;
  href: string;
  cta: string;
  tag?: string;
  published?: boolean;
  authors?: Author[];
};

export const work: WorkItem[] = [
  {
    title: 'DualPM: Dual Posed-Canonical Point Maps for 3D Shape and Pose Reconstruction',
    year: '2025',
    blurb:
      'Joint 3D shape and pose reconstruction from a single image.',
    tag: 'CVPR 2025 · Highlight',
    published: true,
    authors: [
      { name: 'Ben Kaye', eq: true, me: true },
      { name: 'Tomas Jakab', eq: true },
      { name: 'Shangzhe Wu' },
      { name: 'Christian Rupprecht' },
      { name: 'Andrea Vedaldi' },
    ],
    href: 'https://dualpm.github.io',
    cta: 'Project page',
  },
  {
    title: 'Reproducing Sparc3D from the paper',
    year: '2025',
    blurb:
      '1024³ signed distance field reconstruction in under 30 seconds on 16 GiB of VRAM. Implemented from the paper before the official code was released.',
    tag: 'Project',
    published: false,
    href: 'https://github.com/ben-kaye/Sparc3Dsdf',
    cta: 'Repository',
  },
];

export type Link = { label: string; href: string };

export const links: Link[] = [
  { label: 'Email', href: 'mailto:kaye@robots.ox.ac.uk' },
  { label: 'GitHub', href: 'https://github.com/ben-kaye' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=2alhGi4AAAAJ' },
  { label: 'X / Twitter', href: 'https://x.com/ben_kaye_eye' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0003-2481-5856' },
];

export const aboutFacts = [
  { when: '2023–present', what: 'PhD, Visual Geometry Group, University of Oxford. Supervised by Andrea Vedaldi and Tomas Jakab.' },
  { when: '2025–2026', what: 'Co-founder, Remy AI (YC W26). Foundation models for warehouse robotics.' },
  { when: '2023–2025', what: 'Consultant, OrganOx. Advancing liver transplant protocols.' },
  { when: '2022–2023', what: 'Embedded systems engineer, OrganOx. Medical devices for transplant surgery.' },
  { when: '2018–2022', what: 'MEng Engineering Science, University of Oxford. First-class honours.' },
];
