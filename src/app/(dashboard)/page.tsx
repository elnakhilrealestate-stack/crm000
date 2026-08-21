import { LayoutGrid, Users, FileCheck, CreditCard, TrendingUp, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">لوحة التحكم التنفيذية</h2>
        <p className="text-stone-500 mt-2">نظرة عامة على مشروع VALUE 9 MALL</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'إجمالي الوحدات', value: '46', sub: 'متاحة: 46', icon: LayoutGrid, color: 'bg-amber-100 text-amber-700' },
          { label: 'العملاء المحتملون', value: '128', sub: 'جديد اليوم: 4', icon: Users, color: 'bg-rose-100 text-rose-700' },
          { label: 'الحجوزات', value: '8', sub: 'عقود موقعة: 3', icon: FileCheck, color: 'bg-emerald-100 text-emerald-700' },
          { label: 'إجمالي المبيعات', value: '42.3M', sub: 'جنيه مصري', icon: TrendingUp, color: 'bg-violet-100 text-violet-700' },
        ].map((k) => (
          <div key={k.label} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-stone-500">{k.label}</p>
                <h3 className="text-3xl font-extrabold text-stone-900 mt-2">{k.value}</h3>
                <p className="text-xs text-stone-400 mt-1">{k.sub}</p>
              </div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${k.color}`}>
                <k.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 col-span-2">
          <h3 className="text-lg font-bold text-stone-900 mb-4">حالة الوحدات</h3>
          <div className="flex gap-6">
            {[
              { label: 'متاحة', value: '46', color: 'bg-emerald-500' },
              { label: 'محجوزة', value: '3', color: 'bg-amber-500' },
              { label: 'مباعة', value: '0', color: 'bg-violet-500' },
            ].map(s => (
              <div key={s.label} className="flex-1 bg-stone-50 rounded-2xl p-4 text-center">
                <div className={`w-3 h-3 rounded-full mx-auto mb-3 ${s.color}`} />
                <p className="text-2xl font-extrabold text-stone-900">{s.value}</p>
                <p className="text-xs text-stone-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 text-white shadow-xl">
          <h3 className="text-lg font-bold mb-2">حاسبة العروض</h3>
          <p className="text-sm text-stone-300 mb-4">احسب السعر النهائي والخطة المالية لأي وحدة</p>
          <Link href="/units" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 px-4 py-2 rounded-xl text-sm font-bold transition-colors">
            <Building2 className="w-4 h-4" />
            تصفح الوحدات
          </Link>
        </div>
      </div>
    </div>
  );
}
