import type { BikeData } from '../../../types/bike'
import { Card, CardHeader, CardLabel } from '../../ui/Card'
import { Badge } from '../../ui/Badge'

interface OwnerModsCardProps {
  data: BikeData
}

export default function OwnerModsCard({ data }: OwnerModsCardProps) {
  const { popularMods } = data

  return (
    <Card variant="highlight" className="h-full">
      <CardHeader>
        <CardLabel>Owner Mods</CardLabel>
        <Badge variant="muted" size="sm">850+ Owners</Badge>
      </CardHeader>

      <div className="text-center mb-4">
        <span className="text-3xl">🔧</span>
        <h3 className="text-lg font-bold text-gray-900 mt-2">What Owners Add</h3>
      </div>

      {/* Mods List */}
      <div className="space-y-3 mb-4">
        {popularMods.map((mod, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-200"
          >
            {/* Percentage */}
            <div className="w-12 h-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
              <span className="text-sm font-bold text-[#e53935]">{mod.percentage}%</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-800">{mod.mod}</div>
              <div className="text-xs text-gray-500">
                {mod.price} • "{mod.reason}"
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pattern Insight */}
      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50 border border-blue-200">
        <span className="text-base">💡</span>
        <span className="text-xs text-blue-700">
          Pattern: Most mods are touring-focused (comfort + utility), not performance.
        </span>
      </div>
    </Card>
  )
}
