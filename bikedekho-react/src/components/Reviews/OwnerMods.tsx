import type { BikeData } from '../../types/bike'
import { ProgressBar } from '../ui/ProgressBar'

interface OwnerModsProps {
  data: BikeData
}

export default function OwnerMods({ data }: OwnerModsProps) {
  const { popularMods } = data

  return (
    <div className="py-6 px-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🔧</span>
        <div>
          <h3 className="text-base font-bold text-gray-900">What Owners Modify</h3>
          <p className="text-xs text-gray-500">Popular upgrades from 850+ owners</p>
        </div>
      </div>

      {/* Mods List */}
      <div className="space-y-3 mb-4">
        {popularMods.map((mod, index) => (
          <div
            key={index}
            className="p-3 rounded-xl bg-gray-50 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-2">
              {/* Icon */}
              <span className="text-xl">{mod.icon}</span>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">{mod.mod}</span>
                  <span className="text-sm font-bold text-[#e53935]">{mod.percentage}%</span>
                </div>
                <div className="text-xs text-gray-500">{mod.price}</div>
              </div>
            </div>

            {/* Progress Bar */}
            <ProgressBar value={mod.percentage} max={100} color="primary" size="sm" />

            {/* Reason */}
            <div className="mt-2 text-xs text-gray-500 italic">
              "{mod.reason}"
            </div>
          </div>
        ))}
      </div>

      {/* Pattern Insight */}
      <div className="flex items-start gap-2 p-3 rounded-xl bg-blue-50 border border-blue-200">
        <span className="text-lg">💡</span>
        <div>
          <span className="text-sm font-medium text-blue-800">Pattern Insight:</span>
          <span className="text-sm text-blue-700 ml-1">
            Most modifications are touring-focused (comfort + utility), not performance upgrades.
          </span>
        </div>
      </div>
    </div>
  )
}

