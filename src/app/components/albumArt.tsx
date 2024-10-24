"use client"

import { useEffect, useState } from "react";

export default function AlbumArt() {

    const [albums, setAlbums] = useState<any[]>([]);

    useEffect(() => {
      const fetchAlbums = async () => {
        // Fetch token from the Next.js API route
        const tokenResponse = await fetch('/api/spotify-token');
        const { access_token } = await tokenResponse.json();
        
        const albumIds = [
            "21PZ6vS8uahnrZmySYDh3K",
            "5n8ppNRmmYvkFGnQZPHdNc",
            "5GWW6Tsj1ojzdTfIWYtLmA",
            "6TJMdIq1xmVFOFoWrBDAU1",
            "5XlYVBaXjtBJjUQafmNqC8",
            "13vdgL9Dnx1HPsAoblDmod",
            "2vxiffHHOTPAbhRiAn44B8",
            "01PVvtU85NR2QJAlpwUKD5",
            "0tAqHptInfhc8HKYSTWEMp",
            "13LYdyvwNgwiiZH54nQbiE",
            "6L8iHimSAekApvL7gERFt5",
            "05G8lvi4ziqGao6fCfxMUO"
        ]
        // Fetch album data from Spotify
        const albumResponse = await fetch(`https://api.spotify.com/v1/albums?ids=${albumIds}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        const albumData = await albumResponse.json();
        setAlbums(albumData.albums);
      };
  
      fetchAlbums();
    }, []);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {albums.map((album) => (
            <div key={album.id} className="w-70 h-70">
              <img src={album.images[0].url} alt={album.name} className="album-cover" />
            </div>
          ))}
        </div>
      );
    };
    
/*     return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
            <div className="bg-gray-800 w-60 h-60 rounded-md"></div>
        </div>
    ) 
} */

