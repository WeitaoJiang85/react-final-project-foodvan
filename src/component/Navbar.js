import React, { useState, useContext } from "react";
import { Context } from "../App";
import Logo from "../assets/GoodgoLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import "../styles/Navbar.css";

export default function Navbar() {
  const { totalPrice, totalItems } = useContext(Context);

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} alt={"good go chinese street food logo"} />
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/gallery"> Gallery </Link>

          <div className="cartIcon">
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartIcon fontSize="small" />
            </Badge>
            <Badge badgeContent={`$:${totalPrice}`} color="primary">
              <PaymentIcon fontSize="small" />
            </Badge>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/gallery"> Gallery </Link>
        {totalItems === 0 ? null : (
          <div className="cartInfo">
            <div className="cartIcon">
              <Badge badgeContent={totalItems} color="primary">
                <ShoppingCartIcon fontSize="small" />
              </Badge>
            </div>
            <div className="moneyIcon">
              <Badge badgeContent={`$:${totalPrice}`} color="primary">
                <PaymentIcon fontSize="small" />
              </Badge>
            </div>
          </div>
        )}

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
