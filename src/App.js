import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <p>
        <Link to="/todo-app">Todo</Link>
      </p>
      <Outlet />
    </>
  );
}