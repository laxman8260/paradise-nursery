import React from "react";

function CartItem() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Shopping Cart</h2>

      <div style={{ margin: "20px" }}>
        <h3>Snake Plant</h3>
        <p>Unit Price: $15</p>

        <button>+</button>
        <span style={{ margin: "10px" }}>1</span>
        <button>-</button>

        <br /><br />

        <button>Delete</button>
      </div>

      <h3>Total: $15</h3>

      <button style={{ margin: "10px" }}>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;