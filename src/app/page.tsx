import Link from 'next/link';
import { getAllRestaurants } from '@/lib/mockData';

export default function RestaurantList() {
  const restaurants = getAllRestaurants();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">가맹점 목록</h1>
          <p className="text-gray-600">다양한 가맹점들을 둘러보세요</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              href={`/${restaurant.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="mb-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {restaurant.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h2>
              <p className="text-gray-600 mb-3">{restaurant.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">📍</span>
                  <span className="text-sm text-gray-700 truncate">{restaurant.address}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">📞</span>
                  <span className="text-sm text-gray-700">{restaurant.phone}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">⭐</span>
                  <span className="text-sm text-gray-700">{restaurant.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
