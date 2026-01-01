import type { BikeData } from '../../../types/bike'
import { Card, CardHeader, CardLabel } from '../../ui/Card'
import { Badge } from '../../ui/Badge'

interface SegmentPositionCardProps {
  data: BikeData
}

interface DimensionItem {
  icon: string
  name: string
  rank: string
  label: string
  isTop?: boolean
  isBottom?: boolean
}

export default function SegmentPositionCard({ }: SegmentPositionCardProps) {
  const dimensions: DimensionItem[] = [
    { icon: '🛣️', name: 'Touring Comfort', rank: '#1 of 5', label: 'Best in class', isTop: true },
    { icon: '💰', name: 'Value for Money', rank: '#1 of 5', label: 'Best in class', isTop: true },
    { icon: '🔧', name: 'Build Quality', rank: '#2 of 5', label: 'Strong' },
    { icon: '🏙️', name: 'City Usability', rank: '#4 of 5', label: 'Below average', isBottom: true },
    { icon: '⚡', name: 'Performance', rank: '#3 of 5', label: 'Average' }
  ]

  return (
    <Card variant="highlight" className="h-full">
      <CardHeader>
        <CardLabel>Segment Position</CardLabel>
        <Badge variant="info" size="sm">#2 in Segment</Badge>
      </CardHeader>

      <div className="text-center mb-4">
        <span className="text-3xl">📊</span>
        <h3 className="text-lg font-bold text-gray-900 mt-2">Where It Stands</h3>
      </div>

      {/* Dimension Rankings */}
      <div className="space-y-2.5 mb-4">
        {dimensions.map((dim, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-2.5 rounded-lg ${
              dim.isTop
                ? 'bg-green-50 border border-green-200'
                : dim.isBottom
                ? 'bg-red-50 border border-red-200'
                : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <span className="text-lg">{dim.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-800">{dim.name}</div>
              <div className={`text-xs ${
                dim.isTop ? 'text-green-600' : dim.isBottom ? 'text-red-600' : 'text-gray-500'
              }`}>
                {dim.label}
              </div>
            </div>
            <span className={`text-xs font-medium ${
              dim.isTop ? 'text-green-600' : dim.isBottom ? 'text-red-600' : 'text-gray-500'
            }`}>
              {dim.rank}
            </span>
          </div>
        ))}
      </div>

      {/* Positioning Statement */}
      <div className="text-center italic text-sm text-gray-500 border-t border-gray-200 pt-3">
        "The thinking rider's choice — all the touring capability, none of the premium tax"
      </div>
    </Card>
  )
}
