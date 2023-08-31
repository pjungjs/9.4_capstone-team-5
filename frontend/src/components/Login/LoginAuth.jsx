import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStytch, useStytchSession } from '@stytch/react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function LoginAuth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const client = useStytch();
  const { session } = useStytchSession();

  useEffect(() => {
    if (session) {
      navigate('/user/dashboard');
    } else {
      const token = searchParams.get('token');
      client.magicLinks
        .authenticate(token, {
          session_duration_minutes: 60,
        })
        .then(() => navigate(0))
        .catch((err) => console.error(err));
    }
  }, [client, session]);

  return (
    <div className="flex h-screen items-start justify-center text-center">
      <div className="m-8">
        <span className="flex items-center justify-center">
          <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
          <p className="p-4 text-xl">Loading...</p>
        </span>

        {/* <p className="p-6">Please wait while we authenticate your token.</p> */}
      </div>
    </div>
  );
}

export default LoginAuth;
