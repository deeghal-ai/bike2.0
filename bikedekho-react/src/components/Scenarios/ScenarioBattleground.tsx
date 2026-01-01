import type { BikeData } from '../../types/bike'

interface ScenarioBattlegroundProps {
  data: BikeData
}

export default function ScenarioBattleground({ data }: ScenarioBattlegroundProps) {
  const { scenarioBattleground } = data

  return (
    <section className="py-6 px-4 bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] flex items-center gap-2">
          <span>⚔️</span> Where It Shines & Struggles
        </h2>
        <p className="text-sm text-gray-500">Real-world scenario performance</p>
      </div>

      <div className="space-y-4">
        {/* Dominates Column */}
        <div className="rounded-2xl overflow-hidden border border-green-200">
          <div className="bg-green-50 px-4 py-2.5 border-b border-green-200">
            <span className="text-sm font-semibold text-green-700">🏆 Dominates</span>
          </div>
          <div className="bg-green-50/50 p-3 space-y-2.5">
            {scenarioBattleground.dominates.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-3 border border-green-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base">🛣️</span>
                  <span className="text-sm font-medium text-gray-800">{item.scenario}</span>
                </div>
                <p className="text-xs text-gray-500 mb-1.5">{item.description}</p>
                {item.betterThan && (
                  <div className="text-[10px] text-green-600">
                    Better than: {item.betterThan}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Competes Column */}
        <div className="rounded-2xl overflow-hidden border border-blue-200">
          <div className="bg-blue-50 px-4 py-2.5 border-b border-blue-200">
            <span className="text-sm font-semibold text-blue-700">⚖️ Competitive</span>
          </div>
          <div className="bg-blue-50/50 p-3 space-y-2.5">
            {scenarioBattleground.competes.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-3 border border-blue-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base">🏔️</span>
                  <span className="text-sm font-medium text-gray-800">{item.scenario}</span>
                </div>
                <p className="text-xs text-gray-500 mb-1.5">{item.description}</p>
                {item.comparable && (
                  <div className="text-[10px] text-blue-600">
                    Comparable: {item.comparable}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Struggles Column */}
        <div className="rounded-2xl overflow-hidden border border-red-200">
          <div className="bg-red-50 px-4 py-2.5 border-b border-red-200">
            <span className="text-sm font-semibold text-red-700">⚠️ Struggles</span>
          </div>
          <div className="bg-red-50/50 p-3 space-y-2.5">
            {scenarioBattleground.struggles.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-3 border border-red-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base">🚦</span>
                  <span className="text-sm font-medium text-gray-800">{item.scenario}</span>
                </div>
                <p className="text-xs text-gray-500 mb-1.5">{item.description}</p>
                {item.worseThan && (
                  <div className="text-[10px] text-red-600">
                    Worse than: {item.worseThan}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
