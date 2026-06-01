export interface ClientReview {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

export interface ProjectDetailItem {
  label: string;
  value: string;
}

export interface DetailedProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure';
  location: string;
  image: string;
  year: string;
  area: string;
  description: string;
  highlights: string[];
  images: string[];
  clientReview: ClientReview;
  details: ProjectDetailItem[];
  relatedIds: string[];
}

export const PROJECTS_DATA: DetailedProjectItem[] = [
  {
    id: 'lumiere-tower',
    title: 'Lumière Corporate Tower',
    category: 'Commercial',
    location: 'Hudson Yards, New York',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    area: '450,000 sq ft',
    description: 'A 60-story commercial skyscraper featuring a double-skin glass facade, structural steel outriggers, and a massive 4-story green lobby. Engineered to withstand high-velocity wind corridors while setting a new standard for LEED Gold sustainability in high-rise workspaces.',
    highlights: [
      'LEED Platinum Certified design',
      'High-wind active mass damping system',
      'Rooftop sky-garden and observation deck',
      'Double-skin energy efficient glass facade',
      'Column-free interior workspace layout'
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542362567-b07eac790acd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ],
    clientReview: {
      name: 'Julianne Vance',
      role: 'VP of Global Facilities',
      company: 'Apex Technologies',
      quote: 'THREE L delivered our flagship corporate headquarters ahead of schedule. Their attention to structural detailing and willingness to solve complex seismic challenges was nothing short of exemplary.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    },
    details: [
      { label: 'Client', value: 'Apex Technologies Inc.' },
      { label: 'Lead Architect', value: 'Foster + Partners' },
      { label: 'Structural Steel', value: 'Grade 65 High-Strength Steel' },
      { label: 'Total Budget', value: '$380 Million' }
    ],
    relatedIds: ['nexus-center', 'aurora-residences', 'helix-viaduct']
  },
  {
    id: 'solaria-estate',
    title: 'Solaria Cliffside Mansion',
    category: 'Residential',
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    year: '2023',
    area: '18,500 sq ft',
    description: 'An architectural masterwork cantilevered over a cliffside, supported by 150-foot deep concrete piers and featuring column-free glass walls. It utilizes a custom seismic isolation system that disconnects the main concrete body from the bedrock foundation during tremors.',
    highlights: [
      'Cantilevered 75-foot infinity pool',
      'Active seismic bedrock isolators',
      'Custom volcanic stone interior finishes',
      'Hurricane-grade impact-resistant structural glass',
      'Subterranean automated 6-car gallery'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    ],
    clientReview: {
      name: 'Marcus Thorne',
      role: 'Private Developer',
      company: 'Thorne Luxury Living',
      quote: 'The Malibu estate they constructed represents the absolute pinnacle of residential architecture. The column-free glass walls cantilevered over the ocean are an engineering feat that continues to wow every guest.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    },
    details: [
      { label: 'Client', value: 'The Thorne Trust' },
      { label: 'Interior Designer', value: 'Zaha Hadid Interiors' },
      { label: 'Foundation Tech', value: 'Cast-in-place Concrete Micropiles' },
      { label: 'Total Budget', value: '$42 Million' }
    ],
    relatedIds: ['aurora-residences', 'lumiere-tower', 'zephyr-bridge']
  },
  {
    id: 'zephyr-bridge',
    title: 'Zephyr Cable Bridge',
    category: 'Infrastructure',
    location: 'Seattle, Washington',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    area: '1.2 Miles',
    description: 'A modern cable-stayed bridge incorporating smart fiber-optic sensors, high-strength carbon fiber cables, and aerodynamic concrete pylons. Built across a marine corridor characterized by high seismic instability and extreme tidal currents.',
    highlights: [
      'Aerodynamic wind-tunnel tested pylons',
      'Real-time fiber-optic structural monitoring',
      'Eco-friendly bridge surface water runoff filters',
      'High-strength carbon-fiber stay cables',
      'Self-compacting concrete structural footings'
    ],
    images: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
    ],
    clientReview: {
      name: 'Sarah Patel',
      role: 'Director of Infrastructure',
      company: 'Bay Area Development',
      quote: 'For the High-Speed Viaduct and bridge projects, their use of precast segmental construction minimized traffic disruption. Their engineering precision ensured perfect alignment across complex spans.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    details: [
      { label: 'Client', value: 'Washington Dept of Transportation' },
      { label: 'Design-Build Partner', value: 'THREE L & AECOM' },
      { label: 'Cable Type', value: 'Carbon-Fiber Reinforced Polymer' },
      { label: 'Total Budget', value: '$840 Million' }
    ],
    relatedIds: ['helix-viaduct', 'lumiere-tower', 'nexus-center']
  },
  {
    id: 'nexus-center',
    title: 'Nexus Innovation Hub',
    category: 'Commercial',
    location: 'Austin, Texas',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    area: '210,000 sq ft',
    description: 'A low-rise corporate campus optimized for collaboration, featuring cross-laminated timber (CLT) structures and solar-active roof paneling. It integrates high-performance geothermal HVAC and an optimized central structural core to allow broad open interior floor layouts.',
    highlights: [
      'Net-Zero energy design structure',
      'Cross-laminated timber structural core',
      'High-performance geothermal climate control',
      'Rainwater filtration and cooling system',
      'Active solar building facade cladding'
    ],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800'
    ],
    clientReview: {
      name: 'Julianne Vance',
      role: 'VP of Global Facilities',
      company: 'Apex Technologies',
      quote: 'THREE L has completely redefined our expectations. The Nexus Hub is a model of sustainability and engineering elegance. The timber layout matches our green objectives perfectly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    },
    details: [
      { label: 'Client', value: 'Nexus Properties Ltd' },
      { label: 'Material Supplier', value: 'TimberTech Structures' },
      { label: 'LEED Level', value: 'LEED Platinum Certified' },
      { label: 'Total Budget', value: '$110 Million' }
    ],
    relatedIds: ['lumiere-tower', 'zephyr-bridge', 'solaria-estate']
  },
  {
    id: 'aurora-residences',
    title: 'Aurora Sky Residences',
    category: 'Residential',
    location: 'Miami, Florida',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    area: '320,000 sq ft',
    description: 'A luxury residential high-rise with curved concrete balconies styled after rolling ocean waves. Featuring aerodynamic wind-deflecting structural nodes, post-tensioned floor slabs, and hurricane Category 5 wind endurance engineering.',
    highlights: [
      'Hurricane Category 5 wind deflection design',
      'Post-tensioned lightweight concrete slabs',
      'Private marina yacht slips and dock access',
      'Sleek wave-pattern balcony designs',
      'Multi-tier smart mechanical elevator system'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800'
    ],
    clientReview: {
      name: 'Marcus Thorne',
      role: 'Private Developer',
      company: 'Thorne Luxury Living',
      quote: 'The design-build execution of Aurora Sky Residences sets a new bar for coastal developments. It combines structural safety in rough tropical climates with supreme residential luxury.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    },
    details: [
      { label: 'Client', value: 'Aurora Realty Group' },
      { label: 'Wind Engineer', value: 'RWDI Consultants' },
      { label: 'Concrete Spec', value: 'Ultra-High Performance Concrete (UHPC)' },
      { label: 'Total Budget', value: '$195 Million' }
    ],
    relatedIds: ['solaria-estate', 'lumiere-tower', 'helix-viaduct']
  },
  {
    id: 'helix-viaduct',
    title: 'Helix High-Speed Viaduct',
    category: 'Infrastructure',
    location: 'San Francisco, California',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
    year: '2026',
    area: '3.4 Miles',
    description: 'An elevated railway viaduct utilizing pre-cast segmental concrete structures, designed for minimal disruption to the urban environment. Employs advanced double-torsion shock absorption piers designed to dissipate seismic energy.',
    highlights: [
      'Precast segmental fast-assembly girders',
      'Seismic double-torsion shock absorption piers',
      'High acoustic-isolation noise dampening panels',
      'Low-weight hollow-box concrete cross sections',
      'Intelligent rail-tension tracking sensors'
    ],
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
    ],
    clientReview: {
      name: 'Sarah Patel',
      role: 'Director of Infrastructure',
      company: 'Bay Area Development',
      quote: 'THREE L has been an invaluable asset to this regional expansion. The Helix Viaduct is a marvel of urban planning, civil engineering, and public transit optimization.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    details: [
      { label: 'Client', value: 'California Transit Authority' },
      { label: 'Seismic Specialist', value: 'Miyamoto International' },
      { label: 'Tensioning Tech', value: 'Internal Multi-strand Post-tensioning' },
      { label: 'Total Budget', value: '$1.1 Billion' }
    ],
    relatedIds: ['zephyr-bridge', 'lumiere-tower', 'aurora-residences']
  }
];
