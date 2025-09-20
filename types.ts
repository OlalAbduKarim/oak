
export interface NavLink {
  label: string;
  path: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: {
    target: string;
    points: string[];
  }[];
  image: string;
  accentColor: string;
}

export interface TeamMember {
  name: string;
  title: string;
  photoUrl: string;
  bio: string;
  vision: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    product: 'Synergy' | 'Agrismart';
}

export interface Metric {
    value: string;
    label: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    imageUrl: string;
}

export interface Value {
    icon: React.ReactNode;
    title: string;
    description: string;
}
