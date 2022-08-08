import React, { useState, useContext } from "react";
import { Context } from "../App";
import Logo from "../assets/GoodgoLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Cart from "../pages/Cart";

import "../styles/Navbar.css";

export default function Navbar() {
  const { totalPrice, totalItems } = useContext(Context);
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

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

          {totalItems === 0 ? null : (
            <div className="cartInfo">
              <Link to="/cart">
                <span className="cartIcon">
                  <Badge badgeContent={totalItems} color="primary">
                    <ShoppingCartIcon fontSize="small" />
                  </Badge>
                </span>
                <span className="moneyIcon">{`Total:$${totalPrice}`}</span>
              </Link>
            </div>
          )}
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
            <span
              className="cartIcon"
              button
              aria-describedby={id}
              type="button"
              onClick={handleClick}
            >
              <Badge badgeContent={totalItems} color="primary" v>
                <ShoppingCartIcon fontSize="small" />
              </Badge>
            </span>

            <span className="totalPrice">{`$${totalPrice}.00`}</span>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Box sx={{ border: 1, bgcolor: "background.paper" }}>
                    <Cart />
                  </Box>
                </Fade>
              )}
            </Popper>
          </div>
        )}

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
