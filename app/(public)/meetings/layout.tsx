import Link from 'next/link';

export default function MeetingsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Ward Agendas</h2>
          <p className="text-xs text-slate-500">Plan and review weekly meeting records</p>
        </div>
        <Link
          href="/meetings"
          className="text-sm text-slate-600 hover:text-blue-700 font-medium"
        >
          ← All Meetings
        </Link>
      </div>
      {children}
    </div>
  );
}