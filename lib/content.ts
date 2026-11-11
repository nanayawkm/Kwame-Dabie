// Everything the site says lives here: links, the tape, the archive, the gallery.
// Facts come from the DABIE BOMAYE [TAPE] EPK and the release artwork. Update here, not in components.

export const RELEASE_UTC = Date.UTC(2026, 10, 12, 0, 0, 0) // 12.11.2026 00:00 GMT (Ghana)

export const LINKS = {
  tape: "https://tiememusicdistro.lnk.to/DABIEBOMAYE",
  roadman2: "https://tiememusicdistro.lnk.to/ROADMAN2",
  pressPhotos: "https://drive.google.com/drive/folders/1wGdTAfnkq_Y_y_BeVNzjPZMVaN9-hbK3",
  gasYouTubeId: "M-cy-aFNaSg",
  instagram: "https://www.instagram.com/dabiebomaye",
  x: "https://x.com/dabiebomaye",
  tiktok: "https://www.tiktok.com/@dabiebomaye",
  youtube: "https://www.youtube.com/@DabieBomaye",
  spotify: "https://open.spotify.com/artist/6blCu4zz2JMXCoc2692gti",
  quube: "https://quube.tech",
}

export const EMAIL = "connect.gvo@gmail.com"
export const EPK_PDF = "/media/dabie-bomaye-epk.pdf"

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
  { n: "01", title: "Life Will Show U", prod: "JoeyOnTheTrack",
    story: "The intro. It sets you into the tape. You think you have everybody, but when life shows you the truth, you realise you have no one. It is just you and your God." },
  { n: "02", title: "Not the Time to Cry", prod: "JoeyOnTheTrack",
    story: "This is the time to fight. Get up and move on. It is not the time to complain and it is not the time to cry. It is the time to get up and fight for whatever you want." },
  { n: "03", title: "Mission 01", prod: "JoeyOnTheTrack",
    story: "The mission is one. Not the time to cry, not the time to stall: just get up, move and get done what you have to do." },
  { n: "04", title: "Sani Abacha", ft: "Funky319", prod: "MJayDidThis",
    story: "Named after the late Nigerian head of state known for amassing vast wealth illegally. A record about getting money, plenty of money, by any route necessary. Features Funky319, a rapper from Côte d'Ivoire." },
  { n: "05", title: "O&O", prod: "KBTheAlchemist",
    story: "Over and over. An earlier single. Doing whatever you have to do again and again, and never stopping." },
  { n: "06", title: "Addict", prod: "JoeyOnTheTrack", tags: [{ label: "Out now", hot: true }],
    story: "Lead single, released October 2026. The more you do something, the more addicted and dangerous you become at it. Repetition as perfection." },
  { n: "07", title: "Times I Stared", prod: "JoeyOnTheTrack",
    story: "A look back at the times I stared and did not focus on my own. Reflection on lost focus and lessons learned." },
  { n: "08", title: "20 Mins to the Capital", prod: "420Tenney & JoeyOnTheTrack",
    story: "The journey on the road. Twenty minutes from Tema to the capital, going to look for money, going to look for capital." },
  { n: "09", title: "Roadman 2", ft: "AraTheJay", prod: "Mr Kwamz",
    tags: [{ label: "Out now", hot: true }, { label: "Lead single" }],
    preview: "/media/roadman2-preview.mp3", link: "https://tiememusicdistro.lnk.to/ROADMAN2",
    story: "The lead single off the tape, a collaboration with AraTheJay from Tema, Ghana. The sequel to \"Roadman\" (2022): the road and what we go through on it." },
  { n: "10", title: "Asylum", ft: "Nsogbu Malaika", prod: "NinoxaFlame",
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

export const PROJECTS = [
  { id: "KD / P-05", note: "Latest project", title: "False Prophets", kind: "Project", meta: ["2025", "7 tracks", "© GVO"], cover: "/media/a-false-prophets.jpg",
    link: "https://tiememusicdistro.lnk.to/FALSEPROPHETS",
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
  { id: "KD / P-04", title: "3:33 am", kind: "EP", meta: ["Fanlink"], cover: "/media/a-333.jpg", link: "https://fanlink.tv/333AMkwamedabie" },
  { id: "KD / P-03", title: "The Purgatory Saga 2", kind: "EP", meta: ["Part two", "Fanlink"], cover: "/media/a-purgatory2.jpg", link: "https://fanlink.tv/thepurgatorysaga2" },
  // TODO: the old site linked part one to part two's Audiomack page. Swap in part one's link when it arrives.
  { id: "KD / P-02", title: "The Purgatory Saga", kind: "EP", meta: ["Part one", "Audiomack"], cover: "/media/a-purgatory.jpg", link: "https://audiomack.com/kwamedabie/album/the-purgatory-saga-2?share-user-id=2493638" },
  { id: "KD / P-01", title: "Small Time", kind: "EP", meta: ["SoundCloud"], cover: "/media/a-small-time.jpg", link: "https://soundcloud.com/kwame-dabie/sets/small-time-ep" },
] as const

export const SINGLES = [
  { id: "KD / S-05", year: "2026", title: "Guantanamo Bay Freestyle", detail: "Freestyle", cover: "/media/a-guantanamo.jpg", link: "https://fanlink.tv/guantanamobayfreestyle" },
  { id: "KD / S-04", year: "2026", title: "TƐ!", detail: "Prod. MJayDidThis", cover: "/media/a-te.jpg", link: "https://tiememusicdistro.lnk.to/tkV7gI" },
  { id: "KD / S-03", year: "2025", title: "WWW", detail: "Prod. JoeyOnTheTrack", onFP: true, cover: "/media/a-www.jpg", link: "https://fanlink.tv/WWW-KwameDabie" },
  { id: "KD / S-02", year: "Feb 2025", title: "Troubles", detail: "Prod. JoeyOnTheTrack", onFP: true, cover: "/media/a-troubles.jpg", link: "https://fanlink.tv/kwamedabie-troubles" },
  { id: "KD / S-01", year: "2024", title: "Gas", detail: "Prod. JoeyOnTheTrack", onFP: true, cover: "/media/a-gas.jpg", link: "https://fanlink.tv/gas-kwamedabie-joey" },
] as const

export const STREAM_PLATFORMS = [
  { icon: "spotify", name: "Spotify" },
  { icon: "applemusic", name: "Apple Music" },
  { icon: "audiomack", name: "Audiomack" },
  { icon: "boomplay", name: "Boomplay" },
  { icon: "youtubemusic", name: "YouTube Music" },
  { icon: "deezer", name: "Deezer" },
  { icon: "tidal", name: "Tidal" },
] as const

export const FOLLOW = [
  { icon: "spotify", name: "Spotify", handle: "Dabie Bomaye", href: LINKS.spotify },
  { icon: "instagram", name: "Instagram", handle: "@dabiebomaye", href: LINKS.instagram },
  { icon: "x", name: "X", handle: "@dabiebomaye", href: LINKS.x },
  { icon: "tiktok", name: "TikTok", handle: "@dabiebomaye", href: LINKS.tiktok },
  { icon: "youtube", name: "YouTube", handle: "@DabieBomaye", href: LINKS.youtube },
] as const

export const PRESS_BIO =
  "Dabie Bomaye, formerly known as Kwame Dabie, is a hip hop artist from Tema, Ghana. His self-titled tape, DABIE BOMAYE, is out 12 November 2026 on GVO: ten tracks about one thing, the fight. It features Funky319 from Côte d'Ivoire and AraTheJay and Nsogbu Malaika from Tema, with production led by JoeyOnTheTrack. Lead singles: Roadman 2 (ft AraTheJay) and Addict."
