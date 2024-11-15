import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import Loading from "./components/Loading";
import { useQuery } from "@tanstack/react-query";

const PublicRoutes = () => {
  const { isPending, data } = useQuery({
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
    retry: false,
  });

  useEffect(() => {
    if (data && data.validateUser) {
      toast("You are already signed in");
    }
  }, [data]);

  if (isPending) return <Loading />;

  if (data && data.validateUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRoutes;
