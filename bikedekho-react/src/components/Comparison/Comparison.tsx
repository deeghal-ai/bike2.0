import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import VisualCompare from './VisualCompare'
import DecisionMatrix from './DecisionMatrix'

interface ComparisonProps {
  data: BikeData
}

type CompareTab = 'visual' | 'decision'

export default function Comparison({ data }: ComparisonProps) {
  const [activeTab, setActiveTab] = useState<CompareTab>('visual')

  const tabs: { id: CompareTab; label: string; icon: string }[] = [
    { id: 'visual', label: 'Visual Compare', icon: '📊' },
    { id: 'decision', label: 'Decision Guide', icon: '🎯' }
  ]

  return (
    <section className="py-6 bg-gray-50">
      {/* Section Header */}
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit']">
          {data.basic.name} Comparison
        </h2>
        <p className="text-sm text-gray-500">Compare with similar bikes in the segment</p>
      </div>

      {/* Tab Switcher */}
      <div className="px-4 mb-4">
        <div className="flex bg-white rounded-xl p-1 border border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#e53935] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'visual' ? (
        <VisualCompare data={data} />
      ) : (
        <DecisionMatrix data={data} />
      )}
    </section>
  )
}

