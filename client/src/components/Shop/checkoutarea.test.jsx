import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../contexts/cart-context";
import AuthContext from "../../contexts/auth-context";
import axios from "axios";
import Payment from "./payment/Payment";

function CheckoutArea() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [message, setMessage] = useState("");
  const [orderItems, setOrderItems] = useState([]);

  const context = useContext(CartContext);
  const authContext = useContext(AuthContext);

   context.cartItems.itemsPrice =  context.cartItems &&
    context.cartItems.reduce((count, curItem) => {
      return (
        count +
        parseInt(curItem.price) *
          parseInt(curItem.quantity || 0)
      );
    }, 0)
  
    useEffect(() => {
      setOrderItems(context.cartItems)
    }, []);
  

  const submitOrder = (e) => {
    e.preventDefault();
    if (!authContext.userId && !authContext.token) {
      setMessage("You need to login first");
      return;
    }
    axios
      .post(process.env.REACT_APP_SERVER_API + "order/add-order-info", {
        userId: authContext.userId,
        firstName,
        lastName,
        companyName,
        email,
        phone,
        country,
        address,
        city,
        postCode,
        orderNotes,
        totalPrice:   context.cartItems.itemsPrice,
        orderItems,
      })
      .then((res) => {
        if (res?.data?.message === "Order successfully added") {
          localStorage.removeItem("cart-items");
          setFirstName("");
          setLastName("");
          setCompanyName("");
          setEmail("");
          setPhone("");
          setCountry("");
          setAddress("");
          setCity("");
          setPostCode("");
          setOrderNotes("");
          setMessage(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="checkout-area ptb-50">
      <div className="container">
        {message !== "" && (
          <div
            className={`
        ${
          message === "Order successfully added"
        } ? alert alert-success : alert alert-danger 
      `}
            role="alert"
          >
            {message}
          </div>
        )}
        <form onSubmit={submitOrder}>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="billing-details">
                <h3 className="title">Shipping Details</h3>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name*"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name*"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address*"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Town/City*"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ZIP Code*"
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country*"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        name="notes"
                        id="notes"
                        cols="30"
                        rows="3"
                        placeholder="Order Notes"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  


                </div>
              </div>


              <div className="billing-details mt-10">
                <h3 className="title">Billing Details</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group flex flex-row">
                      <input type="checkbox" className="form-control" 
                      />
                      <label>
                        Same as Shipping Details
                      </label>
                    </div>
                  </div>


                </div>
              </div>
              

              <Payment />
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="order-details">
                <div className="cart-totals">
                  <h3>Cart Totals</h3>

                  <ul>
                    <li>
                      Subtotal{" "}
                      <span>
                        $
                        {context.cartItems &&
                          context.cartItems.reduce((count, curItem) => {
                            return (
                              count +
                              parseInt(curItem.price) *
                                parseInt(curItem.quantity || 0)
                            );
                          }, 0)}
                      </span>
                    </li>
                    <li>
                      Shipping <span>$30.00</span>
                    </li>
                    <li>
                      Total{" "}
                      <span>
                        $
                        {context.cartItems &&
                          context.cartItems.reduce((count, curItem) => {
                            return (
                              count +
                              parseInt(curItem.price) *
                                parseInt(curItem.quantity || 0)
                            );
                          }, 0) + 30}
                      </span>
                    </li>
                    <li>
                      Payable Total{" "}
                      <span>
                        $
                        {context.cartItems &&
                          context.cartItems.reduce((count, curItem) => {
                            return (
                              count +
                              parseInt(curItem.price) *
                                parseInt(curItem.quantity || 0)
                            );
                          }, 0) + 30}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="payment-box">
                  <h3 className="title">Payment Method</h3>

                  <div className="payment-method">
                    <p>
                      <input
                        type="radio"
                        id="cash-on-delivery"
                        name="radio-group"
                      />
                      <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="check-payments"
                        name="radio-group"
                      />
                      <label htmlFor="check-payments">Credit Card</label>
                    </p>
                    <p>
                      <input type="radio" id="paypal" name="radio-group" />
                      <label htmlFor="paypal">PayPal</label>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="default-btn"
                    style={{ cursor: "pointer" }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CheckoutArea;
