import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';

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
      <p>loading kitchen</p>
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
