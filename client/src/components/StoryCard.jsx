import '../styles/story-card.css'

import Button from './Button'

export default function StoryCard({
  title,
  author,
  genre,
  coverImage
}) {
  return (
    <article className="story-card">

      <img
        className="story-card__cover"
        src={coverImage}
        alt={title}
      />

      <div className="story-card__content">

        <h3 className="story-card__title">
          {title}
        </h3>

        <p className="story-card__author">
          by {author}
        </p>

        <p className="story-card__genre">
          {genre}
        </p>

        <Button>
          Read Story
        </Button>

      </div>

    </article>
  )
}