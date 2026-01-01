import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

export default function StickyBottomBar() {
  return (
    <>
      {/* Spacer to prevent content from being hidden behind sticky bar */}
      <div className="h-24" />
      
      {/* WhatsApp Floating Button */}
      <button className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-40">
        <Icon name="whatsapp" size={28} />
      </button>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="mx-auto max-w-[430px]">
          {/* CTA Button */}
          <Button variant="primary" size="lg" fullWidth className="shadow-md">
            Get Year End Offers
          </Button>
        </div>
      </div>
    </>
  )
}
