import React from "react";

export default function OrderModal({ cart, startNewOrder }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="Order Confirmed"
          className="confirmed-icon"
        />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <div className="order-summary-box">
          <ul className="modal-items-list">
            {cart.map((item) => (
              <li key={item.name} className="modal-item">
                <div className="modal-item-left">
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="modal-thumbnail"
                  />
                  <div>
                    <h5>{item.name}</h5>
                    <div className="modal-pricing">
                      <span className="item-qty">{item.quantity}x</span>
                      <span className="item-price">
                        @ ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="modal-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="modal-total-row">
            <span>Order Total</span>
            <span className="modal-total-price">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button className="start-new-order-btn" onClick={startNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
