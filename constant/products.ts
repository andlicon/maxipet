import productImage from '../images/productImage.png'

export interface Product {
  id: number,
  image: string,
  name: string,
  rate: number,
  price: number
}

export const popularList: Product[] = [
  {
    id: 1,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 2,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 3,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 4,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 5,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  }
]

export const featuredList: Product[] = [
  {
    id: 6,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 7,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 8,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 9,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 10,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  },
  {
    id: 11,
    image: productImage.src,
    name: '1st Choice Puppy Chiot',
    rate: 3,
    price: 9.99
  }
]
