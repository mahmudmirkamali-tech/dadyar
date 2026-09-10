import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label, Textarea } from "@/components/ui/field";
import { formatJalali } from "@/lib/jalali";
import { DOMAIN_LABEL } from "@/lib/types";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/committee")({ component: CommitteePage });

const ST: Record<string, string> = {
  open: "باز",
  review: "در بررسی",
  opinion: "نظریه صادر شده",
  closed: "بایگانی",
};

function CommitteePage() {
  const items = useAppStore((s) => s.committee);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function add() {
    if (!title.trim()) return;
    useAppStore.setState({
      committee: [
        {
          id: `ci-${Date.now()}`,
          title: title.trim(),
          body: body.trim() || "ارجاع برای بررسی مسائل مستحدثه.",
          status: "open",
          domain: "other",
          raisedAt: new Date().toISOString(),
          from: "داشبورد",
        },
        ...useAppStore.getState().committee,
      ],
    });
    setTitle("");
    setBody("");
  }

  return (
    <div className="rise">
      <PageHeader
        kicker="رکن محتوایی مؤسسه"
        title="کمیته حقوقی"
        description="مسائل حقوقی گسترده‌اند و حسب مورد با موقعیت زمانی و مکانی مسائل مستحدثه حادث می‌شود. کمیته باید پای کار باشد تا رویه دفاتر یکسان بماند."
      />
      <div className="mb-6 rounded-xl border border-line bg-paper-2 p-5">
        <Label>موضوع مستحدثه</Label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-11 w-full rounded-md border border-line bg-paper px-3 text-sm outline-none focus:border-teal"
          placeholder="عنوان مسئله"
        />
        <Label className="mt-3">شرح</Label>
        <Textarea value={body} onChange={(e) => setBody(e.target.value)} className="min-h-24" />
        <Button className="mt-3" onClick={add}>
          ارجاع به کمیته
        </Button>
      </div>
      <div className="space-y-3">
        {items.map((it) => (
          <article key={it.id} className="rounded-xl border border-line bg-paper-2 p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-medium">{it.title}</h2>
              <Badge tone={it.status === "opinion" ? "ok" : "navy"}>{ST[it.status]}</Badge>
              <Badge>{DOMAIN_LABEL[it.domain]}</Badge>
            </div>
            <p className="mt-2 text-sm leading-7 text-muted">{it.body}</p>
            {it.opinion && (
              <p className="mt-3 rounded-md bg-teal/8 p-3 text-sm leading-7">نظریه: {it.opinion}</p>
            )}
            <p className="mt-2 text-xs text-muted">
              {it.from} · {formatJalali(it.raisedAt)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
