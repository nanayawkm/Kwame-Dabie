import Link from "next/link"
import { Music, Youtube, Headphones, Music2, Waves } from "lucide-react"

export default function StreamingPlatforms() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 xs:gap-6 sm:gap-7 md:gap-12">
      <Link
        href="https://open.spotify.com/artist/2oSgRTktonvvlCCPYgTmMC"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gold-500 group-hover:text-white transition-colors duration-300">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>
        <span className="text-[10px] xs:text-xs text-white/70 group-hover:text-gold-500 mt-1 sm:mt-2 transition-colors duration-300">
          Spotify
        </span>
      </Link>

      <Link
        href="https://music.apple.com/artist/kwame-dabie/1330190976"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gold-500 group-hover:text-white transition-colors duration-300">
          <Music className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <span className="text-[10px] xs:text-xs text-white/70 group-hover:text-gold-500 mt-1 sm:mt-2 transition-colors duration-300">
          Apple Music
        </span>
      </Link>

      <Link
        href="https://www.youtube.com/@kwamedabie"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gold-500 group-hover:text-white transition-colors duration-300">
          <Youtube className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <span className="text-[10px] xs:text-xs text-white/70 group-hover:text-gold-500 mt-1 sm:mt-2 transition-colors duration-300">
          YouTube
        </span>
      </Link>

      <Link
        href="https://audiomack.com/kwamedabie"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gold-500 group-hover:text-white transition-colors duration-300">
          <Headphones className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <span className="text-[10px] xs:text-xs text-white/70 group-hover:text-gold-500 mt-1 sm:mt-2 transition-colors duration-300">
          Audiomack
        </span>
      </Link>

      <Link
        href="https://www.boomplay.com/share/artist/3914037"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gold-500 group-hover:text-white transition-colors duration-300">
          <Music2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <span className="text-[10px] xs:text-xs text-white/70 group-hover:text-gold-500 mt-1 sm:mt-2 transition-colors duration-300">
          Boomplay
        </span>
      </Link>

      <Link
        href="https://www.deezer.com/en/artist/13747431"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gold-500 group-hover:text-white transition-colors duration-300">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            <path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38H6.27zm12.54 0v3.027H24V8.38h-5.19zM0 12.6v3.027h5.19V12.6H0zm6.27 0v3.027h5.189V12.6H6.27zm6.27 0v3.027h5.189V12.6h-5.19zm6.27 0v3.027H24V12.6h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03H6.27zm6.27 0v3.029h5.189v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19z"/>
          </svg>
        </div>
        <span className="text-[10px] xs:text-xs text-white/70 group-hover:text-gold-500 mt-1 sm:mt-2 transition-colors duration-300">
          Deezer
        </span>
      </Link>

      <Link
        href="https://tidal.com/artist/9315690"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gold-500 group-hover:text-white transition-colors duration-300">
          <Waves className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <span className="text-[10px] xs:text-xs text-white/70 group-hover:text-gold-500 mt-1 sm:mt-2 transition-colors duration-300">
          Tidal
        </span>
      </Link>
    </div>
  )
}
