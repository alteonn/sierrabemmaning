export const COMPANY_INFO = {
  name: 'Sierra Bemanning AB',
  phone: '070-778 88 47',
  email: 'albert@sierrabemanning.se',
  address: {
    street: 'Albybergsringen 105 Lokal 10',
    postalCode: '137 69',
    city: 'Österhaninge'
  },
  orgNumber: '556917-7412'
};

export const ROUTES = {
  home: '/',
  companies: '/for-foretag',
  jobSeekers: '/for-jobbsokande',
  respirators: '/andningsskydd',
  contact: '/kontakt',
  privacy: '/integritetspolicy',
  cookies: '/cookies'
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/sierra-bemanning',
  facebook: 'https://facebook.com/sierrabemanning'
} as const;