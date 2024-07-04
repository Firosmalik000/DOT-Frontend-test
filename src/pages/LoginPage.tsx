import AuthLayout from '../components/layout/AuthLayout';
import FormLogin from '../components/fragment/FormLogin';

const LoginPage = () => {
  return (
    <div>
      <AuthLayout title={'login'} type={'login'}>
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
