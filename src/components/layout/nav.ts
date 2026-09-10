import type { Role } from "@/lib/types";

export interface NavItem {
  to: string;
  label: string;
  hint: string;
  roles?: Role[];
}

export const NAV: NavItem[] = [
  { to: "/app", label: "خانه", hint: "نمای کلی امور" },
  { to: "/app/new", label: "موضوع تازه", hint: "تحلیل مسیر با هوش مصنوعی" },
  { to: "/app/consult", label: "مشاوره هوشمند", hint: "نظر مشورتی؛ وکالت نیست" },
  { to: "/app/sulh", label: "صلح و سازش", hint: "ریش‌سفید؛ جدا از وکالت" },
  { to: "/app/dispute", label: "حل اختلاف", hint: "شعبه خصوصی + ثنا" },
  { to: "/app/cases", label: "پرونده‌ها", hint: "خط زمان و مهلت" },
  { to: "/app/documents", label: "اسناد", hint: "جستجوی یکپارچه" },
  { to: "/app/sana", label: "ثنا و مهلت‌ها", hint: "ابلاغ الکترونیک" },
  { to: "/app/draft", label: "پیش‌نویس", hint: "تولید سند حقوقی" },
  { to: "/app/offices", label: "شبکه دفاتر", hint: "فرانشیز آزمایشی" },
  { to: "/app/committee", label: "کمیته حقوقی", hint: "مسائل مستحدثه" },
  { to: "/app/company", label: "اساسنامه", hint: "ثبت مؤسسه" },
];

export const MOBILE_NAV = [
  { to: "/app", label: "خانه" },
  { to: "/app/new", label: "تازه" },
  { to: "/app/sulh", label: "سازش" },
  { to: "/app/dispute", label: "اختلاف" },
  { to: "/app/sana", label: "ثنا" },
];
