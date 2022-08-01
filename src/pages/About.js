import Foodvan from '../imges/Foodvan.jpg'
import '../styles/About.css'

export default function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Foodvan})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          My food truck offers authentic Chinese street food. We usually operate
          in the Kingbourgh area. We also regularly participate in many markets,
          including Kingston Market, 4 Seasons Market, Margate Market, The
          Valley Market and other pop-up markets.
        </p>
        <p>
          We have a wide variety of main and snack options to meet a variety of
          customer needs including vegetarian, gluten-free. Our main products
          includeFried rice or fried noodles, bao buns, spring rolls, Siu Mai,
          Fried dumplings. All our ingredients are sourced locally. Our
          suppliers include Sun Valley Farm, EIG, No Frills, Woolies, Coles,
          Salamanca Fresh, Compak TAS, etc.
        </p>
        <p>
          Almost all the waste generated during our food preparation process can
          be used for composting. All the tableware we currently use is provided
          by the local environmentally friendly tableware provider
        </p>
        <p>
          I had received years of Chinese food training from my father.He is a
          professional chef who has been in the industry for more than 30 years.
          I have always had a great passion for food cooking and spreading
          Chinese food culture.
        </p>
      </div>
    </div>
  )
}
