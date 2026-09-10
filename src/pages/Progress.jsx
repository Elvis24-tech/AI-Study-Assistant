import {
    BarChart3,
    Clock,
    Flame,
    Target,
    Trophy,
  } from "lucide-react";
  
  function Progress() {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <BarChart3 size={21} />
            </div>
  
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Your Progress
              </h1>
  
              <p className="text-sm text-slate-500">
                Track your learning journey.
              </p>
            </div>
          </div>
        </div>
  
        {/* Summary */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ProgressCard
            icon={Clock}
            title="Study time"
            value="12h 40m"
          />
  
          <ProgressCard
            icon={Flame}
            title="Current streak"
            value="7 days"
          />
  
          <ProgressCard
            icon={Target}
            title="Average score"
            value="82%"
          />
  
          <ProgressCard
            icon={Trophy}
            title="Achievements"
            value="12"
          />
        </div>
  
        {/* Weekly chart */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div>
            <h2 className="font-bold text-slate-900">
              Weekly study activity
            </h2>
  
            <p className="mt-1 text-sm text-slate-500">
              Hours studied each day.
            </p>
          </div>
  
          <div className="mt-8 flex h-64 items-end justify-between gap-3 border-b border-slate-100">
            {[
              ["Mon", 55],
              ["Tue", 75],
              ["Wed", 45],
              ["Thu", 90],
              ["Fri", 60],
              ["Sat", 80],
              ["Sun", 35],
            ].map(([day, height]) => (
              <div
                key={day}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className="w-full max-w-12 rounded-t-lg bg-indigo-500 transition hover:bg-indigo-600"
                  style={{
                    height: `${height}%`,
                  }}
                />
  
                <span className="pb-2 text-xs text-slate-400">
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Subjects */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-bold text-slate-900">
            Subject progress
          </h2>
  
          <div className="mt-6 space-y-6">
            <SubjectProgress
              name="Management Information Systems"
              progress={80}
            />
  
            <SubjectProgress
              name="Assembly Language Programming"
              progress={65}
            />
  
            <SubjectProgress
              name="Software Development"
              progress={45}
            />
  
            <SubjectProgress
              name="Database Systems"
              progress={72}
            />
          </div>
        </div>
      </div>
    );
  }
  
  function ProgressCard({
    icon: Icon,
    title,
    value,
  }) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Icon size={19} />
        </div>
  
        <p className="mt-4 text-sm text-slate-500">
          {title}
        </p>
  
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {value}
        </p>
      </div>
    );
  }
  
  function SubjectProgress({
    name,
    progress,
  }) {
    return (
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">
            {name}
          </span>
  
          <span className="text-sm font-semibold text-indigo-600">
            {progress}%
          </span>
        </div>
  
        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-600"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    );
  }
  
  export default Progress;