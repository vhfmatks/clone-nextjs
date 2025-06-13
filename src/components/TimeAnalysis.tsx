export function TimeAnalysis() {
  const timeSlots = [
    { name: '새벽', time: '00~06', activity: 'low' },
    { name: '오전', time: '06~11', activity: 'medium' },
    { name: '점심', time: '11~14', activity: 'high' },
    { name: '오후', time: '14~17', activity: 'high' },
    { name: '저녁', time: '17~21', activity: 'medium' },
    { name: '심야', time: '21~24', activity: 'low' }
  ];

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case 'high': return 'bg-red-400';
      case 'medium': return 'bg-yellow-400';
      case 'low': return 'bg-green-400';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">언제가 가장 붐빌까요?</h3>
      <p className="text-sm text-gray-600 mb-4">일주일 평균</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {timeSlots.map((slot, index) => (
          <div key={index} className="text-center">
            <div className={`w-16 h-16 ${getActivityColor(slot.activity)} rounded-full flex items-center justify-center mx-auto mb-2`}>
              <span className="text-white font-medium text-sm">{slot.name}</span>
            </div>
            <p className="text-xs text-gray-600">{slot.time}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center space-x-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-gray-600">여유</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span className="text-gray-600">보통</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <span className="text-gray-600">붐빔</span>
        </div>
      </div>
    </div>
  )
} 