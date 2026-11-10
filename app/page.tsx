import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="text-center py-8">
      <div className="relative w-full max-w-2xl h-64 sm:h-80 mx-auto rounded-xl overflow-hidden shadow-md mb-8">
      <Image
          src="/chapel.jpg.webp"
          alt="Peaceful chapel sanctuary with rows of benches"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />  
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        Sacrament Meeting Planner
      </h1>
      <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-600 mb-8">
        Organize, review, and print weekly sacrament meeting programs for bishoprics, leaders, and ward members.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/meetings/current"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg shadow transition-colors text-sm"
        >
          View Current Sunday
        </Link>
        <Link
          href="/meetings"
          className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors text-sm"
        >
          Browse All Meetings
        </Link>
      </div>
    </main>
  );
}