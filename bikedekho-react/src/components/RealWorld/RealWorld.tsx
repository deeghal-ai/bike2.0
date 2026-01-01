import type { BikeData } from '../../types/bike'
import DayStory from './DayStory'

interface RealWorldProps {
  data: BikeData
}

export default function RealWorld({ data }: RealWorldProps) {
  return (
    <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Header */}
      <div className="px-4 mb-5">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] flex items-center gap-2">
          <span className="text-2xl">🌍</span> A Day With Dominar
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Real stories from real owners — how this bike fits into different lifestyles
        </p>
      </div>

      {/* Day Stories */}
      <DayStory data={data} />
    </section>
  )
}
