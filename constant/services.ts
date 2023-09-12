import serviceImage from '../images/dogIcon.svg';

export interface Service {
  id: number,
  image: string,
  label: string,
  description: string
}

export const serviceList: Service[] = [
  {
    id: 1,
    image: serviceImage.src,
    label: 'Peluquería',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus Molestie rhoncus id nunc, porta leo tempus facillsi'
  },
  {
    id: 2,
    image: serviceImage.src,
    label: 'Odontología',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus Molestie rhoncus id nunc, porta leo tempus facillsi'
  },
  {
    id: 3,
    image: serviceImage.src,
    label: 'Entrenamiento',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus Molestie rhoncus id nunc, porta leo tempus facillsi'
  },
  {
    id: 4,
    image: serviceImage.src,
    label: 'Psicología canina',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus Molestie rhoncus id nunc, porta leo tempus facillsi'
  }
]
