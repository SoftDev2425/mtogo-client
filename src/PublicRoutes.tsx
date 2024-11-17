import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./components/Loading";
import useValidateUser from "./hooks/useValidateUser";

const PublicRoutes = () => {
  const { isPending, data } = useValidateUser();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (isPending) return <Loading />;

  return <Outlet />;
};

export default PublicRoutes;
