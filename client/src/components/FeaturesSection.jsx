import '../styles/features-section.css'

import FeatureCard from './FeatureCard'

export default function FeaturesSection() {
  return (
    <section className="features">

      <h2 className="features__heading">
        Why Story Inn?
      </h2>

      <p className="features__subheading">
        Everything you need to discover, create, and enjoy great stories.
      </p>

      <div className="features__grid">

        <FeatureCard
          icon="📚"
          title="Discover Great Stories"
          description="Explore stories written by passionate writers from different genres."
        />

        <FeatureCard
          icon="✍️"
          title="Share Your Own"
          description="Write and publish your imagination chapter by chapter."
        />

        <FeatureCard
          icon="❤️"
          title="Build Your Library"
          description="Save your favourite stories and continue reading anytime."
        />

      </div>

    </section>
  )
}