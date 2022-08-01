import { ProductList } from './ProductList'
import MenuItem from '../component/MenuItem'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {ProductList.map((item) => {
          console.log(item)
          return (
            <MenuItem
              key={item.id}
              id={item.id}
              imgURL={item.image}
              title={item.name}
              gf={item.gf}
              spicy={item.spicy}
              veg={item.veg}
              price={item.price}
              cat={item.cat}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu
