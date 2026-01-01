import type { TabType } from './Header'

interface TabNavProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const tabs: { id: TabType; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'price', label: 'Price' },
  { id: 'images', label: 'Images' },
  { id: 'compare', label: 'Compare' },
  { id: 'variants', label: 'Variants' }
]

export default function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="flex overflow-x-auto hide-scrollbar border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'text-[#e53935]'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e53935]" />
          )}
        </button>
      ))}
    </nav>
  )
}

