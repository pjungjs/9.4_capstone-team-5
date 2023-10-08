import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-green-400">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-[#1A2238] px-2 text-sm text-[#fc5c2b]">
        Page Not Found!
      </div>
      <button className="mt-5">
        <div className="focus:ooutline-none group relative inline-block text-sm font-medium text-[#fc5c2b] focus:ring active:text-red-500">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#fc5c2b] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="relative block border border-current bg-[#1A2238] px-8 py-3">
            <Link to="/">Go Home</Link>
          </span>
        </div>
      </button>
    </main>
  );
}

export default NotFound;
