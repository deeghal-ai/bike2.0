import { usePersona } from '../../contexts/PersonaContext'
import type { BikeData, PersonaType } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface KeySpecsProps {
  data: BikeData
}

interface SpecCard {
  id: string
  icon: string
  label: string
  value: string
  humanization: string
  personaRelevance?: {
    [key in PersonaType]?: {
      badge?: string
      type: 'positive' | 'warning' | 'neutral'
    }
  }
}

export default function KeySpecs({ data }: KeySpecsProps) {
  const { currentPersona } = usePersona()
  const { specs } = data

  const specCards: SpecCard[] = [
    {
      id: 'displacement',
      icon: 'engine',
      label: 'Engine',
      value: `${specs.engine.displacement}, ${specs.engine.cooling}`,
      humanization: 'Smoother long rides, less heat stress in traffic',
      personaRelevance: {
        weekend: { badge: 'Great for touring', type: 'positive' },
        enthusiast: { badge: 'Good power', type: 'positive' }
      }
    },
    {
      id: 'power',
      icon: 'power',
      label: 'Max Power',
      value: specs.engine.maxPower.split('@')[0].trim(),
      humanization: 'Effortless 90-100 km/h cruising',
      personaRelevance: {
        enthusiast: { badge: 'Adequate', type: 'neutral' },
        weekend: { badge: 'Highway ready', type: 'positive' }
      }
    },
    {
      id: 'torque',
      icon: 'torque',
      label: 'Max Torque',
      value: specs.engine.maxTorque.split('@')[0].trim(),
      humanization: 'Strong mid-range, fewer gear changes',
      personaRelevance: {
        weekend: { badge: 'Strong mid-range', type: 'positive' }
      }
    },
    {
      id: 'weight',
      icon: 'weight',
      label: 'Kerb Weight',
      value: specs.dimensions.kerbWeight,
      humanization: 'Highway stability, heavy in parking',
      personaRelevance: {
        commuter: { badge: 'Heavy for city', type: 'warning' },
        weekend: { badge: 'Stable on highway', type: 'positive' }
      }
    },
    {
      id: 'fuel',
      icon: 'fuel',
      label: 'Fuel Tank',
      value: specs.dimensions.fuelCapacity,
      humanization: '450-500 km real touring range',
      personaRelevance: {
        weekend: { badge: 'Long range', type: 'positive' },
        value: { badge: 'Great range', type: 'positive' }
      }
    },
    {
      id: 'mileage',
      icon: 'gauge',
      label: 'Mileage',
      value: `${specs.performance.mileageArai} (ARAI)`,
      humanization: '40+ highway, 30-35 city',
      personaRelevance: {
        value: { badge: 'Best in class', type: 'positive' },
        commuter: { badge: 'Good economy', type: 'positive' }
      }
    }
  ]

  const getPersonaBadge = (card: SpecCard) => {
    if (!card.personaRelevance) return null
    return card.personaRelevance[currentPersona]
  }

  return (
    <section className="py-6 px-4 bg-white">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-['Outfit']">
            {data.basic.name} Key Specs & Features
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">Quick overview of specifications</p>
        </div>
      </div>

      {/* AI Summary */}
      <div className="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#e53935]">✦</span>
          <span className="text-sm font-semibold text-gray-800">Owners Opinion On Specifications</span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">AI summary</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {data.consensus.ownerConsensus}
        </p>
        <button className="mt-2 text-sm text-blue-600 font-medium hover:underline">
          Read All User Reviews
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-gray-200">
        <button className="pb-2 text-sm font-semibold text-[#e53935] border-b-2 border-[#e53935]">
          Key Specs
        </button>
        <button className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          Top Features
        </button>
      </div>

      {/* Play Engine Sound */}
      <button className="w-full mb-4 p-3 bg-[#e53935] rounded-xl text-white flex items-center justify-center gap-2 hover:bg-[#c62828] transition-colors">
        <Icon name="volume" size={18} />
        <span className="text-sm font-medium">Play Engine Sound</span>
        <Icon name="play" size={14} />
      </button>

      {/* Specs Grid - 2 columns for larger cards with humanization */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {specCards.map((card) => {
          const badge = getPersonaBadge(card)
          return (
            <div
              key={card.id}
              className={`relative p-3.5 rounded-xl border bg-white transition-all ${
                badge?.type === 'positive' 
                  ? 'border-green-200 bg-green-50/30' 
                  : badge?.type === 'warning'
                  ? 'border-amber-200 bg-amber-50/30'
                  : 'border-gray-200'
              }`}
            >
              {/* Persona Badge */}
              {badge && (
                <div className={`absolute -top-2 left-3 right-3 text-[9px] font-medium text-center px-1.5 py-0.5 rounded-full ${
                  badge.type === 'positive' 
                    ? 'bg-green-500 text-white' 
                    : badge.type === 'warning'
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-500 text-white'
                }`}>
                  {badge.badge}
                </div>
              )}

              {/* Icon + Label Row */}
              <div className="flex items-center gap-2 mb-1.5 mt-1">
                <div className="text-gray-400">
                  <Icon name={card.icon} size={18} />
                </div>
                <div className="text-xs text-gray-500 font-medium">{card.label}</div>
              </div>

              {/* Value */}
              <div className="text-sm font-bold text-gray-900 mb-2">{card.value}</div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-2"></div>

              {/* Humanization Text */}
              <div className="text-[11px] text-gray-500 leading-snug">
                {card.humanization}
              </div>
            </div>
          )
        })}
      </div>

      {/* WhatsApp Brochure */}
      <button className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
        <Icon name="whatsapp" size={20} className="text-green-500" />
        <span className="text-sm font-medium text-gray-700">Get Brochure on WhatsApp</span>
      </button>

      {/* View All Specs Link */}
      <div className="mt-4 text-center">
        <button className="text-sm text-blue-600 font-medium hover:underline">
          View All Specs and Features
        </button>
      </div>
    </section>
  )
}

