import {
    Plus,
    Search,
    BookOpen,
    MoreVertical,
    Sparkles,
  } from "lucide-react";
  
  const notes = [
    {
      id: 1,
      title: "Management Information Systems",
      description:
        "Information systems, decision making and organizational management.",
      category: "Information Technology",
      updated: "Today",
    },
    {
      id: 2,
      title: "Assembly Language Programming",
      description:
        "CPU architecture, registers, instructions and memory addressing.",
      category: "Programming",
      updated: "Yesterday",
    },
    {
      id: 3,
      title: "Software Development",
      description:
        "Software development lifecycle, requirements and methodologies.",
      category: "Software Engineering",
      updated: "2 days ago",
    },
    {
      id: 4,
      title: "Database Systems",
      description:
        "Relational databases, SQL, normalization and database design.",
      category: "Databases",
      updated: "4 days ago",
    },
  ];
  
  function Notes() {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              My Notes
            </h1>
  
            <p className="mt-1 text-sm text-slate-500">
              Organize and study your learning materials.
            </p>
          </div>
  
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700">
            <Plus size={18} />
            New Note
          </button>
        </div>
  
        {/* Search */}
        <div className="relative mt-6 max-w-xl">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
  
          <input
            type="text"
            placeholder="Search your notes..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
          />
        </div>
  
        {/* Notes */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note.id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <BookOpen size={20} />
                </div>
  
                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
                  <MoreVertical size={18} />
                </button>
              </div>
  
              <h2 className="mt-5 font-semibold text-slate-900">
                {note.title}
              </h2>
  
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {note.description}
              </p>
  
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                  {note.category}
                </span>
  
                <span className="text-xs text-slate-400">
                  {note.updated}
                </span>
              </div>
  
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                <Sparkles size={16} />
                AI Summarize
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Notes;