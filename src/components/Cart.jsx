import React from "react";

export default function Cart({ cart, deleteItem, confirmOrder }) {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-container">
      <h2>Your Cart ({totalQuantity})</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛍️</div>
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="cart-items-list">
            {cart.map((item) => (
              <li className="cart-item" key={item.name}>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>

                  <div className="cart-item-pricing">
                    <span className="item-qty">{item.quantity}x</span>

                    <span className="item-price">
                      @ ${item.price.toFixed(2)}
                    </span>

                    <span className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  className="remove-item-btn"
                  onClick={() => deleteItem(item.name)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total-section">
            <div className="order-total-row">
              <span>Order Total</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="carbon-neutral-notice">
              <span>♧</span>
              This is a carbon-neutral delivery
            </div>

            <button className="confirm-order-btn" onClick={confirmOrder}>
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
