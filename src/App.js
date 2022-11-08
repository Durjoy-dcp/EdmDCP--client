import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => fetch('http://localhost:5000/services?size=3')
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: async () => fetch('http://localhost:5000/services')
        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    }


  ])
  return (
    <div className="text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
