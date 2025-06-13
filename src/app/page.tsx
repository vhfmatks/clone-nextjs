import { Header } from '@/components/Header'
import { RestaurantInfo } from '@/components/RestaurantInfo'
import { BusinessHours } from '@/components/BusinessHours'
import { TimeAnalysis } from '@/components/TimeAnalysis'
import { Demographics } from '@/components/Demographics'
import { SecondVisit } from '@/components/SecondVisit'
import { Recommendations } from '@/components/Recommendations'
import { Statistics } from '@/components/Statistics'
import { JsonLd } from '@/components/JsonLd'
import { AeoSchema } from '@/components/AeoSchema'

export default function RestaurantProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd />
      <AeoSchema />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <RestaurantInfo />
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
  )
}
