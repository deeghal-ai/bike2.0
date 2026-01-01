import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Badge } from '../ui/Badge'
import { Icon } from '../ui/Icon'

interface TypicalDayProps {
  data: BikeData
}

export default function TypicalDay({ data }: TypicalDayProps) {
  const { typicalDayScenarios } = data
  const [activeScenario, setActiveScenario] = useState(typicalDayScenarios[0].id)

  const currentScenario = typicalDayScenarios.find(s => s.id === activeScenario) || typicalDayScenarios[0]

  const getVerdictVariant = (type: string) => {
    switch (type) {
      case 'positive': return 'positive'
      case 'warning': return 'warning'
      default: return 'muted'
    }
  }

  return (
    <div className="px-4">
      {/* Scenario Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
        {typicalDayScenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setActiveScenario(scenario.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeScenario === scenario.id
                ? 'bg-[#e53935] text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            <span>{scenario.icon}</span>
            <span>{scenario.name}</span>
          </button>
        ))}
      </div>

      {/* Summary Card at Top */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mb-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-xs text-gray-500 mb-1">Comfort</div>
            <div className={`text-lg font-bold ${
              currentScenario.summary.comfortValue === 'positive' ? 'text-green-600' :
              currentScenario.summary.comfortValue === 'warning' ? 'text-amber-600' : 'text-gray-800'
            }`}>
              {currentScenario.summary.comfortRating}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Mileage</div>
            <div className="text-lg font-bold text-gray-800">{currentScenario.summary.avgMileage}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Verdict</div>
            <Badge variant={getVerdictVariant(currentScenario.summary.verdictType)} size="sm">
              {currentScenario.summary.verdict}
            </Badge>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#e53935] via-gray-300 to-gray-300" />

        {/* Timeline Items */}
        <div className="space-y-3">
          {currentScenario.timeline.map((item, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline Dot */}
              <div className={`absolute left-1.5 top-3 w-3 h-3 rounded-full border-2 border-white shadow-sm ${
                index === 0 ? 'bg-[#e53935]' : 'bg-gray-400'
              }`} />

              {/* Content */}
              <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-400 font-medium">{item.time}</span>
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-2">{item.title}</div>

                {/* Points */}
                <div className="space-y-1.5">
                  {item.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className={`flex items-start gap-1.5 text-xs ${
                        point.type === 'positive' ? 'text-green-600' : 'text-amber-600'
                      }`}
                    >
                      {point.type === 'positive' ? (
                        <Icon name="check" size={12} className="mt-0.5 flex-shrink-0" />
                      ) : (
                        <Icon name="warning" size={12} className="mt-0.5 flex-shrink-0" />
                      )}
                      <span>{point.text}</span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                {item.quote && (
                  <div className="mt-2 bg-gray-50 rounded-lg p-2 border-l-2 border-[#e53935]">
                    <p className="text-[10px] text-gray-600 italic">"{item.quote.text}"</p>
                    <p className="text-[9px] text-gray-400 mt-0.5">— {item.quote.author}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

