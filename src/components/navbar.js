import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
