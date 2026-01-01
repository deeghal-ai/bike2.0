import type { BikeData } from '../../types/bike'

interface SurprisingInsightsProps {
  data: BikeData
}

export default function SurprisingInsights({ data }: SurprisingInsightsProps) {
  const { surprisingInsights } = data

  return (
    <section className="py-6 px-4 bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] flex items-center gap-2">
          <span>⚡</span> 3 Things That Surprised Owners
        </h2>
        <p className="text-sm text-gray-500">Counter-intuitive findings from real ownership</p>
      </div>

      <div className="space-y-3">
        {surprisingInsights.map((insight) => (
          <div
            key={insight.id}
            className="bg-gray-50 rounded-2xl p-4 border border-gray-200"
          >
            {/* Icon */}
            <div className="text-3xl mb-3">{insight.icon}</div>

            {/* Expected */}
            <div className="mb-3">
              <div className="text-[10px] text-red-600 uppercase tracking-wide font-medium mb-1">
                Expected
              </div>
              <p className="text-sm text-gray-500 italic">"{insight.expected}"</p>
            </div>

            {/* Reality */}
            <div>
              <div className="text-[10px] text-green-600 uppercase tracking-wide font-medium mb-1">
                Reality
              </div>
              <p className="text-sm text-gray-800">{insight.reality}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
