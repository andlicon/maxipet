import categoryIcon from '../images/dogIcon.png';

export interface Category {
  img: string,
  label: string
}

export const categoryList: Category[] = [
  {
    img: categoryIcon.src,
    label: 'Perros'
  },
  {
    img: categoryIcon.src,
    label: 'Gatos'
  },
  {
    img: categoryIcon.src,
    label: 'Peces'
  },
  {
    img: categoryIcon.src,
    label: 'Roedores'
  },
  {
    img: categoryIcon.src,
    label: 'Reptiles'
  },
  {
    img: categoryIcon.src,
    label: 'Placeholder'
  }
]
