import { Link, Outlet } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">React Projects</Link>
          </li>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}