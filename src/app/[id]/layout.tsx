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

  const title = `${restaurant.name} - ${restaurant.category} | 가맹점 정보`;
  const description = `${restaurant.description} 📍 위치: ${restaurant.address} 📞 전화: ${restaurant.phone} ⏰ 영업시간: ${restaurant.businessHours} ⭐ 평점: ${restaurant.rating}점`;
  const keywords = [
    ...restaurant.keywords, 
    restaurant.name, 
    restaurant.category,
    '가맹점',
    '맛집',
    '영업시간',
    '전화번호',
    '주소',
    '리뷰',
    '평점'
  ].join(', ');

  return {
    title,
    description,
    keywords,
    authors: [{ name: '가맹점 정보 서비스' }],
    creator: '가맹점 정보',
    publisher: '가맹점 정보',
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
        alt: `${restaurant.name} - ${restaurant.category}`,
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

  const currentDate = new Date().toISOString();
  const reviewCount = Math.floor(Math.random() * 200) + 50;

  return (
    <>
      {/* 확장된 JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Restaurant', 'LocalBusiness'],
            '@id': `/${restaurant.id}`,
            name: restaurant.name,
            description: restaurant.description,
            url: `/${restaurant.id}`,
            telephone: restaurant.phone,
            image: restaurant.images,
            address: {
              '@type': 'PostalAddress',
              streetAddress: restaurant.address,
              addressLocality: restaurant.address.includes('서울') ? '서울' : '대한민국',
              addressCountry: 'KR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              // Mock coordinates for Seoul area
              latitude: 37.5665 + (Math.random() - 0.5) * 0.1,
              longitude: 126.9780 + (Math.random() - 0.5) * 0.1,
            },
            openingHours: restaurant.businessHours,
            servesCuisine: restaurant.category,
            priceRange: '₩₩',
            acceptsReservations: true,
            hasMenu: true,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: restaurant.rating,
              bestRating: 5,
              worstRating: 1,
              ratingCount: reviewCount,
            },
            review: [
              {
                '@type': 'Review',
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: restaurant.rating,
                  bestRating: 5,
                },
                author: {
                  '@type': 'Person',
                  name: '만족한 고객',
                },
                reviewBody: `${restaurant.name}는 정말 좋은 곳입니다. ${restaurant.description}`,
                datePublished: currentDate,
              },
            ],
            potentialAction: {
              '@type': 'ReserveAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `tel:${restaurant.phone}`,
              },
            },
          }),
        }}
      />
      
      {/* BreadcrumbList 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: '가맹점 목록',
                item: '/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: restaurant.name,
                item: `/${restaurant.id}`,
              },
            ],
          }),
        }}
      />
      
      {/* 확장된 FAQ 구조화 데이터 - LLM 최적화 */}
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
                  text: `${restaurant.name}의 영업시간은 ${restaurant.businessHours}입니다.`,
                },
              },
              {
                '@type': 'Question',
                name: `${restaurant.name}의 위치는 어디인가요?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${restaurant.name}는 ${restaurant.address}에 위치하고 있습니다.`,
                },
              },
              {
                '@type': 'Question',
                name: `${restaurant.name}의 전화번호는 무엇인가요?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${restaurant.name}의 전화번호는 ${restaurant.phone}입니다. 예약이나 문의 시 이용해 주세요.`,
                },
              },
              {
                '@type': 'Question',
                name: `${restaurant.name}은 어떤 종류의 음식점인가요?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${restaurant.name}은 ${restaurant.category} 전문점입니다. ${restaurant.description}`,
                },
              },
              {
                '@type': 'Question',
                name: `${restaurant.name}의 평점은 어떤가요?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${restaurant.name}은 5점 만점에 ${restaurant.rating}점의 평점을 받고 있습니다. 총 ${reviewCount}개의 리뷰가 있습니다.`,
                },
              },
              {
                '@type': 'Question',
                name: `${restaurant.name} 근처에서 어떤 음식을 먹을 수 있나요?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${restaurant.name}에서는 ${restaurant.category} 메뉴를 제공합니다. ${restaurant.keywords.join(', ')} 등의 특색있는 메뉴를 즐길 수 있습니다.`,
                },
              },
            ],
          }),
        }}
      />

      {/* WebSite 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: '가맹점 정보',
            url: '/',
            description: '전국 다양한 가맹점들의 상세 정보를 확인하세요.',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: '/?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      
      {children}
    </>
  );
} 