import { Link } from "react-router-dom";

function ActiveLink({ to, children }) {
  return (
    <Link to={to} style={{color: "#F29F80", textDecoration: "none", fontStyle: "none"}}>
      {children}
    </Link>
  );
}

export default ActiveLink;