import { createSelector } from "reselect";

const selectUser = (state) => state.user; //input selector

//output selector
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

