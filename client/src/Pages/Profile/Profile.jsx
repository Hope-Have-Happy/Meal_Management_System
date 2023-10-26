/* eslint-disable react/prop-types */
import { useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";

/* Logged In Profile */
export default function profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Update profile Info Modal */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /* Close profile Info Modal */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Profile
      </h1>
      {/* profile Info */}
      <>
        <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
          <div>
            <div>
              <div className='px-4 sm:px-0 flex items-center justify-between w-100'>
                <div>
                  <h3 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 '>
                    Profile Information
                  </h3>
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
                  {/* Photo */}
                  <div className='flex items-center justify-center m-2'>
                    <img
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                      alt=''
                      className=' rounded-full '
                    />
                  </div>
                  {/*   Full Name */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Full Name
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      Alex John
                    </dd>
                  </div>
                  {/* User Role */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      User Role
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      Admin
                    </dd>
                  </div>
                  {/* Email */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Email
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      alex@example.com
                    </dd>
                  </div>
                  {/* Mobile Number */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Mobile
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      +8801XXXXXXXXX
                    </dd>
                  </div>
                  {/* Department */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Department
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      IT
                    </dd>
                  </div>
                  {/* Address */}
                  <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                    <dt className='text-sm font-medium leading-6  dark:text-gray-300 text-slate-900 '>
                      Address
                    </dt>
                    <dd className='mt-1 text-sm leading-6 dark:text-gray-300  text-gray-700 sm:col-span-2 sm:mt-0'>
                      Mirpur-11,Dhaka.
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

/* Update Profile Info Modal*/

function ModalComponent({ closeModal }) {
  // Selected Image State
  const [selectedImage, setSelectedImage] = useState(null);
  // Handle User Image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle User Image Remove
  const handleRemoveImage = () => {
    setSelectedImage(null);
    document.getElementById("imageInput").value = "";
  };

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
              Update Profile Info
            </h1>
            <div className='space-y-12'>
              {/* Fields */}

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor='full_name'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Full Name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='full_name'
                      id='full_name'
                      required
                      placeholder='Enter Full Name'
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* User Role */}
                <div>
                  <label
                    htmlFor='user_role'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    User Role
                  </label>
                  <div className='mt-2'>
                    <select
                      id='user_role'
                      name='user_role'
                      required
                      className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6]  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                      <option value='Admin'>Admin</option>
                      <option value='User' selected>
                        User
                      </option>
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Email
                  </label>
                  <div className='mt-2'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter Email'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Mobile */}
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Mobile
                  </label>
                  <div className='mt-2'>
                    <input
                      type='number'
                      name='mobile'
                      id='mobile'
                      placeholder='Enter mobile'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Address */}
                <div>
                  <label
                    htmlFor='address'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Address
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      placeholder='Enter Address'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Department */}
                <div>
                  <label
                    htmlFor='department'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Department
                  </label>
                  <div className='mt-2'>
                    <select
                      id='user_role'
                      name='user_role'
                      required
                      className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                      <option selected>IT</option>
                      <option>IELTS</option>
                      <option>SPOKEN</option>
                      <option>EMPLOYEE</option>
                    </select>
                  </div>
                </div>
                {/* Password */}
                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Password
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='password'
                      id='password'
                      placeholder='Enter Password'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Confirm Password */}
                <div>
                  {" "}
                  <label
                    htmlFor='confirm_password'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Confirm Password
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='confirm_password'
                      id='confirm_password'
                      placeholder='Re-Enter Password'
                      required
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Photo */}
                <div>
                  <label
                    htmlFor='status'
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900 pb-2'>
                    Photo
                  </label>
                  <div className='mt-2'>
                    <input
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}
                      className='hidden'
                      id='imageInput'
                    />
                    <label
                      htmlFor='imageInput'
                      className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                      Choose File
                    </label>
                    {selectedImage && (
                      <div className='mt-4'>
                        <div className='relative max-w-[120px]'>
                          <img
                            src={selectedImage}
                            alt='Selected Image'
                            className='max-w-full h-auto rounded-2xl'
                          />
                          <button
                            onClick={handleRemoveImage}
                            className='absolute top-0 -right-2 bg-red-500 text-white rounded-full p-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              className='w-4 h-4'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
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
                  Update Profile Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
