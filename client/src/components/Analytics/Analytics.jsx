export default function Analytics() {
  return (
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
        <span className='mb-3 text-teal-400 font-display text-[30px]'>40</span>
        Current Meal Rate
      </li>
      <li className='w-full text-sm font-semibold dark:text-cyan-200 p-6 dark:bg-[#17324E] bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center'>
        <span className='mb-3 text-teal-400 font-display text-[30px]'>40</span>
        This Year Average Meal Rate
      </li>
    </ul>
  );
}
