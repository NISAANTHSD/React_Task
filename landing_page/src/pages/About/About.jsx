import './About.css'
import PropTypes from 'prop-types'

const About = ({ stats, models }) => {
  return (
    <section className="about" id="about">
      <div id="models" className="model-showcase">
        <h2>Featured Models</h2>
        <div className="model-grid">
          {models.map(model => (
            <div className="model-card" key={model.id}>
              <img src={model.image} alt={model.name} />
              <div className="model-info">
                <h3>{model.name}</h3>
                <p>{model.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-heritage">
        <h2>BMW Heritage</h2>
        <p>Since 1916, BMW has been crafting vehicles that define luxury, performance, and innovation. From our humble beginnings as an aircraft engine manufacturer to becoming one of the world's most prestigious automotive brands, our commitment to excellence remains unwavering.</p>
        <div className="stats">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  models: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      power: PropTypes.string.isRequired,
      acceleration: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
}

export default About