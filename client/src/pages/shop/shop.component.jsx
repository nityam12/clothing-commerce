import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionPageContainer from "../collection/collection.container";

import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// import {
//   selectIsCollectionFetching,
//   selectIsCollectionLoaded,
// } from "../../redux/shop/shop.selector";

// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
