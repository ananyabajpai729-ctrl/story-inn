import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__content">

        <h2 className="footer__logo">
          The Story Inn
        </h2>

        <p className="footer__description">
          Where stories find their readers and writers find their home.
        </p>

        <nav className="footer__nav">

          <a href="#">
            Explore Stories
          </a>

          <a href="#">
            About
          </a>

          <a href="#">
            Log In
          </a>

        </nav>

        <p className="footer__copyright">
          © 2026 The Story Inn. All rights reserved.
        </p>

      </div>

    </footer>
  )
}