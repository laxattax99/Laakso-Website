import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const SpotifyRecent = () => {
  const [recentSong, setRecentSong] = useState([]);

  useEffect(() => {
    const getRecentlyPlayed = async () => {
      const response = await axios.get("http://localhost:3001/recently-played");
      const recent = response.data;
      setRecentSong(recent);
    };
    getRecentlyPlayed();
  }, []);

  return (
    <div className="flex flex-col items-start m-4 p-4">
      <h2 className="text-4xl font-bold mb-4">Listening to:</h2>
      <Image
        className="shadow-lg"
        src={recentSong.Imageurl}
        alt="trackimage"
        width="300"
        height="300"
        ></Image>
      <p className="text-lg mt-4 p-1">{recentSong.Trackname}</p>
      <p className="text-lg mt-2 p-1">{recentSong.Artistname}</p>
    </div>
  );
};
export default SpotifyRecent;
