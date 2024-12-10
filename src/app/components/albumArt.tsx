"use client"

import { useEffect, useState } from "react";
import { getAlbums } from "../services/spotify";

export default function AlbumArt() {

    const [albums, setAlbums] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchAlbums = async () => {
        const albumIds = [
          "21PZ6vS8uahnrZmySYDh3K", "5n8ppNRmmYvkFGnQZPHdNc", "5GWW6Tsj1ojzdTfIWYtLmA",
          "6TJMdIq1xmVFOFoWrBDAU1", "5XlYVBaXjtBJjUQafmNqC8", "13vdgL9Dnx1HPsAoblDmod",
          "2vxiffHHOTPAbhRiAn44B8", "01PVvtU85NR2QJAlpwUKD5", "0tAqHptInfhc8HKYSTWEMp",
          "13LYdyvwNgwiiZH54nQbiE", "6L8iHimSAekApvL7gERFt5", "05G8lvi4ziqGao6fCfxMUO"
        ];
        setLoading(true);
        const albumData = await getAlbums(albumIds);
        if (albumData) setAlbums(albumData);
        setLoading(false);
      };
  
      fetchAlbums();
    }, []);

    if (loading) {
      // Show a skeleton loader grid
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="w-70 h-70 bg-gray-300 animate-pulse" />
          ))}
        </div>
      );
    }
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {albums && albums.map((album) => (
            <div key={album.id} className="relative w-70 h-70 group">
            <img src={album.images[0].url} alt={album.name} className="album-cover w-full h-full object-cover" />
            
            {/* This div will show only on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{album.artists[0].name}</p>
            </div>
          </div>
/*             <div key={album.id} className="w-70 h-70">
              <img src={album.images[0].url} alt={album.name} className="album-cover" />
            </div> */
          ))}
        </div>
      );
    };


