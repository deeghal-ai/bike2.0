import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface View360Props {
  data: BikeData
}

export default function View360({ data }: View360Props) {
  const { basic } = data

  return (
    <div className="py-6 px-4">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] mb-4">
        360° View of {basic.name}
      </h2>

      {/* 360 View Container */}
      <div className="relative h-56 bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer group">
        {/* Bike Placeholder */}
        <div className="text-center">
          <div className="w-48 h-32 mx-auto mb-2 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
            <Icon name="cube" size={40} className="text-gray-400" />
          </div>
        </div>

        {/* 360 Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="bg-black/70 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon name="cube" size={18} />
            <span className="text-sm font-medium">TAP TO VIEW 360° VIEW</span>
          </div>
        </div>

        {/* Rotation Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
        </div>
      </div>

      {/* Link */}
      <div className="mt-4 text-center">
        <button className="text-sm text-blue-600 font-medium hover:underline">
          360° View of {basic.name}
        </button>
      </div>
    </div>
  )
}

