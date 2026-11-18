import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm print:border-none print:shadow-none print:p-0 max-w-2xl mx-auto">
      <header className="text-center pb-6 border-b border-slate-200 mb-6">
        <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-wide uppercase">
          Sacrament Meeting
        </h2>
        <p className="text-base text-slate-600 mt-1">Oak Ridge Ward</p>
        <p className="text-sm font-semibold text-slate-500 mt-0.5">{meeting.date}</p>
        <span className="inline-block mt-2 text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-slate-100 border border-slate-300">
          {meeting.meetingType} Meeting
        </span>
      </header>

      <section className="grid grid-cols-2 gap-4 text-sm pb-6 border-b border-slate-200 mb-6">
        <div>
          <span className="text-slate-500 block text-xs uppercase">Presiding</span>
          <p className="font-semibold text-slate-800">{meeting.presiding}</p>
        </div>
        <div className="text-right">
          <span className="text-slate-500 block text-xs uppercase">Conducting</span>
          <p className="font-semibold text-slate-800">{meeting.conducting}</p>
        </div>
      </section>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section className="mb-6 pb-6 border-b border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Announcements
          </h3>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            {meeting.announcements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-4 text-sm">
        <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
          <span className="font-medium text-slate-700">Opening Hymn</span>
          <span className="text-slate-900 font-semibold">
            #{meeting.openingHymn.number} - {meeting.openingHymn.title}
          </span>
        </div>

        <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
          <span className="font-medium text-slate-700">Invocation</span>
          <span className="text-slate-900 font-semibold">{meeting.openingPrayer}</span>
        </div>

        {meeting.wardBusiness.length > 0 && (
          <div className="border-b border-dashed border-slate-200 pb-2">
            <span className="font-medium text-slate-700 block mb-1">Ward Business</span>
            <ul className="text-slate-800 text-sm italic pl-4 space-y-0.5">
              {meeting.wardBusiness.map((b, idx) => (
                <li key={idx}>• {b.description}</li>
              ))}
            </ul>
          </div>
        )}

        {meeting.stakeBusiness && (
          <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
            <span className="font-medium text-slate-700">Stake Business</span>
            <span className="text-amber-800 font-medium">Conducted by Stake Presidency</span>
          </div>
        )}

        {meeting.sacramentHymn.number > 0 && (
          <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
            <span className="font-medium text-slate-700">Sacrament Hymn</span>
            <span className="text-slate-900 font-semibold">
              #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
            </span>
          </div>
        )}

        <div className="py-2">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
            Program Content
          </h4>
          <div className="space-y-2">
            {meeting.speakers.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-baseline bg-slate-50 print:bg-transparent p-2 rounded"
              >
                <div>
                  <span className="font-semibold text-slate-900">{item.name}</span>
                  {item.topic && (
                    <span className="text-xs text-slate-500 block">Topic: {item.topic}</span>
                  )}
                </div>
                <span className="text-xs uppercase text-slate-500 font-medium tracking-wide">
                  {item.type === 'musical-number' ? 'Musical Number' : 'Speaker'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between border-b border-dashed border-slate-200 pb-2 pt-2">
          <span className="font-medium text-slate-700">Closing Hymn</span>
          <span className="text-slate-900 font-semibold">
            #{meeting.closingHymn.number} - {meeting.closingHymn.title}
          </span>
        </div>

        <div className="flex justify-between pb-2">
          <span className="font-medium text-slate-700">Benediction</span>
          <span className="text-slate-900 font-semibold">{meeting.closingPrayer}</span>
        </div>
      </section>
    </article>
  );
}