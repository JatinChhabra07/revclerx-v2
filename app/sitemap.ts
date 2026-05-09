import type { MetadataRoute } from 'next'

const base = 'https://revclerx.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/solutions', '/how-it-works', '/about', '/contact']
  const now = new Date()
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8
  }))
}
