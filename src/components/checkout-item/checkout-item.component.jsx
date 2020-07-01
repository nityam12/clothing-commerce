import React from "react";
import {
  clearitemfromcart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";


import { connect } from "react-redux";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem, clearitem, additem, removeitem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeitem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => additem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearitem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearitem: (item) => dispatch(clearitemfromcart(item)),
  removeitem: (item) => dispatch(removeItem(item)),
  additem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
