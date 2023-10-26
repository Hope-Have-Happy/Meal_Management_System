/* eslint-disable react/prop-types */
import { useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";

export default function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Update Settings Info Modal */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /* Close Settings Info Modal */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Settings
      </h1>
      {/* Settings Info */}
      <>
        <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
          <div>
            <div>
              <div className='px-4 sm:px-0 flex items-center justify-between w-100'>
                <div>
                  <h3 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 '>
                    Settings Information
                  </h3>
                  <p className='mt-1 max-w-2xl text-sm leading-6 dark:text-gray-300 text-slate-900 '>
                    Settings details and application.
                  </p>
                </div>
                <button
                  className='bg-[#bfbdbd] px-5 py-2 rounded-lg flex items-center'
                  onClick={openModal}>
                  Update
                  <GrDocumentUpdate className='ml-2' />
                </button>
              </div>
              <div className='mt-6 border-t border-gray-100'>
                <dl className='divide-y divide-gray-100'>
                  {/*   Shut Down App */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Shut Down App
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      Yes
                    </dd>
                  </div>
                  {/* Shut Down Reason */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Shut Down Reason
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      Updating
                    </dd>
                  </div>
                  {/* Contact Name */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Contact Name
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      Admin
                    </dd>
                  </div>
                  {/* Contact Number */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Contact Number
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      +8801XXXXXXXXX
                    </dd>
                  </div>
                  {/* Meal Set Last Time */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Meal Set Last Time
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      5 PM
                    </dd>
                  </div>
                  {/* Meal Set Alert Time */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Meal Set Alert Time
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      4:30 PM
                    </dd>
                  </div>
                  {/* Alert Text For All */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Alert Text For All
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      N/A
                    </dd>
                  </div>
                  {/* today_meal_cooking_end_time */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Today Meal Cooking End Time
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      5 PM - 10 PM
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Modal */}
      {isModalOpen && <ModalComponent closeModal={closeModal} />}
    </>
  );
}

/* Update User Info Modal*/

function ModalComponent({ closeModal }) {
  return (
    <div className='fixed z-[999] inset-0 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        {/* Background overlay */}
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        {/* Center modal */}
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'>
          &#8203;
        </span>
        <div
          className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-lg'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'>
          {/* Close Button */}
          <button
            className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 transition duration-150 ease-in-out rounded focus:outline-none'
            onClick={closeModal}
            aria-label='close modal'
            role='button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-x'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              strokeWidth='2.5'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z'></path>
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </button>
          {/* Modal content */}
          <div className='bg-white dark:bg-gray-900 dark:text-gray-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <h1 className='dark:text-gray-200 text-gray-600 font-semibold text-2xl'>
              Update Settings Info
            </h1>
            <div className='space-y-12'>
              {/* Fields */}

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                {/* shut down app */}
                <div>
                  <label
                    htmlFor='shut_down_app'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Shut Down App
                  </label>
                  <div className='mt-2'>
                    <select
                      type='number'
                      name='shut_down_app'
                      id='shut_down_app'
                      required
                      placeholder='Enter Full Name'
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                      <option value={0}>Yes</option>
                      <option value={1}>No</option>
                    </select>
                  </div>
                </div>

                {/* shut down reason */}
                <div>
                  <label
                    htmlFor='shut_down_reason'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Shut Down Reason
                  </label>
                  <div className='mt-2'>
                    <input
                      type='Text'
                      name='shut_down_reason'
                      id='shut_down_reason'
                      placeholder='Enter Shut Down Reason'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                {/* contact Name */}
                <div>
                  <label
                    htmlFor='contact_name'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Contact Name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='Text'
                      name='contact_name'
                      id='contact_name'
                      placeholder='Enter Contact Name'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* contact number */}
                <div>
                  <label
                    htmlFor='contact_number'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Contact Name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='Text'
                      name='contact_number'
                      id='contact_number'
                      placeholder='Enter Contact Number'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* meal set last time */}
                <div>
                  <label
                    htmlFor='meal_set_last_time'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Meal Set Last Time
                  </label>
                  <div className='mt-2'>
                    <input
                      type='Text'
                      name='meal_set_last_time'
                      id='meal_set_last_time'
                      placeholder='Enter Meal Set Last Time'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* meal set alert time */}
                <div>
                  <label
                    htmlFor='meal_set_alert_time'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Meal Set Alert Time
                  </label>
                  <div className='mt-2'>
                    <input
                      type='Text'
                      name='meal_set_alert_time'
                      id='meal_set_alert_time'
                      placeholder='Enter Meal Set Alert Time'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* meal set text time */}
                <div>
                  <label
                    htmlFor='meal_set_text_time'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Meal Set Text Time
                  </label>
                  <div className='mt-2'>
                    <input
                      type='Text'
                      name='meal_set_text_time'
                      id='meal_set_text_time'
                      placeholder='Enter Meal Set Text Time'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* today meal cooking end time */}
                <div>
                  <label
                    htmlFor='today_meal_cooking_end_time'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Today Meal Cooking End Time
                  </label>
                  <div className='mt-2'>
                    <input
                      type='Text'
                      name='today_meal_cooking_end_time'
                      id='today_meal_cooking_end_time'
                      placeholder='Enter Today Meal Cooking End Time'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>

              {/* Submit & Modal Close Button */}
              <div className='mt-6 flex items-center justify-end gap-x-6 border-t pt-4 dark:border-gray-600'>
                <button
                  onClick={closeModal}
                  type='button'
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'>
                  Close
                </button>
                <button
                  type='submit'
                  className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Update Settings Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
