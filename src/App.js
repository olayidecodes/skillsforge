import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import { Home, Register, Login, Update, Delete, Send, Receive, ViewTransactions } from "./pages";
import { Footer, Navbar } from "./containers";

import './App.scss'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
      path: "/",
      element: <Home />
      },
      {
        path: "/delete-account",
        element: <Delete />
      },
      {
        path: "/send",
        element: <Send />
      },
      {
        path: "/receive",
        element: <Receive />
      },
      {
        path: "/view-transactions",
        element: <ViewTransactions />
      },
    ]
  },
  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/delete",
    element: <Delete />,
  },
  {
    path: "/send",
    element: <Send />,
  },
  {
    path: "/receive",
    element: <Receive />,
  },
  {
    path: "/view-transactions",
    element: <ViewTransactions />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
