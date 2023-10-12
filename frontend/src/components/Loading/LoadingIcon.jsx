import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function LoadingIcon() {
  return (
    <div className="flex items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
      <p className="p-4 text-xl">Loading...</p>
    </div>
  );
}

export default LoadingIcon;
