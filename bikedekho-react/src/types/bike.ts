// ============================================
// BIKEDEKHO PX 2.0 - TYPE DEFINITIONS
// ============================================

export interface Price {
  exShowroom: {
    min: number
    max: number
    city: string
  }
  onRoad: {
    min: number
    max: number
    city: string
  }
}

export interface Variant {
  name: string
  price: number
  features: string[]
}

export interface BikeColor {
  name: string
  hex: string
}

export interface EngineSpecs {
  displacement: string
  type: string
  maxPower: string
  maxTorque: string
  gearbox: string
  fuelSystem: string
  cooling: string
}

export interface DimensionSpecs {
  length: string
  width: string
  height: string
  wheelbase: string
  groundClearance: string
  seatHeight: string
  kerbWeight: string
  fuelCapacity: string
}

export interface ChassisSpecs {
  frame: string
  frontSuspension: string
  rearSuspension: string
  frontBrake: string
  rearBrake: string
  frontTyre: string
  rearTyre: string
  abs: string
}

export interface FeatureSpecs {
  display: string
  lighting: string
  ridingModes: string
  tractionControl: string
  slipperClutch: string
  bluetooth: string
  navigation: string
}

export interface PerformanceSpecs {
  topSpeed: string
  zeroToSixty: string
  mileageArai: string
  mileageReal: {
    city: string
    highway: string
    combined: string
  }
}

export interface Specs {
  engine: EngineSpecs
  dimensions: DimensionSpecs
  chassis: ChassisSpecs
  features: FeatureSpecs
  performance: PerformanceSpecs
}

export interface Quote {
  text: string
  author: string
  source: string
}

export interface QuoteCategory {
  category: string
  frequency: number
  quotes: Quote[]
}

export interface Quotes {
  praises: QuoteCategory[]
  complaints: QuoteCategory[]
}

export interface RealWorld {
  dailyUse: string[]
  longDistance: string[]
  ownershipQuirks: string[]
  pillionExperience: string[]
}

export interface SurprisingInsight {
  id: string
  expected: string
  reality: string
  icon: string
}

export interface UsagePatterns {
  primaryUseCase: string
  commonModifications: string[]
  typicalDailyDistance: string
}

export interface ConsensusPoint {
  point: string
  detail: string
  sentiment: 'positive' | 'neutral' | 'negative'
}

export interface DisagreementPoint {
  topic: string
  owners: { rating: number; opinion: string }
  experts: { rating: number; opinion: string }
  truth: string
}

export interface Consensus {
  ownerConsensus: string
  reviewerConsensus: string
  keyControversy: string
  agrees: ConsensusPoint[]
  disagrees: DisagreementPoint[]
}

export interface ScenarioItem {
  scenario: string
  description: string
  betterThan?: string
  comparable?: string
  worseThan?: string
}

export interface ScenarioBattleground {
  dominates: ScenarioItem[]
  competes: ScenarioItem[]
  struggles: ScenarioItem[]
}

export interface PersonaData {
  id: string
  name: string
  icon: string
  matchScore: number
  matchLabel: string
  description: string
  highlights: string[]
  concerns?: string[]
}

export interface Personas {
  weekendWarrior: PersonaData
  dailyCommuter: PersonaData
  valueHunter: PersonaData
  enthusiast: PersonaData
}

export interface MileageScenario {
  style: string
  range: string
  percentage: number
  color: string
  description: string
}

export interface MileageMystery {
  claimed: number
  realRange: { min: number; max: number }
  spread: number
  scenarios: MileageScenario[]
  insight: string
}

export interface PopularMod {
  mod: string
  percentage: number
  price: string
  reason: string
  icon: string
}

export interface OwnershipPhasePoint {
  type: 'positive' | 'warning' | 'info'
  text: string
}

export interface OwnershipPhase {
  name: string
  kmRange: string
  mood: string
  color: string
  icon: string
  points: OwnershipPhasePoint[]
}

export interface HiddenCost {
  item: string
  cost: string
}

export interface CostDefaults {
  onRoadPrice: number
  monthlyKm: number
  fuelPrice: number
  avgMileage: number
  emiTenure: number
  downPayment: number
  emiAmount: number
  serviceCostMonthly: number
  insuranceMonthly: number
  hiddenCosts: HiddenCost[]
  vsRival: {
    name: string
    savingsPerMonth: number
    reason: string
  }
}

export interface RivalQuote {
  text: string
  author: string
}

export interface Rival {
  id: string
  name: string
  price: string
  badge: string
  badgeType: 'info' | 'positive' | 'warning' | 'default'
  weight: string
  power: string
  bestFor: string
  pros: string[]
  cons: string[]
  realWorldQuotes?: RivalQuote[]
}

export interface DecisionMatrix {
  chooseDominar: string[]
  chooseGixxer: string[]
  chooseVStrom: string[]
  chooseKTM: string[]
}

export interface VerdictRatings {
  overall: number
  touring: number
  value: number
  reliability: number
  cityUse: number
  performance: number
}

export interface Verdict {
  summary: string
  bestFor: string
  ratings: VerdictRatings
  honestTruth: string
}

export interface TimelinePoint {
  type: 'positive' | 'warning'
  text: string
}

export interface TimelineItem {
  time: string
  title: string
  distance?: string
  points: TimelinePoint[]
  quote?: {
    text: string
    author: string
  }
  scenarioTag?: {
    scenario: string
    verdict: 'dominates' | 'competes' | 'struggles'
    vsRivals?: string
  }
}

export interface DayStory {
  id: string
  name: string
  tagline: string
  icon: string
  gradient: string
  verdict: 'dominates' | 'competes' | 'struggles'
  timeline: TimelineItem[]
  summary: {
    comfortRating: string
    comfortValue: 'positive' | 'warning' | 'neutral'
    avgMileage: string
    verdict: string
    verdictType: 'positive' | 'warning' | 'neutral'
    bestMoment: string
    worstMoment: string
  }
}

// Keep for backwards compatibility
export interface TypicalDayScenario {
  id: string
  name: string
  icon: string
  timeline: TimelineItem[]
  summary: {
    comfortRating: string
    comfortValue: 'positive' | 'warning' | 'neutral'
    avgMileage: string
    verdict: string
    verdictType: 'positive' | 'warning' | 'neutral'
  }
}

export interface RideFeelItem {
  icon: string
  title: string
  description: string
  sentiment: 'positive' | 'warning' | 'neutral'
}

export interface RideFeelData {
  soloRider: RideFeelItem[]
  withPillion: RideFeelItem[]
}

export interface BasicInfo {
  id: string
  name: string
  tagline: string
  year: number
  brand: string
  segment: string
  price: Price
  variants: Variant[]
  colors: BikeColor[]
}

// Main bike data interface
export interface BikeData {
  basic: BasicInfo
  specs: Specs
  quotes: Quotes
  realWorld: RealWorld
  surprisingInsights: SurprisingInsight[]
  usagePatterns: UsagePatterns
  consensus: Consensus
  scenarioBattleground: ScenarioBattleground
  personas: Personas
  mileageMystery: MileageMystery
  popularMods: PopularMod[]
  ownershipPhases: OwnershipPhase[]
  costDefaults: CostDefaults
  rivals: Rival[]
  decisionMatrix: DecisionMatrix
  verdict: Verdict
  typicalDayScenarios: TypicalDayScenario[]
  dayStories: DayStory[]
  rideFeel: RideFeelData
}

export type PersonaType = 'weekend' | 'commuter' | 'value' | 'enthusiast'

