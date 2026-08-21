import { FileCheck, Plus } from 'lucide-react';
export default function ContractsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">العقود والحجوزات</h2>
          <p className="text-stone-500 mt-2">إدارة العقود والحجوزات المالية</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-stone-900 text-sm font-extrabold hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-colors"><Plus className="w-5 h-5"/>عقد جديد</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'مسودة', value: '2', color: 'bg-stone-200 text-stone-700' },
          { label: 'موقعة', value: '3', color: 'bg-amber-100 text-amber-700' },
          { label: 'مكتملة', value: '5', color: 'bg-emerald-100 text-emerald-700' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 text-center">
            <div className={`w-3 h-3 rounded-full mx-auto mb-3 ${s.color.split(' ')[0]}`} />
            <p className="text-3xl font-extrabold text-stone-900">{s.value}</p>
            <p className="text-sm text-stone-500">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
