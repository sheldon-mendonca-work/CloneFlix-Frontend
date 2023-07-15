import { Routes, Route } from 'react-router-dom';
import HomePage from "../components/HomePage/HomePage";

const AllRoutes: React.FC = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
}

export default AllRoutes;