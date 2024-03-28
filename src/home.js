import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p>
        <Link to="/todo-app">Todo</Link>
      </p>
      <p>
        <Link to="/accordion">Accordion</Link>
      </p>
    </>
  );
}