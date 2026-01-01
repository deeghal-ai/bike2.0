import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'
import { Badge } from '../ui/Badge'

interface DecisionMatrixProps {
  data: BikeData
}

export default function DecisionMatrix({ data }: DecisionMatrixProps) {
  const { decisionMatrix, basic } = data

  const matrixCards = [
    {
      name: basic.name,
      badge: 'Best for Touring',
      points: decisionMatrix.chooseDominar,
      isRecommended: true,
      icon: '🏆'
    },
    {
      name: 'Suzuki Gixxer 250',
      badge: 'Most Agile',
      points: decisionMatrix.chooseGixxer,
      icon: '🏃'
    },
    {
      name: 'Suzuki V-Strom SX',
      badge: 'Best Mileage',
      points: decisionMatrix.chooseVStrom,
      icon: '⛽'
    },
    {
      name: 'KTM 250 Duke',
      badge: 'Most Powerful',
      points: decisionMatrix.chooseKTM,
      icon: '⚡'
    }
  ]

  return (
    <div className="px-4">
      <div className="mb-4 p-3 bg-white rounded-xl border border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">🎯</span>
          <span className="text-sm font-semibold text-gray-800">Decision Guide</span>
        </div>
        <p className="text-xs text-gray-500">Choose the right bike based on your priorities</p>
      </div>

      <div className="space-y-3">
        {matrixCards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl p-4 border transition-all ${
              card.isRecommended
                ? 'bg-green-50 border-green-200'
                : 'bg-white border-gray-200'
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{card.icon}</span>
              <div className="flex-1">
                <span className="text-base font-semibold text-gray-800">{card.name}</span>
                {card.badge && (
                  <div className="mt-1">
                    <Badge 
                      variant={card.isRecommended ? 'positive' : 'muted'} 
                      size="sm"
                    >
                      {card.badge}
                    </Badge>
                  </div>
                )}
              </div>
              {card.isRecommended && (
                <div className="px-2 py-1 bg-green-500 text-white text-[10px] font-semibold rounded">
                  RECOMMENDED
                </div>
              )}
            </div>

            {/* Choose if... */}
            <div className="text-xs text-gray-500 mb-2">Choose this if you...</div>

            {/* Points */}
            <div className="space-y-2">
              {card.points.map((point, pointIndex) => {
                const isWarning = point.toLowerCase().includes('tolerating') || 
                                  point.toLowerCase().includes('premium') ||
                                  point.toLowerCase().includes('willing')
                return (
                  <div
                    key={pointIndex}
                    className={`flex items-start gap-2 text-xs ${
                      isWarning ? 'text-amber-600' : card.isRecommended ? 'text-green-700' : 'text-gray-600'
                    }`}
                  >
                    {isWarning ? (
                      <Icon name="warning" size={14} className="mt-0.5 flex-shrink-0" />
                    ) : (
                      <Icon name="check" size={14} className="mt-0.5 flex-shrink-0" />
                    )}
                    <span>{point}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
