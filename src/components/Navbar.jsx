import { Rocket, User, Shield } from "lucide-react";

export default function Navbar({ onAuthClick }) {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-800 text-lg">Nimbus SaaS</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#dashboard" className="hover:text-slate-900 transition-colors">Dashboard</a>
          <a href="#security" className="hover:text-slate-900 transition-colors flex items-center gap-1">
            <Shield size={16} /> Security
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onAuthClick}
            className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          >
            <User size={16} />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
