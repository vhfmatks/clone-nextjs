import { MetadataRoute } from 'next'
import { getAllRestaurants } from '@/lib/mockData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://localhost:3000'
  const restaurants = getAllRestaurants()
  
  // 정적 페이지들
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]
  
  // 동적 가맹점 페이지들
  const restaurantPages = restaurants.map((restaurant) => ({
    url: `${baseUrl}/${restaurant.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [...staticPages, ...restaurantPages]
} 