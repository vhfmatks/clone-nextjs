export function JsonLd() {
  const restaurantData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "도쿄빙수 이수점",
    "alternateName": "Tokyo Bingsu Isu Branch",
    "description": "서울 이수역 근처의 아이스크림, 요거트, 빙수 전문점. BC카드 실시간 결제 데이터 기반 맛집 정보 제공.",
    "image": [
      "https://web.paybooc.ai/images/tokyo-bingsu-1.jpg",
      "https://web.paybooc.ai/images/tokyo-bingsu-2.jpg"
    ],
    "url": "https://web.paybooc.ai/mer/app/profile/726416316",
    "telephone": "+82-2-3482-0503",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "동작대로27길 38, 1층 103,104호",
      "addressLocality": "사당동",
      "addressRegion": "동작구",
      "addressCountry": "KR",
      "postalCode": "06978"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.4745,
      "longitude": 126.9816
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "24:00"
      }
    ],
    "servesCuisine": [
      "Dessert",
      "Ice Cream",
      "Korean Dessert",
      "Bingsu"
    ],
    "priceRange": "₩₩",
    "paymentAccepted": [
      "Credit Card",
      "Cash",
      "BC Card"
    ],
    "currenciesAccepted": "KRW",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "김민수"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "빙수가 정말 맛있어요! 특히 여름에 시원하게 먹기 좋습니다.",
        "datePublished": "2024-03-15"
      }
    ],
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "빙수",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "name": "팥빙수",
              "description": "전통 팥빙수",
              "offers": {
                "@type": "Offer",
                "price": "12000",
                "priceCurrency": "KRW"
              }
            }
          ]
        }
      ]
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "실시간 결제 데이터 제공",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "혼잡도 정보 제공",
        "value": true
      }
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "도쿄빙수 이수점",
    "description": "이수역 근처 아이스크림, 요거트, 빙수 전문점",
    "url": "https://web.paybooc.ai/mer/app/profile/726416316",
    "telephone": "+82-2-3482-0503",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "동작대로27길 38, 1층 103,104호",
      "addressLocality": "사당동",
      "addressRegion": "동작구",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.4745,
      "longitude": 126.9816
    },
    "openingHours": "Mo-Su 00:00-24:00",
    "paymentAccepted": ["Credit Card", "Cash", "BC Card"],
    "currenciesAccepted": "KRW"
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BC카드",
    "alternateName": "eat.pl 잇플",
    "url": "https://web.paybooc.ai",
    "logo": "https://web.paybooc.ai/logo.png",
    "description": "BC카드가 제공하는 맛집정보 AI 검색 서비스",
    "sameAs": [
      "https://www.bccard.com",
      "https://www.facebook.com/bccard",
      "https://www.instagram.com/bccard_official"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "bcaimerchant@bccard.com",
      "contactType": "customer service",
      "availableLanguage": "Korean"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "eat.pl 잇플",
        "item": "https://web.paybooc.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "맛집 검색",
        "item": "https://web.paybooc.ai/restaurants"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "아이스크림/요거트/빙수",
        "item": "https://web.paybooc.ai/category/dessert"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "도쿄빙수 이수점",
        "item": "https://web.paybooc.ai/mer/app/profile/726416316"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "도쿄빙수 이수점 영업시간은 언제인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "도쿄빙수 이수점은 24시간 영업합니다. 실시간 결제 데이터를 통해 확인된 최초 결제 시간은 00:00, 최종 결제 시간은 24:00입니다."
        }
      },
      {
        "@type": "Question",
        "name": "언제 가장 붐비나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "점심 시간(11:00-14:00)과 오후 시간(14:00-17:00)에 가장 붐빕니다. 새벽 시간(00:00-06:00)과 심야 시간(21:00-24:00)에는 비교적 여유롭습니다."
        }
      },
      {
        "@type": "Question",
        "name": "주로 어떤 연령대가 이용하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "30대(35%), 20대(30%), 40대(20%) 순으로 이용이 많으며, 여성(55%) 고객이 남성(45%) 고객보다 약간 많습니다."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
    </>
  );
} 