import { useEffect, useRef, useState } from 'react';
import { login } from '../../services/auth.service';
import Button from '../element/Button';
import InputForm from '../element/input/InputForm';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState<string>('');
  const usernameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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
        toast.success('🦄 Login successful!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
        navigate('/');
      } else {
        setLoginFailed(res.response.data);
        toast.error('🚫 Login failed. Please try again.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    });
  };

  return (
    <>
      <ToastContainer />
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
