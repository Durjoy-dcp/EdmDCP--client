import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import MyReviews from './Components/MyReviews/MyReviews';
import Protected from './Protected/Protected';
import AddService from './Components/AddService/AddService';
import UserContext, { AuthContext } from './UserContext/UserContext';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => fetch('https://edm-producerd-dcp-server.vercel.app/services?size=3')
        },
        {
          path: '/services',
          element: <Services></Services>,

        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: async ({ params }) => fetch(`https://edm-producerd-dcp-server.vercel.app/services/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },

        {
          path: '/myreview',
          element: <Protected><MyReviews></MyReviews></Protected>
        },
        {
          path: '/addservice',
          element: <Protected><AddService></AddService></Protected>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
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
