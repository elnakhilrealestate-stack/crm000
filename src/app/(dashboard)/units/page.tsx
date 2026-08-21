import { getUnits } from '@/lib/units';
import { Search, Filter, Calculator } from 'lucide-react';

export default async function UnitsPage() {
  const units = await getUnits();

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">المخزون العقاري</h2>
          <p className="text-stone-500 mt-2">جميع وحدات مشروع VALUE 9 MALL</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-stone-400" />
            <input type="text" placeholder="بحث برمز الوحدة..." className="pr-10 pl-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-colors">
            <Filter className="w-4 h-4" />
            تصفية
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right">
            <thead className="bg-stone-50 text-stone-600 font-semibold">
              <tr>
                <th className="px-5 py-4">رمز الوحدة</th>
                <th className="px-5 py-4">الطابق</th>
                <th className="px-5 py-4">المساحة</th>
                <th className="px-5 py-4">السعر/م²</th>
                <th className="px-5 py-4">السعر الأصلي</th>
                <th className="px-5 py-4">الحالة</th>
                <th className="px-5 py-4">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {units.map((u: any) => (
                <tr key={u.code} className="hover:bg-amber-50/40 transition-colors">
                  <td className="px-5 py-4 font-bold text-stone-900">{u.code}</td>
                  <td className="px-5 py-4 text-stone-600">{u.floor}</td>
                  <td className="px-5 py-4 text-stone-600">{Number(u.internalArea).toFixed(0)} م²</td>
                  <td className="px-5 py-4 text-stone-600">{Number(u.pricePerSqm).toLocaleString()}</td>
                  <td className="px-5 py-4 font-semibold text-stone-900">{Number(u.originalPrice).toLocaleString()} ج.م</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                      متاحة
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button className="text-amber-600 hover:text-amber-700 text-xs font-bold">تفاصيل</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
