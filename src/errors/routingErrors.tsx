import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.svg";

import "../assets/styles/pagesStyles/notFound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "News Aggregator | Routing Error";
  }, []);
  return (
    <div className="not-found-container">
      <img src={Logo} alt="New Aggregator Logo" />
      <h3 className="error-message">News Aggregator | Page Not Found</h3>
      <p className="error-description">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link to="/" className="home-link f-medium">
        Go to Home
      </Link>
    </div>
  );
}
