import { useState } from 'react'
import TabNav from './TabNav'
import PersonaSelector from './PersonaSelector'
import { Icon } from '../ui/Icon'

export type TabType = 'overview' | 'price' | 'images' | 'compare' | 'variants'

interface HeaderProps {
  bikeName?: string
  onTabChange?: (tab: TabType) => void
}

export default function Header({ onTabChange }: HeaderProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [isPersonaExpanded, setIsPersonaExpanded] = useState(true)

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    onTabChange?.(tab)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 h-20 border-b border-gray-100">
        {/* Menu & Logo */}
        <div className="flex items-center gap-3">
          <button className="p-1 -ml-1 text-gray-600 hover:text-gray-900">
            <Icon name="menu" size={22} />
          </button>
          <div className="flex items-center">
            <img 
              src="/bikedekho-logo.webp" 
              alt="BikeDekho" 
              className="h-[116px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Search & Location */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <Icon name="search" size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <Icon name="location" size={20} />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <TabNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Persona Selector - Collapsible */}
      <div className={`overflow-hidden transition-all duration-300 ${isPersonaExpanded ? 'max-h-24' : 'max-h-0'}`}>
        <PersonaSelector />
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsPersonaExpanded(!isPersonaExpanded)}
        className="w-full py-1 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors border-t border-gray-100"
      >
        <Icon 
          name={isPersonaExpanded ? 'chevronUp' : 'chevronDown'} 
          size={16} 
        />
      </button>
    </header>
  )
}

