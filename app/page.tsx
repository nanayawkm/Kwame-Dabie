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
import Hero from "@/components/hero"
import About from "@/components/about"
import MusicSection from "@/components/music-section"
import Gallery from "@/components/gallery"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hidden SEO content for better "Kwame Dabie" rankings */}
        <div className="sr-only">
          <h1>Kwame Dabie - Official Website</h1>
          <p>
            Kwame Dabie is a Ghanaian hip-hop artist from Tema, Ghana. Known for his unique blend of trap music 
            with English, Twi, and Pidgin-English lyrics, Kwame Dabie (GVO - Gargantuan Vibes Only) has become 
            an emerging powerhouse in Ghana's hip-hop scene. Listen to Kwame Dabie's latest tracks "Troubles" 
            and "Gas" on all streaming platforms. Official Kwame Dabie music, biography, news, and tour dates.
          </p>
          <h2>About Kwame Dabie</h2>
          <p>
            Hip-hop artist Kwame Dabie, born and raised in Tema, Ghana, represents the new generation of 
            Ghanaian rap music. Kwame Dabie's music seamlessly weaves together contemporary trap beats with 
            authentic African narratives, making him one of Ghana's most promising rap talents. 
            From Tema to the world, Kwame Dabie's journey in hip-hop continues to inspire fans across Africa and beyond.
          </p>
          <h2>Kwame Dabie Music & Discography</h2>
          <p>
            Stream Kwame Dabie's hit singles "Troubles" and "Gas" featuring collaborations with top Ghanaian artists. 
            Kwame Dabie's upcoming release "WWW" promises to showcase his evolution as an artist. 
            Find all Kwame Dabie songs, music videos, and exclusive content here on his official website.
          </p>
        </div>

        {/* Hero Section */}
        <section aria-label="Hero Section">
          <Hero />
        </section>

        {/* Streaming Platforms */}
        <section id="streaming-platforms" className="w-full bg-black py-6 sm:py-8 border-t border-b border-green-900/30" aria-label="Streaming Platforms">
          <div className="container mx-auto px-4">
            <StreamingPlatforms />
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="w-full bg-black py-8 sm:py-12 md:py-16" aria-label="Music">
          <div className="container mx-auto px-4">
            <MusicSection />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full bg-black py-8 sm:py-12 md:py-16" aria-label="About Kwame Dabie">
          <div className="container mx-auto px-4">
            <About />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full bg-gradient-to-b from-black to-green-900/30 py-8 sm:py-12 md:py-16" aria-label="Gallery">
          <div className="container mx-auto px-4">
            <Gallery />
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full bg-green-900/30 py-8 sm:py-12 md:py-16" aria-label="Contact">
          <div className="container mx-auto px-4 text-center">
            <ContactSection />
          </div>
        </section>

        {/* Additional structured content for SEO */}
        <section className="sr-only" itemScope itemType="https://schema.org/Person">
          <h2 itemprop="name">Kwame Dabie</h2>
          <p itemprop="description">
            Kwame Dabie is a talented Ghanaian hip-hop artist and rapper from Tema, Ghana. 
            Known professionally as Kwame Dabie and associated with GVO (Gargantuan Vibes Only), 
            he has established himself in the Ghana hip-hop scene with his distinctive musical style.
          </p>
          <span itemprop="jobTitle">Hip-Hop Artist & Rapper</span>
          <span itemprop="nationality">Ghanaian</span>
          <div itemprop="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemprop="addressLocality">Tema</span>
            <span itemprop="addressCountry">Ghana</span>
          </div>
          <a itemprop="url" href="https://kwamedabie.com">Official Website</a>
        </section>
      </main>

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
                <Link href="https://www.facebook.com/kwamefuccindabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
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
                <span className="text-gold-500 text-xs sm:text-sm">Designed and Developed by Quube</span>
                <Image
                  src="/images/musicc/Quube_logo_new.PNG"
                  alt="Quube Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
