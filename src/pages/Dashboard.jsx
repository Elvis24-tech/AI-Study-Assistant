import {
    MessageSquare,
    BookOpen,
    ClipboardList,
    Clock3,
    BookMarked,
    Target,
    Flame,
    Trophy,
    ArrowRight,
    Sparkles,
  } from "lucide-react";
  
  import StatCard from "../components/StatCard";
  import QuickAction from "../components/QuickAction";
  import RecentStudy from "../components/RecentStudy";
  
  function Dashboard({ setActivePage }) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Welcome */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600 p-6 text-white shadow-xl shadow-indigo-100 sm:p-8">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <Sparkles size={14} />
              AI-powered learning
            </div>
  
            <h1 className="text-2xl font-bold sm:text-3xl">
              Welcome back, Elvis 👋
            </h1>
  
            <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
              Ready to continue learning? Ask your AI tutor a
              question, review your notes, or test your knowledge.
            </p>
  
            <button
              onClick={() => setActivePage("AI Tutor")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-lg transition hover:bg-indigo-50"
            >
              Start studying
              <ArrowRight size={17} />
            </button>
          </div>
  
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
  
          <div className="absolute -bottom-20 right-20 h-56 w-56 rounded-full bg-white/5" />
        </section>
  
        {/* Statistics */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Study time"
            value="12h 40m"
            subtitle="+18% this week"
            icon={Clock3}
          />
  
          <StatCard
            title="Topics studied"
            value="24"
            subtitle="+5 this week"
            icon={BookMarked}
          />
  
          <StatCard
            title="Quiz score"
            value="82%"
            subtitle="+7% improvement"
            icon={Target}
          />
  
          <StatCard
            title="Study streak"
            value="7 days"
            subtitle="Keep it going!"
            icon={Flame}
          />
        </section>
  
        {/* Quick Actions */}
        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Quick actions
            </h2>
  
            <p className="mt-1 text-sm text-slate-500">
              What would you like to do today?
            </p>
          </div>
  
          <div className="grid gap-4 md:grid-cols-3">
            <QuickAction
              icon={MessageSquare}
              title="Ask AI Tutor"
              description="Get explanations for difficult topics."
              onClick={() => setActivePage("AI Tutor")}
            />
  
            <QuickAction
              icon={BookOpen}
              title="Summarize Notes"
              description="Turn lengthy notes into simple key points."
              onClick={() => setActivePage("My Notes")}
            />
  
            <QuickAction
              icon={ClipboardList}
              title="Generate Quiz"
              description="Test yourself with AI-generated questions."
              onClick={() => setActivePage("Quizzes")}
            />
          </div>
        </section>
  
        {/* Bottom Grid */}
        <section className="mt-8 grid gap-6 xl:grid-cols-3">
          {/* Recent studies */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white xl:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="font-bold text-slate-900">
                  Recent studies
                </h2>
  
                <p className="mt-1 text-xs text-slate-400">
                  Continue where you left off
                </p>
              </div>
  
              <button
                onClick={() => setActivePage("Progress")}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                View all
              </button>
            </div>
  
            <RecentStudy
              title="Management Information Systems"
              progress={80}
              time="35 min ago"
            />
  
            <RecentStudy
              title="Assembly Language Programming"
              progress={65}
              time="Yesterday"
            />
  
            <RecentStudy
              title="Software Development"
              progress={45}
              time="2 days ago"
            />
          </div>
  
          {/* Achievement */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
              <Trophy size={23} />
            </div>
  
            <h2 className="mt-5 text-lg font-bold text-slate-900">
              Weekly achievement
            </h2>
  
            <p className="mt-2 text-sm leading-6 text-slate-500">
              You're doing great! You've studied for 4 days
              this week.
            </p>
  
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs">
                <span className="font-medium text-slate-500">
                  Weekly goal
                </span>
  
                <span className="font-semibold text-slate-800">
                  4 / 5 days
                </span>
              </div>
  
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-amber-400"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
  
            <button
              onClick={() => setActivePage("Progress")}
              className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600"
            >
              View progress
              <ArrowRight size={15} />
            </button>
          </div>
        </section>
      </div>
    );
  }
  
  export default Dashboard;