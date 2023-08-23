import { Link } from "react-router-dom";

function Register() {
    return (
      <div className="container"> 
            <div className="auth">
            <h1>Register</h1>
  
            <form>
              <input required type="text" placeholder="username" />
              <input required type="email" placeholder="email" /> 
              <input required type="password" placeholder="password" />
              <button>Register</button>

              <p>Sorry there is an error!</p>
              <span>Do you have an account? <Link to="/login">Login</Link>
              </span>
          </form>
      </div>
    </div>
    )
  }

  export default Register;