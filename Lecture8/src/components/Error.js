import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">{error.status}</h1>
        <p className="error-message">Oops! Something went wrong.</p>
        <p className="error-details">{error.error.message}</p>
        <a href="/" className="home-link">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
