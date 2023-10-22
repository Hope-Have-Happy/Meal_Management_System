import React, { useState } from "react";

export default function AdvanceMealBooking() {
  const [mealReservations, setMealReservations] = useState([
    {
      date: "",
      qty: 1,
    },
  ]);

  const addReservation = () => {
    setMealReservations([
      ...mealReservations,
      {
        date: "",
        qty: 1,
      },
    ]);
  };

  const handleDateChange = (event, index) => {
    const updatedReservations = [...mealReservations];
    updatedReservations[index].date = event.target.value;
    setMealReservations(updatedReservations);
  };

  const handleQtyChange = (event, index) => {
    const updatedReservations = [...mealReservations];
    updatedReservations[index].qty = parseInt(event.target.value, 10);
    setMealReservations(updatedReservations);
  };

  // Get today's date and the next day's date
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  // Format the dates to display in the message
  const formattedToday = today.toDateString();
  const formattedNextDay = nextDay.toDateString();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(mealReservations);
  };

  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Advance Meal Booking
      </h1>

      {/* Reservation Form */}
      <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
        <div className='border-b dark:border-gray-50/10 pb-10 mb-5'>
          <h1 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 '>
            Enter Reservation Information
          </h1>
          {/* Message about booking restrictions */}
          <p className='text-sm dark:text-gray-400 text-slate-600 mt-2'>
            **You can't book meals for {formattedToday} and {formattedNextDay}.
          </p>
        </div>

        {/* Form Starts From Here */}
        <form onSubmit={handleSubmit}>
          <div className='space-y-12'>
            {/* Reservation Fields */}
            {mealReservations.map((reservation, index) => (
              <div
                key={index}
                className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                {/* Date */}
                <div>
                  <label
                    htmlFor={`date-${index}`}
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Date
                  </label>
                  <div className='mt-2'>
                    <input
                      type='date'
                      id={`date-${index}`}
                      name={`date-${index}`}
                      placeholder='Enter The Quantity'
                      required
                      value={reservation.date}
                      min={today.toISOString().split("T")[0]}
                      onChange={(event) => handleDateChange(event, index)}
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                {/* Quantity */}
                <div>
                  <label
                    htmlFor={`qty-${index}`}
                    className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                    Quantity
                  </label>
                  <div className='mt-2'>
                    <input
                      type='number'
                      id={`qty-${index}`}
                      name={`qty-${index}`}
                      required
                      value={reservation.qty === 0 ? 1 : reservation.qty}
                      min='1' /* Set the minimum value */
                      onChange={(event) => handleQtyChange(event, index)}
                      className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Reservation Button */}
          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='button'
              onClick={addReservation}
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Add Reservation
            </button>
          </div>

          {/* Submit Button */}
          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Book Meals
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
