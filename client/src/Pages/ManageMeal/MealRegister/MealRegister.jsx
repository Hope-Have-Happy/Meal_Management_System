import React, { useState } from "react";
import Select from "react-select";

export default function MealRegister() {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  /* State for meal registration */
  const [mealData, setMealData] = useState({
    users_id: [],
    qty: 1,
    date: formatDate(new Date()), // Initialize with the current date
    status: 1, // Assuming "Active" as the default status
  });

  /* Handling Input  */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMealData((prevMealData) => ({
      ...prevMealData,
      [name]:
        name === "date"
          ? formatDate(new Date(value))
          : name === "status"
          ? parseInt(value, 10)
          : name === "qty" && parseInt(value, 10),
    }));
  };

  /* Handling Selects  */
  const handleSelectChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    setMealData({
      ...mealData,
      users_id: selectedIds,
    });
  };

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

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(mealData);
  };

  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Register Meals
      </h1>

      {/* Add New Meal Form */}
      <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
        <h1 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 border-b dark:border-gray-50/10 pb-12'>
          Enter Meal Information
        </h1>
        {/* Form Starts From Here */}
        <form onSubmit={formSubmitHandler}>
          <div className='space-y-12'>
            {/* Fields */}
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
              {/* Select Users */}
              <div>
                <label className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Select Users
                </label>
                <div className='mt-2'>
                  <Select
                    required
                    isMulti
                    placeholder='Select Users...'
                    options={options}
                    styles={customStyles}
                    onChange={handleSelectChange}
                    isSearchable // Enable search
                    filterOption={filterOption}
                  />
                </div>
              </div>
              {/* Quantity */}
              <div>
                <label
                  htmlFor='qty'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Quantity
                </label>
                <div className='mt-2'>
                  <input
                    type='number'
                    id='qty'
                    name='qty'
                    value={mealData.qty}
                    onChange={handleInputChange}
                    required
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* Date */}
              <div>
                <label
                  htmlFor='date'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Date
                </label>
                <div className='mt-2'>
                  <input
                    type='date'
                    name='date'
                    value={mealData.date}
                    onChange={handleInputChange}
                    required
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
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
                    value={mealData.status}
                    onChange={handleInputChange}
                    required
                    className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                    <option value={1}>Active</option>
                    <option value={0}>In-active</option>
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
              Register Meal
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
