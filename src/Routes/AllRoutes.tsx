import { Routes, Route } from 'react-router-dom';
import HomePage from "../components/Pages/HomePage/HomePage";
import Login from '../components/Pages/Login/Login';
import SignUp from '../components/Pages/SignUp/SignUp';
import BrowsePage from '../components/Pages/BrowsePage/BrowsePage';
import SearchPage from '../components/Pages/SearchPage/SearchPage';

const AllRoutes: React.FC = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/password" element={<SignUp />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/search" element={<SearchPage />} />
    </Routes>
}

export default AllRoutes;