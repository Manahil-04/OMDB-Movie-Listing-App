import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/about/about';
import Contact from './pages/contact/contact';
import DetailedInfo from './components/detailedCard/DetailedInfo';
import Home from './pages/home/home';
import Movies from './components/movies/movies';
import Navbar from './components/navbar/navbar';

import './App.css';


function App() { 
  const router = createBrowserRouter([
    { path: "/",
      element: <> <Navbar /> <Home/> <Movies movieName='world'/> </>
    },
    {
      path: "/about",
      element: <> <Navbar /> <About /> </>
    },
    {
      path: "/contact",
      element: <> <Navbar /> <Contact /> </>
    },
    {
      path: "/:movieId",
      element: <> <Navbar /> <Movies /> </>
    },
    {
      path: "/movie/:movieId",
      element: <> <Navbar /> <DetailedInfo /> </>
    },
    {
      path: "/movies/:movieName",
      element: <> <Navbar /> <Home/> <Movies /> </>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
