import { getResearchPosts } from 'app/research/utils'

export const baseUrl = 'https://ahnricky.dev'

export default async function sitemap() {
  let researchPosts = getResearchPosts().map((post) => ({
    url: `${baseUrl}/research/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/research'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...researchPosts]
}
