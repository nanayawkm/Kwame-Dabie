import Link from "next/link"
import { EMAIL, FOLLOW, LINKS, STREAM_PLATFORMS } from "@/lib/content"
import CopyButton from "./copy-button"
import Icon, { Arrow } from "./icon"
import GvoFlag from "./gvo-flag"
import Opener from "./opener"

const CHANT = Array.from({ length: 12 }, (_, i) => <span key={i}>Bomaye</span>)

/** On every page: the chant, the GVO flag, where to stream, where to follow, who to email. */
export default function Footer() {
  return (
    <footer className="foot dark" id="contact" data-tone="dark">
      <div className="ticker" aria-hidden="true"><div className="ticker-track">{CHANT}</div></div>
      <div className="wrap">
        <div className="foot-gvo">
          <GvoFlag className="gvo-flag gvo--light" />
          <Opener hClass="foot-gvo-h" after={<p className="foot-gvo-d">GVO is the force behind Dabie Bomaye.</p>}>
            Gargantuan<br />Vibes Only
          </Opener>
        </div>
        <div className="foot-grid">
          <div>
            <p className="lbl list-h">Stream the tape</p>
            <ul className="links">
              {STREAM_PLATFORMS.map((p) => (
                <li key={p.icon}>
                  <a href={p.href} target="_blank" rel="noopener"><span className="ln"><Icon name={p.icon} />{p.name}</span></a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lbl list-h">Follow</p>
            <ul className="links">
              {FOLLOW.map((f) => (
                <li key={f.icon}>
                  <a href={f.href} target="_blank" rel="noopener"><span className="ln"><Icon name={f.icon} />{f.name}</span><small>{f.handle}</small></a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lbl list-h">Contact &amp; booking</p>
            <div className="mail"><span id="mail">{EMAIL}</span><CopyButton text={EMAIL} selectId="mail" what="email" /></div>
            <Link className="foot-press lbl" href="/press">Press kit &amp; photos <Arrow /></Link>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="foot-logo" data-beat src="/media/logo.webp" alt="Dabie Bomaye" width={1100} height={999} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="foot-base lbl">
          <span>© 2026 GVO &nbsp;·&nbsp; Tema, Ghana</span>
          <a href={LINKS.quube} target="_blank" rel="noopener">Site by Quube</a>
        </div>
      </div>
    </footer>
  )
}
