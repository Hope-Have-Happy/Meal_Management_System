import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ExpenseChart() {
  const data = [
    {
      name: "Jan-23",
      earning: 4000,
      expense: 2400,
      amt: 2400,
    },
    {
      name: "Feb-23",
      earning: 3000,
      expense: 1398,
      amt: 2210,
    },
    {
      name: "Mar-23",
      earning: 2000,
      expense: 9800,
      amt: 2290,
    },
    {
      name: "Apr-23",
      earning: 2780,
      expense: 3908,
      amt: 2000,
    },
    {
      name: "Jun-23",
      earning: 1890,
      expense: 4800,
      amt: 2181,
    },
    {
      name: "Jul-23",
      earning: 2390,
      expense: 3800,
      amt: 2500,
    },
    {
      name: "Aug-23",
      earning: 390,
      expense: 4300,
      amt: 2100,
    },
    {
      name: "Sep-23",
      earning: 3790,
      expense: 1200,
      amt: 2100,
    },
    {
      name: "Oct-23",
      earning: 1790,
      expense: 400,
      amt: 2100,
    },
    {
      name: "Nov-23",
      earning: 3790,
      expense: 2300,
      amt: 2100,
    },
    {
      name: "Dec-23",
      earning: 4590,
      expense: 4900,
      amt: 2100,
    },
  ];

  return (
    <div className='dark:bg-[#17324E] bg-white p-8 rounded-md w-full xl:mt-5'>
      <h2 className='dark:text-gray-200 text-gray-600 font-semibold text-2xl mb-5'>
        Expense & Earning Chart
      </h2>
      <div className='h-[90%]'>
        <ResponsiveContainer width='100%'>
          <AreaChart
            width='100%'
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' tick={{ fill: "#767676" }} />
            <YAxis /* dataKey='amt' */ tick={{ fill: "#767676" }} />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='earning'
              stroke='#8884d8'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
            <Area
              type='monotone'
              dataKey='expense'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>{" "}
    </div>
  );
}
