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
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  
  // Detect mobile for performance optimizations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Initialize images with performance considerations
  useEffect(() => {
    const imagesToUse = isMobile ? galleryImages.slice(0, 10) : galleryImages; // Fewer images on mobile
    setImages(shuffleArray(imagesToUse));
    setIsLoaded(true);
    // Preload first image
    setLoadedImages(new Set([0]));
  }, [isMobile]);
  
  // Preload adjacent images for smoother transitions
  useEffect(() => {
    if (images.length === 0) return;
    
    const preloadIndexes = [
      (currentIndex + 1) % images.length,
      (currentIndex - 1 + images.length) % images.length
    ];
    
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      preloadIndexes.forEach(index => newSet.add(index));
      return newSet;
    });
  }, [currentIndex, images.length]);
  
  // Simplified auto-advance
  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 6000); // Slightly longer interval for better UX
    
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, images.length]);

  const nextSlide = useCallback(() => {
    if (isTransitioning || images.length === 0) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    
    // Shorter transition for better performance
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, images.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || images.length === 0) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, images.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex || images.length === 0) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, currentIndex, images.length]);

  // Loading state
  if (!isLoaded || images.length === 0) {
    return <div className="flex items-center justify-center h-60 w-full">
      <div className="animate-pulse text-gold-500">Loading gallery...</div>
    </div>;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl" ref={galleryRef}>
      {/* Main carousel container */}
      <div className="relative w-full bg-black/20 rounded-xl overflow-hidden" style={{ minHeight: isMobile ? '50vh' : '60vh' }}>
        
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const shouldLoad = loadedImages.has(index) || isActive;
          
          return (
            <div
              key={image.id}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 p-2 h-full ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {shouldLoad && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes={isMobile ? "(max-width: 768px) 100vw" : "(max-width: 768px) 100vw, 80vw"}
                    priority={index === 0}
                    quality={isMobile ? 65 : 85} // Lower quality on mobile for faster loading
                    loading={index <= 2 ? "eager" : "lazy"}
                    onLoad={() => {
                      setLoadedImages(prev => new Set(prev).add(index));
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image: ${image.src}`);
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-gold-500 rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-gold-500 rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center px-4 z-20">
        <div className="flex items-center space-x-2">
          <span className="text-white/80 text-sm mr-1">{images.length > 0 ? currentIndex + 1 : 0}</span>
          <div className="h-0.5 w-12 bg-white/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gold-500 transition-all duration-300" 
              style={{width: images.length > 0 ? `${((currentIndex + 1) / images.length) * 100}%` : '0%'}}
            ></div>
          </div>
          <span className="text-white/80 text-sm ml-1">{images.length}</span>
        </div>
      </div>
    </div>
  )
}