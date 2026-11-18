import { NextResponse } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') ?? searchParams.get('date') ?? '';
  const page = Number(searchParams.get('page')) || 1;
  const results = await getMeetings(query, page);
  return NextResponse.json(results);
}
