import React, { useState } from "react";

export default function AdvanceMealBooking() {
  // State for Tomorrow's Meal Reservation Quantity
  const [tomorrowMealQty, setTomorrowMealQty] = useState({
    qty: 1,
  });

  // State for Advance Meal Reservations
  const [mealReservations, setMealReservations] = useState([
    {
      date: "",
      qty: 1,
    },
  ]);

  // Handler for Tomorrow's Meal Quantity Change
  const handleTomorrowMealQtyChange = (event) => {
    // Update Tomorrow's Meal Quantity
    const newValue = parseInt(event.target.value, 10);
    setTomorrowMealQty({
      ...tomorrowMealQty,
      qty: newValue,
    });
  };

  //  Tomorrow's Meal Reservations Submission Handler
  const tomorrowMealReservationHandler = (event) => {
    event.preventDefault();
    console.log(tomorrowMealQty);
  };

  // Function to add a new reservation field for Advance Meal Reservations
  const addReservation = () => {
    setMealReservations([
      ...mealReservations,
      {
        date: "",
        qty: 1,
      },
    ]);
  };

  // Handler for Date Change in Advance Meal Reservation
  const handleDateChange = (event, index) => {
    const updatedReservations = [...mealReservations];
    updatedReservations[index].date = event.target.value;
    setMealReservations(updatedReservations);
  };

  // Handler for Quantity Change in Advance Meal Reservation
  const handleQtyChange = (event, index) => {
    const updatedReservations = [...mealReservations];
    updatedReservations[index].qty = parseInt(event.target.value, 10);
    setMealReservations(updatedReservations);
  };

  // Function to remove an advance meal booking field
  const removeReservation = (index) => {
    const updatedReservations = [...mealReservations];
    updatedReservations.splice(index, 1);
    setMealReservations(updatedReservations);
  };

  // Get today's date and the next day's date
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  // Format the dates to display in the message
  const formattedToday = today.toDateString();
  const formattedNextDay = nextDay.toDateString();

  /* Advance Meal Reservations Submission */
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
      <>
        <>
          {/* Tomorrow's Meal Reservation */}
          <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
            <div className='border-b dark:border-gray-50/10 pb-10 mb-5'>
              <h1 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 '>
                If you want to book a meal for tomorrow, please fill the below
                filed before 6 pm today.
              </h1>
              {/* Message about booking restrictions */}
              <p className='text-sm dark:text-gray-400 text-slate-600 mt-2'>
                **If you are late to book your meal for tomorrow then contact
                with the Admin.
              </p>
            </div>

            {/* Form Starts From Here */}
            <form onSubmit={tomorrowMealReservationHandler}>
              {/* Fields for Tomorrow's Meal Reservation */}
              <div>
                <label
                  htmlFor='tomorrow_meal'
                  className='block text-sm font-medium leading-6 dark:text-gray-300 text-slate-900'>
                  Quantity
                </label>
                <div className='mt-2'>
                  <input
                    type='number'
                    id='tomorrow_meal'
                    name='qty'
                    required
                    placeholder='Enter Meal Quantity'
                    value={tomorrowMealQty.qty}
                    min='1'
                    onChange={handleTomorrowMealQtyChange}
                    className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button
                  type='submit'
                  className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Book Meal
                </button>
              </div>
            </form>
          </div>
        </>
      </>
      <>
        {/* Advance Reservation Form */}
        <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full mt-5'>
          <div className='border-b dark:border-gray-50/10 pb-10 mb-5'>
            <h1 className='text-base sm:text-2xl font-semibold leading-7 dark:text-gray-300 text-slate-900 '>
              Enter Your Advance Meal Booking Information
            </h1>
            {/* Message about booking restrictions */}
            <p className='text-sm dark:text-gray-400 text-slate-600 mt-2'>
              **You can't book meals for {formattedToday} and {formattedNextDay}
              .
            </p>
          </div>

          {/* Form Starts From Here */}
          <form onSubmit={handleSubmit}>
            {/* Fields for Advance Meal Reservations */}
            {/* Add Reservation Button */}
            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <button
                type='button'
                onClick={addReservation}
                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2'>
                Add Reservation
              </button>
            </div>
            <table className='min-w-full'>
              <thead className='bg-white border-b'>
                <tr>
                  <th
                    className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'
                    scope='col'>
                    Date
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    Quantity
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 border-b-2 dark:border-gray-500 border-gray-200 dark:bg-gray-900 bg-gray-100 text-left text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {mealReservations.map((reservation, index) => (
                  <tr
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    key={index}>
                    <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-gray-50 text-sm'>
                      <input
                        type='date'
                        name={`date-${index}`}
                        placeholder='Enter Date'
                        required
                        value={reservation.date}
                        min={today.toISOString().split("T")[0]}
                        onChange={(event) => handleDateChange(event, index)}
                        className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                      />
                    </td>
                    <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-gray-50 text-sm'>
                      <input
                        type='number'
                        name={`qty-${index}`}
                        required
                        value={reservation.qty}
                        min='1'
                        onChange={(event) => handleQtyChange(event, index)}
                        className='block w-full rounded-md border-0 p-1.5 dark:text-gray-300 text-slate-900 dark:bg-[#475569] bg-[#F3F4F6] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6'
                      />
                    </td>
                    <td className='px-5 py-5 border-b dark:border-gray-500 border-gray-200 dark:bg-gray-800 bg-gray-50 text-sm'>
                      {index > 0 && (
                        <button
                          type='button'
                          onClick={() => removeReservation(index)}
                          className='rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover-bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
                          Remove
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Submit Button for Advance Meal Reservations */}
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
    </>
  );
}
