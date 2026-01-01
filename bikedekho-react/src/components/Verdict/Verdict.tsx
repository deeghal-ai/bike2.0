import type { BikeData } from '../../types/bike'
import { ProgressBar } from '../ui/ProgressBar'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

interface VerdictProps {
  data: BikeData
}

export default function Verdict({ data }: VerdictProps) {
  const { verdict, basic } = data

  const ratingItems = [
    { label: 'Overall', value: verdict.ratings.overall, icon: '⭐' },
    { label: 'Touring', value: verdict.ratings.touring, icon: '🛣️' },
    { label: 'Value', value: verdict.ratings.value, icon: '💰' },
    { label: 'Reliability', value: verdict.ratings.reliability, icon: '🔧' },
    { label: 'City Use', value: verdict.ratings.cityUse, icon: '🏙️' },
    { label: 'Performance', value: verdict.ratings.performance, icon: '⚡' }
  ]

  const getRatingColor = (value: number): 'positive' | 'warning' | 'negative' | 'default' => {
    if (value >= 4.5) return 'positive'
    if (value >= 4.0) return 'positive'
    if (value >= 3.5) return 'warning'
    return 'negative'
  }

  const getTextColor = (value: number) => {
    if (value >= 4.0) return 'text-green-600'
    if (value >= 3.5) return 'text-amber-600'
    return 'text-red-600'
  }

  return (
    <section className="py-6 px-4 bg-white">
      {/* Section Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] flex items-center gap-2">
          <span>🎯</span> Final Verdict
        </h2>
        <p className="text-sm text-gray-500">Our honest assessment of {basic.name}</p>
      </div>

      {/* Main Verdict Card */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
        {/* Icon */}
        <div className="text-center mb-4">
          <span className="text-4xl">💡</span>
        </div>

        {/* Honest Truth */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-[#e53935] uppercase tracking-wide mb-2">
            The Honest Truth
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {verdict.summary}
          </p>
        </div>

        {/* Best For */}
        <div className="bg-green-50 rounded-xl p-4 border border-green-200 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="check" size={18} className="text-green-600" />
            <span className="text-sm font-semibold text-green-800">Best For</span>
          </div>
          <p className="text-sm text-gray-700">{verdict.bestFor}</p>
        </div>

        {/* Rating Bars */}
        <div className="space-y-3">
          {ratingItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-base w-6">{item.icon}</span>
              <span className="text-xs text-gray-500 w-20">{item.label}</span>
              <div className="flex-1">
                <ProgressBar
                  value={item.value}
                  max={5}
                  color={getRatingColor(item.value)}
                  size="sm"
                />
              </div>
              <span className={`text-sm font-bold w-8 text-right ${getTextColor(item.value)}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Decide?</h3>
        <p className="text-sm text-gray-500 mb-4">Get complete specs, dealer locations, and on-road pricing</p>
        <div className="flex gap-3">
          <Button variant="primary" size="lg" fullWidth>
            Check On-Road Price
          </Button>
          <Button variant="secondary" size="lg" fullWidth>
            Compare All Rivals
          </Button>
        </div>
      </div>

      {/* Honest Truth Quote */}
      <div className="bg-gradient-to-r from-gray-50 to-red-50/30 rounded-xl p-4 border-l-4 border-[#e53935]">
        <p className="text-sm text-gray-600 italic leading-relaxed">
          "{verdict.honestTruth}"
        </p>
        <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
          <span className="text-[#e53935]">—</span> BikeDekho Expert Verdict
        </p>
      </div>
    </section>
  )
}
