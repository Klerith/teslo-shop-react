// Import all product images
import blackTshirt from '@/assets/product-black-tshirt.jpg';
import whiteHoodie from '@/assets/product-white-hoodie.jpg';
import greySweatshirt from '@/assets/product-grey-sweatshirt.jpg';
import blackJacket from '@/assets/product-black-jacket.jpg';
import whiteCap from '@/assets/product-white-cap.jpg';
import blackBackpack from '@/assets/product-black-backpack.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Tesla Negro',
    price: 35,
    image: blackTshirt,
    category: 'Camisetas',
    description:
      'Camiseta de algodón premium con diseño minimalista inspirado en Tesla.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Negro', 'Blanco', 'Gris'],
  },
  {
    id: '2',
    name: 'Sudadera Tesla Blanca',
    price: 85,
    image: whiteHoodie,
    category: 'Sudaderas',
    description: 'Sudadera con capucha de alta calidad con logo Tesla bordado.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanco', 'Negro', 'Gris'],
  },
  {
    id: '3',
    name: 'Sudadera Tesla Gris',
    price: 75,
    image: greySweatshirt,
    category: 'Sudaderas',
    description: 'Sudadera clásica sin capucha con corte moderno y cómodo.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gris', 'Negro', 'Azul Marino'],
  },
  {
    id: '4',
    name: 'Chaqueta Tesla Negro',
    price: 150,
    image: blackJacket,
    category: 'Chaquetas',
    description: 'Chaqueta técnica resistente al agua con diseño elegante.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Negro', 'Gris Oscuro'],
  },
  {
    id: '5',
    name: 'Gorra Tesla Blanca',
    price: 25,
    image: whiteCap,
    category: 'Accesorios',
    description: 'Gorra ajustable con logo Tesla bordado en alta calidad.',
    sizes: ['Único'],
    colors: ['Blanco', 'Negro', 'Gris'],
  },
  {
    id: '6',
    name: 'Mochila Tesla Negro',
    price: 120,
    image: blackBackpack,
    category: 'Accesorios',
    description:
      'Mochila minimalista con compartimentos organizados y diseño ergonómico.',
    sizes: ['Único'],
    colors: ['Negro', 'Gris'],
  },
  {
    id: '7',
    name: 'Camiseta Tesla Blanca',
    price: 35,
    image: blackTshirt, // Reutilizamos la imagen por simplicidad
    category: 'Camisetas',
    description: 'Camiseta blanca de algodón orgánico con logo Tesla discreto.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanco', 'Negro', 'Gris'],
  },
  {
    id: '8',
    name: 'Sudadera Tesla Negro',
    price: 85,
    image: whiteHoodie,
    category: 'Sudaderas',
    description: 'Sudadera negra con capucha y bolsillo frontal tipo canguro.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Negro', 'Gris', 'Azul Marino'],
  },
];
