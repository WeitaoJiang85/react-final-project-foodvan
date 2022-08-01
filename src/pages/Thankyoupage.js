import Thank from '../imges/CommentPhoto.jpg'
import '../styles/Thankyoupage.css'

export default function Errorpage() {
  return (
    <div className="thanks-page" style={{ backgroundImage: `url(${Thank})` }}>
      <h1 className="thanks-page-title"> Thanks for your support!</h1>
    </div>
  )
}
