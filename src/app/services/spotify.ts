//src/app/services/spotify.ts


export const getAccessToken = async (): Promise<string | null> => {
  try {
    // Fetch a new token
    const res = await fetch('/api/spotify-token');
    const data = await res.json();

    if (!res.ok) {
      console.error('Failed to get access token', data);
      return null;
    }

    // Return the fetched access token
    return data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error);
    return null;
  }
};

type SpotifyAlbum = {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  artists: {
    name: string;
  }[];
}
  
  export const getAlbums = async (albumIds: string[], accessToken: string): Promise<SpotifyAlbum[] | null> => {
    /* const accessToken = await getAccessToken(); */
    

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
  