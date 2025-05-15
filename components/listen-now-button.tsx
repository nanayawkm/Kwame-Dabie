"use client"

import { Button } from "@/components/ui/button"

export default function ListenNowButton() {
  return (
    <Button 
      className="bg-gold-500 hover:bg-gold-600 text-black font-medium px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:scale-105 w-fit" 
      onClick={() => window.open("https://linktr.ee/kwamedabie", "_blank")}
    >
      Listen Now
    </Button>
  )
} 