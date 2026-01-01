import { useState } from 'react'
import type { BikeData } from '../../../types/bike'
import { Card, CardHeader, CardLabel } from '../../ui/Card'
import { Badge } from '../../ui/Badge'
import { Icon } from '../../ui/Icon'

interface QuickRivalsCardProps {
  data: BikeData
}

export default function QuickRivalsCard({ data }: QuickRivalsCardProps) {
  const { rivals, decisionMatrix, basic } = data
  const [showDecisionGuide, setShowDecisionGuide] = useState(false)

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'positive': return 'positive'
      case 'warning': return 'warning'
      case 'info': return 'info'
      default: return 'muted'
    }
  }

  const decisionItems = [
    { name: basic.name, points: decisionMatrix.chooseDominar.slice(0, 2), icon: '🏆', isMain: true },
    { name: 'Gixxer 250', points: decisionMatrix.chooseGixxer.slice(0, 2), icon: '🏃' },
    { name: 'V-Strom SX', points: decisionMatrix.chooseVStrom.slice(0, 2), icon: '⛽' },
    { name: 'Duke 250', points: decisionMatrix.chooseKTM.slice(0, 2), icon: '⚡' }
  ]

  return (
    <Card variant="highlight" className="h-full">
      <CardHeader>
        <CardLabel>Quick Rivals</CardLabel>
      </CardHeader>

      <div className="text-center mb-3">
        <span className="text-3xl">⚔️</span>
        <h3 className="text-lg font-bold text-gray-900 mt-1">Compare Rivals</h3>
      </div>

      {/* View Toggle */}
      <div className="flex gap-1 mb-3 p-0.5 bg-gray-100 rounded-lg">
        <button
          onClick={() => setShowDecisionGuide(false)}
          className={`flex-1 py-1.5 px-2 rounded-md text-[10px] font-medium transition-all ${
            !showDecisionGuide ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'
          }`}
        >
          📊 Visual
        </button>
        <button
          onClick={() => setShowDecisionGuide(true)}
          className={`flex-1 py-1.5 px-2 rounded-md text-[10px] font-medium transition-all ${
            showDecisionGuide ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'
          }`}
        >
          🎯 Decision
        </button>
      </div>

      {!showDecisionGuide ? (
        <>
          {/* Rivals Grid */}
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {rivals.slice(0, 4).map((rival) => (
              <div
                key={rival.id}
                className="bg-gray-50 rounded-lg p-2 border border-gray-200"
              >
                {/* Rival Image Placeholder */}
                <div className="h-10 mb-1.5 rounded bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <span className="text-[8px] text-gray-400">{rival.name.split(' ').slice(-1)}</span>
                </div>

                {/* Badge */}
                <div className="mb-1">
                  <Badge variant={getBadgeVariant(rival.badgeType)} size="sm">
                    {rival.badge}
                  </Badge>
                </div>

                {/* Name and Price */}
                <div className="text-[10px] font-medium text-gray-800 truncate">{rival.name}</div>
                <div className="text-[10px] text-gray-500">{rival.price}</div>
              </div>
            ))}
          </div>

          {/* Quick Comparison */}
          <div className="p-2 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-[10px] text-blue-700 text-center">
              💡 Dominar: Best touring comfort at lowest price
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Decision Guide - Compact */}
          <div className="space-y-2 mb-3">
            {decisionItems.map((item, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg border ${
                  item.isMain ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">{item.icon}</span>
                  <span className={`text-xs font-medium ${item.isMain ? 'text-green-800' : 'text-gray-800'}`}>
                    {item.name}
                  </span>
                  {item.isMain && (
                    <span className="text-[8px] bg-green-500 text-white px-1 py-0.5 rounded">TOP</span>
                  )}
                </div>
                <div className="space-y-0.5">
                  {item.points.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-start gap-1">
                      <Icon name="check" size={10} className={`mt-0.5 ${item.isMain ? 'text-green-600' : 'text-gray-400'}`} />
                      <span className={`text-[9px] leading-tight ${item.isMain ? 'text-green-700' : 'text-gray-600'}`}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div className="p-2 bg-green-50 rounded-lg border border-green-200">
            <div className="text-[10px] text-green-700 text-center font-medium">
              ✓ {basic.name} wins for weekend tourers
            </div>
          </div>
        </>
      )}
    </Card>
  )
}
