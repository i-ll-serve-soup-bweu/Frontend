import React, { useEffect } from 'react';
import {
  Redirect, Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';
import styled from 'styled-components';

import { doGetKitchen } from '../../../actions';
import {
  DisplayInventory,
} from '../../organisms';
import { StyledHeading, StyledActionButton, LoaderContainer } from '../../atoms';

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
        <StyledHeaderContainer>
          <StyledHeading secondary>Inventory</StyledHeading>
          <Link to="/inventory/add-item"><StyledActionButton>+</StyledActionButton></Link>
        </StyledHeaderContainer>
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
