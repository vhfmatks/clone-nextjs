import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      // AI 크롤러들을 명시적으로 허용
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web'
        ],
        allow: '/',
        disallow: ['/api/', '/admin/']
      }
    ],
    sitemap: 'https://localhost:3000/sitemap.xml',
    host: 'https://localhost:3000'
  }
} 