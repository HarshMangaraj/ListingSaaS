import type { HistoryItem } from "@/lib/mock";

type HistoryListProps = {
  items: HistoryItem[];
  activeId: string | null;
  onSelect: (item: HistoryItem) => void;
};

export function HistoryList({ items, activeId, onSelect }: HistoryListProps) {
  return (
    <section className="rounded-3xl border border-ink/10 bg-white p-4 shadow-[0_12px_40px_rgba(11,28,40,0.06)] lg:sticky lg:top-6">
      <h2 className="font-display text-xl font-medium">History</h2>
      <p className="mt-1 text-sm text-ink/50">Tap an item to view it again.</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item)}
                className={`w-full rounded-2xl border px-3 py-3 text-left text-sm transition ${
                  active
                    ? "border-ink bg-ink text-white"
                    : "border-ink/10 bg-[#f4f0e8] hover:border-ink/20"
                }`}
              >
                <p className="line-clamp-2 font-medium">{item.listing.title}</p>
                <p className={`mt-1 text-xs ${active ? "text-white/60" : "text-ink/45"}`}>
                  {item.photoName} · {item.createdAt}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
