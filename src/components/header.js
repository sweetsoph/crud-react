import { Link, useLocation } from "react-router-dom";
import {Link as LinkStyled, ActiveLink} from "./styles.js";
import "./header.module.css";

function Header() {
  const location = useLocation();
  return (
    <header>
      <div></div>
      <ul>
        <li>
          <Link to="/">{location.pathname == "/" ? (<ActiveLink>Home</ActiveLink>) : (<LinkStyled>Home</LinkStyled>)}</Link>
        </li>
        <li>
          <Link to="/projects">{location.pathname == "/projects" ? (<ActiveLink>Projetos</ActiveLink>) : (<LinkStyled>Projetos</LinkStyled>)}</Link>
        </li>
        <li>
          <Link to="/company">{location.pathname == "/company" ? (<ActiveLink>Empresa</ActiveLink>) : (<LinkStyled>Empresa</LinkStyled>)}</Link>
        </li>
        <li>
          <Link to="/contact">{location.pathname == "/contact" ? (<ActiveLink>Contato</ActiveLink>) : (<LinkStyled>Contato</LinkStyled>)}</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
