import { ArrowRight } from "lucide-react";

function QuickAction({
  icon: Icon,
  title,
  description,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        group rounded-2xl border border-slate-200
        bg-white p-5 text-left
        transition duration-200
        hover:-translate-y-1
        hover:border-indigo-200
        hover:shadow-xl hover:shadow-slate-100
      "
    >
      <div
        className="
          flex h-11 w-11 items-center justify-center
          rounded-xl bg-indigo-50 text-indigo-600
          transition
          group-hover:bg-indigo-600
          group-hover:text-white
        "
      >
        <Icon size={20} />
      </div>

      <h3 className="mt-4 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-5 text-slate-500">
        {description}
      </p>

      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-indigo-600">
        Open
        <ArrowRight
          size={14}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </button>
  );
}

export default QuickAction;