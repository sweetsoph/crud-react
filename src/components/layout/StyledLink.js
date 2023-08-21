import { Link } from "react-router-dom";

function StyledLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{ color: "#fff", textDecoration: "none", fontStyle: "none" }}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
