import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">{error.status}</h1>
        <p className="text-xl text-gray-800 mb-4">Oops! Something went wrong.</p>
        <p className="text-gray-600 mb-6">{error.error.message}</p>
        <a href="/" className="text-indigo-500 hover:underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
