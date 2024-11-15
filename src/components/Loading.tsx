import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
      <ScaleLoader color="gray" />
    </div>
  );
};

export default Loading;
