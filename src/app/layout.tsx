import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가맹점 정보 - 다양한 매장 정보를 한 곳에서",
  description: "전국 다양한 가맹점들의 상세 정보를 확인하세요. 매장 위치, 연락처, 영업시간, 리뷰 등 필요한 모든 정보를 제공합니다.",
  keywords: "가맹점, 매장정보, 맛집, 카페, 레스토랑, 음식점, 영업시간, 주소, 전화번호",
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
    title: "가맹점 정보",
    description: "전국 다양한 가맹점들의 상세 정보를 확인하세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "가맹점 정보",
  },
  twitter: {
    card: 'summary_large_image',
    title: '가맹점 정보',
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
