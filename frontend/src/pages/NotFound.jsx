import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#00b2eede]">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        404
      </h1>
      <div className="text-md absolute rotate-12 rounded bg-[#ff0000] px-2">
        Page Not Found!
      </div>
      <button className="mt-5">
        <div className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-red-500">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 text-green-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="text-md relative block border border-current bg-[#1A2238] px-8 py-3">
            <Link to="/">Go Home</Link>
          </span>
        </div>
      </button>
    </main>
  );
}

export default NotFound;
