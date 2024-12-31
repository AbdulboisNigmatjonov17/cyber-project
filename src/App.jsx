import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Likes from "./pages/Likes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import NewArrivel from "./components/products/pages/NewArrivel";
import BestSeller from "./components/products/pages/BestSeller";
import FeaturedProducts from "./components/products/pages/FeaturedProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          { index: true, element: <NewArrivel /> },
          { path: "bestSeller", element: <BestSeller /> },
          { path: "featuredProducts", element: <FeaturedProducts /> },
        ]
      },
      { path: "shop", element: <Shop /> },
      { path: "likes", element: <Likes /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;