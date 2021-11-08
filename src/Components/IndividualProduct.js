import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const IndividualProduct = ({ individualProduct, addToCart }) => {
  // console.log(individualProduct);

  const handleAddToCart = () => {
    addToCart(individualProduct);
  };
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  //const handleShow = () => setModalShow(true);

  return (
    <div
      className="product"
      style={{ borderStyle: "solid", borderWidth: "1px", padding: "1rem" }}
    >
      <div className="product-img" style={{ height: "150px", width: "160px" }}>
        <img
          style={{ borderRadius: "0.5rem" }}
          src={individualProduct.url}
          alt="product-img"
        />
      </div>
      <Button
        variant="primary"
        style={{ background: "#E75480", marginTop: "1rem" }}
        onClick={() => setModalShow(true)}
      >
        Know More
      </Button>

      <div className="product-text title">{individualProduct.title}</div>
      <div className="product-text description">
        {individualProduct.description}
      </div>
      <div
        className="product-text price"
        style={{
          backgroundColor: "#FFD700",
          padding: "0.5rem",
          borderRadius: "0.5rem"
        }}
      >
        INR: {individualProduct.price}
      </div>
      <div className="btn btn-danger btn-md cart-btn" onClick={handleAddToCart}>
        ADD TO CART
      </div>
      <Modal
        show={modalShow}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 style={{ fontWeight: "900" }}>{individualProduct.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-big-img">
            <img src={individualProduct.url} alt="product-img" />
          </div>

          <div className="product-big-description">
            Description: {individualProduct.description}
            <div>Rupees: {individualProduct.price}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
