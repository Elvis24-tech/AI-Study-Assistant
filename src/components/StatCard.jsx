function StatCard({
    title,
    value,
    subtitle,
    icon: Icon,
  }) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-100">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              {title}
            </p>
  
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {value}
            </p>
          </div>
  
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Icon size={19} />
          </div>
        </div>
  
        <p className="mt-3 text-xs font-medium text-emerald-600">
          {subtitle}
        </p>
      </div>
    );
  }
  
  export default StatCard;