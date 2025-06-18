import Link from 'next/link';
import { getRestaurantById } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { BusinessHours } from '@/components/BusinessHours';
import { TimeAnalysis } from '@/components/TimeAnalysis';
import { Demographics } from '@/components/Demographics';
import { SecondVisit } from '@/components/SecondVisit';
import { Recommendations } from '@/components/Recommendations';
import { Statistics } from '@/components/Statistics';

interface Props {
  params: Promise<{ id: string }>;
}

// 동적 라우트 생성을 위한 generateStaticParams
export async function generateStaticParams() {
  // 모든 가맹점 ID를 반환하여 정적 페이지 생성
  return Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

export default async function RestaurantDetailPage({ params }: Props) {
  const { id } = await params;
  const restaurant = getRestaurantById(id);
  
  if (!restaurant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 브레드크럼 네비게이션 */}
      <nav className="bg-white border-b" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                가맹점 목록
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 font-medium" aria-current="page">
              {restaurant.name}
            </li>
          </ol>
        </div>
      </nav>

      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            ← 가맹점 목록으로 돌아가기
          </Link>
        </div>
      </div>
      
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* 메인 가맹점 정보 - LLM 최적화된 구조 */}
        <article className="bg-white rounded-lg p-6 shadow-sm">
          <header className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {restaurant.category}
              </span>
              <div className="flex items-center space-x-2" itemScope itemType="https://schema.org/AggregateRating">
                <span className="text-yellow-500">⭐</span>
                <span className="font-medium" itemProp="ratingValue">{restaurant.rating}</span>
                <span className="text-gray-500 text-sm">({Math.floor(Math.random() * 200) + 50}개 리뷰)</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4" itemProp="name">
              {restaurant.name}
            </h1>
            <p className="text-gray-600 mb-6 text-lg" itemProp="description">
              {restaurant.description}
            </p>
          </header>
          
          {/* 핵심 정보 섹션 - 구조화된 데이터 */}
          <section className="space-y-4" itemScope itemType="https://schema.org/Restaurant">
            <h2 className="text-xl font-semibold mb-4">매장 정보</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3" itemScope itemType="https://schema.org/PostalAddress">
                  <span className="text-gray-600 mt-1">📍</span>
                  <div>
                    <dt className="text-sm text-gray-500">주소</dt>
                    <dd className="text-gray-700 font-medium" itemProp="streetAddress">
                      {restaurant.address}
                    </dd>
                    <button className="text-blue-600 text-sm hover:underline mt-1">
                      주소 복사
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-gray-600 mt-1">📞</span>
                  <div>
                    <dt className="text-sm text-gray-500">전화번호</dt>
                    <dd className="text-gray-700 font-medium" itemProp="telephone">
                      <a href={`tel:${restaurant.phone}`} className="hover:text-blue-600">
                        {restaurant.phone}
                      </a>
                    </dd>
                    <button className="text-blue-600 text-sm hover:underline mt-1">
                      번호 복사
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-gray-600 mt-1">🕒</span>
                  <div>
                    <dt className="text-sm text-gray-500">영업시간</dt>
                    <dd className="text-gray-700 font-medium" itemProp="openingHours">
                      {restaurant.businessHours}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gray-600 mt-1">🍽️</span>
                  <div>
                    <dt className="text-sm text-gray-500">음식 종류</dt>
                    <dd className="text-gray-700 font-medium" itemProp="servesCuisine">
                      {restaurant.category}
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            {/* 키워드 및 태그 섹션 */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-3">관련 키워드</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    itemProp="keywords"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* 빠른 액션 버튼 */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-3">빠른 액션</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={`tel:${restaurant.phone}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📞 전화걸기
                </a>
                <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  📍 길찾기
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                  ⭐ 리뷰 작성
                </button>
              </div>
            </div>
          </section>
        </article>

        {/* 자주 묻는 질문 섹션 - LLM 최적화 */}
        <section className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            <details className="border-b pb-4">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                Q: {restaurant.name}의 영업시간은 언제인가요?
              </summary>
              <p className="mt-2 text-gray-700">
                A: {restaurant.name}의 영업시간은 <strong>{restaurant.businessHours}</strong>입니다.
              </p>
            </details>
            
            <details className="border-b pb-4">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                Q: {restaurant.name}은 어떤 음식을 파나요?
              </summary>
              <p className="mt-2 text-gray-700">
                A: {restaurant.name}은 <strong>{restaurant.category}</strong> 전문점입니다. {restaurant.description}
              </p>
            </details>
            
            <details className="border-b pb-4">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                Q: {restaurant.name}의 평점은 어떤가요?
              </summary>
              <p className="mt-2 text-gray-700">
                A: {restaurant.name}은 5점 만점에 <strong>{restaurant.rating}점</strong>의 평점을 받고 있습니다. 고객들의 만족도가 높은 매장입니다.
              </p>
            </details>
            
            <details className="pb-4">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                Q: {restaurant.name}에서 예약이 가능한가요?
              </summary>
              <p className="mt-2 text-gray-700">
                A: 예약 가능 여부는 <strong>{restaurant.phone}</strong>으로 직접 문의해 주세요. 매장 상황에 따라 예약이 가능합니다.
              </p>
            </details>
          </div>
        </section>

        <BusinessHours />
        <TimeAnalysis />
        <Demographics />
        <SecondVisit />
        <Recommendations />
        <Statistics />
        
        <footer className="text-sm text-gray-500 space-y-2 mt-8 p-4 bg-white rounded-lg">
          <p>• 보다 자세한 매장 정보가 필요하거나 매장 정보 수정이 필요하다면 bcaimerchant@bccard.com 으로 문의해 주세요.</p>
          <p>• 가맹점 홍보 및 마케팅을 위한 다양한 서비스를 준비하고 있습니다.</p>
        </footer>
      </main>
    </div>
  );
} 