import React from "react";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/feather/plus";
import { minus } from "react-icons-kit/feather/minus";
import { auth, fs } from "../Config/Config";

export const IndividualCartProduct = ({
  cartProduct,
  cartProductIncrease,
  cartProductDecrease
}) => {
  const handleCartProductIncrease = () => {
    cartProductIncrease(cartProduct);
  };

  const handleCartProductDecrease = () => {
    cartProductDecrease(cartProduct);
  };

  const handleCartProductDelete = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid)
          .doc(cartProduct.ID)
          .delete()
          .then(() => {
            console.log("successfully deleted");
          });
      }
    });
  };

  return (
    <div
      className="product"
      style={{ borderStyle: "solid", borderWidth: "1.5px", padding: "0.5rem" }}
    >
      <div className="product-img">
        <img
          src={cartProduct.url}
          alt="product-img"
          style={{ height: "150px", width: "160px", borderRadius: "0.5rem" }}
        />
      </div>
      <div className="product-text title">{cartProduct.title}</div>
      <div className="product-text description">{cartProduct.description}</div>
      {/* <div className="product-text price">INR {cartProduct.price}</div> */}
      {/* <span>Quantity</span>
      <div className="product-text quantity-box">
        <div className="action-btns minus" onClick={handleCartProductDecrease}>
          <Icon icon={minus} size={20} />
        </div>
        <div>{cartProduct.qty}</div>
        <div className="action-btns plus" onClick={handleCartProductIncrease}>
          <Icon icon={plus} size={20} />
        </div>
      </div> */}
      <div
        className="product-text cart-price"
        style={{
          backgroundColor: "#FFD700",
          padding: "0.5rem",
          borderRadius: "0.5rem"
        }}
      >
        INR {cartProduct.TotalProductPrice}
      </div>
      <div
        className="btn btn-danger btn-md cart-btn"
        onClick={handleCartProductDelete}
      >
        DELETE
      </div>
    </div>
  );
};
