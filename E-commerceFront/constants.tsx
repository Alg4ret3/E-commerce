
import { Product, EventTicket, StandType } from './types';

export const COLORS = {
  primary: '#800000', // Logo Red
  secondary: '#D2B48C', // Logo Cream
  accent: '#A52A2A',
  dark: '#1A1A1A',
  light: '#F5F5F5',
};

export const AVAILABLE_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Única', 'Metro'];
export const AVAILABLE_COLORS = [
  { name: 'Negro', hex: '#000000' },
  { name: 'Blanco', hex: '#FFFFFF' },
  { name: 'Gris', hex: '#808080' },
  { name: 'Vino', hex: '#800000' },
  { name: 'Crema', hex: '#F5F5DC' },
  { name: 'Azul', hex: '#000080' },
  { name: 'Tierra', hex: '#A52A2A' }
];

export const NAV_CATEGORIES = {
  hombres: [
    { name: 'Camisas', slug: 'camisas' },
    { name: 'Pantalones', slug: 'pantalones' },
    { name: 'Chaquetas', slug: 'chaquetas' },
    { name: 'Shorts', slug: 'shorts' },
    { name: 'Accesorios', slug: 'accesorios' }
  ],
  mujeres: [
    { name: 'Vestidos', slug: 'vestidos' },
    { name: 'Blusas', slug: 'blusas' },
    { name: 'Faldas', slug: 'faldas' },
    { name: 'Pantalones', slug: 'pantalones' },
    { name: 'Accesorios', slug: 'accesorios' }
  ]
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ruana de Lana Virgen',
    price: 185000,
    category: 'Ropa',
    gender: 'hombre',
    subcategory: 'chaquetas',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    description: 'Tradicional ruana colombiana tejida a mano con lana de oveja virgen. Máxima calidad y abrigo.',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Gris', hex: '#808080' },
      { name: 'Vino', hex: '#800000' }
    ],
    material: 'Lana Virgen',
    collection: 'Herencia 2024',
    stock: 12,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Tela Lino Premium',
    price: 45000,
    category: 'Telas',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    description: 'Lino de alta densidad ideal para sastrería y vestidos de verano. Frescura inigualable.',
    sizes: ['Metro'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Azul', hex: '#000080' }
    ],
    material: 'Lino 100%',
    collection: 'Textiles Básicos',
    stock: 200,
    rating: 4.5
  },
  {
    id: '3',
    name: 'Sombrero Aguadeño',
    price: 120000,
    category: 'Accesorios',
    gender: 'unisex',
    subcategory: 'accesorios',
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=800&auto=format&fit=crop',
    description: 'Elegante sombrero artesanal tejido con fibras naturales. Un icono de la moda nacional.',
    sizes: ['S', 'M'],
    colors: [{ name: 'Crema', hex: '#F5F5DC' }],
    material: 'Paja Toquilla',
    collection: 'Artesanías',
    stock: 5,
    rating: 4.9
  },
  {
    id: '4',
    name: 'Chaqueta de Cuero Nappa',
    price: 450000,
    category: 'Ropa',
    gender: 'hombre',
    subcategory: 'chaquetas',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    description: 'Cuero genuino nappa con acabados de lujo. Diseño contemporáneo y duradero.',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#000000' },
      { name: 'Tierra', hex: '#A52A2A' }
    ],
    material: 'Cuero Genuino',
    collection: 'Urban Luxury',
    stock: 8,
    rating: 4.7
  },
  {
    id: '5',
    name: 'Vestido Tejido "Viento"',
    price: 295000,
    category: 'Ropa',
    gender: 'mujer',
    subcategory: 'vestidos',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    description: 'Vestido largo con detalles de calado artesanal. Sofisticación para eventos especiales.',
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Crema', hex: '#F5F5DC' }
    ],
    material: 'Algodón Mercuerizado',
    collection: 'Herencia 2024',
    stock: 4,
    rating: 5.0
  },
  {
    id: '6',
    name: 'Camisa Lino Estructurada',
    price: 135000,
    category: 'Ropa',
    gender: 'hombre',
    subcategory: 'camisas',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    description: 'Camisa de lino con corte moderno y acabados de lujo.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Azul', hex: '#000080' }
    ],
    material: 'Lino 100%',
    collection: 'Herencia 2024',
    stock: 20,
    rating: 4.7
  },
  {
    id: '7',
    name: 'Pantalón Chino Premium',
    price: 165000,
    category: 'Ropa',
    gender: 'hombre',
    subcategory: 'pantalones',
    image: 'https://images.unsplash.com/photo-1624371414361-e6e9eaec6f10?q=80&w=800&auto=format&fit=crop',
    description: 'Pantalón de gabardina de alta calidad para un look sofisticado.',
    sizes: ['30', '32', '34'],
    colors: [
      { name: 'Tierra', hex: '#A52A2A' },
      { name: 'Negro', hex: '#000000' }
    ],
    material: 'Algodón Pima',
    collection: 'Urban Luxury',
    stock: 15,
    rating: 4.9
  }
];

export const MOCK_EVENTS: EventTicket[] = [
  {
    id: 'e1',
    name: 'Fashion Week Pasto 2024',
    date: '15 de Julio, 2024',
    location: 'Centro de Convenciones',
    price: 55000,
    description: 'La pasarela más importante del suroccidente colombiano. Ven y conoce las nuevas tendencias.',
    image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1200&auto=format&fit=crop'
  }
];

export const MOCK_STANDS: StandType[] = [
  {
    id: 's1',
    name: 'Stand Premium A',
    dimensions: '3m x 3m',
    price: 1500000,
    benefits: ['Ubicación central', 'Conexión eléctrica', 'Mobiliario básico included', 'Seguridad 24/7'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 's2',
    name: 'Stand Emprendedor',
    dimensions: '2m x 2m',
    price: 850000,
    benefits: ['Ubicación pasillo', 'Conexión eléctrica', 'Panel divisor'],
    image: 'https://images.unsplash.com/photo-1531050171669-df41847118ca?q=80&w=1200&auto=format&fit=crop'
  }
];
