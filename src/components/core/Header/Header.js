import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="center">
      <ul className="nav-list">
        <li className="pages">
          <Link to="/">Inicio</Link>
        </li>
        <li className="pages">
          <Link to="/login">Login</Link>
        </li>
        <li className="pages">
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/artists">Artists</Link>
        </li>
        <li>
          <Link to="/playlist">Playlist</Link>
        </li>
        <li>
          <Link to="/getplaylist">Get Playlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
