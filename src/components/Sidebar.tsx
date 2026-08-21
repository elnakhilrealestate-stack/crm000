import Link from 'next/link';
import { Building2, Users, FileText, CreditCard, BarChart3, LayoutGrid, Shield } from 'lucide-react';

const nav = [
  { label: 'لوحة التحكم', href: '/', icon: BarChart3 },
  { label: 'الوحدات', href: '/units', icon: LayoutGrid },
  { label: 'العملاء المحتملون', href: '/leads', icon: Users },
  { label: 'الحجوزات والعقود', href: '/contracts', icon: FileText },
  { label: 'المدفوعات', href: '/payments', icon: CreditCard },
  { label: 'التقارير', href: '/reports', icon: Shield },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-stone-50 flex flex-col shrink-0 border-l border-stone-700/40">
      <div className="p-6 border-b border-stone-700/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-900/30">
            <Building2 className="text-stone-900 w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight leading-none">VALUE 9 MALL</h1>
            <p className="text-[11px] text-stone-400 mt-1">نظام إدارة المبيعات</p>
          </div>
        </div>
      </div>
      <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-700/40 transition-colors text-sm font-medium text-stone-200 hover:text-white group">
            <item.icon className="w-5 h-5 text-amber-400 group-hover:text-amber-300" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-stone-700/40">
        <div className="bg-stone-800/60 rounded-xl p-4">
          <p className="text-xs text-stone-400">المشروع الحالي</p>
          <p className="text-sm font-semibold text-amber-300">VALUE 9 MALL</p>
          <p className="text-[10px] text-stone-500 mt-1">تسليم ديسمبر 2027</p>
        </div>
      </div>
    </aside>
  );
}
