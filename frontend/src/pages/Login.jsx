import { useState } from 'react';
import { useStytch } from '@stytch/react';
import { FcGoogle } from 'react-icons/fc';

function Login() {
  const [email, setEmail] = useState('');
  const [loginType, setLoginType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const client = useStytch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (loginType === 'magicLink') {
      await client.magicLinks.email.loginOrCreate(email);
      setIsSubmitted(!isSubmitted);
    } else if (loginType === 'google') {
      await client.oauth.google.start();
    }
  }

  return (
    <div className="flex h-screen items-start justify-center">
      <div className="mt-12 w-80 rounded-md border border-gray-300 p-4 text-center">
        <p className="pb-2 text-2xl font-bold text-green-600">
          Sign Up{' '}
          <span className="pb-2 text-2xl font-normal text-gray-700">or</span>{' '}
          Log In
        </p>

        {isSubmitted && (
          <p className="py-2 text-sm text-blue-400 underline">
            A verification link was sent to your email!
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
            />
          </div>

          <input
            type="submit"
            value="Continue with email"
            onClick={() => setLoginType('magicLink')}
            className="cust-btn w-full rounded-md p-2"
          />

          <div className="m-4 flex items-center">
            <hr className="border-1 flex-grow border-gray-300" />
            <span className="px-3 font-medium text-gray-900">or</span>
            <hr className="border-1 flex-grow border-gray-300" />
          </div>

          <button
            type="submit"
            onClick={() => setLoginType('google')}
            className="cust-btn group flex w-full items-center justify-center rounded-md p-2"
          >
            <span className="rounded-full group-hover:bg-white">
              <FcGoogle size="20px" />
            </span>
            <span className="pl-2">Continue with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
