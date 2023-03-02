import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.activeLink} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.activeLink} to="/about">
              about
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.activeLink} to="/articles">
              articles
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
