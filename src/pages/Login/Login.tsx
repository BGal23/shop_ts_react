import LogForm from "../../components/LogForm/LogForm";

export interface Login {
  target: {
    name: {
      value: string;
    };
    password: {
      value: string;
    };
    email: {
      value: string;
    };
  };
  preventDefault: () => void;
}

const Login = () => {
  return <LogForm isLogin={true} />;
};

export default Login;
