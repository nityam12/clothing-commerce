import React from "react";
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

class ShopPage extends React.Component {
  // constructor(){
  //   super();
  //   this.state={

  //   };
  // }

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // console.log(collectionRef);
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapShot) => {
    //     // console.log(snapShot.data());
    //     const collectionMap = convertCollectionsSnapshotToMap(snapShot);
    //     updateCollections(collectionMap);
    //     this.setState({ loading: false });
    //     // console.log(collectionMap);
    //   }
    // );
    //promise
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match} = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
          // render={(props) => (
          //   <CollectionOverviewWithSpinner
          //     isLoading={!isCollectionLoaded}
          //     {...props}
          //   />
          // )}
        />
        <Route
          path={`${match.path}:collectionId`}
          component={CollectionPageContainer}

          // render={(props) => (
          //   <CollectionPageWithSpinner
          //     isLoading={!isCollectionLoaded}
          //     {...props}
          //   />
          // )}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   // isCollectionLoaded: selectIsCollectionLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
