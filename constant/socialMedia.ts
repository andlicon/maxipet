export interface SocialMedia {
  label: string,
  bootstrapClass: string,
  to: string
}

export const socialMediaList:SocialMedia[] = [
  {
    label: "Instagram",
    bootstrapClass: "bi bi-instagram",
    to: "https://www.instagram.com"
  },
  {
    label: "Twitter",
    bootstrapClass: "bi bi-twitter",
    to: "https://www.instagram.com"
  },
  {
    label: "Facebook",
    bootstrapClass: "bi bi-facebook",
    to: "https://www.facebook.com"
  }
]
