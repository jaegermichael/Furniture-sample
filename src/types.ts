export interface Product {
  id: string;
  name: string;
  category: 'living-room' | 'bedroom' | 'dining-room' | 'office' | 'outdoor';
  description: string;
  price: string;
  imageUrl: string;
  details: string[];
  specs: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  avatarUrl: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  side: 'left' | 'right';
  specs: { label: string; value: string }[];
}

export interface GalleryItem {
  id: string;
  category: 'living-room' | 'bedroom' | 'dining-room' | 'office' | 'outdoor' | 'all';
  title: string;
  imageUrl: string;
}
