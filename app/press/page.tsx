import type { Metadata } from "next"
import Link from "next/link"
import { EMAIL, EPK_PDF, LINKS, PRESS_BIO } from "@/lib/content"
import CopyButton from "@/components/site/copy-button"

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press kit for Dabie Bomaye (formerly Kwame Dabie): EPK download, short bio, quick facts, press photos and booking contact.",
  alternates: { canonical: "/press" },
}

const PHOTOS = [
  { src: "/media/hero.jpg", label: "Close-up", alt: "Press photo: Dabie Bomaye crouched in black, crew behind him" },
  { src: "/media/steps.jpg", label: "The steps", alt: "Press photo: the masked GVO crew on white steps" },
  { src: "/media/flag.jpg", label: "The flag", alt: "Press photo: crew on a rooftop with the GVO flag" },
  { src: "/media/cap.jpg", label: "GVO cap", alt: "Press photo: Dabie Bomaye in a GVO cap among leaves" },
]

export default function PressPage() {
  return (
    <section className="press page-top" id="press" data-tone="light" aria-labelledby="pr-h">
      <div className="wrap">
        <Link className="back lbl" href="/">← Back to the tape</Link>
        <div className="press-head">
          <div>
            <p className="lbl" style={{ margin: 0, color: "var(--blood-ink)" }}>For press, DJs, promoters &amp; bookers</p>
            <h1 className="press-h" id="pr-h">Press</h1>
          </div>
          <p className="press-intro">Everything you need to write about, play or book Dabie Bomaye: the press kit, a bio you can paste, the facts, photos and who to email.</p>
        </div>

        <div className="press-grid">
          <article className="kit" aria-labelledby="kit-t">
            <a className="kit-doc" href={EPK_PDF} download="Dabie Bomaye - EPK.pdf" aria-label="Download the press kit PDF">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/epk-cover.jpg" alt="Cover page of the Dabie Bomaye electronic press kit" width={910} height={1287} loading="lazy" decoding="async" />
            </a>
            <div style={{ minWidth: 0 }}>
              <span className="lbl arc-file">Electronic press kit</span>
              <h2 className="kit-t" id="kit-t">Dabie Bomaye [Tape]</h2>
              <p className="lbl proj-meta"><span><b>PDF</b></span><span>5 pages</span><span>5.7 MB</span><span>Oct 2026</span></p>
              <p className="kit-d">The project, all ten tracks with their stories and moods, full credits, links and contacts.</p>
              <a className="btn" href={EPK_PDF} download="Dabie Bomaye - EPK.pdf">Download the EPK</a>
            </div>
          </article>

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
              <dt className="lbl">Release</dt><dd>12 Nov 2026 / GVO</dd>
              <dt className="lbl">Singles</dt><dd>Roadman 2 (ft AraTheJay) / Addict</dd>
              <dt className="lbl">Features</dt><dd>Funky319, AraTheJay, Nsogbu Malaika</dd>
              <dt className="lbl">Production</dt><dd>JoeyOnTheTrack, 420Tenney, KBTheAlchemist, Mr Kwamz, NinoxaFlame, MJayDidThis</dd>
            </dl>
          </article>
        </div>

        <div className="arc-file-h">
          <span className="arc-tab">Photos</span>
          <h2>Press photos</h2>
          <span className="lbl cnt">Full resolution</span>
        </div>
        <ul className="press-photos">
          {PHOTOS.map((p, i) => (
            <li key={p.src}>
              <a href={LINKS.pressPhotos} target="_blank" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className="ph"><img src={p.src} alt={p.alt} loading="lazy" decoding="async" /></span>
                <span className="lbl">{String(i + 1).padStart(2, "0")} / {p.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a className="proj-go" href={LINKS.pressPhotos} target="_blank" rel="noopener">Open the full photo folder ↗</a>

        <div className="arc-file-h">
          <span className="arc-tab">Contact</span>
          <h2>Press &amp; booking</h2>
        </div>
        <div className="press-contact">
          <div className="press-mail"><span id="pressMail">{EMAIL}</span><CopyButton text={EMAIL} label="Copy email" className="copy-l" selectId="pressMail" what="press_email" /></div>
          <p>Interviews, features, radio, shows and bookings. Journalists can request the private pre-release stream of the tape by email.</p>
        </div>
      </div>
    </section>
  )
}
