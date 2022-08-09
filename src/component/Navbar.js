import React, { useState, useContext } from "react";
import { Context } from "../App";
import Logo from "../assets/GoodgoLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Cart from "../pages/Cart";

import "../styles/Navbar.css";

export default function Navbar() {
  const { totalPrice, totalItems } = useContext(Context);
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "640px",
    height: "60%",
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    borderRadius: "10px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    overflow: "scroll",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <span className="cartIcon" type="button" onClick={handleOpen}>
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingCartIcon fontSize="small" />
                </Badge>
              </span>
              <span className="totalPrice">{`$${totalPrice}.00`}</span>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Cart />
                </Box>
              </Modal>
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
            <span className="cartIcon" type="button" onClick={handleOpen}>
              <Badge badgeContent={totalItems} color="primary">
                <ShoppingCartIcon fontSize="small" />
              </Badge>
            </span>
            <span className="totalPrice">{`$${totalPrice}.00`}</span>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Cart />
              </Box>
            </Modal>
          </div>
        )}

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
