import '../styles/hero.css'
import Button from './Button'

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero__content">

        <h1>Stories Worth Staying For</h1>

        <p>
          Discover unforgettable stories, share your own imagination,
          and build a library that grows with every chapter.
        </p>

        <div className="hero__actions">
          <Button>Start Writing</Button>
          <Button>Explore Stories</Button>
        </div>

      </div>

    </section>
  )
}