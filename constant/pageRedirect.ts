export interface PageRedirect {
  label: string,
  to: string
}

export const indexInternalRedirect:PageRedirect[] = [
  {
    label: 'inicio',
    to: '#inicio'
  },
  {
    label: 'Comprar por marca',
    to: '#comprar-marca'
  },
  {
    label: 'Comprar por mascota',
    to: '#comprar-mascota'
  },
  {
    label: 'Nuestros servicios',
    to: '#servicios'
  },
  {
    label: 'Promociones',
    to: '#promociones'
  },
  {
    label: 'Nosotros',
    to: '#nosotros'
  }
]