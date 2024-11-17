import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
      <ClimbingBoxLoader color="#FF8001" size={17} />
    </div>
  );
};

export default Loading;
