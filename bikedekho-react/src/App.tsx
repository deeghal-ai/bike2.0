import { useState } from 'react'
import { PersonaProvider } from './contexts/PersonaContext'

// Layout Components
import { Header } from './components/Header'
import StickyBottomBar from './components/StickyBottomBar/StickyBottomBar'

// Section Components (in page order - optimized for buyer journey)
import { Hero } from './components/Hero'
import { KeySpecs } from './components/KeySpecs'
import QuickInsights from './components/QuickInsights/QuickInsights'
import { Variants } from './components/Variants'
import { ExpertReview } from './components/ExpertReview'
import { UserReviews } from './components/Reviews'
import { Comparison } from './components/Comparison'
import { RealWorld } from './components/RealWorld'
import { Mileage } from './components/Mileage'
import { MediaSection } from './components/Media'
import { FAQ, CityPrices } from './components/FAQ'
import Verdict from './components/Verdict/Verdict'

// Data
import { dominar250Data } from './data/bikes/dominar-250'

function App() {
  const [bikeData] = useState(dominar250Data)

  return (
    <PersonaProvider>
      <div className="container">
        {/* Sticky Header with PersonaBar */}
        <Header bikeName={bikeData.basic.name} />

        {/* Hero Section with Persona Match Badge */}
        <Hero data={bikeData} />

        {/* Key Specs with Persona-aware badges */}
        <KeySpecs data={bikeData} />

        {/* Quick Insights Carousel - Bridge from specs to decision */}
        <QuickInsights data={bikeData} />

        {/* Divider */}
        <div className="h-2 bg-gray-100" />

        {/* Variants & Pricing with TrueCost Calculator */}
        <Variants data={bikeData} />

        {/* Divider */}
        <div className="h-2 bg-gray-100" />

        {/* Expert Review with Surprising Insights */}
        <ExpertReview data={bikeData} />

        {/* User Reviews - Social proof */}
        <UserReviews data={bikeData} />

        {/* Divider */}
        <div className="h-2 bg-gray-100" />

        {/* Mileage with MileageMystery - Key Indian buyer concern */}
        <Mileage data={bikeData} />

        {/* Divider */}
        <div className="h-2 bg-gray-100" />

        {/* Comparison (Visual + Decision Matrix tabs) */}
        <Comparison data={bikeData} />

        {/* Real World Experience (Scenarios + Typical Day) - After validation */}
        <RealWorld data={bikeData} />

        {/* Divider */}
        <div className="h-2 bg-gray-100" />

        {/* Final Verdict - Decision time right after seeing real-world fit */}
        <Verdict data={bikeData} />

        {/* Divider */}
        <div className="h-2 bg-gray-100" />

        {/* Media Section (Colors, Gallery, 360 View) - Exploration phase */}
        <MediaSection data={bikeData} />

        {/* Divider */}
        <div className="h-2 bg-gray-100" />

        {/* FAQ Section */}
        <FAQ data={bikeData} />

        {/* City Prices */}
        <CityPrices data={bikeData} />

        {/* Sticky Bottom Bar + WhatsApp Button */}
        <StickyBottomBar />
      </div>
    </PersonaProvider>
  )
}

export default App
