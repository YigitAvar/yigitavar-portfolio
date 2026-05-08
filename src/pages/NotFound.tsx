import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section-container not-found-page">
      <div className="demo-placeholder">
        <span>404</span>
        <h3>Page not found</h3>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link className="primary-button" to="/">
          Back to homepage
        </Link>
      </div>
    </section>
  );
}

export default NotFound;