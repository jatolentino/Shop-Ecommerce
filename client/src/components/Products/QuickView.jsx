import { useState, useEffect, useContext } from "react";
import { Image } from "cloudinary-react";
import { useParams } from "react-router-dom";
import { Modal, Button, Container, Col, Row } from "react-bootstrap";

import CartContext from "../../contexts/cart-context";
import "./QuickView.css";

function QuickView({ isOpen, closeModal, product }) {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const context = useContext(CartContext);

  const addToCart = (product) => {
    let currentItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      type: product.type,
      total_in_stock: product.total_in_stock,
      image_public_id: product.image_public_id,
      quantity,
    };
    context.addItemToCart(currentItem);
  };

  return (
    <div>
      <Modal dialogClassName="product_modal" show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <Image
                  key={product._id}
                  cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                  publicId={product.image_public_id}
                  width="470"
                  crop="scale"
                />
              </Col>
              <Col xs={6} md={6}>
                <Modal.Title>{product.name}</Modal.Title>
                <div className="product-review">
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>

                <div className="price">
                  <span className="old-price">$150.00</span>
                  <span className="new-price">${product.price}</span>
                </div>

                <p>{product.description}</p>

                <ul className="products-info">
                  <li>
                    <span>Availability:</span> <a href="/#">In stock</a>
                  </li>
                </ul>

                <div className="product-quantities">
                  <span>Quantities:</span>

                  <div className="input-counter">
                    <span
                      className="minus-btn"
                      onClick={() =>
                        quantity >= 1 ? setQuantity(quantity - 1) : setQuantity(1)
                      }
                    >
                      <i className="bx bx-minus"></i>
                    </span>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      min="1"
                      max={product.total_in_stock}
                    />
                    <span
                      className="plus-btn"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <i className="bx bx-plus"></i>
                    </span>
                  </div>
                </div>

                  <div className="product-add-to-cart">
                    <button
                      type="submit"
                      className="default-btn"
                      onClick={() => addToCart(product)}
                    >
                      <i className="flaticon-shopping-cart"></i>
                      Add to cart
                      <span></span>
                    </button>
                  </div>
                
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default QuickView;
