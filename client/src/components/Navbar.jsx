import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar__logo">
        <h2>Story Inn</h2>
      </div>

      <ul className="navbar__links">
        <li><a href="#">Explore Stories</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Log In</a></li>
      </ul>

    </nav>
  )
}