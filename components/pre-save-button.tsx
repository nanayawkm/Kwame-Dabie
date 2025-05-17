"use client"

import { Button } from "@/components/ui/button"

export default function PreSaveButton() {
  return (
    <Button 
      className="bg-gold-500 text-black rounded-full px-6 py-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gold-400"
      onClick={() => window.open("https://tiememusicdistro.lnk.to/WWW", "_blank")}
    >
      Pre-save Now
    </Button>
  )
} 