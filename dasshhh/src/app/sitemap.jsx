export default function sitemap() {
    return [
      {
        url: 'https://rajivgupta.rf.gd',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://rajivgupta.rf.gd/about',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: 'https://rajivgupta.rf.gd/blog',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ]
  }