import React from "react";

export default function Cart({
  cart,
  removeFromCart,
  deleteItem,
  confirmOrder,
}) {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div
      style={{
        background: "white",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          color: "hsl(14, 86%, 42%)",
          fontSize: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        Your Cart ({totalQuantity})
      </h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <p style={{ color: "#877c78", fontWeight: "600" }}>
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          <ul
            style={{ listStyle: "none", maxHeight: "300px", overflowY: "auto" }}
          >
            {cart.map((item) => (
              <li
                key={item.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 0",
                  borderBottom: "1px solid #f5eee9",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.name}
                  </h4>
                  <div
                    style={{ display: "flex", gap: "1rem", fontSize: "0.9rem" }}
                  >
                    <span
                      style={{ color: "hsl(14, 86%, 42%)", fontWeight: "700" }}
                    >
                      {item.quantity}x
                    </span>
                    <span style={{ color: "#877c78" }}>
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span style={{ color: "#877c78", fontWeight: "600" }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => deleteItem(item.name)}
                  style={{
                    background: "transparent",
                    border: "1px solid #ad9f9b",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ fontSize: "0.9rem", color: "#877c78" }}>
                Order Total
              </span>
              <span style={{ fontSize: "1.75rem", fontWeight: "700" }}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={confirmOrder}
              style={{
                width: "100%",
                background: "hsl(14, 86%, 42%)",
                color: "white",
                border: "none",
                padding: "1rem",
                borderRadius: "999px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
