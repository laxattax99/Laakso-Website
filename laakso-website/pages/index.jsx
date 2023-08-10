import SpotifyRecent from "@/components/SpotifyRecent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen justify-evenly">
      <div className="flex flex-row items-center justify-center bg-gray-100 ">
        <div className="flex flex-col justify-centers py-4 ml-4">
          <h1 className="text-6xl font-bold mb-4">Colin Laakso</h1>
          <p className="text-lg text-center mb-6">
            I am a software engineer with a passion for solving complex
            problems.
          </p>
        </div>
        <div className="flex justify-center items-center py-4 ml-4">
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/../public/assets/me_headshot.jpg"
              alt="headshot"
              fill
              style={{ objectFit: "cover", objectPosition: "center 50%" }}
            />
          </div>
        </div>
      </div>
      <SpotifyRecent />
    </div>
  );
}
