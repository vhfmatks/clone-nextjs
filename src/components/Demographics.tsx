export function Demographics() {
  const ageGroups = [
    { age: '10대', percentage: 5 },
    { age: '20대', percentage: 30 },
    { age: '30대', percentage: 35 },
    { age: '40대', percentage: 20 },
    { age: '50대', percentage: 8 },
    { age: '60대\n이상', percentage: 2 }
  ];

  const genderData = {
    male: 45,
    female: 55
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">누가 주로 이용하나요?</h3>
      
      {/* 연령별 분포 */}
      <div className="mb-8">
        <div className="grid grid-cols-6 gap-2 mb-4">
          {ageGroups.map((group, index) => (
            <div key={index} className="text-center">
              <div className="relative w-12 h-24 bg-gray-200 rounded mx-auto mb-2">
                <div 
                  className="absolute bottom-0 w-full bg-blue-500 rounded"
                  style={{ height: `${group.percentage * 2}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 whitespace-pre-line">{group.age}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 성별 분포 */}
      <div className="flex items-center justify-center space-x-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl">👨</span>
          </div>
          <p className="text-sm font-medium">남성</p>
          <p className="text-lg font-bold text-blue-600">{genderData.male}%</p>
        </div>
        
        <div className="w-px h-16 bg-gray-200"></div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl">👩</span>
          </div>
          <p className="text-sm font-medium">여성</p>
          <p className="text-lg font-bold text-pink-600">{genderData.female}%</p>
        </div>
      </div>
    </div>
  )
} 