"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; from: "user" | "bot" }[]
  >([]);

  const faqs = [
    "What services do you offer?",
    "How to get a quote?",
    "Where are you located?",
  ];

  const handleFaqClick = (faq: string) => {
    setMessages((prev) => [
      ...prev,
      { text: faq, from: "user" },
      {
        text: `Thanks for asking about "${faq}". We'll get back to you soon.`,
        from: "bot",
      },
    ]);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.message;
    const value = input.value.trim();
    if (!value) return;
    setMessages((prev) => [
      ...prev,
      { text: value, from: "user" },
      { text: "Thanks for your message! We'll reply shortly.", from: "bot" },
    ]);
    input.value = "";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <h4 className="font-semibold text-lg">Chat with Us</h4>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* FAQ */}
          {messages.length === 0 && (
            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm text-gray-600 mb-1">FaQ's:</p>
              {faqs.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleFaqClick(faq)}
                  className="text-left bg-gray-100 hover:bg-gray-200 text-sm px-3 py-2 rounded-md transition"
                >
                  {faq}
                </button>
              ))}
            </div>
          )}

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
                  msg.from === "user"
                    ? "bg-indigo-100 self-end text-right"
                    : "bg-gray-200 self-start text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="border-t p-3">
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </form>
        </div>
      )}

      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;
