import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "./components/Loading";

const ProtectedRoutes = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["validate-user"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/validate`, {
        credentials: "include",
        cache: "no-cache",
      });
      if (!response.ok) {
        throw new Error("User is not authenticated");
      }
      return response.json();
    },
  });

  if (error) return <Navigate to="/signin" />;

  if (isPending) return <Loading />;

  if (!data || !data.validateUser) return <Navigate to="/signin" />;

  return <Outlet />;
};

export default ProtectedRoutes;
