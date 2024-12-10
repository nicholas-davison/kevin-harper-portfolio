//src/app/services/spotify.ts


let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

export const getAccessToken = async (): Promise<string | null> => {
  try {
    // Check if we have a cached token and if it's still valid
    const now = Date.now();
    if (cachedToken && tokenExpiry && now < tokenExpiry) {
      return cachedToken;
    }

    // Fetch a new token if none is cached or if it has expired
    const res = await fetch('/api/spotify-token');
    const data = await res.json();

    if (!res.ok) {
      console.error('Failed to get access token', data);
      return null;
    }

    // Cache the new token and its expiry time
    cachedToken = data.access_token;
    tokenExpiry = now + data.expires_in * 1000; // expires_in is in seconds

    return cachedToken;
  } catch (error) {
    console.error('Error fetching token:', error);
    return null;
  }
};
  
  export const getAlbums = async (albumIds: string[]): Promise<any[] | null> => {
    const accessToken = await getAccessToken();
    
    if (!accessToken) {
      throw new Error('No access token');
    }
  
    try {
      const res = await fetch(`https://api.spotify.com/v1/albums?ids=${albumIds.join(',')}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch albums');
      }
  
      const data = await res.json();
      return data.albums;
    } 
    catch (error) {
      console.error('Error fetching Spotify albums:', error);
      return null;
    }
  };
  