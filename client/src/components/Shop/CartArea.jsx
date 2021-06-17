import React, { useContext, useEffect } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

import CartContext from "../../contexts/cart-context";

function CartArea() {
  const context = useContext(CartContext);

  const updateQuantity = (cartItem, quantity) => {
    if (quantity < 0) return;
    let currentItem = {
      _id: cartItem._id,
      name: cartItem.name,
      price: cartItem.price,
      type: cartItem.type,
      total_in_stock: cartItem.total_in_stock,
      image_public_id: cartItem.image_public_id,
      quantity,
    };
    context.addItemToCart(currentItem);
  };

  return (
    <section className="cart-area ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <form>
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {context.cartItems &&
                      context.cartItems.map((cartItem) => {
                        return (
                          <tr className="top-className" key={cartItem._id}>
                            <td className="product-thumbnail">
                              <span
                                onClick={() =>
                                  context.removeItemFromCart(cartItem._id)
                                }
                                className="remove"
                              >
                                <i className="bx bx-x"></i>
                              </span>
                              <a href="#">
                                <Image
                                  key={cartItem._id}
                                  cloudName={
                                    process.env.REACT_APP_CLOUDINARY_NAME
                                  }
                                  publicId={cartItem.image_public_id}
                                  width="70"
                                  crop="scale"
                                />
                              </a>
                            </td>

                            <td className="product-name">
                              <Link to={`/products-details/${cartItem._id}`}>
                                {cartItem.name}
                              </Link>
                            </td>

                            <td className="product-price">
                              <span className="unit-amount">
                                ${cartItem.price}
                              </span>
                            </td>

                            <td className="product-quantity">
                              <div className="input-counter">
                                <span
                                  className="minus-btn"
                                  onClick={() =>
                                    updateQuantity(
                                      cartItem,
                                      parseInt(cartItem.quantity - 1)
                                    )
                                  }
                                >
                                  {cartItem.quantity < 1
                                    ? context.removeItemFromCart(cartItem._id)
                                    : null}
                                  <i className="bx bx-minus"></i>
                                </span>
                                <input
                                  type="number"
                                  value={cartItem.quantity}
                                  onChange={(e) =>
                                    updateQuantity(cartItem, e.target.value)
                                  }
                                  min="1"
                                  max={cartItem.total_in_stock}
                                />
                                <span
                                  className="plus-btn"
                                  onClick={() =>
                                    updateQuantity(
                                      cartItem,
                                      parseInt(cartItem.quantity + 1)
                                    )
                                  }
                                >
                                  <i className="bx bx-plus"></i>
                                </span>
                              </div>
                            </td>

                            <td className="product-subtotal">
                              <span className="subtotal-amount">
                                ${cartItem.quantity * parseInt(cartItem.price)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              {!context.cartItems && (
                <div>
                  <h4>Empty cart</h4>
                </div>
              )}

              <div className="cart-buttons">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-7 col-md-7">
                    <div className="shopping-coupon-code">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon code"
                        name="coupon-code"
                        id="coupon-code"
                      />
                      <button type="submit">Apply Coupon</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="cart-totals">
              <h3>Cart Totals</h3>

              <ul>
                <li>
                  Subtotal{" "}
                  <span>
                    $
                    {(context.cartItems &&
                      context.cartItems.reduce((count, curItem) => {
                        return (
                          count +
                          parseInt(curItem.price) *
                            parseInt(curItem.quantity || 0)
                        );
                      }, 0)) ||
                      0}
                  </span>
                </li>
                <li>
                  Shipping <span>$30.00</span>
                </li>
                <li>
                  Total{" "}
                  <span>
                    $
                    {((context.cartItems &&
                      context.cartItems.reduce((count, curItem) => {
                        return (
                          count +
                          parseInt(curItem.price) *
                            parseInt(curItem.quantity || 0)
                        );
                      }, 0)) ||
                      0) + 30}
                  </span>
                </li>
                <li>
                  Payable Total{" "}
                  <span>
                    $
                    {((context.cartItems &&
                      context.cartItems.reduce((count, curItem) => {
                        return (
                          count +
                          parseInt(curItem.price) *
                            parseInt(curItem.quantity || 0)
                        );
                      }, 0)) ||
                      0) + 30}
                  </span>
                </li>
              </ul>

              <button className="proceed_button">
                {context.cartItems.length === 0 ? (
                  <Link
                    to=""
                    className="disable-btn"
                    onClick={(event) => event.preventDefault()}
                  >
                    Proceed to Checkout
                    <span></span>
                  </Link>
                ) : (
                  <Link to="/checkout" className="default-btn">
                    Proceed to Checkout
                    <span></span>
                  </Link>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartArea;
