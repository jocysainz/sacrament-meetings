import NavLinks from './NavLinks';

export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header className="bg-blue-700 text-white shadow-md print:hidden">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Oak Ridge Ward</h1>
          <p className="text-xs text-blue-200">Today: {today}</p>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}