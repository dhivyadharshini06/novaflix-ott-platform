
import { Movie, Plan } from './types';

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Neon Odyssey',
    genre: 'Sci-Fi',
    rating: 8.9,
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    description: 'A journey through a futuristic megacity where dreams and reality blur.',
    year: 2024,
    duration: '2h 15m',
    category: 'Trending'
  },
  {
    id: '2',
    title: 'Midnight Protocol',
    genre: 'Thriller',
    rating: 7.5,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    description: 'An underground hacking group discovers a secret that could collapse the global economy.',
    year: 2023,
    duration: '1h 58m',
    category: 'Trending'
  },
  {
    id: '3',
    title: 'Shadow of Valor',
    genre: 'Action',
    rating: 8.2,
    imageUrl: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&q=80&w=800',
    description: 'A retired special forces operator is pulled back into action for one final rescue mission.',
    year: 2024,
    duration: '2h 10m',
    category: 'Trending'
  },
  {
    id: '4',
    title: 'Ethereal Whispers',
    genre: 'Drama',
    rating: 9.1,
    imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800',
    description: 'A heartwarming story about a mute musician discovering their voice through nature.',
    year: 2023,
    duration: '2h 30m',
    category: 'Top Rated'
  },
  {
    id: '5',
    title: 'Gravity\'s Edge',
    genre: 'Sci-Fi',
    rating: 8.7,
    imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea206f25ab?auto=format&fit=crop&q=80&w=800',
    description: 'Astronauts on a mission to the edge of the solar system face an anomaly that defies physics.',
    year: 2024,
    duration: '2h 45m',
    category: 'Top Rated'
  },
  {
    id: '6',
    title: 'The Silent Partner',
    genre: 'Thriller',
    rating: 7.8,
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
    description: 'In the high-stakes world of finance, trust is the most dangerous currency.',
    year: 2023,
    duration: '1h 45m',
    category: 'Action'
  },
  {
    id: '7',
    title: 'City of Embers',
    genre: 'Fantasy',
    rating: 7.2,
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    description: 'A magical kingdom faces its darkest hour as the eternal flame begins to fade.',
    year: 2024,
    duration: '2h 05m',
    category: 'Action'
  },
  {
    id: '8',
    title: 'Velocity',
    genre: 'Action',
    rating: 8.4,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    description: 'Street racing meets corporate espionage in this high-octane thriller.',
    year: 2023,
    duration: '1h 55m',
    category: 'Action'
  },
  {
    id: '9',
    title: 'Crimson Tide',
    genre: 'Drama',
    rating: 8.0,
    imageUrl: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&q=80&w=800',
    description: 'A powerful family dynasty struggles to stay together during a national crisis.',
    year: 2022,
    duration: '2h 20m',
    category: 'Drama'
  },
  {
    id: '10',
    title: 'Infinite Horizon',
    genre: 'Sci-Fi',
    rating: 8.6,
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    description: 'Exploring the beauty and isolation of long-term space colonization.',
    year: 2024,
    duration: '2h 35m',
    category: 'Sci-Fi'
  },
  {
    id: '11',
    title: 'Laughter Therapy',
    genre: 'Comedy',
    rating: 7.1,
    imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=800',
    description: 'A stressed-out CEO is forced to attend a mandatory stand-up comedy workshop.',
    year: 2023,
    duration: '1h 38m',
    category: 'Comedy'
  },
  {
    id: '12',
    title: 'Urban Jungle',
    genre: 'Action',
    rating: 7.9,
    imageUrl: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=800',
    description: 'A gritty look at the lives of undercover cops in the world\'s most dangerous city.',
    year: 2024,
    duration: '2h 12m',
    category: 'Thriller'
  },
  {
    id: '13',
    title: 'Paradox',
    genre: 'Sci-Fi',
    rating: 9.3,
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800',
    description: 'A scientist discovers how to send messages to his past self, with disastrous results.',
    year: 2024,
    duration: '2h 00m',
    category: 'Sci-Fi'
  },
  {
    id: '14',
    title: 'Wild Card',
    genre: 'Comedy',
    rating: 6.8,
    imageUrl: 'https://images.unsplash.com/photo-1543533907-270751b88e1c?auto=format&fit=crop&q=80&w=800',
    description: 'Two mismatched strangers inherit a casino in Las Vegas.',
    year: 2023,
    duration: '1h 50m',
    category: 'Comedy'
  },
  {
    id: '15',
    title: 'Beyond the Veil',
    genre: 'Horror',
    rating: 7.4,
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    description: 'An investigation into a haunted mansion reveals secrets better left forgotten.',
    year: 2023,
    duration: '1h 45m',
    category: 'Thriller'
  },
  {
    id: '16',
    title: 'Steel Heart',
    genre: 'Action',
    rating: 8.5,
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800',
    description: 'In a world where cyborgs are second-class citizens, one rebel fights for equality.',
    year: 2024,
    duration: '2h 25m',
    category: 'Action'
  },
  {
    id: '17',
    title: 'The Great Escape',
    genre: 'Action',
    rating: 8.1,
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
    description: 'A master thief plans his most ambitious heist yet from inside a high-security prison.',
    year: 2023,
    duration: '2h 10m',
    category: 'Action'
  },
  {
    id: '18',
    title: 'Sunsets in Paris',
    genre: 'Romance',
    rating: 7.7,
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    description: 'Two writers find inspiration and love while walking through the streets of Paris.',
    year: 2022,
    duration: '1h 55m',
    category: 'Drama'
  },
  {
    id: '19',
    title: 'Ancient Secrets',
    genre: 'Adventure',
    rating: 8.3,
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    description: 'Archaeologists uncover a temple that holds the key to an ancient civilization\'s power.',
    year: 2024,
    duration: '2h 20m',
    category: 'Drama'
  },
  {
    id: '20',
    title: 'Virtual Reality',
    genre: 'Sci-Fi',
    rating: 8.8,
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800',
    description: 'A teenager discovers that the world is actually a massive multiplayer simulation.',
    year: 2024,
    duration: '2h 15m',
    category: 'Sci-Fi'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$9.99',
    quality: 'Good',
    resolution: '720p',
    devices: 1,
    features: ['Unlimited movies & TV shows', 'Watch on your laptop, TV, phone and tablet', 'Ads included']
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$15.49',
    quality: 'Better',
    resolution: '1080p',
    devices: 2,
    features: ['Unlimited movies & TV shows', 'Watch on your laptop, TV, phone and tablet', 'No ads', 'Download on 2 devices']
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$22.99',
    quality: 'Best',
    resolution: '4K + HDR',
    devices: 4,
    features: ['Unlimited movies & TV shows', 'Watch on your laptop, TV, phone and tablet', 'No ads', 'Download on 4 devices', 'Spatial Audio']
  }
];
