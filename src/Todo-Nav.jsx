import { Link } from "react-router-dom";
function Todonav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1200px",
      }}
    >
      <h2 className="logo">
        <Link to="/">Home Page</Link>
      </h2>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <li>
        <Link to="App">App</Link>
         
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
        <li>
        <Link to="TodoList">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Todonav;