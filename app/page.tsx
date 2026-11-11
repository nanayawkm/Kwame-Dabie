import Link from "next/link"
import Hero from "@/components/site/hero"
import Rename from "@/components/site/rename"
import Tracklist from "@/components/site/tracklist"
import Trailer from "@/components/site/trailer"
import Gallery from "@/components/site/gallery"
import LoopVideo from "@/components/site/loop-video"
import { Arrow } from "@/components/site/icon"

/** The homepage has one job: get people to stream the tape. */
export default function Home() {
  return (
    <>
      <Hero />
      <Rename />

      <section className="project" id="project" data-tone="light" aria-labelledby="pj-h">
        <div className="wrap project-grid">
          <div>
            <p className="lbl" style={{ margin: 0, color: "var(--blood-ink)" }}>The project</p>
            <h2 className="thesis" id="pj-h">
              <span className="thesis-lead">Dabie Bomaye is</span> a tape about one thing: <span className="red">the fight.</span>
            </h2>
            <div className="prose">
              <p>Self-titled because it is him: a hip hop artist from Tema, Ghana, going hard, never giving up and chasing whatever he is aiming for.</p>
              <p>Ten tracks. One mission. From the opening cut, where life shows you that in the end it is just you and your God, to the closing track, <span className="tn">Asylum</span>, where the madness of the road catches up with you, the project follows a man on the move: no crying, no complaining, only getting up and going again.</p>
              <p>It runs through repetition and obsession (<span className="tn">O&amp;O</span>, <span className="tn">Addict</span>), the journey from Tema to the capital in search of capital, and the hunger for money by any route. <strong>The more you repeat something, the more dangerous you become at it.</strong></p>
            </div>
          </div>
          <div>
            <figure className="cover" style={{ margin: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/cover.jpg" alt="Dabie Bomaye cover art: Dabie crouched on stone steps in black, four masked figures behind him, a GVO flag at the top right" width={1000} height={1000} loading="lazy" decoding="async" />
              <figcaption className="lbl">Cover art</figcaption>
            </figure>
            <dl className="spec">
              <dt className="lbl">Format</dt><dd>10-track tape</dd>
              <dt className="lbl">Release</dt><dd>12 Nov 2026</dd>
              <dt className="lbl">Singles</dt><dd>Roadman 2 &nbsp;/&nbsp; Addict</dd>
              <dt className="lbl">Mix &amp; master</dt><dd>JoeyOnTheTrack &amp; Spotless</dd>
              <dt className="lbl">Label</dt><dd>© 2026 GVO</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="descent" data-tone="light" aria-label="Quote">
        <div className="wrap">
          <blockquote>The more you repeat something, the more dangerous you become at it.</blockquote>
          <cite className="lbl" style={{ color: "var(--blood-ink)" }}>Dabie Bomaye</cite>
        </div>
      </section>

      <Tracklist />
      <Trailer />
      <Gallery />

      {/* The archive is its own page; the homepage gets one strip. */}
      <section className="vault dark" data-tone="dark" aria-labelledby="vt-h">
        <Link className="vault-link" href="/archive">
          <span className="vault-media"><LoopVideo /></span>
          <span className="vault-copy wrap">
            <span className="lbl red">Before Bomaye</span>
            <span className="vault-h" id="vt-h">The Kwame<br />Dabie era</span>
            <span className="vault-d">The Gas visuals, five projects and five singles from the old name.</span>
            <span className="vault-go">Enter the archive <Arrow /></span>
          </span>
        </Link>
      </section>
    </>
  )
}
