import Analytics from "../../components/Analytics/Analytics";
import DashboardUserShowCase from "../../components/DashboardUserShowCase/DashboardUserShowCase";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";

export default function AdminHomePage() {
  return (
    <>
      {/* Page header */}
      <h1 className='text-2xl sm:text-5xl font-semibold dark:text-gray-300 text-slate-900'>
        Analytics
      </h1>

      {/* Analytics */}
      <Analytics />

      {/* Users Show-Case Table & Expense Graph */}
      <div className='flex flex-col xl:grid grid-cols-2 gap-5'>
        {/* User Table */}
        <DashboardUserShowCase />

        {/* Area Chart */}
        <ExpenseChart />
      </div>
    </>
  );
}
