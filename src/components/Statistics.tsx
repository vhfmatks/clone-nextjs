'use client';

import { useState } from 'react';

export function Statistics() {
  const [salesScope, setSalesScope] = useState<'national' | 'district'>('national');
  const [customerScope, setCustomerScope] = useState<'district'>('district');

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">얼마나, 누구에게 인기가 있을까요?</h3>
      
      {/* 매출건수 비교 */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">동일업종 내 매출건수</h4>
        
        <div className="flex space-x-2 mb-4">
          <button 
            onClick={() => setSalesScope('national')}
            className={`px-4 py-2 text-sm rounded-lg ${
              salesScope === 'national'
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            전국
          </button>
          <button 
            onClick={() => setSalesScope('district')}
            className={`px-4 py-2 text-sm rounded-lg ${
              salesScope === 'district'
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            시군구
          </button>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">매출 순위</span>
            <span className="text-sm font-medium text-blue-600">
              {salesScope === 'national' ? '전국 15위' : '시군구 3위'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full" 
              style={{ width: salesScope === 'national' ? '75%' : '90%' }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>하위</span>
            <span>상위</span>
          </div>
        </div>
      </div>

      {/* 현지고객 비율 */}
      <div>
        <h4 className="font-medium mb-4">결제고객 중 현지고객 비율</h4>
        
        <div className="flex space-x-2 mb-4">
          <button 
            className="px-4 py-2 text-sm rounded-lg bg-blue-100 text-blue-700 font-medium"
          >
            시군구
          </button>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">현지고객 비율</span>
            <span className="text-sm font-medium text-green-600">68%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-600 h-3 rounded-full" style={{ width: '68%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            💡 현지고객 비율이 높아 지역 주민들에게 사랑받는 맛집입니다!
          </p>
        </div>
      </div>
    </div>
  )
} 