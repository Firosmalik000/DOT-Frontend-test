import { useEffect, useRef, useState } from 'react';
import { login } from '../../services/auth.service';
import Button from '../element/Button';
import InputForm from '../element/input/InputForm';
import 'react-toastify/dist/ReactToastify.css';

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState<string>('');
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    login(data, (status: boolean, res: any) => {
      if (status) {
        localStorage.setItem('token', res);

        window.location.href = '/';
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm label="Username" type="text" placeholder="John doe" name="username" ref={usernameRef} />
        <InputForm label="Password" type="password" placeholder="*********" name="password" />

        <Button className="bg-blue-600 w-full" type="submit">
          Login
        </Button>

        {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
      </form>
    </>
  );
};

export default FormLogin;
