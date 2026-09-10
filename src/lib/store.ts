import { create } from "zustand";
import {
  cases as seedCases,
  committeeItems as seedCommittee,
  disputes as seedDisputes,
  documents as seedDocs,
  elders,
  offices,
  sanaNotices as seedSana,
  sulhSessions as seedSulh,
} from "./seed";
import type {
  AiAnalysis,
  CaseStatus,
  ChatMessage,
  CommitteeItem,
  DisputeRequest,
  Domain,
  LegalCase,
  Role,
  SanaNotice,
  SulhSession,
  TimelineEvent,
  Track,
  VaultDoc,
} from "./types";

function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-4)}`;
}

function sanaCode() {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `۱۴۰۵۰۹۰${n}`;
}

const officeByCity: Record<string, string> = {
  تهران: "off-teh",
  مشهد: "off-msh",
  اصفهان: "off-esf",
  شیراز: "off-shr",
  تبریز: "off-tbz",
};

interface AppState {
  role: Role;
  cases: LegalCase[];
  documents: VaultDoc[];
  sana: SanaNotice[];
  sulh: SulhSession[];
  disputes: DisputeRequest[];
  committee: CommitteeItem[];
  chats: ChatMessage[];
  setRole: (role: Role) => void;
  markSanaRead: (id: string) => void;
  addChat: (role: ChatMessage["role"], content: string) => void;
  clearChat: () => void;
  createFromAnalysis: (input: {
    title: string;
    summary: string;
    city: string;
    analysis: AiAnalysis;
    track: Track;
    elderId?: string;
  }) => { caseId: string };
}

export const useAppStore = create<AppState>((set, get) => ({
  role: "citizen",
  cases: seedCases,
  documents: seedDocs,
  sana: seedSana,
  sulh: seedSulh,
  disputes: seedDisputes,
  committee: seedCommittee,
  chats: [
    {
      id: "intro",
      role: "assistant",
      content:
        "سلام. من دستیار حقوقی داشبورد زندگی هستم. موضوع را به زبان ساده بگویید تا مسیر مناسب — مشاوره، صلح و سازش، حل اختلاف خصوصی یا وکالت — مشخص شود. این گفتگو وکالت نیست و نظر مشورتی است.",
      at: new Date().toISOString(),
    },
  ],
  setRole: (role) => set({ role }),
  markSanaRead: (id) =>
    set({
      sana: get().sana.map((n) => (n.id === id ? { ...n, read: true } : n)),
    }),
  addChat: (role, content) =>
    set({
      chats: [
        ...get().chats,
        { id: uid("msg"), role, content, at: new Date().toISOString() },
      ],
    }),
  clearChat: () =>
    set({
      chats: [
        {
          id: uid("intro"),
          role: "assistant",
          content:
            "گفتگو از نو شروع شد. موضوع را بگویید. یادآوری: مشاوره جایگزین وکالت و رأی مرجع صالح نیست.",
          at: new Date().toISOString(),
        },
      ],
    }),
  createFromAnalysis: ({ title, summary, city, analysis, track, elderId }) => {
    const caseId = uid("c");
    const now = new Date().toISOString();
    const statusMap: Record<Track, CaseStatus> = {
      consult: "consult",
      sulh: "sulh",
      dispute: "dispute",
      advocacy: "advocacy",
    };
    const events: TimelineEvent[] = [
      {
        id: uid("ev"),
        at: now,
        kind: "created" as const,
        title: "ثبت موضوع در داشبورد",
        detail: summary,
      },
      {
        id: uid("ev"),
        at: now,
        kind: "ai" as const,
        title: "تحلیل هوشمند مسیر",
        detail: analysis.reason,
      },
    ];

    let sanaTracking: string | undefined;
    let branchId: string | undefined;
    let officeId = officeByCity[city] ?? "off-teh";
    const nextSulh = [...get().sulh];
    const nextDisputes = [...get().disputes];
    const nextSana = [...get().sana];

    if (track === "sulh") {
      const chosen =
        elderId ??
        elders.find((e) => e.domain === analysis.domain)?.id ??
        elders[0].id;
      nextSulh.unshift({
        id: uid("su"),
        caseId,
        elderId: chosen,
        title,
        domain: analysis.domain,
        status: "requested",
        city,
        notes: "درخواست صلح و سازش ثبت شد. ریش‌سفید وکیل نیست؛ خروجی سازش‌نامه است.",
      });
      events.push({
        id: uid("ev"),
        at: now,
        kind: "sulh",
        title: "ارجاع به صلح و سازش",
        detail: "مطابق آیین‌نامه داخلی، این مسیر از مشاوره و وکالت جدا است.",
      });
      officeId = officeByCity[city] ?? officeId;
    }

    if (track === "dispute") {
      sanaTracking = sanaCode();
      const office = offices.find((o) => o.id === officeId) ?? offices[0];
      branchId = `شعبه خصوصی ${office.active + 1} ${office.city}`;
      nextDisputes.unshift({
        id: uid("dr"),
        caseId,
        officeId: office.id,
        branchLabel: branchId,
        city,
        status: "notified",
        sanaTracking,
        createdAt: now,
      });
      nextSana.unshift({
        id: uid("s"),
        title: "ابلاغ تعیین شعبه حل اختلاف بخش خصوصی",
        kind: "branch",
        body: `موضوع «${title}» به ${branchId} در ${office.title} ارجاع شد. این ابلاغ از مسیر ثنا صادر شده است.`,
        at: now,
        caseId,
        tracking: sanaTracking,
        read: false,
      });
      events.push(
        {
          id: uid("ev"),
          at: now,
          kind: "branch",
          title: "درخواست شعبه از بخش خصوصی",
          detail: branchId,
        },
        {
          id: uid("ev"),
          at: now,
          kind: "sana",
          title: "ابلاغ از طریق ثنا",
          detail: sanaTracking,
        },
      );
    }

    const legalCase: LegalCase = {
      id: caseId,
      title,
      summary,
      domain: analysis.domain,
      track,
      status: statusMap[track],
      city,
      parties: ["سارا احمدی"],
      createdAt: now,
      sanaTracking,
      branchId,
      officeId,
      elderId: track === "sulh" ? elderId : undefined,
      events,
      documentIds: [],
    };

    set({
      cases: [legalCase, ...get().cases],
      sulh: nextSulh,
      disputes: nextDisputes,
      sana: nextSana,
    });
    return { caseId };
  },
}));

export { elders, offices };

export function matchElders(domain: Domain, city: string) {
  const ranked = [...elders].sort((a, b) => {
    const aScore = (a.domain === domain ? 4 : 0) + (a.city === city ? 2 : 0);
    const bScore = (b.domain === domain ? 4 : 0) + (b.city === city ? 2 : 0);
    return bScore - aScore || b.settlementRate - a.settlementRate;
  });
  return ranked;
}
