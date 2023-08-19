import { useLocation } from "react-router-dom";
import StyledLink from "./StyledLink";
import "./header.module.css";
import ActiveLink from "./ActiveLink";

function Header() {
  const location = useLocation();
  return (
    <header>
      <div></div>
      <ul>
        <li>
          {location.pathname == "/" ? (
            <ActiveLink to="/">Home</ActiveLink>
          ) : (
            <StyledLink to="/">Home</StyledLink>
          )}
        </li>
        <li>
          {location.pathname == "/projects" ? (
            <ActiveLink to="/projects">Projetos</ActiveLink>
          ) : (
            <StyledLink to="/projects">Projetos</StyledLink>
          )}
        </li>
        <li>
          {location.pathname == "/company" ? (
            <ActiveLink to="/company">Empresa</ActiveLink>
          ) : (
            <StyledLink to="/company">Empresa</StyledLink>
          )}
        </li>
        <li>
          {location.pathname == "/contact" ? (
            <ActiveLink to="/contact">Contato</ActiveLink>
          ) : (
            <StyledLink to="/contact">Contato</StyledLink>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
