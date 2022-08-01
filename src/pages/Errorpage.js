import ErrorPhoto from '../imges/ErrorPhoto.jpg'
import '../styles/Errorpage.css'

export default function Errorpage() {
  return (
    <div
      className="errorpage"
      style={{ backgroundImage: `url(${ErrorPhoto})` }}
    >
      <h1 className="errorpage-title"> Uh oh, that page doesn't exist.</h1>
    </div>
  )
}
