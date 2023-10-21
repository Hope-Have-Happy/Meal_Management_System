import { useState } from "react";

export default function AddNewUser() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    user_role: "User",
    email: "",
    password: "",
    mobile: "",
    department: "IT",
    address: "",
    status: 1,
    photo: imageFile,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setImageFile(file); // Store the selected image file
        setFormData({
          ...formData,
          photo: file, // Update the photo property in the formData
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageFile(null); // Clear the selected image file
    // Reset the file input
    document.getElementById("imageInput").value = "";
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const confirmPassword = formData.confirm_password;
    setFormData({ ...formData, password: newPassword });

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newPassword = formData.password;
    const confirmPassword = e.target.value;
    setFormData({ ...formData, confirm_password: confirmPassword });

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match before submitting
    if (formData.password !== formData.confirm_password) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Continue with the form submission
    console.log(formData);
  };

  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Add New User
      </h1>

      {/* Add New User Form */}
      <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
        <h1 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 border-b dark:border-gray-50/10 pb-12'>
          Enter User Information
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='space-y-12'>
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
                    onChange={(e) =>
                      setFormData({ ...formData, full_name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, user_role: e.target.value })
                    }
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6]  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
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
                    onChange={handlePasswordChange}
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
                    onChange={handleConfirmPasswordChange}
                    required
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
                {passwordError && (
                  <p className='text-red-600 text-sm mt-2'>{passwordError}</p>
                )}
              </div>

              {/* Status */}
              <div>
                <label
                  htmlFor='status'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Status
                </label>
                <div className='mt-2'>
                  <select
                    id='status'
                    name='status'
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: parseInt(e.target.value),
                      })
                    }
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                    <option value={1}>Active</option>
                    <option value={0}>In-active</option>
                  </select>
                </div>
              </div>
              {/* Photo */}
              <div>
                <label
                  htmlFor='status'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
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
            {/* Submit Button */}
            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <button
                type='submit'
                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Add New User
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
