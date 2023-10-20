export default function AdminHomePage() {
  return (
    /* 
    - Total cash
    - Due cash
    - Extra cash
    - This month total expense
    - Total user
    - This month current meal rate
    - This year average meal rate 
    */

    <>
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Analytics
      </h1>

      {/*   Analytics */}
      <ul className='flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 mx-auto w-full mt-10'>
        <li className='w-full text-sm font-semibold dark:text-cyan-200 p-6 dark:bg-[#17324E] bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center'>
          <span className='mb-3 text-teal-400 font-display text-[30px]'>
            10,000
          </span>
          Total Cash
        </li>
        <li className='w-full text-sm font-semibold dark:text-cyan-200 p-6 dark:bg-[#17324E] bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center'>
          <span className='mb-3 text-teal-400 font-display text-[30px]'>
            5,000
          </span>
          Due Cash
        </li>
        <li className='w-full text-sm font-semibold dark:text-cyan-200 p-6 dark:bg-[#17324E] bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center'>
          <span className='mb-3 text-teal-400 font-display text-[30px]'>
            50,000
          </span>
          Month Expense
        </li>
        <li className='w-full text-sm font-semibold dark:text-cyan-200 p-6 dark:bg-[#17324E] bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center'>
          <span className='mb-3 text-teal-400 font-display text-[30px]'>
            5,000
          </span>
          Total User
        </li>
        <li className='w-full text-sm font-semibold dark:text-cyan-200 p-6 dark:bg-[#17324E] bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center'>
          <span className='mb-3 text-teal-400 font-display text-[30px]'>
            40
          </span>
          Current Meal Rate
        </li>
        <li className='w-full text-sm font-semibold dark:text-cyan-200 p-6 dark:bg-[#17324E] bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center'>
          <span className='mb-3 text-teal-400 font-display text-[30px]'>
            40
          </span>
          This Year Average Meal Rate
        </li>
      </ul>

      <div className='grid xl:grid-cols-2 gap-5'>
        {/* User Table */}
        <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
          <div className='flex-row sm:flex items-center justify-between pb-6'>
            <div>
              <h2 className='dark:text-gray-200 text-gray-600 font-semibold'>
                Users List
              </h2>
              <span className='text-xs dark:text-gray-300'>All Users</span>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex dark:bg-slate-600 bg-gray-50 items-center p-2 rounded-md mt-2 sm:mt-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  />
                </svg>
                <input
                  className='dark:bg-slate-600 dark:text-gray-200 text-gray-800 bg-gray-50 outline-none ml-1 block'
                  type='text'
                  name=''
                  id=''
                  placeholder='search...'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        Name
                      </th>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        Products
                      </th>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        Created at
                      </th>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        QRT
                      </th>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Admin
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Jan 21, 2020
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          43
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                          <span className='relative dark:text-gray-300 text-green-900'>
                            Active
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Admin
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Jan 21, 2020
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          43
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                          <span className='relative dark:text-gray-300 text-green-900'>
                            Active
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Admin
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Jan 21, 2020
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          43
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                          <span className='relative dark:text-gray-300 text-green-900'>
                            Active
                          </span>
                        </span>
                      </td>
                    </tr>
                    {/* Add more rows here */}
                  </tbody>
                </table>
                <div className='px-5 py-5 dark:bg-gray-900 bg-white border-t dark:border-gray-500 border-gray-200 flex flex-col xs:flex-row items-center xs:justify-between'>
                  <span className='text-xs xs:text-sm dark:text-gray-200  text-gray-900'>
                    Showing 1 to 4 of 50 Entries
                  </span>
                  <div className='inline-flex mt-2 xs:mt-0'>
                    <button className='text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l'>
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button className='text-sm text-indigo-50 transition duration-150 hover-bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r'>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* User Table */}
        <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
          <div className='flex-row sm:flex items-center justify-between pb-6'>
            <div>
              <h2 className='dark:text-gray-200 text-gray-600 font-semibold'>
                Users List
              </h2>
              <span className='text-xs dark:text-gray-300'>All Users</span>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex dark:bg-slate-600 bg-gray-50 items-center p-2 rounded-md mt-2 sm:mt-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  />
                </svg>
                <input
                  className='dark:bg-slate-600 dark:text-gray-200 text-gray-800 bg-gray-50 outline-none ml-1 block'
                  type='text'
                  name=''
                  id=''
                  placeholder='search...'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        Name
                      </th>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        Products
                      </th>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        Created at
                      </th>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        QRT
                      </th>
                      <th className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Admin
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Jan 21, 2020
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          43
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                          <span className='relative dark:text-gray-300 text-green-900'>
                            Active
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Admin
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Jan 21, 2020
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          43
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                          <span className='relative dark:text-gray-300 text-green-900'>
                            Active
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Admin
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          Jan 21, 2020
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <p className='dark:text-gray-300 text-gray-900 whitespace-no-wrap'>
                          43
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                          <span className='relative dark:text-gray-300 text-green-900'>
                            Active
                          </span>
                        </span>
                      </td>
                    </tr>
                    {/* Add more rows here */}
                  </tbody>
                </table>
                <div className='px-5 py-5 dark:bg-gray-900 bg-white border-t dark:border-gray-500 border-gray-200 flex flex-col xs:flex-row items-center xs:justify-between'>
                  <span className='text-xs xs:text-sm dark:text-gray-200  text-gray-900'>
                    Showing 1 to 4 of 50 Entries
                  </span>
                  <div className='inline-flex mt-2 xs:mt-0'>
                    <button className='text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l'>
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button className='text-sm text-indigo-50 transition duration-150 hover-bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r'>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
