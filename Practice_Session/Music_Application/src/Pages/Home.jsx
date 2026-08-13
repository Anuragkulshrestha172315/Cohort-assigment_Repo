import { Search, Play } from "lucide-react";
import Navbar from "../Component/Navbar";

const trendingSongs = [
  { title: "Midnight Pulse", artist: "Neon Archives", duration: "3:42", cover: "bg-gradient-to-br from-fuchsia-600 via-purple-700 to-indigo-900" },
  { title: "Ethereal Silence", artist: "Luna Thorne", duration: "4:08", cover: "bg-gradient-to-br from-zinc-700 via-zinc-800 to-black" },
  { title: "Glitch Nation", artist: "Dynasty Void", duration: "3:07", cover: "bg-gradient-to-br from-cyan-500 via-purple-700 to-fuchsia-800" },
  { title: "Velvet Echoes", artist: "The Braxtons", duration: "3:55", cover: "bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500" },
];

function Hero() {
  return (
    <section className="text-center px-6 pt-20 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        Discover Your <span className="text-purple-500">Next Favorite</span> Song
      </h1>
      <p className="text-zinc-400 text-sm mt-4 max-w-md mx-auto">
        Stream millions of tracks and support your favorite artists with high-fidelity
        audio and personalized recommendations.
      </p>

      <div className="mt-8 max-w-md mx-auto flex items-center bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3">
        <Search className="w-4 h-4 text-zinc-500 mr-3" />
        <input
          type="text"
          placeholder="Search by song, artist, or album..."
          className="bg-transparent outline-none text-sm text-zinc-300 placeholder-zinc-500 flex-1"
        />
        <button className="bg-purple-600 hover:bg-purple-500 transition-colors w-8 h-8 rounded-full flex items-center justify-center">
          <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
        </button>
      </div>
    </section>
  );
}

function SongCard({ song }) {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors">
      <div className={`relative h-40 ${song.cover}`}>
        <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
          <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
        </button>
        <span className="absolute top-3 right-3 text-[10px] bg-black/50 text-zinc-200 px-2 py-0.5 rounded-full">
          {song.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-white text-sm font-medium">{song.title}</h3>
        <p className="text-zinc-500 text-xs mt-1">{song.artist}</p>
        <span className="inline-block mt-3 text-[10px] text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">
          ● Playing
        </span>
      </div>
    </div>
  );
}

function TrendingSongs() {
  return (
    <section className="px-8 py-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-semibold text-lg">Trending Songs</h2>
        <a href="#" className="text-purple-400 text-xs hover:text-purple-300">View all →</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trendingSongs.map((song) => (
          <SongCard key={song.title} song={song} />
        ))}
      </div>
    </section>
  );
}

function PremiumBanner() {
  return (
    <section className="mx-8 my-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 px-8 py-10 flex items-center justify-between flex-wrap gap-6">
      <div className="max-w-md">
        <h3 className="text-white text-xl font-semibold leading-snug">
          Support the creators you love <br /> with MusicHub Premium.
        </h3>
        <p className="text-zinc-400 text-sm mt-2">
          Get ad-free listening, offline downloads, and higher quality audio while giving
          back to your favorite artists.
        </p>
        <div className="flex items-center gap-3 mt-5">
          <button className="bg-purple-600 hover:bg-purple-500 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-full">
            Go Premium
          </button>
          <button className="border border-zinc-700 hover:border-zinc-600 transition-colors text-white text-sm px-5 py-2.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-20 h-20 rounded-full border border-purple-500/40 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 py-6 flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-900 mt-6">
      <span>MusicHub © 2025 MusicHub Inc. All rights reserved.</span>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
        <a href="#" className="hover:text-zinc-300">Terms of Service</a>
        <a href="#" className="hover:text-zinc-300">Cookies</a>
        <a href="#" className="hover:text-zinc-300">Help Center</a>
      </div>
    </footer>
  );
}

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <TrendingSongs />
      <PremiumBanner />
      <Footer />
    </div>
  );
}
export default Home;