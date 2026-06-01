export interface FounderInfo {
  name: string;
  role: string;
  image: string;
  bio: string;
  quote: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will map to Lucide icons
  features: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure';
  location: string;
  image: string;
  year: string;
  area: string;
  description: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  size: 'tall' | 'wide' | 'standard'; // For Masonry layout
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export const SITE_INFO = {
  name: 'AURA STRUCTURES',
  tagline: 'Sculpting Luxury, Engineering Legacies',
  phone: '+1 (800) 420-AURA',
  email: 'contact@aurastructures.com',
  address: 'Level 50, One World Trade, New York, NY 10007',
};

export const FOUNDER_INFO: FounderInfo = {
  name: 'Arthur V. Sterling',
  role: 'Founder & Principal Engineer',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
  bio: 'With over three decades of visionary leadership in structural design, Arthur Sterling has directed the engineering of iconic skylines across five continents. Under his guidance, Aura Structures has pioneered architectural resilience, merging state-of-the-art physics with high-end modern art.',
  quote: 'We do not merely construct buildings; we sculpt monuments that stand as a testament to human potential and engineering excellence.'
};

export const STORY_INFO = {
  title: 'An Unwavering Legacy of Precision',
  paragraphs: [
    'Founded in 1998, Aura Structures emerged from a desire to bridge the gap between architectural poetry and heavy-duty structural feasibility. We started as an elite structural consultancy and quickly grew into a full-cycle design-build firm catering to high-profile commercial and residential clients.',
    'Over the years, we have mastered the art of managing complex engineering undertakings—from sky-bridges suspended in high-wind corridors to luxurious seaside estates built on shifting terrains. Every project is executed with an uncompromising focus on structural integrity, cutting-edge materials, and luxury finishes.'
  ],
  mission: 'To construct timeless, highly-engineered spaces that elevate the human experience, while implementing sustainable practices that safeguard our planet’s future.',
  vision: 'To be the global benchmark for luxury engineering and construction, recognized for architectural masterwork, flawless execution, and safety innovation.'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'arch-design',
    title: 'Architectural Design & Master Planning',
    description: 'Bespoke conceptualization and blueprints combining aesthetic luxury with practical zoning, structural efficiency, and environmental harmony.',
    iconName: 'Compass',
    features: ['Luxury space optimization', '3D BIM modeling & visualization', 'Environmental impact planning']
  },
  {
    id: 'struct-eng',
    title: 'Advanced Structural Engineering',
    description: 'Expert analysis, load calculations, and design of foundations and frames built to withstand high winds, seismic activity, and time.',
    iconName: 'Activity',
    features: ['High-rise wind analysis', 'Seismic reinforcement', 'Foundation depth engineering']
  },
  {
    id: 'lux-res',
    title: 'Luxury Residential Estates',
    description: 'Crafting ultra-premium private estates, luxury villas, and smart residential towers with bespoke architectural detailing and premium materials.',
    iconName: 'Home',
    features: ['Smart home integration', 'Premium marble & steel finishes', 'Private wellness complexes']
  },
  {
    id: 'comm-complex',
    title: 'Corporate & Commercial Complexes',
    description: 'Designing and building state-of-the-art office towers, luxury retail centers, and mixed-use structures that reflect corporate prestige.',
    iconName: 'Building2',
    features: ['LEED gold certification target', 'High-capacity parking systems', 'Modular workspace layouts']
  },
  {
    id: 'infra-dev',
    title: 'Heavy Infrastructure Development',
    description: 'Large-scale civil engineering including modern bridges, smart expressways, and high-tech transit terminals for public and private sectors.',
    iconName: 'Milestone',
    features: ['Post-tensioned concrete designs', 'Smart transit integration', 'Long-span structural steel']
  },
  {
    id: 'green-build',
    title: 'Sustainable & Green Construction',
    description: 'Implementing net-zero energy design, geothermal systems, recycled advanced materials, and solar facades without compromising on aesthetics.',
    iconName: 'Leaf',
    features: ['Solar-integrated cladding', 'Rainwater harvesting systems', 'Geothermal climate control']
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'quality',
    title: 'Uncompromising Quality',
    description: 'We source only premium grade concrete, structural steel, and luxurious finishes, inspected by third-party testing labs.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'safety',
    title: 'Zero-Harm Safety Record',
    description: 'Our site safety standards exceed OSHA guidelines, utilizing AI hazard tracking and regular safety drills.',
    iconName: 'Activity'
  },
  {
    id: 'experience',
    title: 'Decades of Expertise',
    description: 'Our lead engineers and project managers hold advanced degrees and average 20+ years of onsite experience.',
    iconName: 'Award'
  },
  {
    id: 'delivery',
    title: 'Precision Timeline Delivery',
    description: 'Using advanced critical-path scheduling algorithms, we guarantee project completion on or before the agreed date.',
    iconName: 'Clock'
  },
  {
    id: 'innovation',
    title: 'Advanced Construction Tech',
    description: 'We deploy 3D concrete printing, drone surveying, and building information modeling (BIM) to optimize construction.',
    iconName: 'Cpu'
  },
  {
    id: 'satisfaction',
    title: 'Bespoke Client Portals',
    description: 'Clients receive live 24/7 video access to construction sites, detailed budget tracking, and dedicated success managers.',
    iconName: 'Smile'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'lumiere-tower',
    title: 'Lumière Corporate Tower',
    category: 'Commercial',
    location: 'Hudson Yards, New York',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    year: '2024',
    area: '450,000 sq ft',
    description: 'A 60-story commercial skyscraper featuring a double-skin glass facade, structural steel outriggers, and a massive 4-story green lobby.',
    highlights: ['LEED Platinum Certified', 'High-wind damping system', 'Rooftop sky-garden']
  },
  {
    id: 'solaria-estate',
    title: 'Solaria Cliffside Mansion',
    category: 'Residential',
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    year: '2023',
    area: '18,500 sq ft',
    description: 'An architectural masterwork cantilevered over a cliffside, supported by 150-foot deep concrete piers and featuring column-free glass walls.',
    highlights: ['Cantilevered infinity pool', 'Seismic isolators', 'Custom volcanic stone finishes']
  },
  {
    id: 'zephyr-bridge',
    title: 'Zephyr Cable Bridge',
    category: 'Infrastructure',
    location: 'Seattle, Washington',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
    year: '2025',
    area: '1.2 Miles',
    description: 'A modern cable-stayed bridge incorporating smart sensors, high-strength carbon fiber cables, and aerodynamic concrete pylons.',
    highlights: ['Wind-tunnel tested', 'Real-time structural monitoring', 'Eco-friendly water runoff']
  },
  {
    id: 'nexus-center',
    title: 'Nexus Innovation Hub',
    category: 'Commercial',
    location: 'Austin, Texas',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    year: '2025',
    area: '210,000 sq ft',
    description: 'A low-rise corporate campus optimized for collaboration, featuring cross-laminated timber structures and solar-active roof paneling.',
    highlights: ['Net-Zero ready structure', 'Bespoke timber frames', 'Atrium water features']
  },
  {
    id: 'aurora-residences',
    title: 'Aurora Sky Residences',
    category: 'Residential',
    location: 'Miami, Florida',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    year: '2024',
    area: '320,000 sq ft',
    description: 'A residential high-rise with curved concrete balconies representing ocean waves, featuring wind-deflecting structural nodes.',
    highlights: ['Hurricane category 5 wind design', 'Curved concrete structures', 'Private marina access']
  },
  {
    id: 'helix-viaduct',
    title: 'Helix High-Speed Viaduct',
    category: 'Infrastructure',
    location: 'San Francisco, California',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    year: '2026',
    area: '3.4 Miles',
    description: 'An elevated railway viaduct utilizing pre-cast segmental concrete structures, designed for minimal disruption to the urban environment.',
    highlights: ['Precast segmental assembly', 'High seismic flexibility', 'Noise-dampening deck panels']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Concrete Reinforcement Detailing',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    size: 'tall'
  },
  {
    id: 'gal-2',
    title: 'Sleek Atrium Design',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    size: 'standard'
  },
  {
    id: 'gal-3',
    title: 'Tower Crane Operations',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    size: 'wide'
  },
  {
    id: 'gal-4',
    title: 'Bespoke Facade Fitting',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
    size: 'tall'
  },
  {
    id: 'gal-5',
    title: 'Minimalist Interior Steelwork',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
    size: 'standard'
  },
  {
    id: 'gal-6',
    title: 'Suspension Bridge Foundation',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800',
    size: 'wide'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Julianne Vance',
    role: 'VP of Global Facilities',
    company: 'Apex Technologies',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    quote: 'Aura Structures delivered our flagship corporate headquarters ahead of schedule. Their attention to structural detailing and willingness to solve complex seismic challenges was nothing short of exemplary.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Marcus Thorne',
    role: 'Private Developer',
    company: 'Thorne Luxury Living',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    quote: 'The Malibu estate they constructed represents the absolute pinnacle of residential architecture. The column-free glass walls cantilevered over the ocean are an engineering feat that continues to wow every guest.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Sarah Patel',
    role: 'Director of Infrastructure',
    company: 'Bay Area Development',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    quote: 'For the High-Speed Viaduct project, their use of precast segmental construction minimized traffic disruption. Their engineering precision ensured perfect alignment across complex spans.',
    rating: 5
  }
];

export const STATS_DATA = [
  { value: 124, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 28, suffix: '', label: 'Years Experience' },
  { value: 75, suffix: '+', label: 'Engineers & Architects' }
];
