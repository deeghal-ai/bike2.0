import type { BikeData } from '../../types/bike'
import Colors from './Colors'
import Gallery from './Gallery'
import View360 from './View360'

interface MediaSectionProps {
  data: BikeData
}

export default function MediaSection({ data }: MediaSectionProps) {
  return (
    <section className="bg-white">
      {/* Colors Section */}
      <Colors data={data} />

      {/* Divider */}
      <div className="h-2 bg-gray-100" />

      {/* Gallery Section */}
      <Gallery data={data} />

      {/* Divider */}
      <div className="h-2 bg-gray-100" />

      {/* 360 View Section */}
      <View360 data={data} />
    </section>
  )
}

