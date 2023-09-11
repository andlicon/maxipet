export interface PageRedirect {
  label: string,
  bootstrapClass: string,
  to: string
}

export const internalRedirect: PageRedirect[] = [
  {
    label: 'inicio',
    to: '#inicio',
    bootstrapClass: null
  },
  {
    label: 'Comprar por marca',
    to: '#comprar-marca',
    bootstrapClass: null
  },
  {
    label: 'Comprar por mascota',
    to: '#comprar-mascota',
    bootstrapClass: null
  },
  {
    label: 'Nuestros servicios',
    to: '#servicios',
    bootstrapClass: null
  },
  {
    label: 'Promociones',
    to: '#promociones',
    bootstrapClass: null
  },
  {
    label: 'Nosotros',
    to: '#nosotros',
    bootstrapClass: null
  }
]

export const actionsRedirect: PageRedirect[] = [
  {
    label: 'Redirect1',
    to: '/redirect1',
    bootstrapClass: 'bi bi-geo-alt'
  },
  {
    label: 'Redirect2',
    to: '/redirect2',
    bootstrapClass: 'bi bi-house'
  },
  {
    label: 'Redirect3',
    to: '/redirect3',
    bootstrapClass: 'bi bi-person-square'
  },
  {
    label: 'Redirect4',
    to: '/redirect4',
    bootstrapClass: 'bi bi-cart4'
  },
]

export const socialMediaRedirect:PageRedirect[] = [
  {
    label: 'Instagram',
    bootstrapClass: 'bi bi-instagram',
    to: 'https://www.instagram.com'
  },
  {
    label: 'Twitter',
    bootstrapClass: 'bi bi-twitter',
    to: 'https://www.instagram.com'
  },
  {
    label: 'Facebook',
    bootstrapClass: 'bi bi-facebook',
    to: 'https://www.facebook.com'
  }
]