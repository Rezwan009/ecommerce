import React, { useState } from "react";
import Layout from "../common/Layout";
import { Link } from "react-router-dom";
import productImage from "../../assets/images/Mens/two.jpg";
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod')

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value)
  }
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className="py-3">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-md-7">
            <h3 className="border-bottom pb-3">
              <strong>Billing Details</strong>
            </h3>
            <form action="">
              <div className="row pt-3">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="address"
                  id="address"
                  rows={3}
                  placeholder="Address"
                  className="form-control"
                ></textarea>
              </div>
              <div className="row pt-3">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <h3 className="border-bottom pb-3">
              <strong>Items</strong>
            </h3>
            <table className="table">
              <tbody>
                <tr>
                  <td width={100}>
                    <img src={productImage} alt="" width={80} />
                  </td>
                  <td width={600}>
                    <h4>Dummy product name</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span>$10</span>
                      <div className="ps-3">
                        <button className="btn btn-size">S</button>
                      </div>
                      <div className="ps-5">X1</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row  pb-5">
              <div className="col-md-12">
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <div>Subtotal:</div>
                  <div>$20</div>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <div>Shipping:</div>
                  <div>$2</div>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <div>
                    <strong>Grand Total</strong>:
                  </div>
                  <div>$22</div>
                </div>

                <h3 className="border-bottom pt-4 pb-3">
                  <strong>Payment Method</strong>
                </h3>
                {/* <div>
                  <p>
                    By clicking the "Proceed To Checkout" button, you agree to
                    our terms and conditions.
                  </p>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms"
                    />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the terms and conditions
                    </label>
                  </div>
                  <small className="text-muted">
                    We'll send you a confirmation email after checkout.
                  </small>
                </div> */}
                <div className="pt-2">
                  <input
                    type="radio"
                    value={"stripe"}
                    checked={paymentMethod == "stripe"}
                    onClick={handlePaymentMethodChange}
                  />
                  <label htmlFor="" className="form-label ps-2">
                    Stripe
                  </label>
                  <input
                    type="radio"
                    className="ms-3"
                    value={"cod"}
                    checked={paymentMethod == "cod"}
                    onClick={handlePaymentMethodChange}
                  />
                  <label htmlFor="" className="form-label ps-2">
                    COD
                  </label>
                </div>
                <div className="d-flex justify-content-start py-3">
                  <Link to="/checkout">
                    <button className="btn btn-primary">Pay Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
