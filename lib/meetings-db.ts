import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-11-08',
    meetingType: 'regular',
    presiding: 'Bishop Davis',
    conducting: 'Brother Miller',
    announcements: [
      'Ward Temple Night this Thursday at 7:00 PM',
      'Youth Activity Day on Saturday morning'
    ],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Anderson',
    wardBusiness: [{ description: 'Sustaining of new Primary teacher' }],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [
      { name: 'Brother Harris', topic: 'Developing Personal Faith', type: 'speaker' },
      { name: 'Ward Choir', topic: 'Peace in Christ', type: 'musical-number' },
      { name: 'Sister Nelson', topic: 'Ministering with Love', type: 'speaker' }
    ],
    closingHymn: { number: 301, title: 'I Am a Child of God' },
    closingPrayer: 'Brother Wilson'
  },
  {
    id: 2,
    date: '2026-11-01',
    meetingType: 'testimony',
    presiding: 'Bishop Davis',
    conducting: 'Brother Clark',
    announcements: ['Fast Sunday - Fast offerings will be collected'],
    openingHymn: { number: 58, title: 'Come, Let Us Anew' },
    openingPrayer: 'Brother Thomas',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Congregation', topic: 'Bearing of Testimonies', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Sister Roberts'
  },
  {
    id: 3,
    date: '2026-10-25',
    meetingType: 'regular',
    presiding: 'Bishop Davis',
    conducting: 'Brother Miller',
    announcements: ['Choir rehearsal at 4:00 PM in the chapel'],
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Sister Martinez',
    wardBusiness: [{ description: 'Release of Sunday School presidency' }],
    stakeBusiness: true,
    sacramentHymn: { number: 184, title: 'Upon the Cross of Calvary' },
    speakers: [
      { name: 'Sister Johnson', topic: 'The Power of Gratitude', type: 'speaker' },
      { name: 'Brother Taylor', topic: 'Covenants and Discipleship', type: 'speaker' }
    ],
    closingHymn: { number: 166, title: 'Abide with Me!' },
    closingPrayer: 'Brother Adams'
  },
  {
    id: 4,
    date: '2026-10-18',
    meetingType: 'stake',
    presiding: 'President Scott',
    conducting: 'Brother Walker',
    announcements: ['Stake Conference broadcast from the Stake Center'],
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Brother Evans',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 0, title: 'None (Stake Conference)' },
    speakers: [
      { name: 'Stake Presidency', topic: 'Building Strong Families', type: 'speaker' }
    ],
    closingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    closingPrayer: 'Sister White'
  },
  {
    id: 5,
    date: '2026-10-04',
    meetingType: 'general',
    presiding: 'First Presidency',
    conducting: 'Assigned General Authority',
    announcements: ['Semi-Annual General Conference Sessions'],
    openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
    openingPrayer: 'General Authority',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 0, title: 'None (General Conference)' },
    speakers: [
      { name: 'Church Leaders', topic: 'Messages of the Restoration', type: 'speaker' }
    ],
    closingHymn: { number: 156, title: 'Sing We Now at Parting' },
    closingPrayer: 'General Authority'
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}