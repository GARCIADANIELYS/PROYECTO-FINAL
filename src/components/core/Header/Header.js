import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { TokenContext } from "../../../context/tokenContext";

const Header = () => {
  const { token } = useContext(TokenContext);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="center">
      {token && (
        <ul className="nav-list">
          <li className="pages">
            <Link to="/login">Login</Link>
          </li>

          <li className="pages">
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
          <li>
            <Link to="/logout" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
