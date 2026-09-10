import {
    Menu,
    Bell,
    Search,
    ChevronDown,
  } from "lucide-react";
  
  function Navbar({ setSidebarOpen }) {
    return (
      <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-md sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-100 lg:hidden"
          >
            <Menu size={22} />
          </button>
  
          {/* Search */}
          <div className="relative hidden sm:block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
  
            <input
              type="text"
              placeholder="Search your studies..."
              className="
                w-64 rounded-xl border border-slate-200
                bg-slate-50 py-2.5 pl-10 pr-4 text-sm
                outline-none transition
                focus:border-indigo-400
                focus:bg-white
                focus:ring-4
                focus:ring-indigo-50
              "
            />
          </div>
        </div>
  
        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Notification */}
          <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100">
            <Bell size={20} />
  
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
          </button>
  
          <div className="h-8 w-px bg-slate-200" />
  
          {/* Profile */}
          <button className="flex items-center gap-3 rounded-xl p-1.5 hover:bg-slate-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
              E
            </div>
  
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-800">
                Elvis
              </p>
  
              <p className="text-xs text-slate-400">
                Student
              </p>
            </div>
  
            <ChevronDown
              size={16}
              className="hidden text-slate-400 sm:block"
            />
          </button>
        </div>
      </header>
    );
  }
  
  export default Navbar;