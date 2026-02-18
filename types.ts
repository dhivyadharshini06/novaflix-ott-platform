
export interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  imageUrl: string;
  description: string;
  year: number;
  duration: string;
  category: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  quality: string;
  resolution: string;
  devices: number;
  features: string[];
}
