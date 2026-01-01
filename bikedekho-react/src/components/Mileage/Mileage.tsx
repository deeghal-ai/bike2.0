import type { BikeData } from '../../types/bike'
import MileageMystery from './MileageMystery'

interface MileageProps {
  data: BikeData
}

export default function Mileage({ data }: MileageProps) {
  const { basic } = data

  return (
    <section className="py-6 bg-white">
      {/* Header */}
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit']">
          {basic.name} Mileage & Range
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">Real-world fuel efficiency with cost calculator</p>
      </div>

      {/* MileageMystery - Enhanced with Range, Tank & Calculator */}
      <div className="px-4">
        <MileageMystery data={data} />
      </div>
    </section>
  )
}

