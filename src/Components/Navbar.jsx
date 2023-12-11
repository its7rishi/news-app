const Navbar = ({ category, setCategory, setCountryCode }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className={`nav-link ${
                  category === "technology" ? "text-white" : ""
                }`}
                href="#"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className={`nav-link ${
                  category === "business" ? "text-white" : ""
                }`}
                href="#"
                onClick={() => setCategory("business")}
              >
                Business
              </div>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className={`nav-link  ${
                  category === "health" ? "text-white" : ""
                }`}
                href="#"
                onClick={() => setCategory("health")}
              >
                Health
              </div>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className={`nav-link  ${
                  category === "sports" ? "text-white" : ""
                }`}
                href="#"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <div
                className={`nav-link  ${
                  category === "entertainment" ? "text-white" : ""
                }`}
                href="#"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
          </ul>
          <div className="ml-4">
            <select
              name="country"
              onChange={(e) => setCountryCode(e.target.value)}
              className="p-1"
            >
              <option value="us">US</option>
              <option value="in">INDIA</option>
              <option value="gb">UK</option>
              <option value="au">AUS</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
