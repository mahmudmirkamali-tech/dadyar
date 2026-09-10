import { Badge } from "@/components/ui/badge";
import { STATUS_LABEL, TRACK_LABEL, type CaseStatus, type Track } from "@/lib/types";

const statusTone: Record<CaseStatus, "muted" | "teal" | "navy" | "warn" | "ok" | "danger"> = {
  intake: "muted",
  consult: "navy",
  sulh: "teal",
  dispute: "warn",
  advocacy: "navy",
  closed: "ok",
  enforced: "ok",
};

export function StatusBadge({ status }: { status: CaseStatus }) {
  return <Badge tone={statusTone[status]}>{STATUS_LABEL[status]}</Badge>;
}

export function TrackBadge({ track }: { track: Track }) {
  const tone = track === "sulh" ? "teal" : track === "dispute" ? "warn" : track === "advocacy" ? "navy" : "muted";
  return <Badge tone={tone}>{TRACK_LABEL[track]}</Badge>;
}
