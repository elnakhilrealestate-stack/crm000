import { BarChart3, TrendingUp } from 'lucide-react';
export default function ReportsPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">التقارير</h2>
        <p className="text-stone-500 mt-2">التقارير المالية والمبيعات</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">المبيعات حسب الوكيل</h3>
          <div className="space-y-3">
            {[
              { agent: 'أحمد خالد', sales: '12.5M', rate: '35%' },
              { agent: 'سارة محمود', sales: '8.2M', rate: '22%' },
            ].map(r => (
              <div key={r.agent} className="flex items-center justify-between p-3 rounded-xl bg-stone-50">
                <span className="font-bold text-stone-800">{r.agent}</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-stone-600">{r.sales}</span>
                  <span className="text-amber-600 font-bold">{r.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 text-white shadow-xl">
          <h3 className="text-lg font-bold mb-4">ملخص الإيرادات</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-stone-300">إجمالي المبيعات</span>
              <span className="text-xl font-extrabold">42.3M ج.م</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-300">المحصلة</span>
              <span className="text-xl font-extrabold text-amber-300">28.1M ج.م</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-300">المتبقية</span>
              <span className="text-xl font-extrabold">14.2M ج.م</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
