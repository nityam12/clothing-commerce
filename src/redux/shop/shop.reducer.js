import Shop_Data from "./shop.data.js";

const INITIAL_STATE = {
  SHOP_DATA: Shop_Data,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
