import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Config/Config";
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
    <div>
      <div className="rightside">
        {!user && (
          <>
            <nav class="navbar navbar-expand-lg navbar-dark white-color">
              <p
                class="navbar-brand"
                style={{
                  fontWeight: "800"
                }}
              >
                Sheemo
              </p>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#basicExampleNav"
                aria-controls="basicExampleNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="basicExampleNav">
                <ul class="navbar-nav  ms-auto ">
                  <li class="nav-item ">
                    <Link
                      className="nav-link"
                      to="signup"
                      style={{ color: "white", margin: "0.25rem 0.25rem" }}
                    >
                      SIGN UP
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      className="nav-link"
                      to="login"
                      style={{ color: "white", margin: "0.25rem 0.25rem" }}
                    >
                      LOGIN
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </>
        )}
        {user && (
          <>
            <nav class="navbar navbar-expand-lg navbar-dark white-color">
              <h5
                class="navbar-brand"
                style={{
                  fontWeight: "800"
                }}
              >
                Sheemo
              </h5>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#basicExampleNav"
                aria-controls="basicExampleNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="basicExampleNav">
                <ul class="navbar-nav  ms-auto ">
                  <li className="nav-item">
                    <div>
                      <Link
                        className="nav-link"
                        to="/"
                        style={{ color: "white", margin: "0.25rem 0.25rem" }}
                      >
                        Hello, {user}
                      </Link>
                    </div>
                  </li>
                  <li class="nav-item active">
                    <div>
                      <Link
                        className="nav-link"
                        to="add-products"
                        style={{
                          backgroundColor: "green",
                          padding: "0.5rem",
                          margin: "0.25rem 0.25rem",
                          borderRadius: "0.4rem",
                          color: "white"
                        }}
                      >
                        ADD-NFT
                      </Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <div className="cart-menu-btn">
                      <Link
                        className="nav-link"
                        to="cart"
                        style={{
                          backgroundColor: "grey",
                          padding: "0.5rem",
                          margin: "0.25rem 0.25rem",
                          borderRadius: "0.4rem",
                          color: "white"
                        }}
                      >
                        Cart <Icon icon={shoppingCart} size={20} />
                        <span style={{ color: "white", margin: "0.5rem" }}>
                          : {totalProducts}
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <div
                      className="nav-link "
                      onClick={handleLogout}
                      style={{
                        backgroundColor: "red",
                        padding: "0.5rem",
                        margin: "0.25rem 0.25rem",
                        borderRadius: "0.4rem",
                        color: "white"
                      }}
                    >
                      LOGOUT
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};
