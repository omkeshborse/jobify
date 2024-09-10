import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link to={"/login"}>LogIn Page</Link>
    </div>
  );
}
export default Register