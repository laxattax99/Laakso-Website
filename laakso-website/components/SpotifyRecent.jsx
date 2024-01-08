import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { getRecentlyPlayed } from "@/services/LastFMService";
const SpotifyRecent = () => {
  const [recentSong, setRecentSong] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecentlyPlayed()
    .then( lastFmResponse => {
      setRecentSong(lastFmResponse);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start m-4 p-4">
      <h2 className="text-4xl font-bold mb-4">Listening to:</h2>
      <Image
        className="shadow-lg"
        src={recentSong.ImageUrl}
        alt="trackimage"
        width="300"
        height="300"
      />
      <p className="text-lg mt-4 p-1">{recentSong.TrackName}</p>
      <p className="text-lg mt-2 p-1">{recentSong.ArtistName}</p>
    </div>
  );
};
export default SpotifyRecent;
