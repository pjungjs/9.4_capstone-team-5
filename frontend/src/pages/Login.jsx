import { useState } from 'react';
import { useStytch } from '@stytch/react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

function Login() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const client = useStytch();

  async function handleSubmit(event) {
    event.preventDefault();
    await client.magicLinks.email.loginOrCreate(email);
    setIsSubmitted(!isSubmitted);
  }

  async function startOAuth(type) {
    if (type === 'google') {
      await client.oauth.google.start();
    } else if (type === 'github') {
      await client.oauth.github.start();
    }
  }

  return (
    <div className="flex h-screen items-start justify-center">
      <div className="mt-12 w-80 rounded-md border border-gray-300 p-4 text-center">
        {isSubmitted ? (
          <div>
            <p className="pb-2 text-2xl font-bold text-green-600">
              Check your email
            </p>
            <p className="p-6 text-left">
              An email was sent to <span className="font-bold">{email}</span>
            </p>
            <button
              className="cust-btn w-full rounded-md p-2"
              onClick={() => {
                setEmail('');
                setIsSubmitted(!isSubmitted);
              }}
            >
              Try again
            </button>
          </div>
        ) : (
          <div>
            <p className="pb-2 text-2xl font-bold text-green-600">
              Sign Up <span className="font-normal text-gray-700">or</span> Log
              In
            </p>
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
                className="cust-btn w-full rounded-md p-2"
              />

              <div className="m-4 flex items-center">
                <hr className="border-1 flex-grow border-gray-300" />
                <span className="px-3 font-medium text-gray-900">or</span>
                <hr className="border-1 flex-grow border-gray-300" />
              </div>

              <div className="grid gap-2 md:flex">
                <button
                  type="button"
                  onClick={() => startOAuth('google')}
                  className="cust-btn group flex w-full items-center justify-center rounded-md p-2"
                >
                  <span className="rounded-full group-hover:bg-white">
                    <FcGoogle size="20px" />
                  </span>
                  <span className="pl-2 md:text-left">
                    Continue with Google
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => startOAuth('github')}
                  className="cust-btn flex w-full items-center justify-center rounded-md p-2"
                >
                  <span className="rounded-full">
                    <AiFillGithub size="20px" />
                  </span>
                  <span className="pl-2 md:text-left">
                    Continue with GitHub
                  </span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
