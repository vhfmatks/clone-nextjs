import Link from 'next/link';
import { getAllRestaurants } from '@/lib/mockData';

export default function RestaurantList() {
  const restaurants = getAllRestaurants();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD for restaurant list page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '가맹점 목록',
            description: '다양한 카테고리의 가맹점들을 만나보세요',
            numberOfItems: restaurants.length,
            itemListElement: restaurants.map((restaurant, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Restaurant',
                '@id': `/${restaurant.id}`,
                name: restaurant.name,
                description: restaurant.description,
                address: restaurant.address,
                telephone: restaurant.phone,
                servesCuisine: restaurant.category,
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: restaurant.rating,
                  bestRating: 5,
                },
                url: `/${restaurant.id}`,
              },
            })),
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            가맹점 정보 플랫폼
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            전국 다양한 가맹점들의 상세 정보를 한 곳에서 확인하세요
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>📍 위치 정보</span>
            <span>📞 연락처</span>
            <span>🕒 영업시간</span>
            <span>⭐ 리뷰 평점</span>
            <span>🍽️ 메뉴 정보</span>
          </div>
        </header>

        {/* 카테고리별 요약 섹션 */}
        <section className="mb-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">카테고리별 가맹점</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from(new Set(restaurants.map(r => r.category))).map((category) => {
              const count = restaurants.filter(r => r.category === category).length;
              return (
                <div key={category} className="bg-gray-50 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{category}</h3>
                  <p className="text-sm text-gray-600">{count}개 매장</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 가맹점 목록 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">전체 가맹점 목록</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <article
                key={restaurant.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                itemScope
                itemType="https://schema.org/Restaurant"
              >
                <Link href={`/${restaurant.id}`} className="block p-6">
                  <header className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        <span itemProp="servesCuisine">{restaurant.category}</span>
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm font-medium" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                          <span itemProp="ratingValue">{restaurant.rating}</span>
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2" itemProp="name">
                      {restaurant.name}
                    </h3>
                    <p className="text-gray-600 mb-3" itemProp="description">
                      {restaurant.description}
                    </p>
                  </header>
                  
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-600 mt-0.5">📍</span>
                      <span className="text-sm text-gray-700 line-clamp-2" itemProp="address">
                        {restaurant.address}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">📞</span>
                      <span className="text-sm text-gray-700" itemProp="telephone">
                        {restaurant.phone}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">🕒</span>
                      <span className="text-sm text-gray-700" itemProp="openingHours">
                        {restaurant.businessHours}
                      </span>
                    </div>

                    {/* 키워드 미리보기 */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1">
                        {restaurant.keywords.slice(0, 3).map((keyword, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            #{keyword}
                          </span>
                        ))}
                        {restaurant.keywords.length > 3 && (
                          <span className="px-2 py-1 text-gray-500 text-xs">
                            +{restaurant.keywords.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ 섹션 - LLM 최적화 */}
        <section className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            <details className="border-b pb-4">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                Q: 가맹점 정보는 어떻게 확인할 수 있나요?
              </summary>
              <p className="mt-2 text-gray-700">
                A: 각 가맹점 카드를 클릭하면 상세 정보 페이지로 이동합니다. 주소, 전화번호, 영업시간, 평점 등 모든 정보를 확인할 수 있습니다.
              </p>
            </details>
            
            <details className="border-b pb-4">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                Q: 어떤 종류의 가맹점들이 있나요?
              </summary>
              <p className="mt-2 text-gray-700">
                A: {Array.from(new Set(restaurants.map(r => r.category))).join(', ')} 등 다양한 카테고리의 가맹점들이 등록되어 있습니다.
              </p>
            </details>
            
            <details className="border-b pb-4">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                Q: 가맹점에 직접 연락할 수 있나요?
              </summary>
              <p className="mt-2 text-gray-700">
                A: 네, 각 가맹점의 상세 페이지에서 전화번호를 확인하고 직접 통화할 수 있습니다. '전화걸기' 버튼을 클릭하면 바로 연결됩니다.
              </p>
            </details>
            
            <details className="pb-4">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                Q: 가맹점의 리뷰나 평점은 어떻게 확인하나요?
              </summary>
              <p className="mt-2 text-gray-700">
                A: 각 가맹점 카드와 상세 페이지에서 평점을 확인할 수 있습니다. 5점 만점으로 평가되며, 고객들의 실제 리뷰를 바탕으로 산정됩니다.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
