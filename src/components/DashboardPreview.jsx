import { BarChart2, Users, Settings, CreditCard } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart2 className="text-indigo-600" size={18} />
                <h3 className="font-semibold text-slate-900">Customer Dashboard</h3>
              </div>
              <span className="text-xs rounded-full px-2 py-1 bg-emerald-100 text-emerald-700">Active</span>
            </div>
            <div className="p-5 grid grid-cols-2 gap-4">
              <Metric title="Usage this month" value="12,450" sub="events" />
              <Metric title="Uptime" value="99.98%" sub="last 30d" />
              <Metric title="Plan" value="Pro" sub="renews in 12 days" />
              <Metric title="Credits" value="1,200" sub="remaining" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="text-slate-900" size={18} />
                <h3 className="font-semibold text-slate-900">Admin Console</h3>
              </div>
              <span className="text-xs rounded-full px-2 py-1 bg-slate-100 text-slate-700">Internal</span>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminItem icon={<Users size={16} />} title="Users" desc="Manage accounts & roles" />
              <AdminItem icon={<CreditCard size={16} />} title="Subscriptions" desc="Plans, billing, invoices" />
              <AdminItem icon={<BarChart2 size={16} />} title="Analytics" desc="Usage & events" />
              <AdminItem icon={<Settings size={16} />} title="Settings" desc="Policies & limits" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ title, value, sub }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  );
}

function AdminItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
      <div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-700 grid place-items-center">
        {icon}
      </div>
      <div>
        <p className="font-medium text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
