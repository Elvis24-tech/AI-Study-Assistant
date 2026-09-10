import { useState } from "react";
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    question: "What is an Information System?",
    answer:
      "An Information System is a combination of people, processes, technology and data used to collect, process, store and distribute information.",
  },
  {
    question: "What is a database?",
    answer:
      "A database is an organized collection of structured data that can be accessed, managed and updated efficiently.",
  },
  {
    question: "What is recursion?",
    answer:
      "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.",
  },
];

function Flashcards() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[current];

  const nextCard = () => {
    setFlipped(false);
    setCurrent((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1,
    );
  };

  const previousCard = () => {
    setFlipped(false);
    setCurrent((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1,
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
            <Layers size={21} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Flashcards
            </h1>

            <p className="text-sm text-slate-500">
              Review important concepts.
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mx-auto mt-10 max-w-2xl">
        <div className="mb-3 flex justify-between text-sm">
          <span className="font-medium text-slate-600">
            Card {current + 1} of {cards.length}
          </span>

          <span className="text-slate-400">
            {Math.round(
              ((current + 1) / cards.length) * 100,
            )}
            %
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{
              width: `${((current + 1) / cards.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="mx-auto mt-8 max-w-2xl">
        <button
          onClick={() => setFlipped(!flipped)}
          className="group relative h-80 w-full"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              {flipped ? (
                <Sparkles size={22} />
              ) : (
                <Layers size={22} />
              )}
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {flipped ? "Answer" : "Question"}
            </span>

            <h2 className="mt-4 max-w-xl text-center text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
              {flipped ? card.answer : card.question}
            </h2>

            <p className="absolute bottom-6 text-xs text-slate-400">
              Click to {flipped ? "see question" : "reveal answer"}
            </p>
          </div>
        </button>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={previousCard}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => setFlipped(false)}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <RotateCcw size={17} />
            Reset
          </button>

          <button
            onClick={nextCard}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flashcards;