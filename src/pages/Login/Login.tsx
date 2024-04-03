import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    return dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" name="email" />
      <br />
      <input type="password" name="password" autoComplete="off" />
      <br />
      <button>login</button>
    </form>
  );
};

export default Login;
