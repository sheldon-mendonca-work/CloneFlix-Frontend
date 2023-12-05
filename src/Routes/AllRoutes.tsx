import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from "../components/Pages/HomePage/HomePage";
import Login from '../components/Pages/Login/Login';
import WelcomeBack from '../components/Pages/SignUp/WelcomeBack/WelcomeBack';
import BrowsePage from '../components/Pages/BrowsePage/BrowsePage';
import SearchPage from '../components/Pages/SearchPage/SearchPage';
import Registration from '../components/Pages/SignUp/Registration/Registration';
import ChoosePlan from '../components/Pages/SignUp/ChoosePlan/ChoosePlan';
import SelectPlan from '../components/Pages/SignUp/SelectPlan/SelectPlan';
import PaymentPicker from '../components/Pages/SignUp/PaymentPicker/PaymentPicker';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<HomePage />} errorElement={<h1>Error</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/welcomeBack" element={<WelcomeBack />} />
        <Route path="/signup/registration" element={<Registration />} />
        <Route path="/signup/choosePlan" element={<ChoosePlan />} />
        <Route path="/signup/selectPlan" element={<SelectPlan />} />
        <Route path="/signup/paymentPicker" element={<PaymentPicker />} />
        <Route path="/browse" element={<BrowsePage />}  
        // loader={async()=>{
            
        //     const response = await axios.get(`${backendUrl}`);
            
        //     if(response.status !== 201){
        //         throw json({message: "Could not fetch Events"}, {status: 500});
        //     }else{
        //         return response.data;
        //     }}}
        />
        <Route path="/search" element={<SearchPage />} />
        </>
    )
)
    
        
    
export default router;