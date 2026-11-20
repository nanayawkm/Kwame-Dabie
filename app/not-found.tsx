import Link from "next/link"
import Opener from "@/components/site/opener"

export default function NotFound() {
  return (
    <section className="lost dark" data-tone="dark" aria-labelledby="lost-h">
      <div className="wrap">
        <Opener as="h1" id="lost-h" hClass="lost-h" credit="404">Wrong turn<br />on the road.</Opener>
        <p className="lost-p">This page is not on the tape.</p>
        <Link className="btn" href="/">Back to the tape</Link>
      </div>
    </section>
  )
}
