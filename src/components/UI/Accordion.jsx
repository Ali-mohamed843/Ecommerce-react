import { useState } from "react";

export default function Accordion({
  title = "Material & Care",
  children,
  defaultOpen = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`border-t border-b border-gray-200 py-6 mb-16 ${className}`}
    >
      <button
        className="w-full flex justify-between items-center text-left group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-[#0f5e3f] transition-colors">
          {title}
        </span>

        {/* ChevronDown Icon with smooth rotation transition */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-gray-500 transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div
          id="accordion-content"
          className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed animate-fadeIn"
        >
          {children}
        </div>
      )}

      {/* Optional CSS animation for smooth fade-in (you can remove this if you already have a Tailwind config for animation) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
