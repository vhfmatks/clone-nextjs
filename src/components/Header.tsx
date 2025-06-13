export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            뒤로
          </button>
          <div className="border-l border-gray-300 h-6"></div>
          <button className="text-gray-600 hover:text-gray-800">
            공유하기
          </button>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-lg font-bold text-blue-600">eat.pl 잇플</h1>
          <p className="text-sm text-gray-500">BC카드가 제공하는 맛집정보 AI 검색 서비스</p>
        </div>
      </div>
    </header>
  )
} 