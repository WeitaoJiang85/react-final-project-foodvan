import { Link } from 'react-router-dom'
import Banner from '../imges/Banner.jpg'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1> GOODGO CHINESE STREET FOOD </h1>

        <p> Delicious food also warm the soul </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}
