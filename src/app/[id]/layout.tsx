import { Metadata } from 'next';
import { getRestaurantById } from '@/lib/mockData';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const restaurant = getRestaurantById(id);
  
  if (!restaurant) {
    return {
      title: '가맹점을 찾을 수 없습니다',
      description: '요청하신 가맹점 정보를 찾을 수 없습니다.',
    };
  }

  const title = `${restaurant.name} - ${restaurant.category}`;
  const description = `${restaurant.description} | 주소: ${restaurant.address} | 전화: ${restaurant.phone} | 평점: ${restaurant.rating}점`;
  const keywords = [...restaurant.keywords, restaurant.name, restaurant.category].join(', ');

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ko_KR',
      siteName: '가맹점 정보',
      images: restaurant.images.map(image => ({
        url: image,
        width: 1200,
        height: 630,
        alt: restaurant.name,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: restaurant.images,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `/${restaurant.id}`,
    },
  };
}

export default async function RestaurantLayout({ children, params }: Props) {
  const { id } = await params;
  const restaurant = getRestaurantById(id);
  
  if (!restaurant) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: restaurant.name,
            description: restaurant.description,
            address: {
              '@type': 'PostalAddress',
              streetAddress: restaurant.address,
              addressCountry: 'KR',
            },
            telephone: restaurant.phone,
            openingHours: restaurant.businessHours,
            servesCuisine: restaurant.category,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: restaurant.rating,
              ratingCount: Math.floor(Math.random() * 100) + 50, // Mock review count
            },
            image: restaurant.images,
            url: `/${restaurant.id}`,
          }),
        }}
      />
      
      {/* AEO (Answer Engine Optimization) 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `${restaurant.name}의 영업시간은 언제인가요?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: restaurant.businessHours,
                },
              },
              {
                '@type': 'Question',
                name: `${restaurant.name}의 주소는 어디인가요?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: restaurant.address,
                },
              },
              {
                '@type': 'Question',
                name: `${restaurant.name}의 전화번호는 무엇인가요?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: restaurant.phone,
                },
              },
            ],
          }),
        }}
      />
      
      {children}
    </>
  );
} 