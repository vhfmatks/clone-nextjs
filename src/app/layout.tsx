import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가맹점 정보 - 다양한 매장 정보를 한 곳에서",
  description: "전국 다양한 가맹점들의 상세 정보를 확인하세요. 매장 위치, 연락처, 영업시간, 리뷰 등 필요한 모든 정보를 제공합니다. 맛집 찾기, 근처 음식점 검색에 최적화된 플랫폼입니다.",
  keywords: "가맹점, 매장정보, 맛집, 카페, 레스토랑, 음식점, 영업시간, 주소, 전화번호, 리뷰, 평점, 근처 맛집, 음식점 찾기",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "가맹점 정보 - 다양한 매장 정보를 한 곳에서",
    description: "전국 다양한 가맹점들의 상세 정보를 확인하세요. 맛집 찾기에 최적화된 플랫폼입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "가맹점 정보",
  },
  twitter: {
    card: 'summary_large_image',
    title: '가맹점 정보 - 맛집 찾기',
    description: '전국 다양한 가맹점들의 상세 정보를 확인하세요.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* LLM 최적화를 위한 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '가맹점 정보',
              description: '전국 다양한 가맹점들의 상세 정보를 제공하는 플랫폼',
              url: '/',
              publisher: {
                '@type': 'Organization',
                name: '가맹점 정보 서비스',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: '/?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '가맹점 정보',
              description: '전국 가맹점 정보를 제공하는 서비스',
              url: '/',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: '고객서비스',
                email: 'info@example.com',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
