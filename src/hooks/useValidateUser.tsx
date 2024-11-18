import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const useValidateUser = () => {
  return useQuery({
    queryKey: ["validateUser"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_GATEWAY_URL}/api/auth/validate`, {
        method: "GET",
        cache: "no-cache",
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "User is not authenticated");
        return <Navigate to="/signin" />;
      }
      return response.json();
    },
  });
};

export default useValidateUser;
