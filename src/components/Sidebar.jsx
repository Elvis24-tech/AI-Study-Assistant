import {
    LayoutDashboard,
    MessageSquare,
    BookOpen,
    Layers,
    ClipboardList,
    BarChart3,
    Settings,
    Sparkles,
    X,
    ChevronRight,
  } from "lucide-react";
  
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      name: "AI Tutor",
      icon: MessageSquare,
      path: "/ai-tutor",
    },
    {
      name: "My Notes",
      icon: BookOpen,
      path: "/notes",
    },
    {
      name: "Flashcards",
      icon: Layers,
      path: "/flashcards",
    },
    {
      name: "Quizzes",
      icon: ClipboardList,
      path: "/quizzes",
    },
    {
      name: "Progress",
      icon: BarChart3,
      path: "/progress",
    },
  ];
  
  function Sidebar({
    activePage,
    setActivePage,
    sidebarOpen,
    setSidebarOpen,
  }) {
    const handleNavigation = (page) => {
      setActivePage(page);
      setSidebarOpen(false);
    };
  
    return (
      <>
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
  
        <aside
          className={`
            fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
            border-r border-slate-200 bg-white
            transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                <Sparkles size={22} />
              </div>
  
              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  StudyAI
                </h1>
  
                <p className="text-xs text-slate-400">
                  Smart learning assistant
                </p>
              </div>
            </div>
  
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>
  
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Main Menu
            </p>
  
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = activePage === item.name;
  
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.name)}
                    className={`
                      group flex w-full items-center gap-3 rounded-xl
                      px-3 py-3 text-sm font-medium transition
                      ${
                        active
                          ? "bg-indigo-50 text-indigo-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }
                    `}
                  >
                    <Icon size={19} />
  
                    <span className="flex-1 text-left">
                      {item.name}
                    </span>
  
                    {active && (
                      <ChevronRight
                        size={16}
                        className="text-indigo-500"
                      />
                    )}
                  </button>
                );
              })}
            </div>
  
            <div className="my-7 border-t border-slate-100" />
  
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Account
            </p>
  
            <button
              onClick={() => handleNavigation("Settings")}
              className={`
                flex w-full items-center gap-3 rounded-xl px-3 py-3
                text-sm font-medium transition
                ${
                  activePage === "Settings"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50"
                }
              `}
            >
              <Settings size={19} />
              Settings
            </button>
          </nav>
  
          {/* AI Promo */}
          <div className="m-4 overflow-hidden rounded-2xl bg-indigo-600 p-5 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <Sparkles size={19} />
            </div>
  
            <h3 className="mt-4 font-semibold">
              Study smarter
            </h3>
  
            <p className="mt-1 text-xs leading-5 text-indigo-100">
              Use AI to understand difficult topics, create quizzes,
              and organize your notes.
            </p>
  
            <button
              onClick={() => handleNavigation("AI Tutor")}
              className="mt-4 flex items-center gap-2 text-xs font-semibold text-white hover:text-indigo-100"
            >
              Open AI Tutor
              <ChevronRight size={14} />
            </button>
          </div>
        </aside>
      </>
    );
  }
  
  export default Sidebar;