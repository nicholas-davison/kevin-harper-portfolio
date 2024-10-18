// src/app/api/spotify/token/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to obtain token' }, { status: 500 });
    }

    return NextResponse.json(data); // send the access token to the client
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
