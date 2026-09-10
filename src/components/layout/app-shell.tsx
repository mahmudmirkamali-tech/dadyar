import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Wordmark } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CommandSearch } from "@/components/command-search";
import { NAV, MOBILE_NAV } from "@/components/layout/nav";
import { cn } from "@/lib/cn";
import { toFaDigits } from "@/lib/jalali";
import { citizen } from "@/lib/seed";
import { useAppStore } from "@/lib/store";
import { ROLE_LABEL, type Role } from "@/lib/types";

const ROLES: Role[] = ["citizen", "office", "mediator", "committee", "judiciary"];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const role = useAppStore((s) => s.role);
  const setRole = useAppStore((s) => s.setRole);
  const unread = useAppStore((s) => s.sana.filter((n) => !n.read).length);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const items = useMemo(() => NAV.filter((i) => !i.roles || i.roles.includes(role)), [role]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <aside className="navy-rail fixed inset-y-0 right-0 z-30 hidden w-64 flex-col lg:flex">
        <div className="border-b border-paper/10 px-5 py-5">
          <Link to="/">
            <Wordmark inverse />
          </Link>
        </div>
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
          {items.map((item) => {
            const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex flex-col rounded-md px-3 py-2.5 transition-colors duration-150",
                  active ? "bg-paper/10 text-paper" : "text-paper/70 hover:bg-paper/10 hover:text-paper",
                )}
              >
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-[11px] text-paper/40">{item.hint}</span>
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-paper/10 p-4">
          <p className="mb-2 text-[11px] text-paper/40">نمای آزمایشی نقش</p>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="h-10 w-full rounded-sm border border-paper/15 bg-navy-3 px-2 text-xs text-paper outline-none"
          >
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {ROLE_LABEL[r]}
              </option>
            ))}
          </select>
        </div>
      </aside>

      <div className="lg:pr-64">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-line bg-paper-2/90 px-4 backdrop-blur-md">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="منو">
            <Menu className="size-5" />
          </Button>
          <button
            type="button"
            onClick={() => setSearch(true)}
            className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-paper px-3 text-right text-sm text-muted"
          >
            <Search className="size-4 shrink-0" />
            <span className="truncate">جستجوی فرمان در اسناد، پرونده و ثنا</span>
          </button>
          <Link to="/app/sana" className="relative">
            <Badge tone={unread ? "warn" : "muted"}>ثنا {toFaDigits(unread)}</Badge>
          </Link>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium leading-none">{citizen.name}</p>
            <p className="mt-1 text-[11px] text-muted">{ROLE_LABEL[role]}</p>
          </div>
        </header>

        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-10">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-line bg-paper-2 lg:hidden">
        {MOBILE_NAV.map((item) => {
          const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex h-14 items-center justify-center text-xs font-medium",
                active ? "text-teal" : "text-muted",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button type="button" className="absolute inset-0 bg-navy/50" onClick={() => setOpen(false)} aria-label="بستن" />
          <div className="navy-rail absolute inset-y-0 right-0 flex w-72 flex-col">
            <div className="flex items-center justify-between px-4 py-4">
              <Wordmark inverse compact />
              <Button variant="ghost" size="icon" className="text-paper hover:bg-paper/10" onClick={() => setOpen(false)}>
                <X className="size-5" />
              </Button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 pb-6">
              {items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-paper/80 hover:bg-paper/10 hover:text-paper"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {search && <CommandSearch onClose={() => setSearch(false)} />}
    </div>
  );
}
