import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
        <img classname="w-full h-full object-cover" src={logo} alt="" />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-green-700 p-8 px-8 rounded-lg">
              <h2 className="text-4xl text-white font-bold text-center">LOGIN</h2>
              <div className="flex flex-col text-gray-400 py-2">
                <label>User Name</label>
                <input className="rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Password</label>
                <input className="rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  type="password" />
              </div>
              <div className="flex justify-between text-gray-400 py-2">
                <p className="flex items-center"><input className="mr-2" type="checkbox" /> Remember Me</p>
                <p>Forgot password?</p>
              </div>
              <button className="w-full my-5 py-2 bg-blue-500 shadow-lg" >Login</button>


              {/* <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>Login</button> */}
              {/* <p>Sorry there is an error!</p>
              <span>Do you have an account? <Link to="/register">Register</Link>
              </span> */}
          </form>
        </div>
    </div>
    )
  }
  
  export default Login;