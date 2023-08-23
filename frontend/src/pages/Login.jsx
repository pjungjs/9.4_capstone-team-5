import { Link } from "react-router-dom";

function Login() {
    return (
      <div className="container">
            <div className="auth">
            <h1>Login</h1>
  
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>Login</button>

              <p>Sorry there is an error!</p>
              <span>Do you have an account? <Link to="/register">Register</Link>
              </span>
          </form>
      </div>
    </div>
    )
  }
  
  export default Login;