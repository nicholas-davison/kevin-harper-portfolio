"use client"

import React, { useEffect, useState } from "react";
import { getAlbums, getAccessToken } from "../services/spotify";

export default function AlbumArt() {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Fetch access token and set it in state
  useEffect(() => {
    const fetchToken = async () => {
      setLoading(true);
      const token = await getAccessToken();
      if (token) {
        setAccessToken(token);
      } else {
        console.error("Failed to fetch access token");
        setLoading(false);
      }
    };

    fetchToken();
  }, []); // Run only once when the component mounts

  // Fetch albums whenever the access token changes
  useEffect(() => {
    if (!accessToken) return;

    const fetchAlbums = async () => {
      const albumIds = [
        "21PZ6vS8uahnrZmySYDh3K",
        "5n8ppNRmmYvkFGnQZPHdNc",
        "6TJMdIq1xmVFOFoWrBDAU1",
        "5XlYVBaXjtBJjUQafmNqC8",
        "13vdgL9Dnx1HPsAoblDmod",
        "2vxiffHHOTPAbhRiAn44B8",
        "01PVvtU85NR2QJAlpwUKD5",
        "0tAqHptInfhc8HKYSTWEMp",
        "2fs0PRgx5wEo3tZfpIyglT",
        "6L8iHimSAekApvL7gERFt5",
        "05G8lvi4ziqGao6fCfxMUO",
        "2Ckq4YOi4Qqjm4GemELxjW",
      ];
      setLoading(true);

      try {
        const albumData = await getAlbums(albumIds);
        if (albumData) {
          setAlbums(albumData);
        }
      } catch (error) {
        console.error("Error fetching albums:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [accessToken]); // Dependency on accessToken

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
              <a
                key={album.id}
                href={album.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-70 h-70 group"
              >
                <img src={album.images[0].url} alt={album.name} className="album-cover w-full h-full object-cover" />
        
                {/* This div will show only on hover */}
              
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{album.artists[0].name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
    };
