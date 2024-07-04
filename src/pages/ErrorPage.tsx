import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div className="flex justify-center  min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">sorry, an expected error has secured</p>
      {/* conditional rendering */}
      <p className="">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;