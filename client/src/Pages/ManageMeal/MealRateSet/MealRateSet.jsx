import React, { useState } from "react";

export default function MealRateSet() {
  const currentYear = new Date().getFullYear();
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

  const [mealRateData, setMealRateData] = useState({
    month: `${months[0]}-${currentYear}`,
    meal_rate: 1, // Assuming a default value
    is_visible: 1, // Assuming "Active" as the default
    month_start_date: "",
    month_end_date: "",
    status: 1, // Assuming "Active" as the default
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // You can access the form data in the `mealRateData` state
    console.log(mealRateData);
    // Now, you can send this data to your backend for further processing.
  };

  const monthOptions = months.map((month) => (
    <option
      key={month}
      value={`${month}-${currentYear}`}>{`${month}-${currentYear}`}</option>
  ));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMealRateData({
      ...mealRateData,
      [name]: name === "meal_rate" ? parseFloat(value) : value,
    });
  };

  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Set Monthly Meal Rate
      </h1>

      {/* Add New Meal Form */}
      <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
        <h1 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 border-b dark:border-gray-50/10 pb-12'>
          Enter Meal Rate Information
        </h1>
        {/* Form Starts From Here */}
        <form onSubmit={formSubmitHandler}>
          <div className='space-y-12'>
            {/* Fields */}
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
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
                    value={mealRateData.month}
                    onChange={handleInputChange}
                    className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                    {monthOptions}
                  </select>
                </div>
              </div>
              {/* Quantity */}
              <div>
                <label
                  htmlFor='meal_rate'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Meal Rate
                </label>
                <div className='mt-2'>
                  <input
                    type='number'
                    id='meal_rate'
                    name='meal_rate'
                    required
                    placeholder='Enter the meal rate'
                    value={mealRateData.meal_rate}
                    onChange={handleInputChange}
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* Is Visible */}
              <div>
                <label
                  htmlFor='is_visible'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Is Visible
                </label>
                <div className='mt-2'>
                  <select
                    id='is_visible'
                    name='is_visible'
                    required
                    value={mealRateData.is_visible}
                    onChange={handleInputChange}
                    className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                    <option value={1}>Visible</option>
                    <option value={0}>Invisible</option>
                  </select>
                </div>
              </div>
              {/* Month Start Date */}
              <div>
                <label
                  htmlFor='month_start_date'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Month Start Date
                </label>
                <div className='mt-2'>
                  <input
                    type='date'
                    name='month_start_date'
                    id='month_start_date'
                    required
                    value={mealRateData.month_start_date}
                    onChange={handleInputChange}
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* Month End Date */}
              <div>
                <label
                  htmlFor='month_end_date'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Month End Date
                </label>
                <div className='mt-2'>
                  <input
                    type='date'
                    name='month_end_date'
                    id='month_end_date'
                    required
                    value={mealRateData.month_end_date}
                    onChange={handleInputChange}
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
                    required
                    value={mealRateData.status}
                    onChange={handleInputChange}
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
              Set Meal Rate
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
