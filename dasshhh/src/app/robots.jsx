export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/profile/',
      },
      sitemap: 'https://rajivgupta.rf.gd/sitemap.xml',
    }
  }