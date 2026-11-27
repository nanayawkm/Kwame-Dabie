// Everything the site says lives here: links, the tape, more music, the gallery.
// Facts come from the DABIE BOMAYE [TAPE] EPK and the release artwork. Update here, not in components.

export const RELEASE_UTC = Date.UTC(2026, 10, 12, 0, 0, 0) // 12.11.2026 00:00 GMT (Ghana)

export const LINKS = {
  tape: "https://tiememusicdistro.lnk.to/DABIEBOMAYE",
  roadman2: "https://tiememusicdistro.lnk.to/ROADMAN2",
  pressPhotos: "https://drive.google.com/drive/folders/1wGdTAfnkq_Y_y_BeVNzjPZMVaN9-hbK3",
  instagram: "https://www.instagram.com/dabiebomaye",
  x: "https://x.com/dabiebomaye",
  tiktok: "https://www.tiktok.com/@dabiebomaye",
  youtube: "https://www.youtube.com/@DabieBomaye",
  spotify: "https://open.spotify.com/artist/6blCu4zz2JMXCoc2692gti",
  quube: "https://quube.tech",
}

export const EMAIL = "connect.gvo@gmail.com"
export const EPK_PDF = "/media/dabie-bomaye-epk.pdf"
export const ARTIST_EPK_PDF = "/media/dabie-bomaye-artist-epk.pdf"

export type Track = {
  n: string
  title: string
  ft?: string
  prod: string
  story: string
  tags?: { label: string; hot?: boolean }[]
  preview?: string
  link?: string
}

export const TRACKS: Track[] = [
  { n: "01", title: "Life Will Show U", prod: "JoeyOnTheTrack", preview: "/media/previews/01-life-will-show-u.mp3",
    story: "The intro. It sets you into the tape. You think you have everybody, but when life shows you the truth, you realise you have no one. It is just you and your God." },
  { n: "02", title: "Not the Time to Cry", prod: "JoeyOnTheTrack", preview: "/media/previews/02-not-the-time-to-cry.mp3",
    story: "This is the time to fight. Get up and move on. It is not the time to complain and it is not the time to cry. It is the time to get up and fight for whatever you want." },
  { n: "03", title: "Mission 01", prod: "JoeyOnTheTrack", preview: "/media/previews/03-mission-01.mp3",
    story: "The mission is one. Not the time to cry, not the time to stall: just get up, move and get done what you have to do." },
  { n: "04", title: "Sani Abacha", ft: "Funky319", prod: "MJayDidThis", preview: "/media/previews/04-sani-abacha.mp3",
    story: "Named after the late Nigerian head of state known for amassing vast wealth illegally. A record about getting money, plenty of money, by any route necessary. Features Funky319, a rapper from Côte d'Ivoire." },
  { n: "05", title: "O&O", prod: "KBTheAlchemist", preview: "/media/previews/05-o-and-o.mp3", link: "https://distrokid.com/hyperfollow/kwamedabie1/oo",
    story: "Over and over. An earlier single. Doing whatever you have to do again and again, and never stopping." },
  { n: "06", title: "Addict", prod: "JoeyOnTheTrack", preview: "/media/previews/06-addict.mp3",
    story: "Lead single, released October 2026. The more you do something, the more addicted and dangerous you become at it. Repetition as perfection." },
  { n: "07", title: "Times I Stared", prod: "JoeyOnTheTrack", preview: "/media/previews/07-times-i-stared.mp3",
    story: "A look back at the times I stared and did not focus on my own. Reflection on lost focus and lessons learned." },
  { n: "08", title: "20 Mins to the Capital", prod: "420Tenney & JoeyOnTheTrack", preview: "/media/previews/08-20-mins-to-the-capital.mp3",
    story: "The journey on the road. Twenty minutes from Tema to the capital, going to look for money, going to look for capital." },
  { n: "09", title: "Roadman 2", ft: "AraTheJay", prod: "Mr Kwamz",
    tags: [{ label: "Lead single" }],
    preview: "/media/previews/09-roadman-2.mp3", link: "https://tiememusicdistro.lnk.to/ROADMAN2",
    story: "The lead single off the tape, a collaboration with AraTheJay from Tema, Ghana. The sequel to \"Roadman\" (2022): the road and what we go through on it." },
  { n: "10", title: "Asylum", ft: "Nsogbu Malaika", prod: "NinoxaFlame", preview: "/media/previews/10-asylum.mp3",
    story: "The stuff we have seen, heard and witnessed on the road, told from where we stand, with Nsogbu Malaika from Tema, Ghana. It is madness over here, and it will send you mad." },
]

export const GALLERY = [
  { src: "/media/smoke.jpg", w: 991, h: 1650, caption: "The smoke", pos: "50% 40%", alt: "Dabie Bomaye in silhouette against a wall of white smoke, one arm raised" },
  { src: "/media/unmasked.jpg", w: 1100, h: 1649, caption: "Unmasked", alt: "Dabie Bomaye, the only unmasked figure, leaning against the wall among the masked crew and staring into the lens" },
  { src: "/media/stare.jpg", w: 1100, h: 1100, caption: "The stare", pos: "40% 50%", alt: "Flash-lit close-up of Dabie Bomaye with braids, leaning toward the camera" },
  { src: "/media/rubble.jpg", w: 1100, h: 1648, caption: "The rubble", pos: "50% 45%", alt: "Dabie Bomaye in a GVO cap crouched on a pile of rubble in front of a scarred wall" },
  { src: "/media/bandana.jpg", w: 1100, h: 1649, caption: "The ledge", alt: "Dabie Bomaye seated on a concrete ledge in a bandana and black vest, hands clasped" },
  { src: "/media/car.jpg", w: 1100, h: 1650, caption: "The ride", pos: "50% 35%", alt: "Dabie Bomaye in a GVO cap and wide white trousers posing beside an old saloon car" },
  { src: "/media/sword.jpg", w: 832, h: 1248, caption: "The blade", alt: "Dabie Bomaye in a GVO cap beside a sheathed sword hanging on the wall" },
  { src: "/media/jacket.jpg", w: 1100, h: 1650, caption: "The jacket", pos: "50% 30%", alt: "Dabie Bomaye in a GVO cap and patchwork jacket, adjusting his collar" },
  { src: "/media/bench.jpg", w: 1100, h: 1467, caption: "The wait", alt: "Dabie Bomaye in a patterned bandana crouched on a bench, head bowed" },
  { src: "/media/cap.jpg", w: 1000, h: 1286, caption: "Tema", alt: "Portrait of Dabie Bomaye in a GVO cap among dark leaves" },
]

// Newest first. Links are the DistroKid pages (every platform in one place); years from those releases.
export const PROJECTS = [
  { id: "P-06", title: "False Prophets", kind: "Project", meta: ["2025", "7 tracks"], cover: "/media/a-false-prophets.jpg",
    link: "https://distrokid.com/hyperfollow/kwamedabie1/false-prophets",
    credits: "Featuring Genna. Produced by JoeyOnTheTrack, 420Tenney, Mr Kwamz, Khxnbeats and Ilir808. Home of the singles Gas, WWW and Troubles.",
    tracklist: [
      { n: "01", t: "Different Level, Different Devil", p: "420Tenney" },
      { n: "02", t: "Gas", p: "JoeyOnTheTrack", single: true },
      { n: "03", t: "24/7, 365", p: "JoeyOnTheTrack" },
      { n: "04", t: "WWW", p: "JoeyOnTheTrack", single: true },
      { n: "05", t: "One Basket", p: "Mr Kwamz, Khxnbeats, Ilir808" },
      { n: "06", t: "Troubles", p: "JoeyOnTheTrack", single: true },
      { n: "07", t: "Now or Never", with: "Genna", p: "Mr Kwamz" },
    ],
    mix: "Track 1 mixed & mastered by Da Pluggg. Tracks 2 to 7 by JoeyOnTheTrack." },
  { id: "P-05", title: "3:33 am", kind: "EP", meta: ["2023", "4 tracks"], cover: "/media/a-333.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/333-am-3" },
  { id: "P-04", title: "The Purgatory Saga II", kind: "EP", meta: ["Part two", "2022", "4 tracks"], cover: "/media/a-purgatory2.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/the-purgatory-saga-ii-2" },
  { id: "P-03", title: "Caporegime", kind: "EP", meta: ["2021", "2 tracks"], cover: "/media/a-caporegime.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/caporegime" },
  // TODO: no updated link yet for part one; this still points at part two on Audiomack (as the old site did).
  { id: "P-02", title: "The Purgatory Saga", kind: "EP", meta: ["Part one", "2020"], cover: "/media/a-purgatory.jpg", link: "https://audiomack.com/kwamedabie/album/the-purgatory-saga-2?share-user-id=2493638" },
  { id: "P-01", title: "Small Time", kind: "EP", meta: ["2017"], cover: "/media/a-small-time.jpg", link: "https://soundcloud.com/kwame-dabie/sets/small-time-ep" },
] as const

export const SINGLES = [
  { id: "S-11", year: "2026", title: "Guantanamo Bay Freestyle", detail: "Freestyle", cover: "/media/a-guantanamo.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/guantanamo-bay-freestyle-2" },
  { id: "S-10", year: "2026", title: "TƐ!", detail: "Prod. MJayDidThis", cover: "/media/a-te.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/t-2" },
  { id: "S-09", year: "2025", title: "WWW", detail: "Prod. JoeyOnTheTrack", onFP: true, cover: "/media/a-www.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/www" },
  { id: "S-08", year: "2025", title: "Troubles", detail: "Prod. JoeyOnTheTrack", onFP: true, cover: "/media/a-troubles.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/troubles" },
  { id: "S-07", year: "2024", title: "Gas (Live)", detail: "Live version", cover: "/media/a-gas-live.jpg", link: "https://distrokid.com/hyperfollow/kwamedabieandjoeyonthetrack/gas-live-version" },
  { id: "S-06", year: "2024", title: "Gas", detail: "Prod. JoeyOnTheTrack", onFP: true, cover: "/media/a-gas.jpg", link: "https://distrokid.com/hyperfollow/kwamedabieandjoeyonthetrack/gas" },
  { id: "S-05", year: "2024", title: "Fallen Dynamite Freestyle", detail: "Freestyle", cover: "/media/a-fallen-dynamite.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/fallen-dynamite-freestyle-2" },
  { id: "S-04", year: "2023", title: "A Lot", detail: "Feat. Bounce", cover: "/media/a-a-lot.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/a-lot-feat-bounce-2" },
  { id: "S-03", year: "2022", title: "Catastrophe", detail: "Single", cover: "/media/a-catastrophe.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/catastrophe-2" },
  { id: "S-02", year: "2022", title: "Maddop", detail: "Single", cover: "/media/a-maddop.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/maddop-2" },
  { id: "S-01", year: "2022", title: "Hyena Flow", detail: "Single", cover: "/media/a-hyena-flow.jpg", link: "https://distrokid.com/hyperfollow/kwamedabie1/hyena-flow-2" },
] as const

const COUNT_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"]
const word = (n: number) => COUNT_WORDS[n] ?? String(n)
/** e.g. "six projects and eleven singles", kept in step with the lists above */
export const CATALOGUE = `${word(PROJECTS.length)} projects and ${word(SINGLES.length)} singles`

// The tape on each platform, direct (on a phone these open the app if it's installed). From the tape's
// link page; tracking codes removed. Boomplay isn't on that page yet, so it falls back to the link page.
export const STREAM_PLATFORMS = [
  { icon: "spotify", name: "Spotify", href: "https://open.spotify.com/album/2kRnVt2E1TRON74e5QpHGi" },
  { icon: "applemusic", name: "Apple Music", href: "https://music.apple.com/album/6828841930" },
  { icon: "audiomack", name: "Audiomack", href: "https://audiomack.com/dabiebomaye/album/dabie-bomaye" },
  { icon: "boomplay", name: "Boomplay", href: LINKS.tape },
  { icon: "youtubemusic", name: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_mORaw70O29TgjBH8E70yyDd5Xagw6ONx0" },
  { icon: "deezer", name: "Deezer", href: "https://www.deezer.com/album/1134837641" },
  { icon: "tidal", name: "Tidal", href: "https://tidal.com/album/574603187" },
] as const

export type StreamIcon = (typeof STREAM_PLATFORMS)[number]["icon"]

// Direct links for each More music release, read from its DistroKid page and checked against the platform (Nov 2026).
// Releases without an entry (or platforms missing here) are reached through the release's own link page.
export const RELEASE_STREAMS: Record<string, Partial<Record<StreamIcon, string>>> = {
  "P-06": { spotify: "https://open.spotify.com/album/7FrhFRRhm1B5sdfkYrVeEC", applemusic: "https://music.apple.com/album/6789487501", audiomack: "https://audiomack.com/dabiebomaye/album/false-prophets-1", deezer: "https://www.deezer.com/album/1025680502", tidal: "https://tidal.com/album/541832392" }, // False Prophets
  "P-05": { spotify: "https://open.spotify.com/album/0LXJBPnTA36aK2sUMjjJmh", applemusic: "https://music.apple.com/album/6789471277", audiomack: "https://audiomack.com/dabiebomaye/album/333am", youtubemusic: "https://music.youtube.com/playlist?list=OLAK5uy_nK2FKhTSv1VBAn5AczrPTQL8DH0Ne9bts", deezer: "https://www.deezer.com/album/1025645822", tidal: "https://tidal.com/album/541818860" }, // 3:33 am
  "P-04": { spotify: "https://open.spotify.com/album/0cG8V8zUtEtepXEkoRIGrM", applemusic: "https://music.apple.com/album/6789554095", audiomack: "https://audiomack.com/dabiebomaye/album/the-purgatory-saga-2-1", youtubemusic: "https://music.youtube.com/playlist?list=OLAK5uy_m6ctM6CJf5Gb0FyvwsKoyrgyeIk_wZBgY", deezer: "https://www.deezer.com/album/1025849672", tidal: "https://tidal.com/album/541903935" }, // The Purgatory Saga II
  "P-03": { spotify: "https://open.spotify.com/album/0KDZPuy3bGdbCWdsp1pQTy", applemusic: "https://music.apple.com/album/6789504383" }, // Caporegime
  "S-11": { spotify: "https://open.spotify.com/album/0Jio0I7O5AkXMeY8YAgiMK", applemusic: "https://music.apple.com/album/6790319550", audiomack: "https://audiomack.com/dabiebomaye/song/guantanamo-bay-freestyle", youtubemusic: "https://music.youtube.com/watch?v=-bQuOlFDYm4", deezer: "https://www.deezer.com/album/1027780032", tidal: "https://tidal.com/album/542605364" }, // Guantanamo Bay Freestyle
  "S-10": { spotify: "https://open.spotify.com/album/4JQcbvvtZ8OakdzIOfNc1E", applemusic: "https://music.apple.com/album/6789754976", audiomack: "https://audiomack.com/dabiebomaye/song/te-1", youtubemusic: "https://music.youtube.com/watch?v=ulm_dzhzZew" }, // TƐ!
  "S-09": { spotify: "https://open.spotify.com/album/5iuaan5IU159enj8W9Wshc", applemusic: "https://music.apple.com/album/6789525429" }, // WWW
  "S-08": { spotify: "https://open.spotify.com/album/2x2W1kja6BZfUOwr9SfcIq", applemusic: "https://music.apple.com/album/6789527725" }, // Troubles
  "S-07": { spotify: "https://open.spotify.com/album/4sCtdT3BAnTIO0mgWtRwKz", applemusic: "https://music.apple.com/album/6789776915" }, // Gas (Live)
  "S-06": { spotify: "https://open.spotify.com/album/1Li5OLGDvP6B00c1Qddz09", applemusic: "https://music.apple.com/album/6790296301" }, // Gas
  "S-05": { spotify: "https://open.spotify.com/album/0y1jmi8so5Gnnku8mX6FXr", applemusic: "https://music.apple.com/album/6789479130" }, // Fallen Dynamite Freestyle
  "S-04": { spotify: "https://open.spotify.com/album/1OSVndEKNAmpVMvOOpFPKZ", applemusic: "https://music.apple.com/album/6789515520" }, // A Lot
  "S-03": { spotify: "https://open.spotify.com/album/46LcVL04S4RHt7O7PL44rd", applemusic: "https://music.apple.com/album/6789498900" }, // Catastrophe
  "S-02": { spotify: "https://open.spotify.com/album/1ImHTFSQV5T2gFdXvg2hOX", applemusic: "https://music.apple.com/album/6789529238" }, // Maddop
}

export type StreamRelease = {
  title: string
  meta: string
  cover: string
  links: { icon: StreamIcon | null; name: string; href: string }[]
  /** the release's own link page (every platform); shown last, or as the only row when there are no direct links */
  more?: string
}

/** The stream panel's contents for a More music release (projects and singles). */
export function releaseStream(r: { id: string; title: string; cover: string; link: string; kind?: string; detail?: string; meta?: readonly string[]; year?: string }): StreamRelease {
  const direct = RELEASE_STREAMS[r.id] ?? {}
  const links: StreamRelease["links"] = STREAM_PLATFORMS.filter((p) => direct[p.icon]).map((p) => ({ icon: p.icon, name: p.name, href: direct[p.icon]! }))
  const hyper = r.link.includes("distrokid.com/hyperfollow")
  if (!hyper && r.link.includes("audiomack.com")) links.push({ icon: "audiomack", name: "Audiomack", href: r.link })
  if (!hyper && r.link.includes("soundcloud.com")) links.push({ icon: null, name: "SoundCloud", href: r.link })
  const parts = [r.kind ?? "Single", ...(r.meta ?? []), r.year, r.detail].filter((x): x is string => !!x)
  const meta = parts.filter((x, i) => parts.findIndex((y) => y.toLowerCase() === x.toLowerCase()) === i).slice(0, 3).join("  ·  ")
  return { title: r.title, meta, cover: r.cover, links, more: hyper ? r.link : undefined }
}

export const FOLLOW = [
  { icon: "spotify", name: "Spotify", handle: "Dabie Bomaye", href: LINKS.spotify },
  { icon: "instagram", name: "Instagram", handle: "@dabiebomaye", href: LINKS.instagram },
  { icon: "x", name: "X", handle: "@dabiebomaye", href: LINKS.x },
  { icon: "tiktok", name: "TikTok", handle: "@dabiebomaye", href: LINKS.tiktok },
  { icon: "youtube", name: "YouTube", handle: "@DabieBomaye", href: LINKS.youtube },
] as const

export const PRESS_BIO =
  "Dabie Bomaye, formerly known as Kwame Dabie, is a hip hop artist from Tema, Ghana. His self-titled tape, DABIE BOMAYE, came out on 12 November 2026: ten tracks about one thing, the fight. It features Funky319 from Côte d'Ivoire and AraTheJay and Nsogbu Malaika from Tema, with production led by JoeyOnTheTrack. Lead singles: Roadman 2 (ft AraTheJay) and Addict."
