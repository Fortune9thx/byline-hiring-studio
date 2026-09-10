import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Code2,
  Home,
  Layers3,
  Network,
  Plus,
  Radio,
  Settings,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import genesisImage from "@/assets/genesis-studio.jpg";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return <span className={cn("grid size-9 place-items-center rounded-lg font-display text-xl font-semibold", inverse ? "bg-paper text-ink" : "bg-ink text-paper")}>B</span>;
}

export function HeatButton(props: ButtonProps) { return <Button variant="heat" {...props} />; }
export function InkButton(props: ButtonProps) { return <Button variant="ink" {...props} />; }
export function GhostButton(props: ButtonProps) { return <Button variant="quiet" {...props} />; }

export function StatusDot({ status = "live" }: { status?: "live" | "asleep" | "starved" }) {
  return <span className={cn("inline-block size-1.5 rounded-full", status === "live" && "bg-live", status === "asleep" && "bg-muted-foreground", status === "starved" && "bg-starve")} />;
}

export function ToastStrip({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-2 rounded-full bg-paper/10 px-4 py-2.5 text-xs text-paper/80"><Sparkles className="size-3.5 shrink-0" /> <span className="min-w-0 truncate">{children}</span></div>;
}

export function Greeting({ title, action }: { title: string; action?: ReactNode }) {
  return <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0"><p className="text-xs uppercase tracking-[0.04em] text-paper/60">Thursday · 10:16</p><h1 className="mt-1 truncate font-display text-4xl leading-[1.1] text-paper md:text-5xl">{title}</h1></div>{action}</div>;
}

export function PaperCard({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("lift rounded-[22px] bg-paper p-5 text-ink ring-1 ring-ink/5", className)}>{children}</section>;
}

export function InkWidget({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("rounded-[22px] bg-ink p-5 text-paper ring-1 ring-paper/10", className)}>{children}</section>;
}

export function StatTile({ label, value, note, seal }: { label: string; value: string; note: string; seal: string }) {
  return <PaperCard className="relative min-h-40 overflow-hidden"><p className="text-[11px] uppercase tracking-[0.04em] text-ink/55">{label}</p><p className="mt-8 font-display text-5xl font-semibold leading-[.95] md:text-6xl">{value}</p><p className="mt-2 text-xs text-ink/55">{note}</p><span className="tactile-seal absolute -bottom-2 right-4 grid size-16 rotate-6 place-items-center rounded-[46%_54%_55%_45%] font-mono text-xs text-paper/80">{seal}</span></PaperCard>;
}

export function ReceiptCard({ id, agent, amount, duration, status = "accepted" }: { id: string; agent: string; amount: string; duration: string; status?: string }) {
  return <Link to="/receipt/$id" params={{ id }} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-paper/15 px-4 py-3.5 last:border-0 hover:bg-paper/5"><div className="min-w-0"><p className="truncate text-sm text-paper">{agent} <span className="text-paper/45">· {status}</span></p><p className="mt-1 font-mono text-[10px] text-paper/45">{id} · SIMULATED</p></div><p className="shrink-0 text-right font-mono text-xs text-paper/75">{amount}<br/><span className="text-paper/40">{duration}</span></p></Link>;
}

export function Row({ title, meta, trailing, href }: { title: string; meta: ReactNode; trailing?: ReactNode; href?: string }) {
  const content = <div className="grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-ink/8 px-5 last:border-0"><div className="min-w-0"><p className="truncate font-medium">{title}</p><div className="mt-1 text-xs text-ink/50">{meta}</div></div><div className="flex shrink-0 items-center gap-3 text-sm">{trailing}<ChevronRight className="size-4 text-ink/40" /></div></div>;
  return href ? <a href={href} className="block hover:bg-fog">{content}</a> : content;
}

export function EmptyState({ message, action }: { message: string; action: string }) {
  return <PaperCard className="py-12 text-center"><p className="text-ink/55">{message}</p><InkButton className="mt-4">{action}</InkButton></PaperCard>;
}

export function Timeline({ current = 4 }: { current?: number }) {
  const steps = ["Brief accepted", "Wallet checked", "Context opened", "Agent working", "Output ready", "Review", "Settle", "Receipt"];
  return <ol className="space-y-1">{steps.map((step, index) => <li key={step} className="grid grid-cols-[32px_1fr_auto] items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-paper/65"><span className={cn("grid size-7 place-items-center rounded-full border border-paper/15 font-mono text-[10px]", index + 1 === current && "bg-heat text-heat-foreground border-heat")}>{index + 1}</span><span className={cn(index + 1 === current && "text-paper")}>{step}</span><span className="font-mono text-[10px] text-paper/35">{index + 1 < current ? "DONE" : index + 1 === current ? "NOW" : "—"}</span></li>)}</ol>;
}

export function ChainChecklist({ onClose }: { onClose: () => void }) {
  return <div className="fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4"><PaperCard className="w-full max-w-md"><div className="flex items-center justify-between"><h2 className="font-display text-3xl">Ready Ritual</h2><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close"><X /></Button></div>{["Add Ritual chain", "Get RITUAL", "Deposit to RitualWallet"].map((item, i) => <div className="mt-4 flex items-center gap-3 border-t border-ink/8 pt-4" key={item}><span className="grid size-7 place-items-center rounded-full bg-fog font-mono text-xs">{i + 1}</span><div><p className="text-sm font-medium">{item}</p><p className="text-xs text-ink/45">One quiet wallet step.</p></div></div>)}<InkButton className="mt-6 w-full" onClick={onClose}>Done</InkButton></PaperCard></div>;
}

function IconRail() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const itemClass = (active: boolean) => cn("flex h-11 items-center justify-center gap-3 rounded-2xl text-paper/55 transition-colors xl:justify-start xl:px-3", active ? "bg-heat text-heat-foreground" : "hover:bg-paper/5 hover:text-paper");
  const mobileClass = "grid h-11 place-items-center rounded-2xl text-paper/65 [&[data-status=active]]:bg-heat [&[data-status=active]]:text-heat-foreground";
  return <><aside className="hidden w-[76px] shrink-0 flex-col items-center gap-3 bg-ink py-5 text-paper md:flex xl:w-[220px] xl:items-stretch xl:px-4"><Link to="/wake" className="mb-5 flex items-center gap-3 xl:px-2"><BrandMark inverse/><span className="hidden font-display text-xl xl:block">Byline</span></Link><Link to="/wake" title="Wake" className={itemClass(pathname.startsWith("/wake"))}><Home className="size-4"/><span className="hidden text-sm xl:block">Wake</span></Link><Link to="/studios" title="Studios" className={itemClass(pathname.startsWith("/studios") || pathname.startsWith("/s/"))}><Users className="size-4"/><span className="hidden text-sm xl:block">Studios</span></Link><Link to="/ladders/$class" params={{ class: "research" }} title="Ladders" className={itemClass(pathname.startsWith("/ladders"))}><Layers3 className="size-4"/><span className="hidden text-sm xl:block">Ladders</span></Link><Link to="/desk" title="Desk" className={itemClass(pathname.startsWith("/desk"))}><BriefcaseBusiness className="size-4"/><span className="hidden text-sm xl:block">Desk</span></Link><Link to="/publish" title="Publish" className={itemClass(pathname.startsWith("/publish"))}><BookOpen className="size-4"/><span className="hidden text-sm xl:block">Publish</span></Link><div className="mt-auto flex items-center justify-center gap-3 xl:justify-start xl:px-2"><span className="grid size-9 place-items-center rounded-full bg-paper/10 font-display">M</span><span className="hidden text-sm xl:block">Maren</span></div></aside><nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-[22px] bg-ink p-2 shadow-2xl md:hidden"><Link to="/wake" aria-label="Wake" className={mobileClass}><Home className="size-4"/></Link><Link to="/studios" aria-label="Studios" className={mobileClass}><Users className="size-4"/></Link><Link to="/ladders/$class" params={{ class: "research" }} aria-label="Ladders" className={mobileClass}><Layers3 className="size-4"/></Link><Link to="/desk" aria-label="Desk" className={mobileClass}><BriefcaseBusiness className="size-4"/></Link><Link to="/publish" aria-label="Publish" className={mobileClass}><BookOpen className="size-4"/></Link></nav></>;
}

export function RightRail() {
  const [checklist, setChecklist] = useState(false);
  return <aside className="space-y-3 bg-paper p-4 lg:w-[340px] lg:shrink-0"><PaperCard><p className="text-[11px] uppercase tracking-[0.04em] text-ink/50">Your chain</p><div className="mt-3 flex items-center justify-between"><div><p className="text-sm">Ritual 1979</p><p className="mt-1 font-mono text-xs text-ink/45"><StatusDot/> RPC up · 12.80 RITUAL</p></div><InkButton size="sm" onClick={() => setChecklist(true)}>Add Ritual</InkButton></div></PaperCard><PaperCard><p className="text-[11px] uppercase tracking-[0.04em] text-ink/50">Live desk</p><p className="mt-3 font-display text-xl">Reviewer-7 is checking sources</p><p className="mt-2 font-mono text-[10px] text-ink/45">JOB J-018 · 3 OF 8</p></PaperCard><PaperCard><p className="text-[11px] uppercase tracking-[0.04em] text-ink/50">Today</p>{["Accept job", "Top up wallet", "Follow a studio"].map((task, i) => <label key={task} className="mt-3 flex items-center gap-3 text-sm"><input type="checkbox" className="size-4 accent-ink" defaultChecked={i === 2}/><span>{task}</span></label>)}</PaperCard><section className="relative min-h-52 overflow-hidden rounded-[22px] bg-ink"><img src={genesisImage} alt="Creator reviewing a Genesis agent brief" loading="lazy" width={1024} height={700} className="absolute inset-0 size-full object-cover opacity-60"/><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent"/><div className="relative flex min-h-52 flex-col items-start justify-between p-5 text-paper"><div><p className="text-[11px] uppercase tracking-[0.04em] text-paper/60">Genesis agent</p><h3 className="mt-2 max-w-44 font-display text-2xl leading-none">Try the first receipt.</h3></div><HeatButton size="sm">Try <ArrowRight/></HeatButton></div></section>{checklist && <ChainChecklist onClose={() => setChecklist(false)}/>}</aside>;
}

export function AppWindow({ children, rightRail = false }: { children: ReactNode; rightRail?: boolean }) {
  return <div className="field-atmosphere min-h-screen p-0 md:p-4"><div className={cn("app-shadow mx-auto flex min-h-screen max-w-[1480px] overflow-hidden bg-sage-deep md:min-h-[calc(100vh-2rem)] md:rounded-[30px]", rightRail && "lg:max-h-[calc(100vh-2rem)]")}><IconRail/><div className={cn("min-w-0 flex-1", rightRail && "lg:flex lg:overflow-hidden")}><main className={cn("min-w-0 flex-1 bg-sage-room p-4 pb-24 md:p-7 md:pb-7 lg:overflow-y-auto", !rightRail && "min-h-full")}>{children}</main>{rightRail && <RightRail/>}</div></div></div>;
}

export const pageIcons = { Bot, Code2, Network, Radio, Bell, Check, Clock3, Plus, Settings, CircleUserRound };