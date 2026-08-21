import { Users, Search, Plus } from 'lucide-react';

export default function LeadsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">العملاء المحتملون</h2>
          <p className="text-stone-500 mt-2">إدارة العملاء المحتملين والمتابعة</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-stone-900 text-sm font-extrabold hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-colors">
          <Plus className="w-5 h-5" />
          عميل جديد
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right">
            <thead className="bg-stone-50 text-stone-600 font-semibold">
              <tr>
                <th className="px-5 py-4">الاسم</th>
                <th className="px-5 py-4">الهاتف</th>
                <th className="px-5 py-4">المشروع</th>
                <th className="px-5 py-4">الوحدة المهتمة</th>
                <th className="px-5 py-4">الحالة</th>
                <th className="px-5 py-4">الوكيل</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                { name: 'محمد عبد الله', phone: '0101234567', project: 'VALUE 9 MALL', unit: 'F12-V9', status: 'جديد', agent: 'أحمد خالد' },
                { name: 'فاطمة حسين', phone: '0119876543', project: 'VALUE 9 MALL', unit: 'S3-V9', status: 'متابعة', agent: 'أحمد خالد' },
              ].map((l) => (
                <tr key={l.phone} className="hover:bg-amber-50/40 transition-colors">
                  <td className="px-5 py-4 font-bold text-stone-900">{l.name}</td>
                  <td className="px-5 py-4 text-stone-600">{l.phone}</td>
                  <td className="px-5 py-4 text-stone-600">{l.project}</td>
                  <td className="px-5 py-4 text-stone-600">{l.unit}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">{l.status}</span>
                  </td>
                  <td className="px-5 py-4 text-stone-600">{l.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
