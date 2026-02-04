export type Book = {
  id: string;
  title: string;
  author: string;
  price: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
  format: 'Hardcover' | 'Paperback' | 'eBook';
  rating: string;
  genre: string;
  isbn: string;
  seller: string;
  description: string;
};

export const featuredGenres = [
  'Literary Fiction',
  'Science Fiction',
  'Fantasy',
  'Mystery',
  'Nonfiction',
  'Young Adult',
  'History',
  'Business',
];

export const books: Book[] = [
  {
    id: 'harbor-light',
    title: 'Harbor Light',
    author: 'Camille Reyes',
    price: '$18.00',
    condition: 'New',
    format: 'Hardcover',
    rating: '4.8',
    genre: 'Literary Fiction',
    isbn: '978-1-4028-9462-6',
    seller: 'Seabrook Books',
    description:
      'A luminous story about memory, migration, and the architecture of belonging.',
  },
  {
    id: 'signal-forest',
    title: 'Signal in the Forest',
    author: 'Arun Desai',
    price: '$12.50',
    condition: 'Good',
    format: 'Paperback',
    rating: '4.6',
    genre: 'Science Fiction',
    isbn: '978-1-4028-9463-3',
    seller: 'Northwind Sellers',
    description:
      'A tactical expedition uncovers a signal that challenges everything we know about time.',
  },
  {
    id: 'glass-atlas',
    title: 'The Glass Atlas',
    author: 'Jade Okoro',
    price: '$22.00',
    condition: 'Like New',
    format: 'Hardcover',
    rating: '4.9',
    genre: 'Fantasy',
    isbn: '978-1-4028-9464-0',
    seller: 'Mythic Reads',
    description:
      'An apothecary must map a shifting world before the atlas closes forever.',
  },
  {
    id: 'quiet-waters',
    title: 'Quiet Waters',
    author: 'Hannah Wells',
    price: '$10.00',
    condition: 'Fair',
    format: 'Paperback',
    rating: '4.2',
    genre: 'Mystery',
    isbn: '978-1-4028-9465-7',
    seller: 'Dockside Books',
    description:
      'A coastal town hides a decades-old secret that refuses to stay buried.',
  },
  {
    id: 'maker-notes',
    title: 'Maker Notes',
    author: 'Devon Hart',
    price: '$16.00',
    condition: 'New',
    format: 'Paperback',
    rating: '4.5',
    genre: 'Business',
    isbn: '978-1-4028-9466-4',
    seller: 'Foundry Press',
    description:
      'A practical guide to building resilient teams and modern product cultures.',
  },
  {
    id: 'echo-archive',
    title: 'Echo Archive',
    author: 'Lina Moroz',
    price: '$14.00',
    condition: 'Good',
    format: 'Paperback',
    rating: '4.4',
    genre: 'History',
    isbn: '978-1-4028-9467-1',
    seller: 'Oldtown Archives',
    description:
      'Recovered journals reveal the hidden networks that shaped a city.',
  },
];
