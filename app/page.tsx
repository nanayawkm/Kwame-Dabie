import Link from "next/link"
import Hero from "@/components/site/hero"
import GvoWindow from "@/components/site/gvo-window"
import Tracklist from "@/components/site/tracklist"
import Trailer from "@/components/site/trailer"
import Gallery from "@/components/site/gallery"
import LoopVideo from "@/components/site/loop-video"
import { Arrow } from "@/components/site/icon"
import Opener from "@/components/site/opener"
import { CATALOGUE } from "@/lib/content"

/** The homepage has one job: get people to stream the tape. */
export default function Home() {
  return (
    <>
      <Hero />
      <GvoWindow />

      <section className="project" id="project" data-tone="light" aria-labelledby="pj-h">
        <div className="wrap">
          <Opener id="pj-h" hClass="thesis" credit="The project">
            <span className="thesis-lead">Dabie Bomaye is</span> a tape about one thing: <span className="red">the fight.</span>
          </Opener>
        </div>
        <div className="wrap project-grid">
          <div>
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
              <dt className="lbl">Singles</dt><dd>Roadman 2 &nbsp;·&nbsp; Addict</dd>
              <dt className="lbl">Mix &amp; master</dt><dd>JoeyOnTheTrack &amp; Spotless</dd>
              <dt className="lbl">Team</dt><dd>GVO</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="descent" data-tone="light" aria-label="Quote">
        <div className="wrap">
          <figure className="opener" style={{ margin: 0 }}>
            <blockquote>
              <span className="echo e2" aria-hidden="true">The more you repeat something, the more dangerous you become at it.</span>
              <span className="echo e1" aria-hidden="true">The more you repeat something, the more dangerous you become at it.</span>
              <span className="q">The more you repeat something, the more dangerous you become at it.</span>
            </blockquote>
            <span className="opener-dash" aria-hidden="true" />
            <cite className="lbl opener-credit">Dabie Bomaye</cite>
          </figure>
        </div>
      </section>

      <Tracklist />
      <Trailer />
      <Gallery />

      {/* More music is its own page; the homepage gets one strip. */}
      <section className="vault dark" data-tone="dark" aria-labelledby="vt-h">
        <Link className="vault-link" href="/music">
          <span className="vault-media"><LoopVideo /></span>
          <span className="vault-copy wrap opener">
            <span className="vault-h" id="vt-h">More<br />music</span>
            <span className="opener-dash" aria-hidden="true" />
            <span className="lbl opener-credit">Keep listening</span>
            <span className="vault-d">Roadman 2 live, and {CATALOGUE} from before the tape.</span>
            <span className="vault-go">Hear more <Arrow /></span>
          </span>
        </Link>
      </section>
    </>
  )
}
