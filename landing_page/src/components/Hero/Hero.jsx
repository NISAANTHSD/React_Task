import './Hero.css'
import PropTypes from 'prop-types'

const Hero = ({ mainCar, slogan }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>{mainCar.name}</h1>
        <p className="slogan">{slogan}</p>
        <div className="car-specs">
          <div className="spec">
            <span className="spec-label">Price</span>
            <span className="spec-value">{mainCar.price}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Power</span>
            <span className="spec-value">{mainCar.power}</span>
          </div>
          <div className="spec">
            <span className="spec-label">0-60 mph</span>
            <span className="spec-value">{mainCar.acceleration}</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="cta-button primary">Build Yours</button>
          <button className="cta-button secondary" style={{ marginLeft: '20px' }}>Test Drive</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={mainCar.image} alt={mainCar.name} />
      </div>
    </section>
  )
}

Hero.propTypes = {
  mainCar: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    acceleration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  slogan: PropTypes.string.isRequired
}

export default Hero