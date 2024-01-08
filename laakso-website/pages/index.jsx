import SpotifyRecent from "@/components/SpotifyRecent";
import headshot from "../public/me_headshot.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen justify-evenly px-4 sm:px-0">
      <div className="flex flex-col justify-center items-center py-4">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg">
          <Image
            src={headshot}
            alt="headshot"
            fill
            style={{ objectFit: "cover", objectPosition: "center 50%" }}
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold py-4 mb-4">Colin Laakso</h1>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-xs sm:max-w-lg mx-auto">
          <p className="text-lg text-center mb-6">
            My Name is Colin Laakso. I am a software engineer with a passion for solving complex
            problems. I am based in Brooklyn, New York. I have worked on a combination of engineering teams, including full stack and DevOps roles.
            I am currently working at Wood Mackenzie as a Software Engineer. My current work has involved utilizing a variety of technologies including Azure, .NET, and React.
          </p>
        </div>
      </div>
      <SpotifyRecent />
    </div>
  );
}
