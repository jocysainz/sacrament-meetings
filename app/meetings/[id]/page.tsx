import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';
import MeetingDetail from '@/components/MeetingDetail';
import PrintButton from '@/components/PrintButton';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MeetingDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const numId = parseInt(resolvedParams.id, 10);

  if (isNaN(numId)) {
    notFound();
  }

  const meeting = getMeetingById(numId);
  if (!meeting) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-end mb-4 print:hidden">
        <PrintButton />
      </div>
      <MeetingDetail meeting={meeting} />
    </div>
  );
}