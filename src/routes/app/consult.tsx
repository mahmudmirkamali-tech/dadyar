import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/field";
import { consultChat } from "@/lib/legal-ai";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/consult")({ component: Consult });

function Consult() {
  const chats = useAppStore((s) => s.chats);
  const addChat = useAppStore((s) => s.addChat);
  const clearChat = useAppStore((s) => s.clearChat);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send() {
    const q = text.trim();
    if (!q) return;
    setText("");
    addChat("user", q);
    setLoading(true);
    setError(null);
    try {
      const history = [...useAppStore.getState().chats]
        .filter((m) => m.id !== "intro")
        .map((m) => ({ role: m.role, content: m.content }));
      const res = await consultChat({ data: { messages: history } });
      if (!res.ok) setError(res.error);
      else addChat("assistant", res.text);
    } catch {
      setError("ارتباط با دستیار برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rise mx-auto max-w-3xl">
      <PageHeader
        kicker="مسیر مشاوره — نه وکالت"
        title="مشاوره هوشمند حقوقی"
        description="پاسخ‌ها نظر مشورتی است. برای صلح و سازش یا شعبه خصوصی از مسیرهای جدا استفاده کنید."
        actions={
          <Button variant="outline" size="sm" onClick={clearChat}>
            گفتگوی تازه
          </Button>
        }
      />
      <div className="rounded-xl border border-line bg-paper-2 shadow-[var(--shadow-card)]">
        <div className="max-h-[52vh] space-y-3 overflow-y-auto p-4">
          {chats.map((m) => (
            <div
              key={m.id}
              className={
                m.role === "user"
                  ? "mr-8 rounded-lg bg-navy px-3 py-2 text-sm leading-7 text-paper"
                  : "ml-8 rounded-lg bg-paper px-3 py-2 text-sm leading-7"
              }
            >
              {m.content}
            </div>
          ))}
          {loading && <p className="text-sm text-muted">در حال بررسی موضوع…</p>}
        </div>
        <div className="border-t border-line p-3">
          {error && <p className="mb-2 text-sm text-danger">{error}</p>}
          <Textarea
            rows={3}
            className="min-h-24"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="سؤال حقوقی خود را بنویسید"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send();
              }
            }}
          />
          <Button className="mt-2" onClick={send} disabled={loading}>
            ارسال
          </Button>
        </div>
      </div>
    </div>
  );
}
