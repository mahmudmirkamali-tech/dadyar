export type Role = "citizen" | "office" | "mediator" | "committee" | "judiciary";

export type Track = "consult" | "sulh" | "dispute" | "advocacy";

export type Domain =
  | "family"
  | "inheritance"
  | "commercial"
  | "labor"
  | "property"
  | "neighbor"
  | "contract"
  | "check"
  | "other";

export type CaseStatus =
  | "intake"
  | "consult"
  | "sulh"
  | "dispute"
  | "advocacy"
  | "closed"
  | "enforced";

export type SanaKind = "notice" | "summons" | "deadline" | "ruling" | "branch";

export type TimelineKind =
  | "created"
  | "ai"
  | "document"
  | "sana"
  | "sulh"
  | "branch"
  | "session"
  | "enforcement"
  | "note";

export interface Citizen {
  name: string;
  nationalId: string;
  city: string;
  phone: string;
}

export interface TimelineEvent {
  id: string;
  at: string;
  kind: TimelineKind;
  title: string;
  detail?: string;
}

export interface LegalCase {
  id: string;
  title: string;
  summary: string;
  domain: Domain;
  track: Track;
  status: CaseStatus;
  city: string;
  parties: string[];
  createdAt: string;
  deadline?: string;
  sanaTracking?: string;
  branchId?: string;
  officeId?: string;
  elderId?: string;
  lawyerName?: string;
  events: TimelineEvent[];
  documentIds: string[];
}

export interface VaultDoc {
  id: string;
  title: string;
  kind: string;
  caseId?: string;
  source: "upload" | "draft" | "sana" | "office";
  pages: number;
  addedAt: string;
  summary: string;
}

export interface SanaNotice {
  id: string;
  title: string;
  kind: SanaKind;
  body: string;
  at: string;
  deadline?: string;
  caseId?: string;
  tracking: string;
  read: boolean;
}

export interface Elder {
  id: string;
  name: string;
  domain: Domain;
  domainsLabel: string;
  city: string;
  years: number;
  bio: string;
  approvedBy: string;
  sessions: number;
  settlementRate: number;
}

export interface Office {
  id: string;
  city: string;
  title: string;
  manager: string;
  address: string;
  capacity: number;
  active: number;
  phone: string;
  status: "pilot" | "active";
}

export interface SulhSession {
  id: string;
  caseId: string;
  elderId: string;
  title: string;
  domain: Domain;
  status: "requested" | "scheduled" | "held" | "settled" | "failed" | "enforcement";
  scheduledAt?: string;
  city: string;
  notes: string;
  outcome?: string;
}

export interface DisputeRequest {
  id: string;
  caseId: string;
  officeId: string;
  branchLabel: string;
  city: string;
  status: "queued" | "assigned" | "notified" | "session" | "decided";
  sanaTracking: string;
  createdAt: string;
  sessionAt?: string;
}

export interface CommitteeItem {
  id: string;
  title: string;
  body: string;
  status: "open" | "review" | "opinion" | "closed";
  domain: Domain;
  raisedAt: string;
  from: string;
  opinion?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  at: string;
}

export interface AiAnalysis {
  domain: Domain;
  track: Track;
  summary: string;
  reason: string;
  nextSteps: string[];
  documents: string[];
  deadlines: string[];
  sulhSuitable: boolean;
  disputeSuitable: boolean;
}

export const ROLE_LABEL: Record<Role, string> = {
  citizen: "شهروند",
  office: "دفتر نمایندگی",
  mediator: "ریش‌سفید / میانجی",
  committee: "کمیته حقوقی",
  judiciary: "شریک قضایی",
};

export const TRACK_LABEL: Record<Track, string> = {
  consult: "مشاوره حقوقی",
  sulh: "صلح و سازش",
  dispute: "حل اختلاف خصوصی",
  advocacy: "وکالت",
};

export const TRACK_RULE: Record<Track, string> = {
  consult:
    "نظر مشورتی است؛ ایجاد رابطه وکالت نمی‌کند و جایگزین رأی مرجع صالح نیست.",
  sulh:
    "میانجی‌گری با ریش‌سفید است؛ نه مشاوره است و نه وکالت. خروجی سازش‌نامه است و با هماهنگی معاونت حل اختلاف استان قابلیت ضمانت اجرایی قضایی دارد.",
  dispute:
    "ارجاع به شعبه حل اختلاف بخش خصوصی از طریق ثنا؛ رسیدگی شبه قضایی با قابلیت ابلاغ رسمی.",
  advocacy:
    "اقدام توسط وکیل دادگستری دارای پروانه؛ تنظیم دادخواست و پیگیری در مراجع قضایی.",
};

export const DOMAIN_LABEL: Record<Domain, string> = {
  family: "خانواده",
  inheritance: "ارث و انحصار وراثت",
  commercial: "تجاری",
  labor: "کار و تأمین اجتماعی",
  property: "املاک",
  neighbor: "همسایگی و مشاع",
  contract: "قرارداد",
  check: "اسناد تجاری و چک",
  other: "سایر",
};

export const STATUS_LABEL: Record<CaseStatus, string> = {
  intake: "پذیرش",
  consult: "مشاوره",
  sulh: "صلح و سازش",
  dispute: "حل اختلاف",
  advocacy: "وکالت",
  closed: "مختومه",
  enforced: "اجرای سازش",
};

export const CITIES = ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز"] as const;
