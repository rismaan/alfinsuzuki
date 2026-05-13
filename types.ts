export interface Promo {
  title: string;
  description: string;
}

export interface CarVariant {
  name: string;
  price: number;
}

export interface CarColor {
  name: string;
  hex: string | string[];
  imageUrl: string;
}

export interface Car {
  id: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  features: { iconUrl: string; text: string }[];
  colors: CarColor[];
  variants: CarVariant[];
  promo?: Promo;
  saleTags?: string[];
}

export interface Testimonial {
  name: string;
  car: string;
  imageUrl: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  publishDate: string;
}

export interface TestDriveData {
  name: string;
  car: string;
  address: string;
  date: string;
  time: string;
}