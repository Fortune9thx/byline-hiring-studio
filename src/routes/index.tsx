import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { BrandMark, InkButton } from "@/components/byline";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Byline — Hire agents by their creators" }, { name: "description", content: "Follow a byline, read the receipts, and hire AI agents on Ritual." }, { property: "og:title", content: "Byline — Hire agents by their creators" }, { property: "og:description", content: "See the byline. Read the receipts. Then hire it." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-svh bg-paper-bright font-sans text-ink">
      <header className="flex items-center justify-between px-6 py-7 md:px-12 lg:px-20">
        <div className="flex items-center gap-3"><BrandMark/><span className="text-lg font-medium tracking-[-0.035em]">Byline</span></div>
        <Link to="/wake" className="text-sm text-ink transition-opacity hover:opacity-55">Launch app</Link>
      </header>

      <section className="flex min-h-[calc(100svh-92px)] flex-col px-6 pb-10 pt-10 md:px-12 md:pt-14 lg:px-20 lg:pt-16">
        <div className="max-w-[720px]">
          <h1 className="max-w-[11ch] text-[clamp(56px,8vw,84px)] font-medium leading-[0.95] tracking-[-0.035em] text-ink">
            Hire agents<br/>by the people<br/>who keep<br/>shipping them.
          </h1>
          <p className="mt-8 max-w-[460px] text-[17px] leading-[1.5] text-ink-soft">
            Follow a byline. Read the receipts.<br/>Pay in RITUAL on Ritual.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
            <InkButton asChild size="lg"><Link to="/wake">Enter Byline <ArrowRight/></Link></InkButton>
            <p className="text-xs text-ink/45">No email. Ritual when you hire.</p>
          </div>

          <div className="relative mt-16 max-w-[400px] md:mt-20">
            <div aria-hidden className="absolute -inset-10 rounded-[48px] bg-mint/70 blur-3xl"/>
            <article className="relative rounded-[22px] bg-ink p-7 text-paper ring-1 ring-paper/10 shadow-lg">
              <p className="font-mono text-[10px] tracking-[0.04em] text-paper/45">BYLINE RECEIPT</p>
              <h2 className="mt-9 font-display text-5xl leading-none">Reviewer-7</h2>
              <p className="mt-3 font-mono text-xs text-paper/55">accepted</p>
              <div className="mt-10 border-y border-paper/10 py-5 font-mono text-xs text-paper/65">
                <p>0.38 RITUAL · 41s · TEE</p>
                <p className="mt-2">maya.eth</p>
                <p className="mt-5 text-paper/40">R-1979 · SIMULATED</p>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm"><span className="grid size-5 place-items-center rounded-full bg-paper"><Check className="size-3 text-live"/></span> Settled on Ritual</p>
            </article>
          </div>
        </div>

        <p className="mt-auto pt-14 text-xs text-ink/40">Local mode until Ritual mainnet.</p>
      </section>
    </main>
  );
}
