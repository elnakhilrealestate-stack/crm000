import Sidebar from '@/components/Sidebar';
import { Building2 } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-stone-50 text-stone-900">
      <Sidebar />
      <main className="flex-1 min-w-0 overflow-y-auto min-h-screen">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-stone-200/60 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center shadow-md shadow-amber-500/20">
              <Building2 className="w-5 h-5 text-stone-900" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">VALUE 9 MALL</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-stone-400">آخر تحديث: اليوم</span>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-stone-900 text-xs font-extrabold shadow-lg shadow-amber-500/20">
              أ.خ
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
