import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "도쿄빙수 이수점 | eat.pl 잇플",
  description: "BC카드가 제공하는 실시간 결제 데이터 기반 맛집 정보. 도쿄빙수 이수점의 영업시간, 붐비는 시간대, 이용객 분석을 확인하세요.",
  keywords: "도쿄빙수, 이수점, 빙수, 아이스크림, 디저트, 사당동, 맛집, BC카드, 잇플, 실시간 결제 데이터",
  authors: [{ name: "BC카드 eat.pl" }],
  creator: "BC카드",
  publisher: "BC카드",
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
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://web.paybooc.ai/mer/app/profile/726416316',
    title: '도쿄빙수 이수점 | eat.pl 잇플',
    description: 'BC카드가 제공하는 실시간 결제 데이터 기반 맛집 정보. 도쿄빙수 이수점의 영업시간, 붐비는 시간대, 이용객 분석을 확인하세요.',
    siteName: 'eat.pl 잇플',
  },
  twitter: {
    card: 'summary_large_image',
    title: '도쿄빙수 이수점 | eat.pl 잇플',
    description: 'BC카드가 제공하는 실시간 결제 데이터 기반 맛집 정보',
    creator: '@BCCard',
  },
  alternates: {
    canonical: 'https://web.paybooc.ai/mer/app/profile/726416316',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="canonical" href="https://web.paybooc.ai/mer/app/profile/726416316" />
      </head>
      <body>{children}</body>
    </html>
  );
}
