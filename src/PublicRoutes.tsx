import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./components/Loading";
import useValidateUser from "./hooks/useValidateUser";
import { toast } from "sonner";

const PublicRoutes = () => {
  const { isPending, data, error } = useValidateUser();

  useEffect(() => {
    if (data && data.validateUser) {
      toast.success("You are already signed in");
    }
  }, [data]);

  if (isPending) return <Loading />;

  if (data && data.validateUser) {
    return <Navigate to="/" />;
  }

  if (error) {
    toast.error(error.message);
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
