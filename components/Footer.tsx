export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-6 mt-auto print:hidden">
      <div className="max-w-6xl mx-auto px-4 text-center text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} Oak Ridge Ward | Sacrament Meeting Planner</p>
      </div>
    </footer>
  );
}