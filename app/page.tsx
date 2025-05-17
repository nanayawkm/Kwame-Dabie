import Image from "next/image"
import Link from "next/link"
import { Play, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import StreamingPlatforms from "@/components/streaming-platforms"
import CoverFlowCarousel from "@/components/cover-flow-carousel"
import GalleryCarousel from "@/components/gallery-carousel"
import HeroSection from "@/components/hero-section"
import ListenNowButton from "@/components/listen-now-button"
import PreSaveButton from "@/components/pre-save-button"
import QuubeLogo from "@/components/quube-logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Streaming Platforms */}
      <section className="w-full bg-black py-6 sm:py-8 border-t border-b border-green-900/30">
        <div className="container mx-auto px-4">
          <StreamingPlatforms />
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="w-full bg-black py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Upcoming Section */}
          <div className="mb-12 sm:mb-16 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 mb-6 sm:mb-8 text-center reveal-bottom">
              UPCOMING
            </h2>
            <div className="max-w-md mx-auto px-4 sm:px-0 reveal-bottom delay-200">
              <div className="group bg-black/50 rounded-lg overflow-hidden border border-green-900/30 hover:border-gold-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                <div className="relative aspect-square bg-black flex items-center justify-center p-4">
                  <Image 
                    src="/images/upcoming/WWW - cover.JPG" 
                    alt="WWW - Upcoming Release" 
                    width={400}
                    height={400}
                    className="object-contain group-hover:scale-110 transition-transform duration-500 max-h-full max-w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PreSaveButton />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-heading text-lg sm:text-xl group-hover:text-gold-500 transition-colors duration-300">WWW</h3>
                  <p className="text-gray-400 text-sm mt-1 group-hover:text-gold-400 transition-colors duration-300">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Music Section */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-6 sm:mb-8 reveal">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 mb-6 md:mb-0">
                LATEST MUSIC
              </h2>
              <Link href="https://linktr.ee/kwamedabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-400 flex items-center group">
                <span className="mr-2 text-sm uppercase tracking-wider">View All</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <a 
                href="https://fanlink.tv/gas-kwamedabie-joey"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-black/50 border border-green-900/30 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src="/images/musicc/Gas - Cover.JPG"
                    alt="Gas"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-gold-500 text-black rounded-full p-3 sm:p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gold-400">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gold-500 mb-2">Gas</h3>
                  <p className="text-gold-400 text-sm sm:text-base">Latest single</p>
                </div>
              </a>

              <a 
                href="https://fanlink.tv/kwamedabie-troubles"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-black/50 border border-green-900/30 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src="/images/musicc/Troubles Cover.JPG"
                    alt="Troubles"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-gold-500 text-black rounded-full p-3 sm:p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gold-400">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gold-500 mb-2">Troubles</h3>
                  <p className="text-gold-400 text-sm sm:text-base">Latest single</p>
                </div>
              </a>

              {/* More Music Card */}
              <a
                href="https://linktr.ee/kwamedabie"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-black/50 border border-green-900/30 hover:border-gold-500/50 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center h-full p-8">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src="/images/gallery/GVO png .png"
                      alt="GVO Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">More Music</h3>
                  <p className="text-gray-400 text-center">Discover all releases, singles, and more!</p>
                </div>
              </a>
            </div>
          </div>

          {/* Albums and EPs Section */}
          <div className="reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 mb-6 sm:mb-8 text-center reveal-bottom">
              ALBUMS & EPs
            </h2>
            <div className="max-w-5xl mx-auto px-4 sm:px-0 reveal-bottom delay-200">
              <CoverFlowCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-black py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
            <div className="lg:w-1/2 reveal-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 mb-6 sm:mb-8">
                ABOUT KWAME DABIE
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-300 font-main text-sm sm:text-base">
                <p>
                  Kwame Dabie is an emerging powerhouse in Ghana's hip-hop landscape, representing Tema 
                  with a distinctive blend of raw energy and lyrical finesse. His music seamlessly weaves English, 
                  Twi, and Pidgin-English, delivering authentic narratives that touch on ambition, societal 
                  tensions, and everyday humor—all grounded in truth.
                </p>
                <p>
                  With a signature sound rooted in trap, Dabie's style is melodic and wavy—bold yet healing, 
                  smooth yet impactful. He's already released four rap EPs, each adding depth and range to his 
                  growing discography.
                </p>
                <p>
                  Following the success of "Gas" in 2024, his most recent single, "Troubles," dropped in February 
                  2025, reinforcing his momentum and proving his consistency.
                </p>
                <p>
                  Kwame Dabie isn't just making music—he's building a legacy. With aspirations to dominate 
                  charts across Africa and beyond, he continues to deliver what he proudly calls "gargantuan 
                  vibes"—music that resonates, sticks, and speaks volumes.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative reveal-right delay-300">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/albums/about kwame.jpg"
                  alt="Kwame Dabie performing live"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full bg-gradient-to-b from-black to-green-900/30 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 mb-8 sm:mb-12 text-center reveal">
            GALLERY
          </h2>
          <div className="max-w-5xl mx-auto px-4 sm:px-0 reveal delay-300">
            <GalleryCarousel />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="w-full bg-green-900/30 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 mb-6 sm:mb-8 text-graffiti reveal">CONNECT WITH ME</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <a 
              href="https://www.instagram.com/kwamedabie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/50 rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] border border-green-900/30 hover:border-gold-500 p-6 flex flex-col items-center reveal delay-100"
            >
              <svg className="w-12 h-12 text-gold-500 group-hover:text-white mb-4 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-gold-500 group-hover:text-white text-xl font-bold mb-2 transition-colors duration-300">Instagram</h3>
              <p className="text-gray-400 text-sm">@kwamedabie</p>
            </a>
            
            <a 
              href="https://www.tiktok.com/@kwamedabie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/50 rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] border border-green-900/30 hover:border-gold-500 p-6 flex flex-col items-center reveal delay-200"
            >
              <svg className="w-12 h-12 text-gold-500 group-hover:text-white mb-4 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <h3 className="text-gold-500 group-hover:text-white text-xl font-bold mb-2 transition-colors duration-300">TikTok</h3>
              <p className="text-gray-400 text-sm">@kwamedabie</p>
            </a>
            
            <a 
              href="https://www.twitter.com/kwamedabie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/50 rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] border border-green-900/30 hover:border-gold-500 p-6 flex flex-col items-center reveal delay-300"
            >
              <svg className="w-12 h-12 text-gold-500 group-hover:text-white mb-4 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <h3 className="text-gold-500 group-hover:text-white text-xl font-bold mb-2 transition-colors duration-300">Twitter</h3>
              <p className="text-gray-400 text-sm">@kwamedabie</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black py-8 sm:py-12 border-t border-green-900/30 font-main">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <div className="relative h-16 sm:h-20 w-64 sm:w-80 mb-6 sm:mb-8">
                <Image
                  src="/images/gallery/Dabie Logo png White.PNG"
                  alt="Kwame Dabie Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-gold-500 mb-4 text-sm sm:text-base">Gargantuan Vibes Only</p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/kwamedabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="https://www.twitter.com/kwamedabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/kwamedabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/@kwamedabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gold-500">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#" className="text-gold-500 hover:text-white transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gold-500 hover:text-white transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#music" className="text-gold-500 hover:text-white transition-colors duration-300">
                    Music
                  </Link>
                </li>
                <li>
                  <Link href="/#gallery" className="text-gold-500 hover:text-white transition-colors duration-300">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gold-500">CONTACT</h3>
              <ul className="space-y-2">
                <li className="text-gold-500 hover:text-white transition-colors duration-300">
                  <a href="mailto:dabietunes@gmail.com">dabietunes@gmail.com</a>
                </li>
                <li className="text-gold-500 hover:text-white transition-colors duration-300">
                <a href="mailto:connect.gvo@gmail.com">connect.gvo@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-900/30 pt-6 sm:pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gold-500 text-xs sm:text-sm">© 2025 Kwame Dabie. All rights reserved.</p>
              <a 
                href="https://www.quubetech.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="text-gold-500 text-xs sm:text-sm">Web Design by Quube</span>
                <QuubeLogo />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
