import Link from "next/link"
import { EMAIL, FOLLOW, LINKS, STREAM_PLATFORMS } from "@/lib/content"
import CopyButton from "./copy-button"
import Icon, { Arrow } from "./icon"
import GvoFlag from "./gvo-flag"

const CHANT = Array.from({ length: 12 }, (_, i) => <span key={i}>Bomaye</span>)

/** On every page: the chant, the GVO flag, where to stream, where to follow, who to email. */
export default function Footer() {
  return (
    <footer className="foot dark" id="contact" data-tone="dark">
      <div className="ticker" aria-hidden="true"><div className="ticker-track">{CHANT}</div></div>
      <div className="wrap">
        <div className="foot-gvo">
          <GvoFlag className="gvo-flag gvo--light" />
          <div>
            <p className="lbl red" style={{ margin: 0 }}>The label. The crew. The flag.</p>
            <h2>Gargantuan<br />Vibes Only</h2>
            <p>GVO is the label and the crew behind Dabie Bomaye, out of Tema, Ghana.</p>
          </div>
        </div>
        <div className="foot-grid">
          <div>
            <p className="lbl red" style={{ margin: 0 }}>Stream the tape</p>
            <ul className="links">
              {STREAM_PLATFORMS.map((p) => (
                <li key={p.icon}>
                  <a href={LINKS.tape} target="_blank" rel="noopener"><span className="ln"><Icon name={p.icon} />{p.name}</span></a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lbl red" style={{ margin: 0 }}>Follow</p>
            <ul className="links">
              {FOLLOW.map((f) => (
                <li key={f.icon}>
                  <a href={f.href} target="_blank" rel="noopener"><span className="ln"><Icon name={f.icon} />{f.name}</span><small>{f.handle}</small></a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lbl red" style={{ margin: 0 }}>Contact &amp; booking</p>
            <div className="mail"><span id="mail">{EMAIL}</span><CopyButton text={EMAIL} selectId="mail" what="email" /></div>
            <Link className="foot-press lbl" href="/press">Press kit &amp; photos <Arrow /></Link>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="foot-logo" src="/media/logo.webp" alt="Dabie Bomaye" width={1100} height={999} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="foot-base lbl">
          <span>© 2026 GVO &nbsp;/&nbsp; Tema, Ghana</span>
          <a href={LINKS.quube} target="_blank" rel="noopener">Site by Quube</a>
        </div>
      </div>
    </footer>
  )
}
