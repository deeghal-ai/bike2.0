import type { BikeData } from '../../types/bike'

export const dominar250Data: BikeData = {
  basic: {
    id: 'dominar-250',
    name: 'Bajaj Dominar 250',
    tagline: 'The Budget Tourer',
    year: 2025,
    brand: 'Bajaj',
    segment: '250cc Sport Tourer',
    price: {
      exShowroom: { min: 160000, max: 185000, city: 'New Delhi' },
      onRoad: { min: 185000, max: 210500, city: 'New Delhi' }
    },
    variants: [
      { name: 'Standard', price: 185000, features: ['Dual-channel ABS', 'LED lighting', 'Digital console'] }
    ],
    colors: [
      { name: 'Aurora Green', hex: '#2d5a4a' },
      { name: 'Charcoal Black', hex: '#1a1a1a' },
      { name: 'Vine Red', hex: '#7b2d3b' }
    ]
  },

  specs: {
    engine: {
      displacement: '248.77 cc',
      type: 'Single Cylinder, Liquid Cooled, DOHC',
      maxPower: '27 PS @ 8500 rpm',
      maxTorque: '23.5 Nm @ 6500 rpm',
      gearbox: '6-Speed',
      fuelSystem: 'Fuel Injection',
      cooling: 'Liquid Cooled'
    },
    dimensions: {
      length: '2156 mm',
      width: '836 mm',
      height: '1112 mm',
      wheelbase: '1453 mm',
      groundClearance: '157 mm',
      seatHeight: '800 mm',
      kerbWeight: '180 kg',
      fuelCapacity: '13 L'
    },
    chassis: {
      frame: 'Perimeter',
      frontSuspension: 'USD Forks',
      rearSuspension: 'Monoshock',
      frontBrake: '300mm Disc',
      rearBrake: '230mm Disc',
      frontTyre: '110/70-17',
      rearTyre: '150/60-17',
      abs: 'Dual Channel ABS'
    },
    features: {
      display: 'Full Digital LCD',
      lighting: 'Full LED',
      ridingModes: '3 Modes (Sport, City, Rain)',
      tractionControl: 'Yes',
      slipperClutch: 'Yes',
      bluetooth: 'Yes (2025 Model)',
      navigation: 'Turn-by-turn (2025 Model)'
    },
    performance: {
      topSpeed: '132 km/h',
      zeroToSixty: '3.5 seconds',
      mileageArai: '35 kmpl',
      mileageReal: { city: '30-35 kmpl', highway: '40-45 kmpl', combined: '35-38 kmpl' }
    }
  },

  quotes: {
    praises: [
      {
        category: 'Engine refinement and smoothness',
        frequency: 8,
        quotes: [
          { text: "The engine is smooth and talky... beyond 5,000 rpm the dominar 250 turns into this eager easy revving motorcycle", author: 'PowerDrift (Shumi)', source: 'YouTube' },
          { text: "Very refined engine. So very stable thanks to the beam parameter chassis.", author: "Dino's Vault", source: 'YouTube' },
          { text: "As a 6 month ownership, Bajaj dominar 250 is the king of all bike in this category.", author: '@koushikmondal6171', source: 'YouTube' }
        ]
      },
      {
        category: 'Value for money and pricing',
        frequency: 7,
        quotes: [
          { text: "At approximately 1.6 lakh rupees ex-showroom, the Dominar 250 is among the cheapest of the 250 class.", author: 'PowerDrift (Shumi)', source: 'YouTube' },
          { text: "Priced under 1.8 lakhs for a 250cc mile muncher loaded with all the goodies... This one is unbeatable in terms of value", author: "Dino's Vault", source: 'YouTube' }
        ]
      },
      {
        category: 'Highway stability and touring comfort',
        frequency: 6,
        quotes: [
          { text: "On the highways it remains rock solid and planted to the ground.", author: '@aaryan27', source: 'YouTube' },
          { text: "It's been 2 years for me riding this bike now. I usually go on long trips 300-500kms a day. Never got a second thought.", author: '@nishchaysharma5904', source: 'YouTube' }
        ]
      }
    ],
    complaints: [
      {
        category: 'Heavy weight for a 250cc (180kg)',
        frequency: 9,
        quotes: [
          { text: "For a 250 it weighs 180 kgs... If you want to move it around while parking it takes a lot of effort", author: 'BikeWale (Vikrant)', source: 'YouTube' },
          { text: "The kerb weight for city rides and while riding in small lanes can be felt.", author: '@souradeepmitra616', source: 'YouTube' }
        ]
      },
      {
        category: 'Front-heavy steering at low speeds',
        frequency: 5,
        quotes: [
          { text: "The dominar 250 is unwieldy at low speeds the steering feels unduly heavy it wants to flop to one side", author: 'PowerDrift', source: 'YouTube' }
        ]
      }
    ]
  },

  realWorld: {
    dailyUse: [
      "Handlebar flip-flops at walking pace requiring constant correction",
      "Filtering through traffic requires more effort than lighter competitors",
      "Weight only noticeable when taking bike out of parking lot",
      "Clutch and throttle are light making city riding less tiring than expected"
    ],
    longDistance: [
      "Rock solid stability at highway speeds of 100-110 kmph",
      "Wind buffeting becomes irritating quickly above 100 kmph",
      "Comfortable for 300-500km single-day trips without fatigue",
      "Fuel range adequate for relaxed touring without frequent stops"
    ],
    ownershipQuirks: [
      "Air filter change requires complete fuel tank disassembly - 45-50 minute job",
      "First service at dealer can take longer than expected",
      "Not expensive to maintain compared to KTM alternatives"
    ],
    pillionExperience: [
      "Pillion seat is low making it easy to swing leg over",
      "Comfortable seating triangle for both rider and pillion",
      "Good for carrying pillion on longer rides"
    ]
  },

  surprisingInsights: [
    {
      id: 'weight-handling',
      expected: "180kg = slow corners and poor handling",
      reality: "Handles better than expected. 19-inch wheel and longer wheelbase actually improve stability and cornering",
      icon: '🏋️'
    },
    {
      id: 'fuel-efficiency',
      expected: "Decent mileage for a 250cc",
      reality: "Rivals 150cc commuters with 35-47 kmpl range. Same bike, 17 kmpl spread depending on riding style",
      icon: '⛽'
    },
    {
      id: 'downgrade-appeal',
      expected: "Entry bike, will upgrade later",
      reality: "Many DOWNGRADE from Duke 390, RE 650. Reliability + economy win over raw performance",
      icon: '📉'
    }
  ],

  usagePatterns: {
    primaryUseCase: "70% city commuting with 30% weekend highway touring",
    commonModifications: ["Crash guards", "Tank pad", "Aftermarket touring screen", "Tailbag"],
    typicalDailyDistance: "30-50km daily commute with occasional 300-500km weekend trips"
  },

  consensus: {
    ownerConsensus: "Owners consistently praise the highway stability, engine refinement, and touring comfort. Most report the weight becomes manageable once accustomed.",
    reviewerConsensus: "Professional reviewers agree the Dominar 250 is a refined, comfortable tourer with excellent value, but criticize its excessive weight.",
    keyControversy: "The weight is polarizing - reviewers consider 180kg unacceptable while owners argue it provides stability.",
    agrees: [
      { point: 'Engine refinement', detail: 'Best-in-class smoothness above 5000 rpm', sentiment: 'positive' },
      { point: 'Touring comfort', detail: '300-500km days without fatigue', sentiment: 'positive' },
      { point: 'Value for money', detail: 'Premium features at budget price', sentiment: 'positive' }
    ],
    disagrees: [
      {
        topic: 'Suspension Quality',
        owners: { rating: 3.5, opinion: 'Stiff initially, comfortable after 2000km break-in' },
        experts: { rating: 3.0, opinion: 'Firm but well-damped, suits highway' },
        truth: 'Break-in period matters significantly'
      }
    ]
  },

  scenarioBattleground: {
    dominates: [
      { scenario: 'NH48 at 3:00 AM', description: 'Rock-solid stability, 500km range, zero fatigue', betterThan: 'Everything in segment' },
      { scenario: 'Manali-Leh Highway', description: 'Touring-focused, luggage options, reliable', betterThan: 'Gixxer 250, Duke 250' },
      { scenario: 'Weekend 300km Ride', description: 'Comfort and range make it effortless', betterThan: 'All 250cc rivals' }
    ],
    competes: [
      { scenario: 'Ghat Roads (Twisties)', description: 'Good cornering despite weight', comparable: 'V-Strom SX' },
      { scenario: 'Outer Ring Road', description: 'Good stability, adequate power', comparable: 'All 250cc rivals' }
    ],
    struggles: [
      { scenario: 'Traffic Jam', description: 'Heavy, handlebar flops, poor maneuverability', worseThan: 'Lighter commuters' },
      { scenario: 'Tight Parking', description: '180kg requires muscle, backing in is effort', worseThan: 'Everything lighter' },
      { scenario: 'Track Day', description: 'Weight penalty, brakes lack power', worseThan: 'Duke 250, Gixxer SF' }
    ]
  },

  personas: {
    weekendWarrior: {
      id: 'weekend',
      name: 'Weekend Warrior',
      icon: '🏍️',
      matchScore: 92,
      matchLabel: 'Excellent Match',
      description: 'This bike was built for you. 70% of owners are weekend tourers.',
      highlights: ['Best touring comfort in segment', '500km range on single tank', 'Rock-solid highway stability', 'Value for money champion']
    },
    dailyCommuter: {
      id: 'commuter',
      name: 'Daily Commuter',
      icon: '🏙️',
      matchScore: 58,
      matchLabel: 'Partial Match',
      description: 'This bike tolerates city, excels on weekends. Consider lighter options.',
      highlights: ['Tractable engine in traffic', 'Good fuel efficiency for 250cc', 'Premium safety features'],
      concerns: ['180kg heavy in stop-go', 'Handlebar flops at slow speed', 'Parking requires muscle']
    },
    valueHunter: {
      id: 'value',
      name: 'Value Hunter',
      icon: '💰',
      matchScore: 88,
      matchLabel: 'Great Match',
      description: 'Best value in segment. Premium features at budget price.',
      highlights: ['Only 250cc with riding modes + TC under ₹1.8L', 'Cheapest in 250cc class', 'Wide service network', 'Low maintenance cost vs KTM']
    },
    enthusiast: {
      id: 'enthusiast',
      name: 'Enthusiast',
      icon: '⚡',
      matchScore: 65,
      matchLabel: 'Fair Match',
      description: 'Good power, but heavier than rivals. Comfort over performance.',
      highlights: ['Refined engine character', 'Smooth power delivery'],
      concerns: ['Less exciting than Duke 250', 'Weight affects agility', 'Not a track bike']
    }
  },

  mileageMystery: {
    claimed: 42,
    realRange: { min: 30, max: 47 },
    spread: 17,
    scenarios: [
      { style: 'City Aggressive', range: '30-32 kmpl', percentage: 65, color: 'red', description: 'Quick throttle, frequent braking' },
      { style: 'City Controlled', range: '35-38 kmpl', percentage: 78, color: 'yellow', description: 'Gentle throttle, higher gears' },
      { style: 'Highway Cruise', range: '40-45 kmpl', percentage: 92, color: 'green', description: 'Sweet spot for efficiency' },
      { style: 'Highway Spirited', range: '35-38 kmpl', percentage: 78, color: 'orange', description: 'Wind resistance kicks in' }
    ],
    insight: 'Same bike, 17 kmpl spread depending on riding style. Speed kills mileage above 90 kmph.'
  },

  popularMods: [
    { mod: 'Handlebar Risers', percentage: 68, price: '₹1,500-2,500', reason: 'Stock bars too low', icon: '🔩' },
    { mod: 'Seat Padding', percentage: 54, price: '₹800-1,500', reason: 'Hard after 200km', icon: '🪑' },
    { mod: 'Luggage (Tank+Tail)', percentage: 47, price: '₹3,500-5,000', reason: 'Essential for touring', icon: '🎒' },
    { mod: 'Crash Guards', percentage: 41, price: '₹2,500-4,000', reason: 'Protect ₹1.8L investment', icon: '🛡️' }
  ],

  ownershipPhases: [
    {
      name: 'Phase 1: "What did I buy?"',
      kmRange: '0-1000 km',
      mood: "Buyer's remorse common",
      color: 'red',
      icon: '😰',
      points: [
        { type: 'warning', text: 'Suspension feels agonizingly stiff' },
        { type: 'warning', text: 'Engine feels tight, not free-revving' },
        { type: 'info', text: '💡 This is normal – needs break-in' }
      ]
    },
    {
      name: 'Phase 2: "Oh, it\'s improving!"',
      kmRange: '1000-3000 km',
      mood: 'The transformation begins',
      color: 'yellow',
      icon: '🙂',
      points: [
        { type: 'positive', text: 'Suspension becoming compliant' },
        { type: 'positive', text: 'Engine feeling smoother' }
      ]
    },
    {
      name: 'Phase 3: "Now I get it!"',
      kmRange: '3000+ km',
      mood: 'The bike you bought',
      color: 'green',
      icon: '😊',
      points: [
        { type: 'positive', text: 'Suspension comfortable for tours' },
        { type: 'positive', text: 'Engine smooth, talky above 5k rpm' }
      ]
    }
  ],

  costDefaults: {
    onRoadPrice: 210500,
    monthlyKm: 1200,
    fuelPrice: 105,
    avgMileage: 38,
    emiTenure: 36,
    downPayment: 50000,
    emiAmount: 5800,
    serviceCostMonthly: 850,
    insuranceMonthly: 625,
    hiddenCosts: [
      { item: 'Front brake pads (@ 5-6k km)', cost: '₹800-1,200' },
      { item: 'Chain set (@ 12k km)', cost: '₹2,500-3,500' }
    ],
    vsRival: { name: 'KTM 250 Duke', savingsPerMonth: 800, reason: 'Lower maintenance + better mileage' }
  },

  rivals: [
    {
      id: 'gixxer-250',
      name: 'Suzuki Gixxer 250',
      price: '₹1.89L',
      badge: 'Most Agile',
      badgeType: 'info',
      weight: '156 kg',
      power: '26.5 PS',
      bestFor: '50%+ city riding, lighter handling',
      pros: ['24kg lighter', 'Flickable handling', 'Better for city'],
      cons: ['Less touring comfort', 'Fewer features']
    },
    {
      id: 'vstrom-sx',
      name: 'Suzuki V-Strom SX',
      price: '₹2.18L',
      badge: 'Best Mileage',
      badgeType: 'positive',
      weight: '167 kg',
      power: '26 PS',
      bestFor: 'ADV styling, fuel efficiency',
      pros: ['ADV ergonomics', '45+ kmpl possible', 'Better windshield'],
      cons: ['Stiff suspension', 'Small fuel tank']
    },
    {
      id: 'ktm-250-duke',
      name: 'KTM 250 Duke',
      price: '₹2.40L',
      badge: 'Most Powerful',
      badgeType: 'warning',
      weight: '165 kg',
      power: '30 PS',
      bestFor: 'Performance, track days',
      pros: ['Most power (30 bhp)', 'Aggressive styling', 'Light weight'],
      cons: ['₹60K premium', 'Higher maintenance']
    },
    {
      id: 'yamaha-fz25',
      name: 'Yamaha FZ25',
      price: '₹1.45L',
      badge: 'Budget Pick',
      badgeType: 'default',
      weight: '153 kg',
      power: '20.8 PS',
      bestFor: 'Budget-conscious',
      pros: ['Cheapest option', 'Lightest', 'Yamaha reliability'],
      cons: ['Less features', 'Less power']
    }
  ],

  decisionMatrix: {
    chooseDominar: [
      '70%+ riding is highways/tours',
      'Value matters – premium at budget',
      'Comfort over 200km+ is priority',
      'Reliability > Brand badge',
      'Okay tolerating city weight'
    ],
    chooseGixxer: [
      '50%+ riding is city commuting',
      'Want lighter, flickable bike',
      'Parking maneuverability matters',
      'Prefer sportier styling'
    ],
    chooseVStrom: [
      'ADV styling + upright ergonomics',
      'Fuel efficiency top priority',
      'Better windshield for highways',
      'Japanese reliability matters'
    ],
    chooseKTM: [
      'Want most power (30 bhp)',
      'Aggressive riding / track days',
      'Brand badge & styling priority',
      'Willing to pay ₹60k premium'
    ]
  },

  verdict: {
    summary: "The Dominar 250 is India's best TOURER in 250cc. It's NOT the best city bike, fastest, or most prestigious. But for weekend warriors who commute 5 days to tour 2 days, nothing beats it for value.",
    bestFor: "Weekend tourers who want touring capability without the premium price tag",
    ratings: {
      overall: 4.2,
      touring: 4.8,
      value: 4.7,
      reliability: 4.5,
      cityUse: 3.2,
      performance: 3.8
    },
    honestTruth: "Buy it for weekends, tolerate it on weekdays. Not the other way around."
  },

  typicalDayScenarios: [
    {
      id: 'highway',
      name: 'Highway Tour',
      icon: '🛣️',
      timeline: [
        {
          time: '6:00 AM — Highway Start',
          title: '📍 KM 0-180 • Open Road',
          points: [
            { type: 'positive', text: 'Rock-solid stability at 90 kmph' },
            { type: 'positive', text: 'Zero lower back pain at 4 hours' },
            { type: 'warning', text: 'Wind buffeting starts above 100 kmph' }
          ],
          quote: { text: 'Windshield adequate but not great', author: 'Owner review' }
        },
        {
          time: '12:00 PM — Lunch Stop',
          title: '⛽ KM 180 • Refuel Reality',
          points: [
            { type: 'positive', text: '180km done, 320km left in tank' },
            { type: 'positive', text: '40-42 kmpl at highway cruise' }
          ],
          quote: { text: '500km range is routine', author: 'Long-distance tourer' }
        },
        {
          time: '5:00 PM — Mountain Twisties',
          title: '🏔️ Ghat Section',
          points: [
            { type: 'positive', text: 'Corners better than expected' },
            { type: 'warning', text: 'Weight noticeable in tight hairpins' }
          ]
        },
        {
          time: '9:00 PM — Destination',
          title: '🅿️ Hotel Parking',
          points: [
            { type: 'warning', text: '180kg = Effort to maneuver into spot' }
          ]
        }
      ],
      summary: {
        comfortRating: '9/10',
        comfortValue: 'positive',
        avgMileage: '40-45 kmpl',
        verdict: 'Dominates',
        verdictType: 'positive'
      }
    },
    {
      id: 'city',
      name: 'City Commute',
      icon: '🏙️',
      timeline: [
        {
          time: '8:00 AM — Dense Traffic',
          title: '🚦 City Crawl',
          points: [
            { type: 'warning', text: 'Handlebar flip-flops at slow speeds' },
            { type: 'warning', text: '180kg feels heavy in stop-go' },
            { type: 'positive', text: 'Tractable engine, 3rd gear at 30 kmph' }
          ],
          quote: { text: "Front-heavy steering is city's weak point", author: 'Daily commuter' }
        }
      ],
      summary: {
        comfortRating: '5/10',
        comfortValue: 'warning',
        avgMileage: '30-35 kmpl',
        verdict: 'Struggles',
        verdictType: 'warning'
      }
    },
    {
      id: 'weekend',
      name: 'Weekend Escape',
      icon: '🏔️',
      timeline: [
        {
          time: 'Saturday 5:00 AM',
          title: '🌅 Early Start, Empty Roads',
          points: [
            { type: 'positive', text: 'Perfect conditions for this bike' },
            { type: 'positive', text: 'Deep exhaust note, no vibrations' }
          ]
        }
      ],
      summary: {
        comfortRating: '10/10',
        comfortValue: 'positive',
        avgMileage: '40-45 kmpl',
        verdict: 'Built For This',
        verdictType: 'positive'
      }
    }
  ],

  // ============================================
  // NEW: ENRICHED DAY STORIES
  // ============================================
  dayStories: [
    {
      id: 'highway-warrior',
      name: 'The Highway Warrior',
      tagline: 'Dawn-to-Dusk 500km Tour',
      icon: '🛣️',
      gradient: 'from-indigo-900 via-purple-800 to-orange-500',
      verdict: 'dominates',
      timeline: [
        {
          time: '4:30 AM',
          title: 'Pre-Dawn Prep',
          distance: 'KM 0',
          points: [
            { type: 'positive', text: 'Tank bag and saddle bags fit perfectly' },
            { type: 'positive', text: 'USB charging for phone navigation' },
            { type: 'warning', text: 'Cold start needs choke in winter' }
          ],
          quote: { text: 'The ritual of loading up at 4AM... this bike makes you want to tour', author: '@weekendwarrior_blr' }
        },
        {
          time: '5:30 AM',
          title: 'Empty Highway Bliss',
          distance: 'KM 0-120',
          points: [
            { type: 'positive', text: 'Rock-solid stability at 100-110 kmph' },
            { type: 'positive', text: 'Deep exhaust note, zero vibrations' },
            { type: 'positive', text: 'Comfortable seating triangle for hours' }
          ],
          quote: { text: 'NH48 at 3AM is what this bike was BORN for. 500km, zero fatigue.', author: '@nishchaysharma5904' },
          scenarioTag: { scenario: 'NH48 at 3:00 AM', verdict: 'dominates', vsRivals: 'Everything in segment' }
        },
        {
          time: '10:00 AM',
          title: 'First Fuel Stop',
          distance: 'KM 180',
          points: [
            { type: 'positive', text: '180km done, still 320km range left in tank' },
            { type: 'positive', text: 'Averaging 42 kmpl at cruise speed' },
            { type: 'positive', text: 'No numbness in hands or seat' }
          ],
          quote: { text: '500km range is routine. I stop for chai, not fuel.', author: 'Long-distance tourer' }
        },
        {
          time: '2:00 PM',
          title: 'Mountain Twisties Begin',
          distance: 'KM 280',
          points: [
            { type: 'positive', text: 'Corners better than 180kg suggests' },
            { type: 'positive', text: 'USD forks inspire confidence' },
            { type: 'warning', text: 'Weight noticeable in tight hairpins' }
          ],
          scenarioTag: { scenario: 'Ghat Roads', verdict: 'competes', vsRivals: 'V-Strom SX' }
        },
        {
          time: '6:00 PM',
          title: 'Destination Approach',
          distance: 'KM 450',
          points: [
            { type: 'positive', text: 'Still feeling fresh after 12 hours' },
            { type: 'positive', text: 'Windshield adequate for the distance' },
            { type: 'warning', text: 'Wind buffeting above 100 kmph all day' }
          ],
          quote: { text: "It's been 2 years now. 300-500km days, never got a second thought.", author: '@nishchaysharma5904' },
          scenarioTag: { scenario: 'Weekend 300km Ride', verdict: 'dominates', vsRivals: 'All 250cc rivals' }
        },
        {
          time: '8:00 PM',
          title: 'Hotel Parking',
          distance: 'KM 500',
          points: [
            { type: 'warning', text: '180kg = effort to maneuver into tight spot' },
            { type: 'positive', text: 'Centre stand makes parking stable' },
            { type: 'positive', text: 'Trip complete, body still happy' }
          ],
          scenarioTag: { scenario: 'Tight Parking', verdict: 'struggles', vsRivals: 'Everything lighter' }
        }
      ],
      summary: {
        comfortRating: '9/10',
        comfortValue: 'positive',
        avgMileage: '40-45 kmpl',
        verdict: 'Dominates',
        verdictType: 'positive',
        bestMoment: 'Empty highway at dawn — rock-solid at 100+ kmph',
        worstMoment: 'Maneuvering into tight hotel parking'
      }
    },
    {
      id: 'city-grind',
      name: 'City Grind',
      tagline: 'A Week in Traffic',
      icon: '🏙️',
      gradient: 'from-slate-700 via-gray-600 to-slate-500',
      verdict: 'struggles',
      timeline: [
        {
          time: 'Monday 8:00 AM',
          title: 'Apartment Parking Exit',
          distance: 'Day 1',
          points: [
            { type: 'warning', text: '180kg requires muscle to back out' },
            { type: 'warning', text: 'Tight basement ramps test your patience' },
            { type: 'positive', text: 'At least the mirrors fold in' }
          ],
          quote: { text: 'If you want to move it around while parking, it takes a lot of effort', author: 'BikeWale (Vikrant)' },
          scenarioTag: { scenario: 'Tight Parking', verdict: 'struggles', vsRivals: 'Everything lighter' }
        },
        {
          time: 'Monday 8:45 AM',
          title: 'Peak Traffic Crawl',
          distance: '15km commute',
          points: [
            { type: 'warning', text: 'Handlebar flip-flops at walking pace' },
            { type: 'warning', text: 'Constant correction needed below 15 kmph' },
            { type: 'positive', text: 'Tractable engine — 3rd gear at 30 kmph works' }
          ],
          quote: { text: 'The Dominar 250 is unwieldy at low speeds... steering feels unduly heavy', author: 'PowerDrift' },
          scenarioTag: { scenario: 'Traffic Jam', verdict: 'struggles', vsRivals: 'Lighter commuters' }
        },
        {
          time: 'Monday 9:30 AM',
          title: 'Office Basement Parking',
          distance: 'Arrived',
          points: [
            { type: 'warning', text: 'Tight turns in basement = anxiety' },
            { type: 'warning', text: 'Backing into spot needs a spotter' },
            { type: 'positive', text: 'At least it looks impressive parked' }
          ],
          quote: { text: 'The kerb weight for city rides and small lanes can be felt.', author: '@souradeepmitra616' }
        },
        {
          time: 'Wednesday 6:00 PM',
          title: 'Mid-Week Evening Rush',
          distance: 'Day 3',
          points: [
            { type: 'warning', text: 'Filtering through traffic needs effort' },
            { type: 'positive', text: 'Light clutch saves your left hand' },
            { type: 'positive', text: 'Throttle response is predictable' }
          ],
          quote: { text: 'Clutch and throttle are light, making city riding less tiring than expected', author: 'Owner consensus' }
        },
        {
          time: 'Friday 7:00 PM',
          title: 'End of Week Fatigue',
          distance: 'Day 5',
          points: [
            { type: 'warning', text: "Your wrists know this isn't a city bike" },
            { type: 'warning', text: 'Dreaming of weekend highways' },
            { type: 'positive', text: "But hey, 32 kmpl isn't bad for city" }
          ]
        },
        {
          time: 'Saturday 6:00 AM',
          title: 'The Redemption',
          distance: 'Weekend begins',
          points: [
            { type: 'positive', text: 'Empty roads — this is why you bought it' },
            { type: 'positive', text: "All week's frustration forgotten" },
            { type: 'positive', text: 'The bike transforms on open roads' }
          ],
          quote: { text: 'Buy it for weekends, tolerate it on weekdays. Not the other way around.', author: 'Expert consensus' }
        }
      ],
      summary: {
        comfortRating: '5/10',
        comfortValue: 'warning',
        avgMileage: '30-35 kmpl',
        verdict: 'Struggles',
        verdictType: 'warning',
        bestMoment: 'Saturday morning — the reward for weekday pain',
        worstMoment: 'Peak hour traffic with handlebar flip-flops'
      }
    },
    {
      id: 'weekend-escape',
      name: 'Weekend Escape',
      tagline: 'Saturday Morning Getaway',
      icon: '🏔️',
      gradient: 'from-amber-500 via-orange-400 to-rose-500',
      verdict: 'dominates',
      timeline: [
        {
          time: 'Saturday 5:00 AM',
          title: 'Pre-Dawn Start',
          distance: 'KM 0',
          points: [
            { type: 'positive', text: 'Perfect riding conditions — cool air, empty roads' },
            { type: 'positive', text: 'Deep exhaust note echoes in empty streets' },
            { type: 'positive', text: 'City traffic? What city traffic?' }
          ],
          quote: { text: 'This is the moment you realize why you bought a touring bike', author: 'Weekend rider' }
        },
        {
          time: 'Saturday 6:30 AM',
          title: 'Highway Opens Up',
          distance: 'KM 60',
          points: [
            { type: 'positive', text: 'Cruise control at 90 kmph — effortless' },
            { type: 'positive', text: 'No vibrations through pegs or bars' },
            { type: 'positive', text: 'Perimeter frame keeps you planted' }
          ],
          quote: { text: 'The engine is smooth and talky... beyond 5,000 rpm it turns into this eager, easy-revving motorcycle', author: 'PowerDrift (Shumi)' }
        },
        {
          time: 'Saturday 8:00 AM',
          title: 'Mountain Curves Begin',
          distance: 'KM 120',
          points: [
            { type: 'positive', text: 'USD forks provide confident braking' },
            { type: 'positive', text: 'Dual-channel ABS inspires trust' },
            { type: 'warning', text: 'Heavier than rivals in tight switchbacks' }
          ],
          scenarioTag: { scenario: 'Ghat Roads (Twisties)', verdict: 'competes', vsRivals: 'V-Strom SX' }
        },
        {
          time: 'Saturday 10:00 AM',
          title: 'Scenic Viewpoint Stop',
          distance: 'KM 160',
          points: [
            { type: 'positive', text: 'Centre stand for photos — no kickstand lean' },
            { type: 'positive', text: 'Fellow tourers nod in appreciation' },
            { type: 'positive', text: 'This is peak motorcycling experience' }
          ],
          quote: { text: 'Very refined engine. Very stable thanks to the perimeter chassis.', author: "Dino's Vault" }
        },
        {
          time: 'Saturday 12:00 PM',
          title: 'Mountain Cafe Brunch',
          distance: 'KM 180',
          points: [
            { type: 'positive', text: 'Only used half a tank — 200km+ left' },
            { type: 'positive', text: 'No back pain after 3+ hours' },
            { type: 'positive', text: 'This is what weekends are for' }
          ]
        },
        {
          time: 'Saturday 5:00 PM',
          title: 'Return Journey Complete',
          distance: 'KM 350',
          points: [
            { type: 'positive', text: '350km round trip, feeling fantastic' },
            { type: 'positive', text: 'Averaged 42 kmpl on mixed roads' },
            { type: 'positive', text: "Already planning next week's route" }
          ],
          quote: { text: 'As a 6 month ownership, Bajaj Dominar 250 is the king of all bikes in this category.', author: '@koushikmondal6171' },
          scenarioTag: { scenario: 'Weekend 300km Ride', verdict: 'dominates', vsRivals: 'All 250cc rivals' }
        }
      ],
      summary: {
        comfortRating: '10/10',
        comfortValue: 'positive',
        avgMileage: '40-45 kmpl',
        verdict: 'Built For This',
        verdictType: 'positive',
        bestMoment: 'Highway cruise at sunrise — pure freedom',
        worstMoment: 'Tight switchbacks remind you of the weight'
      }
    },
    {
      id: 'mixed-reality',
      name: 'Mixed Reality',
      tagline: 'The Real Owner Life',
      icon: '⚖️',
      gradient: 'from-slate-600 via-blue-500 to-orange-400',
      verdict: 'competes',
      timeline: [
        {
          time: 'Monday-Friday',
          title: 'The Weekday Compromise',
          distance: '25km daily',
          points: [
            { type: 'warning', text: 'Not the easiest bike in Bangalore traffic' },
            { type: 'warning', text: 'You tolerate the weight, not enjoy it' },
            { type: 'positive', text: 'But it\'s manageable — owners adapt' }
          ],
          quote: { text: 'Weight only noticeable when taking bike out of parking lot', author: 'Owner consensus' }
        },
        {
          time: 'Weekday Morning',
          title: 'Office Commute Reality',
          distance: '12km one way',
          points: [
            { type: 'warning', text: 'Handlebar correction in slow traffic' },
            { type: 'positive', text: 'Smooth engine makes stop-go bearable' },
            { type: 'positive', text: '32 kmpl — not bad for a 250cc' }
          ],
          scenarioTag: { scenario: 'Traffic Jam', verdict: 'struggles', vsRivals: 'Lighter commuters' }
        },
        {
          time: 'Weekday Evening',
          title: 'The Mental Escape',
          distance: 'Stuck in traffic',
          points: [
            { type: 'positive', text: 'Planning weekend routes in your head' },
            { type: 'positive', text: 'Checking weather for Saturday' },
            { type: 'warning', text: 'Dreaming of Nandi Hills while filtering' }
          ],
          quote: { text: 'Every weekday, you dream of the weekend. That\'s the Dominar lifestyle.', author: 'Owner on Team-BHP' }
        },
        {
          time: 'Saturday 5:30 AM',
          title: 'The Transformation',
          distance: 'Weekend begins',
          points: [
            { type: 'positive', text: 'Empty roads — bike comes alive' },
            { type: 'positive', text: 'All weekday struggles forgotten instantly' },
            { type: 'positive', text: 'THIS is why you bought this bike' }
          ],
          quote: { text: 'It transforms on open roads. Completely different machine.', author: '@weekendtourers' }
        },
        {
          time: 'Sunday',
          title: 'Highway Bliss',
          distance: '200-300km ride',
          points: [
            { type: 'positive', text: 'Rock-solid stability vindicates your choice' },
            { type: 'positive', text: 'Zero fatigue after 5 hours' },
            { type: 'positive', text: '45 kmpl makes it economical' }
          ],
          scenarioTag: { scenario: 'Weekend 300km Ride', verdict: 'dominates', vsRivals: 'All 250cc rivals' },
          quote: { text: 'On highways it remains rock solid and planted to the ground.', author: '@aaryan27' }
        },
        {
          time: 'Sunday Evening',
          title: 'The Verdict',
          distance: 'Back home',
          points: [
            { type: 'positive', text: 'Weekend made the weekday struggles worth it' },
            { type: 'positive', text: 'Best tourer in 250cc, period' },
            { type: 'warning', text: 'But if you only city-commute, reconsider' }
          ],
          quote: { text: 'Buy it for weekends, tolerate it on weekdays. Not the other way around.', author: 'Expert verdict' }
        }
      ],
      summary: {
        comfortRating: '7/10',
        comfortValue: 'neutral',
        avgMileage: '35-40 kmpl',
        verdict: 'Worth It If You Tour',
        verdictType: 'positive',
        bestMoment: 'Sunday highway — pure validation',
        worstMoment: 'Monday morning parking exit'
      }
    }
  ],

  rideFeel: {
    soloRider: [
      {
        icon: '✓',
        title: 'Heat Management',
        description: 'Liquid cooling = minimal heat. Better than air-cooled 250s.',
        sentiment: 'positive'
      },
      {
        icon: '⚠',
        title: 'Wind Protection',
        description: 'Adequate below 100 kmph. Buffeting starts above.',
        sentiment: 'warning'
      },
      {
        icon: '✓',
        title: 'Seating Position',
        description: 'Upright, relaxed. 13-hour days are possible.',
        sentiment: 'positive'
      },
      {
        icon: '✓',
        title: 'Exhaust Note',
        description: 'Deep, pleasing, not obnoxious.',
        sentiment: 'positive'
      },
      {
        icon: '✓',
        title: 'Vibrations',
        description: 'Almost negligible at highway speeds.',
        sentiment: 'positive'
      },
      {
        icon: '⚠',
        title: 'Weight Feel',
        description: 'Moving: Planted. Stationary: Heavy, requires muscle.',
        sentiment: 'warning'
      }
    ],
    withPillion: [
      {
        icon: '✓',
        title: 'Short Rides (<100km)',
        description: 'Better comfort than competitors. Good grabrails.',
        sentiment: 'positive'
      },
      {
        icon: '⚠',
        title: 'Long Rides (200km+)',
        description: 'Seat becomes hard after 2-3 hours.',
        sentiment: 'warning'
      },
      {
        icon: '⚠',
        title: 'Luggage Trade-off',
        description: 'Luggage vs Pillion = Planning needed.',
        sentiment: 'warning'
      },
      {
        icon: '✓',
        title: 'Touring Reality',
        description: 'Many successful 2-up tours documented.',
        sentiment: 'positive'
      },
      {
        icon: '⚠',
        title: 'Mileage Impact',
        description: 'Range drops to 35-38 kmpl 2-up.',
        sentiment: 'warning'
      }
    ]
  }
}

