import React from "react";
import Select from "react-select";

export default function AddNewPayment() {
  /* Mock User Data */
  const usersData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "123-456-7890",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "987-654-3210",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      mobile: "555-123-4567",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
  ];

  /* Custom Style For The User Select Options */
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#ddd",
    }),
  };

  /* Customized Users */
  const options = usersData.map((user) => ({
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={user.photo}
          alt={user.name}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <div>
          <span>{user.name}</span>
          <br />
          <small>
            {user.email} | {user.mobile}
          </small>
        </div>
      </div>
    ),
    value: user.id,
  }));

  // Define a filterOption function to enable searching by name, email, or number
  const filterOption = (option, inputValue) => {
    const user = usersData.find((user) => user.id === option.value);
    if (!user) return false;

    // Check if the input value matches name, email, or mobile
    const searchValue = inputValue.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.mobile.includes(searchValue)
    );
  };

  const currentYear = new Date().getFullYear(); // Get the current year

  // Generate month options with the current year
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthOptions = months.map((month) => (
    <option key={month} value={`${month}-${currentYear}`}>
      {`${month}-${currentYear}`}
    </option>
  ));

  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Add Payment
      </h1>

      {/* Form: Add User Payment Info */}
      <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
        <h1 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 border-b dark:border-gray-50/10 pb-12'>
          Enter User's Payment Information
        </h1>
        {/* Form Starts From Here */}
        <form>
          <div className='space-y-12'>
            {/* Fields */}
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
              {/* Select User */}
              <div>
                <label className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Select User
                </label>
                <div className='mt-2'>
                  <Select
                    required
                    placeholder='Select User...'
                    options={options}
                    styles={customStyles}
                    isSearchable // Enable search
                    filterOption={filterOption}
                  />
                </div>
              </div>
              {/* Month */}
              <div>
                <label
                  htmlFor='month'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Month
                </label>
                <div className='mt-2'>
                  <select
                    id='month'
                    name='month'
                    required
                    className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                    <option value=''>Select Month...</option>
                    {monthOptions}
                  </select>
                </div>
              </div>
              {/* Payment Date */}
              <div>
                <label
                  htmlFor='payment_date'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Payment Date
                </label>
                <div className='mt-2'>
                  <input
                    type='date'
                    id='payment_date'
                    name='payment_date'
                    required
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='amount'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Amount
                </label>
                <div className='mt-2'>
                  <input
                    type='number'
                    id='amount'
                    name='amount'
                    required
                    min='1'
                    className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
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
                    className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                    <option value={1}>Paid</option>
                    <option value={0}>Due</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Add Payment Info
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
