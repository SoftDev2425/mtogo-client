import { Navigate, Outlet } from "react-router-dom";
import Loading from "./components/Loading";
import useValidateUser from "./hooks/useValidateUser";

const ProtectedRoutes = () => {
  const { isPending, error, data } = useValidateUser();

  if (isPending) return <Loading />;

  if (error || !data?.validateUser) return <Navigate to="/signin" />;

  return <Outlet />;
};

export default ProtectedRoutes;
