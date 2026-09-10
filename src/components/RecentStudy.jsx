import {
    BookOpen,
    Clock,
    ArrowUpRight,
  } from "lucide-react";
  
  function RecentStudy({
    title,
    progress,
    time,
  }) {
    return (
      <div className="group flex items-center gap-4 border-b border-slate-100 p-5 last:border-0">
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 sm:flex">
          <BookOpen size={19} />
        </div>
  
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="truncate text-sm font-semibold text-slate-800">
              {title}
            </h3>
  
            <span className="shrink-0 text-xs font-medium text-slate-500">
              {progress}%
            </span>
          </div>
  
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
  
          <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
            <Clock size={13} />
            {time}
          </div>
        </div>
  
        <button className="hidden rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-indigo-600 sm:block">
          <ArrowUpRight size={17} />
        </button>
      </div>
    );
  }
  
  export default RecentStudy;