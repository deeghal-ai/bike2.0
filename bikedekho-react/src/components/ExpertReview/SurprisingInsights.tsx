import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface SurprisingInsightsProps {
  data: BikeData
}

export default function SurprisingInsights({ data }: SurprisingInsightsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const { surprisingInsights } = data

  return (
    <div className="py-6 px-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">⚡</span>
        <div>
          <h3 className="text-base font-bold text-gray-900">Unexpected Findings</h3>
          <p className="text-xs text-gray-500">Counter-intuitive discoveries from real ownership</p>
        </div>
      </div>

      {/* Insights Accordion */}
      <div className="space-y-3">
        {surprisingInsights.map((insight, index) => (
          <div
            key={insight.id}
            className={`rounded-xl border transition-all duration-300 ${
              expandedIndex === index 
                ? 'bg-gradient-to-br from-purple-50 to-white border-purple-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full p-4 flex items-center gap-3 text-left"
            >
              <span className="text-2xl">{insight.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-800">
                  Finding #{index + 1}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {insight.expected.substring(0, 40)}...
                </div>
              </div>
              <Icon 
                name={expandedIndex === index ? 'chevronUp' : 'chevronDown'} 
                size={18} 
                className="text-gray-400"
              />
            </button>

            {/* Expanded Content */}
            {expandedIndex === index && (
              <div className="px-4 pb-4">
                {/* Expected */}
                <div className="mb-3 p-3 bg-red-50 rounded-lg border border-red-100">
                  <div className="text-[10px] text-red-600 uppercase tracking-wide font-semibold mb-1 flex items-center gap-1">
                    <Icon name="x" size={10} />
                    What You'd Expect
                  </div>
                  <p className="text-sm text-gray-600 italic">"{insight.expected}"</p>
                </div>

                {/* Reality */}
                <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="text-[10px] text-green-600 uppercase tracking-wide font-semibold mb-1 flex items-center gap-1">
                    <Icon name="check" size={10} />
                    What Actually Happens
                  </div>
                  <p className="text-sm text-gray-800">{insight.reality}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

