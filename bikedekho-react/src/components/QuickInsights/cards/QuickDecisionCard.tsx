import type { BikeData } from '../../../types/bike'
import { Card, CardHeader, CardLabel } from '../../ui/Card'
import { Icon } from '../../ui/Icon'

interface QuickDecisionCardProps {
  data: BikeData
}

export default function QuickDecisionCard({ data }: QuickDecisionCardProps) {
  const { basic } = data

  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(2)}L`
  }

  const perfectIf = [
    'Weekend highway trips are your priority',
    'You want touring features under ₹2L',
    'Refinement matters more than raw power'
  ]

  const skipIf = [
    'Daily city commute is 80%+ of riding',
    'You prefer lightweight, flickable bikes',
    'Tight parking is a daily reality'
  ]

  return (
    <Card variant="highlight" className="h-full">
      <CardHeader>
        <CardLabel>Quick Decision</CardLabel>
        <span className="text-sm font-semibold text-gray-800">
          {formatPrice(basic.price.exShowroom.max)}
        </span>
      </CardHeader>

      <div className="text-center mb-4">
        <span className="text-3xl">🎯</span>
        <h3 className="text-lg font-bold text-gray-900 mt-2">Is This Bike For You?</h3>
      </div>

      {/* Persona Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-xs text-gray-700">
          <span>🛣️</span> Tourer
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-xs text-gray-700">
          <span>🏔️</span> Weekend Rider
        </span>
      </div>

      {/* Verdict Box */}
      <div className="bg-gray-50 rounded-xl p-3 mb-4 border border-gray-200">
        <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-wide mb-1.5">
          <Icon name="warning" size={12} />
          THE HONEST VERDICT
        </div>
        <p className="text-sm text-gray-800 leading-relaxed">
          India's best budget tourer with premium features{' '}
          <span className="text-gray-500">— but 180kg weight challenges city riding</span>
        </p>
      </div>

      {/* Decision Lists */}
      <div className="space-y-3">
        {/* Perfect If */}
        <div>
          <div className="flex items-center gap-1.5 text-green-600 text-xs font-semibold mb-2">
            <Icon name="check" size={14} />
            Perfect If
          </div>
          <div className="space-y-1.5">
            {perfectIf.map((item, index) => (
              <div key={index} className="text-xs text-gray-600 pl-5">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Skip If */}
        <div>
          <div className="flex items-center gap-1.5 text-red-600 text-xs font-semibold mb-2">
            <Icon name="x" size={14} />
            Skip If
          </div>
          <div className="space-y-1.5">
            {skipIf.map((item, index) => (
              <div key={index} className="text-xs text-gray-600 pl-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Advantage */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="text-[10px] text-amber-600 uppercase tracking-wide mb-1">⭐ KEY ADVANTAGE</div>
        <p className="text-xs text-gray-700">
          Only 250cc with riding modes, traction control, and slipper clutch under ₹1.8L
        </p>
      </div>
    </Card>
  )
}
