import '../styles/featured-stories.css'

import StoryCard from './StoryCard'

export default function FeaturedStories() {

    const featuredStories = [
        {
            title: "The Last Library",
            author: "Ananya Bajpai",
            genre: "Fantasy",
            coverImage: "https://placehold.co/400x600?text=Story+1"
        },

        {
            title: "Whispers of Autumn",
            author: "Emily Carter",
            genre: "Romance",
            coverImage: "https://placehold.co/400x600?text=Story+2"
        },

        {
            title: "Beyond the Horizon",
            author: "James Wilson",
            genre: "Adventure",
            coverImage: "https://placehold.co/400x600?text=Story+3"
        }
    ]

    return (
        <section className="featured-stories">

            <h2 className="featured-stories__heading">
                Featured Stories
            </h2>

            <p className="featured-stories__subheading">
                Explore a selection of stories loved by readers and discover your next favourite adventure.
            </p>

            <div className="featured-stories__grid">

                <StoryCard
                    title={featuredStories[0].title}
                    author={featuredStories[0].author}
                    genre={featuredStories[0].genre}
                    coverImage={featuredStories[0].coverImage}
                />

                <StoryCard
                    title={featuredStories[1].title}
                    author={featuredStories[1].author}
                    genre={featuredStories[1].genre}
                    coverImage={featuredStories[1].coverImage}
                />

                <StoryCard
                    title={featuredStories[2].title}
                    author={featuredStories[2].author}
                    genre={featuredStories[2].genre}
                    coverImage={featuredStories[2].coverImage}
                />

            </div>

        </section>
    )
}