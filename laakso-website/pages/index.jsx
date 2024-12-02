import VisitorCounter from '@/components/VisitorCounter';
import Bio from '../components/Bio';
import { useState } from 'react';
import SpotifyRecent from '@/components/SpotifyRecent';

export default function Home() {
  const [isCounterOpen, setIsCounterOpen] = useState(true);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="snap-start h-screen">
        <VisitorCounter
          visitCount={777}
          isOpen={isCounterOpen}
          onClose={() => setIsCounterOpen(false)}
        />
      </div>
      <div className="snap-start h-screen">
        <Bio />
      </div>
      <div className="snap-start h-screen">
        <SpotifyRecent />
      </div>
    </div>
  );
}
