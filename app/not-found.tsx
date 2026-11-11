import Link from "next/link"

export default function NotFound() {
  return (
    <section className="lost dark" data-tone="dark" aria-labelledby="lost-h">
      <div className="wrap">
        <p className="lbl red" style={{ margin: 0 }}>404</p>
        <h1 className="lost-h" id="lost-h">Wrong turn<br />on the road.</h1>
        <p className="lost-p">This page is not on the tape.</p>
        <Link className="btn" href="/">Back to the tape</Link>
      </div>
    </section>
  )
}
