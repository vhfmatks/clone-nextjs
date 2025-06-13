export function Recommendations() {
  const regularFavorites = [
    { name: '설빙 이수점', type: '디저트카페', rating: 4.5 },
    { name: '콜드스톤 사당점', type: '아이스크림', rating: 4.3 },
    { name: '배스킨라빈스 이수역점', type: '아이스크림', rating: 4.2 }
  ];

  const suggestions = [
    { name: '할리스커피 이수점', type: '카페', rating: 4.4 },
    { name: '투썸플레이스 이수역점', type: '카페', rating: 4.1 },
    { name: '스타벅스 이수역점', type: '카페', rating: 4.3 }
  ];

  return (
    <div className="space-y-6">
      {/* 단골이 좋아하는 다른 맛집 */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">여기 단골이 좋아하는 다른 맛집은?</h3>
        
        <div className="space-y-3">
          {regularFavorites.map((place, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🍨</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{place.name}</p>
                  <p className="text-sm text-gray-500">{place.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm font-medium">{place.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 추천 맛집 */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">여기도 좋아하실 것 같아요</h3>
        
        <div className="space-y-3">
          {suggestions.map((place, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">☕</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{place.name}</p>
                  <p className="text-sm text-gray-500">{place.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm font-medium">{place.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 