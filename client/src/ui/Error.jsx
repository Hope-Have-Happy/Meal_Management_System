import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const navigate = useNavigate();

  return (
    <main className='grid min-h-full h-screen place-items-center bg-white dark:bg-slate-800 px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-indigo-600'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600 dark:text-slate-400'>
          {error.statusText || error.message}
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <button
            onClick={() => navigate(-1)}
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Go back home
          </button>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
