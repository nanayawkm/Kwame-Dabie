import type { Metadata } from "next"
import Link from "next/link"
import { CATALOGUE, PROJECTS, SINGLES, releaseStream } from "@/lib/content"
import StreamLink from "@/components/site/stream-link"
import LiveFeature from "@/components/site/live-feature"
import TouchLive from "@/components/site/touch-live"
import { Arrow } from "@/components/site/icon"
import Opener from "@/components/site/opener"

export const metadata: Metadata = {
  title: "More Music",
  description:
    "More music from Dabie Bomaye: every project and single from before the tape, from Small Time to False Prophets, plus Roadman 2 performed live.",
  alternates: { canonical: "/music" },
}

export default function MusicPage() {
  return (
    <section className="archive page-top" id="music" data-tone="light" aria-labelledby="ar-h">
      <div className="wrap">
        <Link className="back lbl" href="/"><Arrow dir="left" /> Back to the tape</Link>
        <Opener as="h1" id="ar-h" hClass="page-h" credit="Keep listening">More<br />music</Opener>
        <p className="arc-intro">{CATALOGUE[0].toUpperCase() + CATALOGUE.slice(1)} from before the tape, and Roadman 2 live.</p>

        <LiveFeature />

        <Opener className="opener--sub" hClass="sub-h" credit={<>{String(PROJECTS.length).padStart(2, "0")} projects</>}>Albums &amp; EPs</Opener>
        <ul className="proj">
          {PROJECTS.map((p) => { const rs = releaseStream(p); return (
            <li key={p.id} className="arc">
              <StreamLink release={rs} from="music" href={p.link} tabIndex={-1} aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className="arc-img"><img src={p.cover} alt="" loading="lazy" decoding="async" /></span>
              </StreamLink>
              <div style={{ minWidth: 0 }}>
                <span className="lbl arc-file">{p.id}{"note" in p && p.note ? <> &nbsp;·&nbsp; {p.note}</> : null}</span>
                <StreamLink release={rs} from="music" className="proj-t" href={p.link}>{p.title}</StreamLink>
                <p className="lbl proj-meta"><span><b>{p.kind}</b></span>{p.meta.map((m) => <span key={m}>{m}</span>)}</p>
                {"credits" in p && <p className="proj-credits">{p.credits}</p>}
                {"tracklist" in p && (
                  <details className="fp">
                    <summary><span className="plus" aria-hidden="true" />Tracklist ({p.tracklist.length})</summary>
                    <ol>
                      {p.tracklist.map((t) => (
                        <li key={t.n}>
                          <span className="n">{t.n}</span>
                          <span className="tt">{t.t}{"with" in t && t.with ? <> <span style={{ color: "var(--blood-ink)" }}>with {t.with}</span></> : null}</span>
                          {"single" in t && t.single ? <span className="chip">Single</span> : <span />}
                          <span className="lbl pp">Prod. {t.p}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="lbl fp-mix">{p.mix}</p>
                  </details>
                )}
                <StreamLink release={rs} from="music" className="proj-go" href={p.link}>Stream <Arrow dir="out" /></StreamLink>
              </div>
            </li>
          ) })}
        </ul>

        <Opener className="opener--sub" hClass="sub-h" credit={<>{String(SINGLES.length).padStart(2, "0")} singles<span className="swipe"> &nbsp;·&nbsp; swipe <Arrow /></span></>}>Singles</Opener>
        <ul className="sgl">
          {SINGLES.map((s) => (
            <li key={s.id} className="arc">
              <StreamLink release={releaseStream(s)} from="music_single" href={s.link}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className="arc-img"><img src={s.cover} alt={`${s.title} cover`} loading="lazy" decoding="async" /></span>
                <span className="lbl arc-file">{s.id} &nbsp;·&nbsp; {s.year}</span>
                <span className="arc-t">{s.title}</span>
                <span className="lbl sgl-d">{s.detail}</span>
                {"onFP" in s && s.onFP && <span className="chip">On False Prophets</span>}
              </StreamLink>
            </li>
          ))}
        </ul>
      </div>
      <TouchLive />
    </section>
  )
}
