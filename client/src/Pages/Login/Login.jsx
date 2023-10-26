import React, { useState } from "react";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  function handleMobileChange(event) {
    setMobile(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const loginData = {
      mobile,
      password,
    };
  }

  return (
    <>
      <div className='flex min-h-full h-screen bg-white dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div
          className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'
          onSubmit={handleSubmit}>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label
                htmlFor='mobile'
                className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'>
                Mobile
              </label>
              <div className='mt-2'>
                <input
                  id='mobile'
                  name='mobile'
                  type='text'
                  required
                  value={mobile}
                  onChange={handleMobileChange}
                  className='block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'>
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className='block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
