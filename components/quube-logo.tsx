'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function QuubeLogo() {
  const [showLogo, setShowLogo] = useState(true)

  return (
    <div className="relative w-12 sm:w-14 h-4 sm:h-5">
      {showLogo && (
        <Image
          src="/images/quube_logo_new.png"
          alt="Quube Logo"
          fill
          sizes="(max-width: 640px) 48px, 56px"
          className="object-contain object-left"
          priority
          onError={() => setShowLogo(false)}
        />
      )}
    </div>
  )
} 