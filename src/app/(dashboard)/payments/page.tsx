import { CreditCard, Plus } from 'lucide-react';
export default function PaymentsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">المدفوعات والأقساط</h2>
          <p className="text-stone-500 mt-2">تتبع المدفوعات وجداول الأقساط</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-stone-900 text-sm font-extrabold hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-colors"><Plus className="w-5 h-5"/>دفعة جديدة</button>
      </div>
      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-stone-900 mb-4">جدول الأقساط</h3>
        <table className="w-full text-sm text-right">
          <thead className="bg-stone-50"><tr><th className="px-4 py-3">الوحدة</th><th>القسط</th><th>المبلغ</th><th>الحالة</th></tr></thead>
          <tbody className="divide-y divide-stone-100">
            <tr><td className="px-4 py-3 font-bold">F12-V9</td><td>1/24</td><td>266,562 ج.م</td><td><span className="text-emerald-600 font-bold">مدفوعة</span></td></tr>
            <tr><td className="px-4 py-3 font-bold">F3-V9</td><td>1/24</td><td>266,562 ج.م</td><td><span className="text-amber-600 font-bold">مستحقة</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
