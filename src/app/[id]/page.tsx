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
        {/* 가맹점 정보 */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {restaurant.category}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span className="font-medium">{restaurant.rating}</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{restaurant.name}</h1>
          <p className="text-gray-600 mb-6">{restaurant.description}</p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">📍</span>
              <span className="text-gray-700">{restaurant.address}</span>
              <button className="text-blue-600 text-sm hover:underline">복사</button>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">📞</span>
              <span className="text-gray-700">{restaurant.phone}</span>
              <button className="text-blue-600 text-sm hover:underline">복사</button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-600">🕒</span>
              <span className="text-gray-700">{restaurant.businessHours}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">관련 키워드</h3>
            <div className="flex flex-wrap gap-2">
              {restaurant.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

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