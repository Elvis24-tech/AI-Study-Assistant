import { useState } from "react";
import {
  Send,
  Sparkles,
  User,
  Bot,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Paperclip,
} from "lucide-react";

function AITutor() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: "Hello! 👋 I'm your AI Study Tutor. What would you like to learn today?",
    },
  ]);

  const suggestions = [
    "Explain Management Information Systems",
    "Create a quiz about databases",
    "Explain recursion simply",
    "Summarize my notes",
  ];

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        text: `Great question! I can help you understand "${userMessage.text}". Once we connect the AI backend, I'll provide a detailed explanation, examples, and practice questions.`,
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
            <Sparkles size={21} />
          </div>

          <div>
            <h1 className="font-bold text-slate-900">
              AI Study Tutor
            </h1>

            <p className="text-xs text-slate-500">
              Ask questions and learn smarter
            </p>
          </div>

          <div className="ml-auto hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AI Online
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          {messages.map((item) => (
            <div
              key={item.id}
              className={`mb-6 flex gap-3 ${
                item.type === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {item.type === "ai" && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <Bot size={18} />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  item.type === "user"
                    ? "rounded-tr-md bg-indigo-600 text-white"
                    : "rounded-tl-md border border-slate-200 bg-white text-slate-700"
                }`}
              >
                <p className="whitespace-pre-wrap text-sm leading-6">
                  {item.text}
                </p>

                {item.type === "ai" && (
                  <div className="mt-3 flex items-center gap-1 border-t border-slate-100 pt-2">
                    <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50">
                      <Copy size={14} />
                    </button>

                    <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50">
                      <ThumbsUp size={14} />
                    </button>

                    <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50">
                      <ThumbsDown size={14} />
                    </button>
                  </div>
                )}
              </div>

              {item.type === "user" && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                  <User size={18} />
                </div>
              )}
            </div>
          ))}

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Try asking
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setMessage(suggestion)}
                    className="rounded-xl border border-slate-200 bg-white p-4 text-left text-sm text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-slate-200 bg-white p-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50">
            <button className="rounded-xl p-3 text-slate-400 hover:bg-white hover:text-slate-600">
              <Paperclip size={19} />
            </button>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask your AI tutor anything..."
              className="max-h-32 flex-1 resize-none bg-transparent px-2 py-3 text-sm outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={!message.trim()}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </div>

          <p className="mt-2 text-center text-[11px] text-slate-400">
            AI can make mistakes. Always verify important information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AITutor;