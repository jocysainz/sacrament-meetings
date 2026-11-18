import { redirect } from 'next/navigation';
import { getMeetings } from '@/lib/meetings-db';

export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 is Sunday
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const sundayStr = sunday.toISOString().split('T')[0];
  const matched = await getMeetings(sundayStr, 1);

  if (matched.length > 0) {
    redirect(`/meetings/${matched[0].id}`);
  }

  const allMeetings = await getMeetings('', 1);
  if (allMeetings.length > 0) {
    redirect(`/meetings/${allMeetings[0].id}`);
  }

  redirect('/meetings');
}
