import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

function Login() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
  }

  return (
    <div className="flex h-screen items-start justify-center">
      <div className="mt-12 w-80 rounded-md border border-gray-300 p-4 text-center">
        <p className="pb-2 text-2xl font-bold text-green-600">
          Sign Up{' '}
          <span className="pb-2 text-2xl font-normal text-gray-700">or</span>{' '}
          Log In
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

          <button className="cust-btn group flex w-full items-center justify-center rounded-md p-2">
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
