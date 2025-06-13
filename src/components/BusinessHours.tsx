'use client';

import { useState } from 'react';

export function BusinessHours() {
  const [activeTab, setActiveTab] = useState<'today' | 'weekly'>('today');

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">오늘 영업하나요?</h3>
      <p className="text-sm text-gray-600 mb-4">실시간 결제건수로 알아볼게요!</p>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">최근 1달 기준 (02.10 ~ 03.09)</p>
        <div className="flex items-center space-x-4 mt-2">
          <span className="text-sm">최초 결제 <strong>00:00</strong></span>
          <span className="text-sm">최종 결제 <strong>24:00</strong></span>
        </div>
      </div>

      <div className="flex space-x-1 mb-4">
        <button 
          onClick={() => setActiveTab('today')}
          className={`px-4 py-2 text-sm rounded-lg ${
            activeTab === 'today' 
              ? 'bg-blue-100 text-blue-700 font-medium' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          오늘 현황
        </button>
        <button 
          onClick={() => setActiveTab('weekly')}
          className={`px-4 py-2 text-sm rounded-lg ${
            activeTab === 'weekly' 
              ? 'bg-blue-100 text-blue-700 font-medium' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          요일별 현황
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">실시간</p>
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mt-2">
            <span className="text-2xl">🔴</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">현재</p>
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-2">
            <span className="text-sm font-medium">-</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">일주일 평균</p>
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mt-2">
            <span className="text-sm font-medium">-</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">오늘</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
        </div>
      </div>
    </div>
  )
} 