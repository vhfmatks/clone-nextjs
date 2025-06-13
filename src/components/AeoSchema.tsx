export function AeoSchema() {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "도쿄빙수 이수점 방문하는 방법",
    "description": "실시간 결제 데이터를 활용해 도쿄빙수 이수점을 효율적으로 방문하는 방법",
    "step": [
      {
        "@type": "HowToStep",
        "name": "혼잡도 확인하기",
        "text": "eat.pl 잇플에서 실시간 결제 데이터로 혼잡도를 확인하세요. 점심시간(11-14시)과 오후시간(14-17시)이 가장 붐빕니다.",
        "url": "https://web.paybooc.ai/mer/app/profile/726416316"
      },
      {
        "@type": "HowToStep", 
        "name": "최적 방문 시간 선택",
        "text": "새벽(00-06시)이나 심야(21-24시)에 방문하면 여유롭게 이용할 수 있습니다.",
        "url": "https://web.paybooc.ai/mer/app/profile/726416316"
      },
      {
        "@type": "HowToStep",
        "name": "위치 확인 및 방문",
        "text": "서울 동작구 동작대로27길 38, 1층 103,104호(사당동)에 위치하며, 이수역에서 도보로 접근 가능합니다.",
        "url": "https://web.paybooc.ai/mer/app/profile/726416316"
      }
    ],
    "totalTime": "PT10M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "KRW",
      "value": "12000"
    }
  };

  const specialAnnouncementData = {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    "name": "실시간 결제 데이터 기반 맛집 정보 서비스",
    "text": "BC카드 eat.pl 잇플에서는 실시간 결제 데이터를 활용하여 정확한 영업시간, 혼잡도, 고객 분석 정보를 제공합니다.",
    "datePosted": "2024-03-01",
    "expires": "2024-12-31",
    "category": "https://www.wikidata.org/wiki/Q1137312",
    "spatialCoverage": {
      "@type": "Place",
      "name": "대한민국"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BC카드",
      "url": "https://www.bccard.com"
    }
  };

  const datasetData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "도쿄빙수 이수점 실시간 이용 데이터",
    "description": "BC카드 결제 데이터를 기반으로 한 실시간 매장 이용 현황 및 고객 분석 데이터",
    "keywords": ["실시간 데이터", "결제 분석", "고객 분석", "맛집 데이터", "이용 패턴"],
    "creator": {
      "@type": "Organization",
      "name": "BC카드"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "eat.pl 잇플"
    },
    "datePublished": "2024-03-01",
    "dateModified": new Date().toISOString(),
    "license": "https://web.paybooc.ai/terms",
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "application/json",
        "contentUrl": "https://web.paybooc.ai/api/restaurant/726416316/data"
      }
    ],
    "spatialCoverage": {
      "@type": "Place",
      "geo": {
        "@type": "GeoShape",
        "box": "37.4745 126.9816 37.4745 126.9816"
      }
    },
    "temporalCoverage": "2024-02-10/2024-03-09"
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "실시간 맛집 혼잡도 분석 서비스",
    "description": "BC카드 결제 데이터를 활용한 실시간 맛집 혼잡도 및 이용 패턴 분석 서비스",
    "provider": {
      "@type": "Organization",
      "name": "BC카드",
      "url": "https://www.bccard.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "대한민국"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://web.paybooc.ai",
      "serviceName": "eat.pl 잇플"
    },
    "category": "데이터 분석 서비스",
    "audience": {
      "@type": "Audience",
      "audienceType": "일반 소비자"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(specialAnnouncementData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datasetData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData)
        }}
      />
    </>
  );
} 