import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const badgeColors: Record<string, string> = {
    regular: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    testimony: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    stake: 'bg-amber-100 text-amber-800 border-amber-300',
    general: 'bg-purple-100 text-purple-800 border-purple-300'
  };

  return (
    <article className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-base font-bold text-slate-900">{meeting.date}</span>
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full border capitalize font-semibold ${
              badgeColors[meeting.meetingType] ?? 'bg-slate-100 text-slate-700'
            }`}
          >
            {meeting.meetingType}
          </span>
        </div>
        <p className="text-sm text-slate-600 mb-1">
          <strong className="text-slate-800">Presiding:</strong> {meeting.presiding}
        </p>
        <p className="text-sm text-slate-600 mb-3">
          <strong className="text-slate-800">Conducting:</strong> {meeting.conducting}
        </p>
      </div>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-4 block text-center text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 py-2 rounded-md transition-colors"
      >
        View Program →
      </Link>
    </article>
  );
}