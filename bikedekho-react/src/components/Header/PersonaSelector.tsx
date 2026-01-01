import { usePersona } from '../../contexts/PersonaContext'
import type { PersonaType } from '../../types/bike'

interface PersonaOption {
  id: PersonaType
  name: string
  icon: string
  shortName: string
}

const personas: PersonaOption[] = [
  { id: 'weekend', name: 'Weekend Warrior', shortName: 'Weekend', icon: '🏍️' },
  { id: 'commuter', name: 'Daily Commuter', shortName: 'Commuter', icon: '🏙️' },
  { id: 'value', name: 'Value Hunter', shortName: 'Value', icon: '💰' },
  { id: 'enthusiast', name: 'Enthusiast', shortName: 'Enthusiast', icon: '⚡' }
]

export default function PersonaSelector() {
  const { currentPersona, setPersona } = usePersona()

  return (
    <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-gray-500 font-medium">I'm a</span>
        <span className="text-xs text-[#e53935] font-semibold">
          {personas.find(p => p.id === currentPersona)?.name}
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto hide-scrollbar">
        {personas.map((persona) => (
          <button
            key={persona.id}
            onClick={() => setPersona(persona.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              currentPersona === persona.id
                ? 'bg-[#e53935] text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#e53935] hover:text-[#e53935]'
            }`}
          >
            <span>{persona.icon}</span>
            <span>{persona.shortName}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

