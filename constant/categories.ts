import categoryIcon from "../images/dogIcon.svg";

export interface Category {
  img: string,
  label: string,
  id: number
}

export const categoryList: Category[] = [
  {
    img: categoryIcon.src,
    label: "Perros",
    id: 1
  },
  {
    img: categoryIcon.src,
    label: "Gatos",
    id: 2
  },
  {
    img: categoryIcon.src,
    label: "Peces",
    id: 3
  },
  {
    img: categoryIcon.src,
    label: "Roedores",
    id: 4
  },
  {
    img: categoryIcon.src,
    label: "Reptiles",
    id: 5
  },
  {
    img: categoryIcon.src,
    label: "Placeholder",
    id: 6
  }
]
