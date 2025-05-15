"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/albums/B7100717-D8EA-40EC-9F85-F8DA3B20C53E.jpg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 2,
    src: "/images/albums/IMG_0238.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 3,
    src: "/images/albums/IMG_0239.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 4,
    src: "/images/albums/IMG_0244.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 5,
    src: "/images/albums/IMG_1255.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 6,
    src: "/images/albums/IMG_1303.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 7,
    src: "/images/albums/IMG_2617.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 8,
    src: "/images/albums/IMG_2947.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 9,
    src: "/images/albums/IMG_2976.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 10,
    src: "/images/albums/IMG_6286.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 11,
    src: "/images/albums/IMG_8150.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 12,
    src: "/images/albums/IMG_8442.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 13,
    src: "/images/albums/IMG_8690.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 14,
    src: "/images/albums/IMG_8695.JPG",
    alt: "Kwame Dabie photo",
  },
  {
    id: 15,
    src: "/images/albums/Kwame Dabie  (16).jpeg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 16,
    src: "/images/albums/Kwame Dabie  (51).jpeg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 17,
    src: "/images/albums/Kwame Dabie  (55).jpeg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 18,
    src: "/images/albums/Kwame Dabie  (57).jpeg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 19,
    src: "/images/albums/Kwame Dabie  (66).jpeg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 20,
    src: "/images/albums/Kwame Dabie  (67).jpeg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 21,
    src: "/images/albums/Kwame Dabie  (68).jpeg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 22,
    src: "/images/albums/Kwame Dabie  (89).jpeg",
    alt: "Kwame Dabie photo",
  },
  {
    id: 23,
    src: "/images/albums/about kwame.jpg",
    alt: "About Kwame Dabie",
  },
]

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: GalleryImage[]): GalleryImage[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function GalleryCarousel() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [flashActive, setFlashActive] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Shuffle images on initial load
  useEffect(() => {
    setImages(shuffleArray(galleryImages));
  }, []);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const triggerFlashEffect = useCallback(() => {
    setFlashActive(true);
    
    // Create and append the flash element for enhanced effect
    if (galleryRef.current) {
      const flashElement = document.createElement('div');
      flashElement.className = 'gallery-flash';
      galleryRef.current.appendChild(flashElement);
      
      // Remove the element after animation completes
      setTimeout(() => {
        if (flashElement.parentNode) {
          flashElement.parentNode.removeChild(flashElement);
        }
      }, 600);
    }
    
    // Reset flash state after it completes
    setTimeout(() => {
      setFlashActive(false);
    }, 600);
  }, [galleryRef]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    triggerFlashEffect();
    
    // Short delay before changing the image to sync with flash effect
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 300);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning, images.length, triggerFlashEffect]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    triggerFlashEffect();
    
    // Short delay before changing the image to sync with flash effect
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, 300);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning, images.length, triggerFlashEffect]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    triggerFlashEffect();
    
    // Short delay before changing the image to sync with flash effect
    setTimeout(() => {
      setCurrentIndex(index);
    }, 300);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning, currentIndex, triggerFlashEffect]);

  // If images haven't loaded yet, return a loading state
  if (images.length === 0) {
    return <div className="flex items-center justify-center h-60 w-full">
      <div className="animate-pulse text-gold-500">Loading gallery...</div>
    </div>;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl" ref={galleryRef}>
      {/* Main carousel container */}
      <div className="relative w-full bg-black/20 rounded-xl overflow-hidden" style={{ minHeight: '60vh' }}>
        {/* Flash overlay for smooth transitions */}
        <div 
          className={`absolute inset-0 bg-black z-30 pointer-events-none transition-opacity duration-300 ${
            flashActive ? 'opacity-70' : 'opacity-0'
          }`} 
        />
        
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 p-2 h-full ${
              index === currentIndex ? 'gallery-image-enter-active opacity-100 z-10' : 'gallery-image-exit-active opacity-0 z-0'
            }`}
            style={{
              transitionDelay: index === currentIndex ? '250ms' : '0ms',
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-contain transform transition-transform duration-700 ${
                  index === currentIndex ? 'scale-100' : 'scale-110'
                }`}
                sizes="(max-width: 768px) 100vw, 80vw"
                priority={index === currentIndex}
                onError={(e) => {
                  // Handle image load errors
                  console.error(`Failed to load image: ${image.src}`);
                  // Replace with a fallback or placeholder if needed
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-gold-500 rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-gold-500 rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Controls bar at bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center px-4 z-20">
        {/* Indicator dots and counter */}
        <div className="flex items-center space-x-2">
          <span className="text-white/80 text-sm mr-1">{currentIndex + 1}</span>
          <div className="h-0.5 w-12 bg-white/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gold-500 transition-all duration-300" 
              style={{width: `${((currentIndex + 1) / images.length) * 100}%`}}
            ></div>
          </div>
          <span className="text-white/80 text-sm ml-1">{images.length}</span>
        </div>
      </div>
    </div>
  )
}