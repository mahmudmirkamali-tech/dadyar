import { cn } from "@/lib/cn";
import { TRACK_LABEL, TRACK_RULE, type Track } from "@/lib/types";

const ORDER: Track[] = ["consult", "sulh", "dispute", "advocacy"];

export function TrackPanel({
  active,
  recommended,
  onSelect,
}: {
  active?: Track;
  recommended?: Track;
  onSelect?: (track: Track) => void;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {ORDER.map((track) => {
        const selected = active === track;
        const rec = recommended === track;
        return (
          <button
            key={track}
            type="button"
            onClick={() => onSelect?.(track)}
            className={cn(
              "rounded-lg border p-4 text-right transition-colors duration-150",
              selected ? "border-teal bg-teal/8" : "border-line bg-paper-2 hover:border-line-strong",
            )}
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="font-medium text-ink">{TRACK_LABEL[track]}</span>
              {rec && (
                <span className="rounded-full bg-teal px-2 py-0.5 text-[11px] text-teal-fg">پیشنهاد سامانه</span>
              )}
            </div>
            <p className="text-sm leading-6 text-muted">{TRACK_RULE[track]}</p>
          </button>
        );
      })}
    </div>
  );
}
