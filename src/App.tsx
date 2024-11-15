import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Restaurants from "./pages/Restaurants";
import Layout from "./pages/Layout";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          {/*<Route path="/invoices" element={<Invoices />} />
          <Route path="/invoice/:id" element={<ViewInvoice />} />
          <Route path="/createinvoice" element={<CreateInvoice />} />
          <Route path="/creditnotes" element={<CreditNote />} />
          <Route path="/creditnote/:id" element={<ViewCreditNote />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/blogs" element={<Blogs />} /> */}
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
