import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import { Home, Register, Login, Update, Delete, Send, Receive, ViewTransactions, UserAccount } from "./pages";
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
        path: "/delete",
        element: <Delete />
      },
      {
        path: "/update",
        element: <Update />
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
        path: "/update",
        element: <Update />
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
  },
  {
    path: "/user",
    element: <UserAccount />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
