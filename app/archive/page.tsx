import type { Metadata } from "next"
import Link from "next/link"
import { PROJECTS, SINGLES } from "@/lib/content"
import GasFeature from "@/components/site/gas-feature"
import TouchLive from "@/components/site/touch-live"
import { Arrow } from "@/components/site/icon"

export const metadata: Metadata = {
  title: "The Kwame Dabie Era",
  description:
    "Before Bomaye: every project and single Dabie Bomaye released as Kwame Dabie, from Small Time to False Prophets, plus the Gas visuals.",
  alternates: { canonical: "/archive" },
}

export default function ArchivePage() {
  return (
    <section className="archive page-top" id="archive" data-tone="light" aria-labelledby="ar-h">
      <div className="wrap">
        <Link className="back lbl" href="/"><Arrow dir="left" /> Back to the tape</Link>
        <div className="arc-head">
          <div>
            <p className="lbl" style={{ margin: 0, color: "var(--blood-ink)" }}>Before Bomaye</p>
            <h1 id="ar-h">The Kwame<br />Dabie era</h1>
          </div>
          <span className="stamp" aria-hidden="true">Archived</span>
        </div>
        <p className="arc-intro">Five projects and five singles released under the old name. Filed here, still on record.</p>

        <GasFeature />

        <div className="arc-file-h">
          <span className="arc-tab">File A</span>
          <h2>Albums &amp; EPs</h2>
          <span className="lbl cnt">{String(PROJECTS.length).padStart(2, "0")} projects</span>
        </div>
        <ul className="proj">
          {PROJECTS.map((p) => (
            <li key={p.id} className="arc">
              <a href={p.link} target="_blank" rel="noopener" tabIndex={-1} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className="arc-img"><img src={p.cover} alt="" loading="lazy" decoding="async" /></span>
              </a>
              <div style={{ minWidth: 0 }}>
                <span className="lbl arc-file">{p.id}{"note" in p && p.note ? <> &nbsp;·&nbsp; {p.note}</> : null}</span>
                <a className="proj-t" href={p.link} target="_blank" rel="noopener">{p.title}</a>
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
                <a className="proj-go" href={p.link} target="_blank" rel="noopener">Stream <Arrow dir="out" /></a>
              </div>
            </li>
          ))}
        </ul>

        <div className="arc-file-h">
          <span className="arc-tab">File B</span>
          <h2>Singles</h2>
          <span className="lbl cnt">{String(SINGLES.length).padStart(2, "0")} singles<span className="swipe"> &nbsp;·&nbsp; swipe <Arrow /></span></span>
        </div>
        <ul className="sgl">
          {SINGLES.map((s) => (
            <li key={s.id} className="arc">
              <a href={s.link} target="_blank" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className="arc-img"><img src={s.cover} alt={`${s.title} cover`} loading="lazy" decoding="async" /></span>
                <span className="lbl arc-file">{s.id} &nbsp;·&nbsp; {s.year}</span>
                <span className="arc-t">{s.title}</span>
                <span className="lbl sgl-d">{s.detail}</span>
                {"onFP" in s && s.onFP && <span className="chip">On False Prophets</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <TouchLive />
    </section>
  )
}
