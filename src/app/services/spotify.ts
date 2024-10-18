
export const getAccessToken = async (): Promise<string | null> => {
    try {
      const res = await fetch('/api/spotify/token');
      const data = await res.json();
  
      if (!res.ok) {
        console.error('Failed to get access token');
        return null;
      }
  
      return data.access_token;
    } catch (error) {
      console.error('Error fetching token:', error);
      return null;
    }
  };
  
  export const getSpotifyData = async (endpoint: string) => {
    const accessToken = await getAccessToken();
  
    if (!accessToken) {
      throw new Error('No access token');
    }
  
    try {
      const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch Spotify data');
      }
  
      return await res.json();
    } catch (error) {
      console.error('Error fetching Spotify API:', error);
      return null;
    }
  };
  