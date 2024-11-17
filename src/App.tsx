import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Restaurants from "./pages/Restaurants";
import Layout from "./pages/Layout";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import CustomerSignUp from "./pages/CustomerSignUp";
import CustomerProfile from "./pages/CustomerProfile";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route element={<Layout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<CustomerSignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<CustomerProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
