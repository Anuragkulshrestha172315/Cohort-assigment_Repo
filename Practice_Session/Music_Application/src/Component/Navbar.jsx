import { Search, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5">
      <div className="text-white font-semibold text-lg tracking-wide">MusicHub</div>

      <div className="flex items-center gap-8 text-sm text-zinc-400">
        <Link to={'/home'} className="text-white font-medium border-b-2 border-purple-500 pb-1">Home</Link>
        <Link to={'/search'} className="hover:text-white transition-colors">Search</Link>
        <Link to={'favorites'} className="hover:text-white transition-colors">Favorites</Link>
      </div>

      <div className="flex items-center gap-4">
        <Search className="w-4 h-4 text-zinc-400" />
        <Bell className="w-4 h-4 text-zinc-400" />
      </div>
    </nav>
  );
}