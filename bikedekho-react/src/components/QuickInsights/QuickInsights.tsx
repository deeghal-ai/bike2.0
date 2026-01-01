import type { BikeData } from '../../types/bike'
import { Carousel } from '../ui/Carousel'
import QuickDecisionCard from './cards/QuickDecisionCard'
import TrueCostCard from './cards/TrueCostCard'
import SegmentPositionCard from './cards/SegmentPositionCard'
import QuickRivalsCard from './cards/QuickRivalsCard'
import MileageMysteryCard from './cards/MileageMysteryCard'
import OwnerModsCard from './cards/OwnerModsCard'

interface QuickInsightsProps {
  data: BikeData
}

export default function QuickInsights({ data }: QuickInsightsProps) {
  return (
    <section className="py-6">
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-white font-['Outfit']">Quick Insights</h2>
        <p className="text-sm text-[#a3a3a3]">Everything you need to decide in 6 cards</p>
      </div>

      <div className="pl-4">
        <Carousel showDots={true}>
          <QuickDecisionCard data={data} />
          <TrueCostCard data={data} />
          <SegmentPositionCard data={data} />
          <QuickRivalsCard data={data} />
          <MileageMysteryCard data={data} />
          <OwnerModsCard data={data} />
        </Carousel>
      </div>
    </section>
  )
}

