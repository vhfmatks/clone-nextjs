export function RestaurantInfo() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          아이스크림/요거트/빙수
        </span>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">도쿄빙수 이수점</h2>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">📍</span>
          <span className="text-gray-700">서울 동작구 동작대로27길 38 , 1층 103,104호 (사당동)</span>
          <button className="text-blue-600 text-sm hover:underline">복사</button>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">📞</span>
          <span className="text-gray-700">02-3482-0503</span>
          <button className="text-blue-600 text-sm hover:underline">복사</button>
        </div>
      </div>
    </div>
  )
} 