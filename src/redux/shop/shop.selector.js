import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectShopSections = createSelector(
  [selectShop],
  (shop) => shop.SHOP_DATA
);

export const selectCollectionsForPreview = createSelector(
  [selectShopSections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopSections],
    (collections) => collections[collectionUrlParam]
  );