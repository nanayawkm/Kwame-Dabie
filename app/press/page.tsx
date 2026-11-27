import type { Metadata } from "next"
import Link from "next/link"
import { ARTIST_EPK_PDF, EMAIL, EPK_PDF, LINKS, PRESS_BIO } from "@/lib/content"
import CopyButton from "@/components/site/copy-button"
import { Arrow } from "@/components/site/icon"
import Opener from "@/components/site/opener"

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press kit for Dabie Bomaye (formerly Kwame Dabie): the artist EPK and the tape EPK, short bio, quick facts, press photos and booking contact.",
  alternates: { canonical: "/press" },
}

const PHOTOS = [
  { src: "/media/hero.jpg", label: "Close-up", alt: "Press photo: Dabie Bomaye crouched in black, crew behind him" },
  { src: "/media/steps.jpg", label: "The steps", alt: "Press photo: the masked GVO crew on white steps" },
  { src: "/media/flag.jpg", label: "The flag", alt: "Press photo: crew on a rooftop with the GVO flag" },
  { src: "/media/cap.jpg", label: "GVO cap", alt: "Press photo: Dabie Bomaye in a GVO cap among leaves" },
]

/** Two kits: who he is (artist), and what the tape is (tape). */
const KITS = [
  { id: "kit-artist", kicker: "Artist EPK", title: "Dabie Bomaye", what: "artist press kit", pdf: ARTIST_EPK_PDF, file: "Dabie Bomaye - Artist EPK.pdf",
    cover: "/media/epk-artist-cover.jpg", alt: "Cover page of the Dabie Bomaye artist press kit",
    meta: ["PDF", "3 pages", "5 MB", "Nov 2026"], d: "The bio, the numbers, the live history, the new tape, where to listen and who to book." },
  { id: "kit-tape", kicker: "Tape EPK", title: "Dabie Bomaye [Tape]", what: "tape press kit", pdf: EPK_PDF, file: "Dabie Bomaye - Tape EPK.pdf",
    cover: "/media/epk-cover.jpg", alt: "Cover page of the Dabie Bomaye tape press kit",
    meta: ["PDF", "5 pages", "5.8 MB", "Nov 2026"], d: "The project, all ten tracks and their stories, full credits, links and contacts." },
]

export default function PressPage() {
  return (
    <section className="press page-top" id="press" data-tone="light" aria-labelledby="pr-h">
      <div className="wrap">
        <Link className="back lbl" href="/"><Arrow dir="left" /> Back to the tape</Link>
        <div className="press-head">
          <Opener as="h1" id="pr-h" hClass="press-h" credit="For press, DJs, promoters & bookers">Press</Opener>
          <p className="press-intro">Everything you need to write about, play or book Dabie Bomaye: two press kits, a bio you can paste, the facts, photos and who to email.</p>
        </div>

        <div className="press-grid">
          <div className="kits">
            {KITS.map((k) => (
              <article key={k.id} className="kit" aria-labelledby={k.id}>
                <a className="kit-doc" href={k.pdf} download={k.file} aria-label={`Download the ${k.what} PDF`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={k.cover} alt={k.alt} width={910} height={1287} loading="lazy" decoding="async" />
                </a>
                <div style={{ minWidth: 0 }}>
                  <span className="lbl arc-file">{k.kicker}</span>
                  <h2 className="kit-t" id={k.id}>{k.title}</h2>
                  <p className="lbl proj-meta">{k.meta.map((m, i) => <span key={m}>{i === 0 ? <b>{m}</b> : m}</span>)}</p>
                  <p className="kit-d">{k.d}</p>
                  <a className="btn" href={k.pdf} download={k.file}>Download</a>
                </div>
              </article>
            ))}
          </div>

          <article className="bio" aria-labelledby="bio-h">
            <div className="bio-top">
              <span className="lbl arc-file" id="bio-h">Short bio</span>
              <CopyButton text={PRESS_BIO} label="Copy bio" className="copy-l" selectId="bioText" what="bio" />
            </div>
            <p className="bio-t" id="bioText">{PRESS_BIO}</p>
            <dl className="spec">
              <dt className="lbl">Artist</dt><dd>Dabie Bomaye (formerly Kwame Dabie)</dd>
              <dt className="lbl">From</dt><dd>Tema, Ghana</dd>
              <dt className="lbl">The name</dt>
              <dd className="spec-text">From the 1974 “Ali, bomaye” chant. To Dabie it means aggression, being out there, the traits of Ali.</dd>
              <dt className="lbl">Project</dt><dd>Dabie Bomaye, 10-track tape</dd>
              <dt className="lbl">Release</dt><dd>12 Nov 2026</dd>
              <dt className="lbl">Singles</dt><dd>Roadman 2 (ft AraTheJay) · Addict</dd>
              <dt className="lbl">Features</dt><dd>Funky319, AraTheJay, Nsogbu Malaika</dd>
              <dt className="lbl">Team</dt><dd>GVO (Gargantuan Vibes Only)</dd>
              <dt className="lbl">Production</dt><dd>JoeyOnTheTrack, 420Tenney, KBTheAlchemist, Mr Kwamz, NinoxaFlame, MJayDidThis</dd>
            </dl>
          </article>
        </div>

        <Opener className="opener--sub" hClass="sub-h" credit="Full resolution">Press photos</Opener>
        <ul className="press-photos">
          {PHOTOS.map((p, i) => (
            <li key={p.src}>
              <a href={LINKS.pressPhotos} target="_blank" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className="ph"><img src={p.src} alt={p.alt} loading="lazy" decoding="async" /></span>
                <span className="lbl"><b className="red">{String(i + 1).padStart(2, "0")}</b> &nbsp;{p.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a className="proj-go" href={LINKS.pressPhotos} target="_blank" rel="noopener">Open the full photo folder <Arrow dir="out" /></a>

        <Opener className="opener--sub" hClass="sub-h" credit="Contact">Press &amp; booking</Opener>
        <div className="press-contact">
          <div className="press-mail"><span id="pressMail">{EMAIL}</span><CopyButton text={EMAIL} label="Copy email" className="copy-l" selectId="pressMail" what="press_email" /></div>
          <p>Interviews, features, radio, shows and bookings. Journalists can request the private pre-release stream of the tape by email.</p>
        </div>
      </div>
    </section>
  )
}
