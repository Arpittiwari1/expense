import React ,{useState , useEffect} from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useUserAuth } from '../../hooks/useUserAuth'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATH } from '../../utils/apiPaths';
import { useNavigate } from 'react-router-dom';
import InfoCard from '../../components/Cards/InfoCard';
import { IoMdCard } from 'react-icons/io';
import { addThousandSeparator } from '../../utils/helper';
import { LuHandCoins,LuWalletMinimal } from 'react-icons/lu';
import RecentTransection from '../../components/Dashboard/RecentTransection';
import FinanceOverview from '../../components/Dashboard/FinanceOverview';
import ExpenseTransactions from '../../components/Dashboard/ExpenseTransactions';
import ExpenseLast30Days from '../../components/Dashboard/ExpenseLast30Days';
import RecentIncomeWithChart from '../../components/Dashboard/RecentIncomeWithChart';
import RecentIncome from '../../components/Dashboard/RecentIncome';

function Home() {
  useUserAuth();
  const navigate = useNavigate();
  const [DashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try{
      const response = await axiosInstance.get(`${API_PATH.DASHBOARD.GET_DASHBOARD_DATA}`)
      if(response.data){
        setDashboardData(response.data);
      }
    } catch(error){
      console.error("Something went wrong. Please try again.", error);
    } finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDashboardData();

   return () =>{}
  },[]);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'> 
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <InfoCard
        icon={<IoMdCard />}
        label="Total balance"
        value={addThousandSeparator(DashboardData?.totalBalance || 0)}
        color="bg-primary"
        />
        <InfoCard
        icon={<LuWalletMinimal />}
        label="Total income"
        value={addThousandSeparator(DashboardData?.totalIncome || 0)}
        color="bg-orange-500"
        />
        <InfoCard
        icon={<LuHandCoins />}
        label="Total expense"
        value={addThousandSeparator(DashboardData?.totalExpense || 0)}
        color="bg-red-500"
        />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-3 '>
         <RecentTransection
         transactions={DashboardData?.recentTransactions}
         onSeeMore={()=> navigate("/expense")}
         />
         <FinanceOverview
         totalBalance={DashboardData?.totalBalance || 0}
         totalIncome={DashboardData?.totalIncome || 0}
         totalExpense={DashboardData?.totalExpense ||0}
         />
         <ExpenseTransactions
         transactions={DashboardData?.expenseLast30Days?.transactions || []}
         onSeeMore={()=>navigate("/expense")}
         />
         <ExpenseLast30Days
         data={DashboardData?.expenseLast30Days?.transactions || []}
         />
         <RecentIncomeWithChart
         data={DashboardData?.incomeLast60Days?.transactions?.slice(0,4) || []}
        totalIncome={DashboardData?.totalIncome || 0}
         />
         <RecentIncome
         transactions={DashboardData?.incomeLast60Days?.transactions || []}
         onSeeMore={()=>navigate("/income")}
         />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home