import { useState } from 'react'
import type { BikeData } from '../../types/bike'

interface ScenarioBattlegroundProps {
  data: BikeData
}

type ScenarioTab = 'dominates' | 'competes' | 'struggles'

export default function ScenarioBattleground({ data }: ScenarioBattlegroundProps) {
  const [activeTab, setActiveTab] = useState<ScenarioTab>('dominates')
  const { scenarioBattleground } = data

  const tabs: { id: ScenarioTab; label: string; icon: string; color: string }[] = [
    { id: 'dominates', label: 'Excels', icon: '🏆', color: 'green' },
    { id: 'competes', label: 'Competes', icon: '⚖️', color: 'blue' },
    { id: 'struggles', label: 'Struggles', icon: '⚠️', color: 'red' }
  ]

  const getScenarios = () => {
    switch (activeTab) {
      case 'dominates':
        return scenarioBattleground.dominates
      case 'competes':
        return scenarioBattleground.competes
      case 'struggles':
        return scenarioBattleground.struggles
    }
  }

  const getColorClasses = () => {
    switch (activeTab) {
      case 'dominates':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-600',
          dot: 'bg-green-500'
        }
      case 'competes':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-600',
          dot: 'bg-blue-500'
        }
      case 'struggles':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-600',
          dot: 'bg-red-500'
        }
    }
  }

  const scenarios = getScenarios()
  const colors = getColorClasses()

  const getScenarioIcon = (scenario: string) => {
    if (scenario.toLowerCase().includes('highway') || scenario.toLowerCase().includes('nh')) return '🛣️'
    if (scenario.toLowerCase().includes('ghat') || scenario.toLowerCase().includes('twisties')) return '🏔️'
    if (scenario.toLowerCase().includes('traffic') || scenario.toLowerCase().includes('city')) return '🚦'
    if (scenario.toLowerCase().includes('parking')) return '🅿️'
    if (scenario.toLowerCase().includes('track')) return '🏁'
    if (scenario.toLowerCase().includes('manali') || scenario.toLowerCase().includes('leh')) return '🗻'
    if (scenario.toLowerCase().includes('weekend')) return '🌄'
    return '🏍️'
  }

  return (
    <div className="px-4">
      {/* Sub Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? tab.id === 'dominates' ? 'bg-green-500 text-white' :
                  tab.id === 'competes' ? 'bg-blue-500 text-white' :
                  'bg-red-500 text-white'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
              activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
            }`}>
              {tab.id === 'dominates' ? scenarioBattleground.dominates.length :
               tab.id === 'competes' ? scenarioBattleground.competes.length :
               scenarioBattleground.struggles.length}
            </span>
          </button>
        ))}
      </div>

      {/* Scenarios List */}
      <div className={`rounded-2xl ${colors.bg} ${colors.border} border p-3 space-y-2.5`}>
        {scenarios.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{getScenarioIcon(item.scenario)}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-800 mb-1">
                  {item.scenario}
                </div>
                <p className="text-xs text-gray-500 mb-2">{item.description}</p>
                
                {/* Comparison Badge */}
                {item.betterThan && (
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text}`}>
                    <span>✓</span> Better than: {item.betterThan}
                  </div>
                )}
                {item.comparable && (
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text}`}>
                    <span>≈</span> On par with: {item.comparable}
                  </div>
                )}
                {item.worseThan && (
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text}`}>
                    <span>✗</span> Worse than: {item.worseThan}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

