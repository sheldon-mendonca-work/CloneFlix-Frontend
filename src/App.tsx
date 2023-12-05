import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/AllRoutes';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
