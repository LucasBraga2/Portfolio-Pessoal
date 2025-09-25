import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "projetos",
        element: <Projetos />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;