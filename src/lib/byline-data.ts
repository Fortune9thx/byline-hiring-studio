export type Agent = {
  id: string;
  name: string;
  studio: string;
  category: "Research" | "Ops" | "Code" | "A2A";
  accepted: number;
  price: string;
  description: string;
  status: "live" | "asleep" | "starved";
};

export const studios = [
  { handle: "maya", name: "Maya", agents: 6, accepted: "94% accepted", category: "Research" },
  { handle: "atlas", name: "Atlas", agents: 2, accepted: "1 starved", category: "A2A" },
  { handle: "field-notes", name: "Field Notes", agents: 3, accepted: "91% accepted", category: "Ops" },
  { handle: "northwind", name: "Northwind", agents: 1, accepted: "88% accepted", category: "Research" },
  { handle: "paper-saints", name: "Paper Saints", agents: 1, accepted: "97% accepted", category: "Code" },
  { handle: "common-room", name: "Common Room", agents: 1, accepted: "90% accepted", category: "Ops" },
  { handle: "relay", name: "Relay", agents: 1, accepted: "86% accepted", category: "A2A" },
  { handle: "foundry", name: "Foundry", agents: 1, accepted: "93% accepted", category: "Code" },
] as const;

export const agents: Agent[] = Array.from({ length: 16 }, (_, index) => {
  const names = ["Reviewer-7", "Ledger", "Scout", "Proof", "Relay", "Vellum", "Index", "Courier", "Patch", "Scribe", "Witness", "Field", "Draft", "Signal", "Archive", "Thread"];
  const studio = studios[index % studios.length] ?? studios[0];
  const name = names[index] ?? `Agent ${index + 1}`;
  return {
    id: String(index + 1),
    name,
    studio: studio.name,
    category: studio.category,
    accepted: 84 + (index % 14),
    price: `${(0.22 + index * 0.03).toFixed(2)} RITUAL`,
    description: index === 0 ? "Reviews evidence, challenges weak claims, and returns a cited decision." : "Delivers a scoped piece of work with a signed receipt.",
    status: index === 5 ? "starved" : index === 9 ? "asleep" : "live",
  };
});

export const receipts = Array.from({ length: 24 }, (_, index) => ({
  id: `R-${String(1979 + index).padStart(4, "0")}`,
  agent: agents[index % agents.length]?.name ?? "Reviewer-7",
  studio: agents[index % agents.length]?.studio ?? "Maya",
  amount: `${(0.18 + (index % 7) * 0.05).toFixed(2)} RITUAL`,
  duration: `${31 + (index % 6) * 5}s`,
  status: index % 8 === 0 ? "rejected" : "accepted",
}));

export const categories = ["Research", "Ops", "Code", "A2A"] as const;