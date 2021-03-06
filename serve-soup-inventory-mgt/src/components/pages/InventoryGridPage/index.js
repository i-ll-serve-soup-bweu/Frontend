import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';
import styled from 'styled-components';

import { doGetKitchen } from '../../../actions';
import {
  DisplayInventory,
} from '../../organisms';
import { LoaderContainer } from '../../atoms';

const StyledInventoryContainer = styled.div`
  margin-top: 20px;
  padding-left: 10px;
`;

function InventoryGrid({
  doGetKitchen, kitchen, loadingKitchen, error, history,
}) {
  useEffect(() => {
    doGetKitchen();
  }, [doGetKitchen]);

  if (loadingKitchen) {
    return (
      <LoaderContainer text="loading kitchen" />
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
      <StyledInventoryContainer>
        {
        error && <p>{error}</p>
       }
        <DisplayInventory history={history} />
      </StyledInventoryContainer>
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
