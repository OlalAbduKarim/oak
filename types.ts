// FIX: To resolve "Cannot find namespace 'React'", we import `ReactNode` directly.
import type { ReactNode } from 'react';

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
  webAppLink?: string;
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
    fullText: string;
    author: string;
    date: string;
    imageUrl: string;
}

export interface Value {
    icon: ReactNode;
    title: string;
    description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}