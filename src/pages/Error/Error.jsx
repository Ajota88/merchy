import { Link } from "react-router-dom";
import "./Error.scss";

const ErrorPage = () => {
  return (
    <section className="error-page ">
      <h1>404</h1>
      <h3>Sorry, page not found</h3>
      <Link className="btn" to="/">
        HOME
      </Link>
    </section>
  );
};

export default ErrorPage;
