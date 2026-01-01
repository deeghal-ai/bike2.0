import { usePersona } from '../../contexts/PersonaContext'
import type { PersonaType } from '../../types/bike'

interface PersonaOption {
  id: PersonaType
  name: string
  icon: string
}

const personas: PersonaOption[] = [
  { id: 'weekend', name: 'Weekend Warrior', icon: '🏍️' },
  { id: 'commuter', name: 'Commuter', icon: '🏙️' },
  { id: 'value', name: 'Value Hunter', icon: '💰' },
  { id: 'enthusiast', name: 'Enthusiast', icon: '⚡' }
]

export default function PersonaBar() {
  const { currentPersona, setPersona } = usePersona()

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 px-4 shadow-sm">
      <div className="text-xs text-gray-500 mb-2 font-medium">Who are you?</div>
      <div className="flex gap-2 overflow-x-auto hide-scrollbar">
        {personas.map((persona) => (
          <button
            key={persona.id}
            onClick={() => setPersona(persona.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              currentPersona === persona.id
                ? 'bg-[#e53935] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-200'
            }`}
          >
            <span className="text-base">{persona.icon}</span>
            <span>{persona.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
