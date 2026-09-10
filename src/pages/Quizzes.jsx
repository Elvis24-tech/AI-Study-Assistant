import {
    ClipboardList,
    Clock,
    Play,
    Trophy,
    Plus,
  } from "lucide-react";
  
  const quizzes = [
    {
      title: "Management Information Systems",
      questions: 20,
      duration: "20 min",
      score: "82%",
    },
    {
      title: "Database Systems",
      questions: 15,
      duration: "15 min",
      score: "76%",
    },
    {
      title: "Assembly Language",
      questions: 25,
      duration: "30 min",
      score: "68%",
    },
  ];
  
  function Quizzes() {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <ClipboardList size={21} />
              </div>
  
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Quizzes
                </h1>
  
                <p className="text-sm text-slate-500">
                  Test your knowledge and improve your skills.
                </p>
              </div>
            </div>
          </div>
  
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
            <Plus size={18} />
            Generate Quiz
          </button>
        </div>
  
        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">
              Quizzes completed
            </p>
  
            <p className="mt-2 text-2xl font-bold text-slate-900">
              18
            </p>
          </div>
  
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">
              Average score
            </p>
  
            <p className="mt-2 text-2xl font-bold text-slate-900">
              82%
            </p>
          </div>
  
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">
              Best score
            </p>
  
            <p className="mt-2 text-2xl font-bold text-slate-900">
              96%
            </p>
          </div>
        </div>
  
        {/* Quiz list */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quizzes.map((quiz) => (
            <div
              key={quiz.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <ClipboardList size={20} />
                </div>
  
                <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                  <Trophy size={12} />
                  {quiz.score}
                </div>
              </div>
  
              <h2 className="mt-5 font-semibold text-slate-900">
                {quiz.title}
              </h2>
  
              <div className="mt-3 flex gap-4 text-xs text-slate-500">
                <span>
                  {quiz.questions} questions
                </span>
  
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {quiz.duration}
                </span>
              </div>
  
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
                <Play size={16} />
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Quizzes;