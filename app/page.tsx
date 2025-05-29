import Image from "next/image"
import { Play } from "lucide-react"
import StreamingPlatforms from "@/components/streaming-platforms"
import HeroSection from "@/components/hero-section"
import CoverFlowCarousel from "@/components/cover-flow-carousel"
import GalleryCarousel from "@/components/gallery-carousel"
import PreSaveButton from "@/components/pre-save-button"
import QuubeLogo from "@/components/quube-logo"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
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

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section aria-label="Hero Section">
          <HeroSection />
        </section>

        {/* Streaming Platforms Section */}
        <section id="streaming-platforms" className="w-full bg-black py-6 sm:py-8 border-t border-b border-green-900/30" aria-label="Streaming Platforms">
          <div className="container mx-auto px-4">
            <StreamingPlatforms />
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="w-full bg-black py-8 sm:py-12 md:py-16" aria-label="Music">
          <div className="container mx-auto px-4">
            {/* Upcoming Section */}
            <article className="mb-12 sm:mb-16 reveal">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 mb-6 sm:mb-8 text-center reveal-bottom">
                UPCOMING RELEASES
              </h2>
              <div className="max-w-md mx-auto px-4 sm:px-0 reveal-bottom delay-200">
                <div className="group bg-black/50 rounded-lg overflow-hidden border border-green-900/30 hover:border-gold-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                  <div className="relative aspect-square bg-black flex items-center justify-center p-4">
                    <Image 
                      src="/images/upcoming/WWW - cover.JPG" 
                      alt="WWW - Upcoming Release by Kwame Dabie" 
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
            </article>

            {/* Latest Music Section */}
            <article className="mb-12 sm:mb-16">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-6 sm:mb-8 reveal">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 mb-6 md:mb-0">
                  LATEST MUSIC
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <a 
                  href="https://fanlink.tv/kwamedabie-troubles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-black/50 border border-green-900/30 hover:border-gold-500/50 transition-all duration-300"
                  aria-label="Listen to Troubles by Kwame Dabie"
                >
                  <div className="aspect-square relative">
                    <Image
                      src="/images/musicc/Troubles Cover.JPG"
                      alt="Troubles by Kwame Dabie - Latest Single"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-gold-500 text-black rounded-full p-3 sm:p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gold-400" aria-label="Play Troubles">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gold-500 mb-2">Troubles</h3>
                    <p className="text-gold-400 text-sm sm:text-base">Latest single</p>
                  </div>
                </a>

                <a 
                  href="https://fanlink.tv/gas-kwamedabie-joey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-black/50 border border-green-900/30 hover:border-gold-500/50 transition-all duration-300"
                  aria-label="Listen to Gas by Kwame Dabie"
                >
                  <div className="aspect-square relative">
                    <Image
                      src="/images/musicc/Gas - Cover.JPG"
                      alt="Gas by Kwame Dabie - Hip-Hop Single"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-gold-500 text-black rounded-full p-3 sm:p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gold-400" aria-label="Play Gas">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gold-500 mb-2">Gas</h3>
                    <p className="text-gold-400 text-sm sm:text-base">Latest single</p>
                  </div>
                </a>

                {/* More Music Card */}
                <a
                  href="https://linktr.ee/kwamedabie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-black/50 border border-green-900/30 hover:border-gold-500/50 transition-all duration-300 flex flex-col items-center justify-center"
                  aria-label="Discover more music by Kwame Dabie"
                >
                  <div className="flex flex-col items-center justify-center h-full p-8">
                    <div className="relative w-24 h-24 mb-4">
                      <Image
                        src="/images/gallery/GVO png .png"
                        alt="GVO - Gargantuan Vibes Only Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">More Music</h3>
                    <p className="text-gray-400 text-center">Discover all releases, singles, and more!</p>
                  </div>
                </a>
              </div>
            </article>

            {/* Albums and EPs Section */}
            <article className="reveal">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 md:after:left-1/2 md:after:-translate-x-1/2 mb-6 sm:mb-8 text-center reveal-bottom">
                ALBUMS & EPs
              </h2>
              <div className="max-w-5xl mx-auto px-4 sm:px-0 reveal-bottom delay-200">
                <CoverFlowCarousel />
              </div>
            </article>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full bg-black py-8 sm:py-12 md:py-16" aria-label="About Kwame Dabie">
          <div className="container mx-auto px-4">
            <article className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
              <div className="lg:w-1/2 reveal-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 section-heading relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-gold-500 after:-bottom-3 after:left-0 mb-6 sm:mb-8">
                  ABOUT KWAME DABIE
                </h2>
                <div className="space-y-3 sm:space-y-4 text-gray-300 font-main text-sm sm:text-base">
                  <p>
                    <strong>Kwame Dabie</strong> is an emerging powerhouse in Ghana's hip-hop landscape, representing <strong>Tema</strong> 
                    with a distinctive blend of raw energy and lyrical finesse. His music seamlessly weaves <em>English, 
                    Twi, and Pidgin-English</em>, delivering authentic narratives that touch on ambition, societal 
                    tensions, and everyday humor—all grounded in truth.
                  </p>
                  <p>
                    With a signature sound rooted in <strong>trap</strong>, Dabie's style is melodic and wavy—bold yet healing, 
                    smooth yet impactful. He's already released <strong>four rap EPs</strong>, each adding depth and range to his 
                    growing discography.
                  </p>
                  <p>
                    Following the success of <em>"Gas"</em> in 2024, his most recent single, <em>"Troubles,"</em> dropped in February 
                    2025, reinforcing his momentum and proving his consistency in the <strong>Ghanaian music scene</strong>.
                  </p>
                  <p>
                    <strong>Kwame Dabie</strong> isn't just making music—he's building a legacy. With aspirations to dominate 
                    charts across Africa and beyond, he continues to deliver what he proudly calls <em>"gargantuan 
                    vibes"</em>—music that resonates, sticks, and speaks volumes.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 relative reveal-right delay-300">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/albums/about kwame.jpg"
                    alt="Kwame Dabie - Ghanaian Hip-Hop Artist performing live"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full bg-gradient-to-b from-black to-green-900/30 py-8 sm:py-12 md:py-16" aria-label="Gallery">
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
        <section className="w-full bg-green-900/30 py-8 sm:py-12 md:py-16" aria-label="Social Media">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold-500 mb-6 sm:mb-8 text-graffiti reveal">CONNECT WITH KWAME DABIE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <a 
                href="https://www.instagram.com/kwamedabie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/50 rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] border border-green-900/30 hover:border-gold-500 p-6 flex flex-col items-center reveal delay-100"
                aria-label="Follow Kwame Dabie on Instagram"
              >
                <svg className="w-12 h-12 text-gold-500 group-hover:text-white mb-4 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9s.68.82.9 1.38c.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38s-.82.68-1.38.9c-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68 1.38-.9c.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.26 0-3.67.01-4.95.07-1.28.06-2.15.26-2.91.56-.79.3-1.46.71-2.13 1.38-.67.67-1.08 1.34-1.38 2.13-.3.76-.5 1.63-.56 2.91-.06 1.28-.07 1.69-.07 4.95s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13-.67-.67-1.34-1.08-2.13-1.38-.76-.3-1.63-.5-2.91-.56-1.28-.06-1.69-.07-4.95-.07zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.15c-2.2 0-3.99-1.79-3.99-3.99s1.79-3.99 3.99-3.99 3.99 1.79 3.99 3.99-1.79 3.99-3.99 3.99zm7.85-10.4c0-.8-.65-1.44-1.44-1.44s-1.44.65-1.44 1.44.65 1.44 1.44 1.44 1.44-.65 1.44-1.44z"/>
                </svg>
                <h3 className="text-gold-500 group-hover:text-white text-xl font-bold mb-2 transition-colors duration-300">Instagram</h3>
                <p className="text-gray-400 text-sm">@kwamedabie</p>
              </a>
              
              <a 
                href="https://www.tiktok.com/@kwamedabie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/50 rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] border border-green-900/30 hover:border-gold-500 p-6 flex flex-col items-center reveal delay-200"
                aria-label="Follow Kwame Dabie on TikTok"
              >
                <svg className="w-12 h-12 text-gold-500 group-hover:text-white mb-4 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                aria-label="Follow Kwame Dabie on Twitter"
              >
                <svg className="w-12 h-12 text-gold-500 group-hover:text-white mb-4 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <h3 className="text-gold-500 group-hover:text-white text-xl font-bold mb-2 transition-colors duration-300">Twitter</h3>
                <p className="text-gray-400 text-sm">@kwamedabie</p>
              </a>
            </div>
          </div>
        </section>

        {/* Additional structured content for SEO */}
        <section className="sr-only" itemScope itemType="https://schema.org/Person">
          <h2 itemProp="name">Kwame Dabie</h2>
          <p itemProp="description">
            Kwame Dabie is a talented Ghanaian hip-hop artist and rapper from Tema, Ghana. 
            Known professionally as Kwame Dabie and associated with GVO (Gargantuan Vibes Only), 
            he has established himself in the Ghana hip-hop scene with his distinctive musical style.
          </p>
          <span itemProp="jobTitle">Hip-Hop Artist & Rapper</span>
          <span itemProp="nationality">Ghanaian</span>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Tema</span>
            <span itemProp="addressCountry">Ghana</span>
          </div>
          <a itemProp="url" href="https://kwamedabie.com">Official Website</a>
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
                <a href="https://www.facebook.com/kwamefuccindabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="https://www.twitter.com/kwamedabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/kwamedabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9s.68.82.9 1.38c.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38s-.82.68-1.38.9c-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68 1.38-.9c.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.26 0-3.67.01-4.95.07-1.28.06-2.15.26-2.91.56-.79.3-1.46.71-2.13 1.38-.67.67-1.08 1.34-1.38 2.13-.3.76-.5 1.63-.56 2.91-.06 1.28-.07 1.69-.07 4.95s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13-.67-.67-1.34-1.08-2.13-1.38-.76-.3-1.63-.5-2.91-.56-1.28-.06-1.69-.07-4.95-.07zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.15c-2.2 0-3.99-1.79-3.99-3.99s1.79-3.99 3.99-3.99 3.99 1.79 3.99 3.99-1.79 3.99-3.99 3.99zm7.85-10.4c0-.8-.65-1.44-1.44-1.44s-1.44.65-1.44 1.44.65 1.44 1.44 1.44 1.44-.65 1.44-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@kwamedabie" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gold-500">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#" className="text-gold-500 hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" className="text-gold-500 hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#music" className="text-gold-500 hover:text-white transition-colors duration-300">
                    Music
                  </a>
                </li>
                <li>
                  <a href="/#gallery" className="text-gold-500 hover:text-white transition-colors duration-300">
                    Gallery
                  </a>
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
