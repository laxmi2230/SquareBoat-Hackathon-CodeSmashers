import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../../Config/Config";
import { useHistory } from "react-router-dom";

/*import logoF from '../Images/logoF.png'*/

export const Navbar = ({ user, totalProducts }) => {
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div
      className="navbar"
      style={{
        padding: "1rem",
        borderRadius: "0rem 0rem 1rem 1rem "
      }}
    >
      <div
        className="leftside"
        style={{ display: "flex", alignItems: "left", marginLeft: "10rem" }}
      >
        <h5
          style={{
            backgroundColor: "white",
            fontWeight: "800",
            padding: "0.5rem",
            margin: "1.5 rem",
            borderRadius: "0.5rem",
            borderColor: "black",
            borderWidth: "0.2rem"
          }}
        >
          Sheemo
        </h5>
      </div>
      <div className="rightside">
        {!user && (
          <>
            <div>
              <Link className="navlink" to="signup">
                SIGN UP
              </Link>
            </div>
            <div>
              <Link className="navlink" to="login">
                LOGIN
              </Link>
            </div>
          </>
        )}
        {user && (
          <>
            <div
              style={{
                backgroundColor: "black",
                fontWeight: "800",
                padding: "0.5rem",
                margin: "1 rem",
                borderRadius: "0.5rem",
                borderColor: "black",
                borderWidth: "0.2rem"
              }}
            >
              <Link className="navlink" to="/">
                {user}
              </Link>
            </div>
            <div
              style={{
                backgroundColor: "green",
                fontWeight: "800",
                padding: "0.5rem",
                margin: "1 rem",
                borderRadius: "0.5rem",
                borderColor: "black",
                borderWidth: "0.2rem"
              }}
            >
              <Link className="navlink" to="add-products">
                ADD-PRODUCTS
              </Link>
            </div>
            <div
              className="cart-menu-btn"
              style={{
                backgroundColor: "black",
                fontWeight: "800",
                padding: "0.6rem 1rem",
                margin: "1 rem",
                borderRadius: "0.5rem",
                borderColor: "black",
                borderWidth: "0.2rem"
              }}
            >
              <Link className="navlink" to="cart">
                <Icon icon={shoppingCart} size={20} />
              </Link>
              <span className="cart-indicator">{totalProducts}</span>
            </div>
            <div
              className="btn btn-danger btn-md"
              onClick={handleLogout}
              style={{ backgroundColor: "" }}
            >
              LOGOUT
            </div>
          </>
        )}
      </div>
    </div>
  );
};
