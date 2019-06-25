import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import pt from 'prop-types';

import { doGetKitchen } from '../../../actions';
import { DisplayInventory, AppNav } from '../../organisms';

function InventoryGrid({ doGetKitchen }) {
  useEffect(() => {
    doGetKitchen();
  }, [doGetKitchen]);

  return (
    <div>
      <AppNav loggedIn />
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

InventoryGrid.propTypes = {
  doGetKitchen: pt.func.isRequired,
};
