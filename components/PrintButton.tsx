'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded shadow transition-colors"
    >
      Print Program
    </button>
  );
}