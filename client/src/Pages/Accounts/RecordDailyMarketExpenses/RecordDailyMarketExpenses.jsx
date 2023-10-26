import React from "react";

export default function RecordDailyMarketExpenses() {
  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Daily Market Expenses Record
      </h1>

      {/* Add New User Form */}
      <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
        <h1 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 border-b dark:border-gray-50/10 pb-12'>
          Enter Daily Market Expenses Information
        </h1>
        {/* Form Starts From Here */}
        <form>
          <div className='space-y-12'>
            {/* Fields */}
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
              {/* Title */}
              <div>
                <label
                  htmlFor='title'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Title
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    required
                    placeholder='Enter Title'
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
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
                    id='qty'
                    name='qty'
                    required
                    type='number'
                    placeholder='Enter Quantity'
                    className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6]  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* Unit */}
              <div>
                <label
                  htmlFor='unit'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Unit
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='unit'
                    id='unit'
                    placeholder='Enter unit like(kg, liter....)'
                    required
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* Price */}
              <div>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Price
                </label>
                <div className='mt-2'>
                  <input
                    type='number'
                    name='price'
                    id='price'
                    placeholder='Enter price'
                    required
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* Total */}
              <div>
                <label
                  htmlFor='total'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Total Price
                </label>
                <div className='mt-2'>
                  <input
                    type='number'
                    name='total'
                    id='total'
                    placeholder='Enter Total Price'
                    required
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* Bajar Date */}
              <div>
                <label
                  htmlFor='bajar_date'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Bajar Date
                </label>
                <div className='mt-2'>
                  <input
                    type='date'
                    name='bajar_date'
                    id='bajar_date'
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
                    required
                    //  onChange={(e) =>
                    //    setFormData({
                    //      ...formData,
                    //      status: parseInt(e.target.value),
                    //    })
                    //  }
                    className='block w-full rounded-md border-0 p-2 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'>
                    <option value={1}>Active</option>
                    <option value={0}>In-active</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <button
                type='submit'
                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Add Daily Market Expenses
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
