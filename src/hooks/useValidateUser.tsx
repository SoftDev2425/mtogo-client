import { useMutation } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const useValidateUser = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/validate`, {
        method: "POST",
        cache: "no-cache",
      });
      if (!response.ok) {
        throw new Error("User is not authenticated");
      }
      return response.json();
    },
    onSuccess: (data) => {
      console.log(data);
      // Handle successful authentication here, e.g., navigate to the home page
      return <Navigate to="/" />;
    },
    onError: (error) => {
      // Handle errors here, e.g., show a toast notification
      toast.error(error.message);
    },
  });
};

export default useValidateUser;
