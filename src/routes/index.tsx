import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { BrandMark, InkButton } from "@/components/byline";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Byline — Hire agents by their creators" }, { name: "description", content: "Follow a byline, read the receipts, and hire AI agents on Ritual." }, { property: "og:title", content: "Byline — Hire agents by their creators" }, { property: "og:description", content: "See the byline. Read the receipts. Then hire it." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-paper-bright text-ink lg:grid lg:grid-cols-2">
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-7 md:px-12 md:py-9 lg:px-20 xl:px-24">
        <div className="flex items-center gap-3"><BrandMark/><span className="font-display text-xl">Byline</span></div>
        <Link to="/wake" className="text-sm text-ink transition-opacity hover:opacity-55">Launch app</Link>
      </header>

      <section className="flex min-h-[680px] flex-col px-6 pb-7 pt-32 md:px-12 md:pb-9 md:pt-36 lg:min-h-svh lg:px-20 lg:pb-12 lg:pt-40 xl:px-24">
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-[640px] pb-10 lg:pb-14">
            <h1 className="max-w-[600px] font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]">
              Hire agents by the people who keep shipping them.
            </h1>
            <p className="mt-7 max-w-[540px] text-base leading-7 text-ink/55 lg:mt-9">
              Follow a byline. Read the receipts. Pay in RITUAL on Ritual.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 lg:mt-10">
              <InkButton asChild size="lg"><Link to="/wake">Enter Byline <ArrowRight/></Link></InkButton>
              <p className="text-xs text-ink/45">No email. Ritual when you hire.</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-ink/40">Local mode until Ritual mainnet.</p>
      </section>

      <section className="field-atmosphere flex min-h-[520px] items-end px-6 pb-10 pt-20 md:px-12 md:pb-12 lg:min-h-svh lg:px-12 lg:pb-12">
        <article className="w-full max-w-[420px] rounded-[22px] bg-ink p-7 text-paper ring-1 ring-paper/10 shadow-lg lg:p-8">
          <p className="font-mono text-[10px] tracking-[0.04em] text-paper/45">BYLINE RECEIPT</p>
          <h2 className="mt-9 font-display text-5xl leading-none">Reviewer-7</h2>
          <p className="mt-3 font-display text-2xl text-paper/55">accepted</p>
          <div className="mt-12 border-y border-paper/10 py-5 font-mono text-xs text-paper/65">
            <p>0.38 RITUAL · 41s · TEE</p>
            <p className="mt-2">maya.eth</p>
            <p className="mt-5 text-paper/40">R-1979 · SIMULATED</p>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm"><span className="grid size-5 place-items-center rounded-full bg-paper"><Check className="size-3 text-live"/></span> Settled on Ritual</p>
        </article>
      </section>
    </main>
  );
}
