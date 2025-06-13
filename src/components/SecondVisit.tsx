export function SecondVisit() {
  const visitData = [
    { name: '카페 A', type: '카페', distance: '200m' },
    { name: '레스토랑 B', type: '음식점', distance: '300m' },
    { name: '카페 C', type: '카페', distance: '150m' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">2차로 여기를 많이 방문했어요!</h3>
      <p className="text-sm text-gray-600 mb-4">다른 사람들은 어디를 갔는지 알려드릴게요</p>
      
      <div className="space-y-3">
        {visitData.map((place, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">{index + 1}</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{place.name}</p>
                <p className="text-sm text-gray-500">{place.type}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{place.distance}</span>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
        더 보기
      </button>
    </div>
  )
} 