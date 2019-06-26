import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';
import Loader from 'react-loader-spinner';

import { doGetKitchen } from '../../../actions';
import { DisplayInventory, AppNav } from '../../organisms';

function InventoryGrid({
  doGetKitchen, kitchen, loadingKitchen, error,
}) {
  useEffect(() => {
    doGetKitchen();
  }, [doGetKitchen]);

  if (loadingKitchen) {
    return (
      <Loader
        type="Circles"
        color="#8CBD53"
        height="100"
        width="100"
      />
    );
  }

  if (!kitchen) {
    return (
      <Redirect
        to="/kitchen/create"
      />
    );
  }

  return (
    <div>
      <AppNav loggedIn />
      {
        error && <p>{error}</p>
      }
      <DisplayInventory />
    </div>
  );
}

const mapStateToProps = state => ({
  kitchen: state.user.kitchen,
  loadingKitchen: state.user.loadingKitchen,
  error: state.user.error,
});

export default connect(mapStateToProps, { doGetKitchen })(InventoryGrid);

InventoryGrid.defaultProps = {
  kitchen: undefined,
};

InventoryGrid.propTypes = {
  doGetKitchen: pt.func.isRequired,
  kitchen: pt.shape({
    id: pt.number,
    kitchen_name: pt.string,
    location: pt.string,
    description: pt.string,
    km_id: pt.number,
  }),
  loadingKitchen: pt.bool.isRequired,
  error: pt.string.isRequired,
};
