export interface socialMedia {
  label: string,
  bootstrapClass: string,
  to: string
}

export const socialMediaList:socialMedia[] = [
  {
    label: 'instagram',
    bootstrapClass: 'bi bi-instagram',
    to: 'https://www.instagram.com'
  },
  {
    label: 'twitter',
    bootstrapClass: 'bi bi-twitter',
    to: 'https://www.instagram.com'
  },
  {
    label: 'facebook',
    bootstrapClass: 'bi bi-facebook',
    to: 'https://www.facebook.com'
  }
]