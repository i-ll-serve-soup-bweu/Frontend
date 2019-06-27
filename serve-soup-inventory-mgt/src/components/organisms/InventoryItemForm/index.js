import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { doGetKitchen, doAddInventoryItem } from '../../../actions';
import {
  StyledInput, DisplayText, StyledButton, SelectInput, StyledHeading,
} from '../../atoms';

const StyledItemFormContainer = styled.div`
  margin-top: 16px;
  padding-left: 10px;
  width: 100%;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDisplayText = styled.div`
  width: 150px;
  text-align: right;
  padding-right: 8px;
`;

const StyledItemName = styled.div`
  margin-left: 40px;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const StyledBackText = styled.p`
  margin-left: 40px;
  color: grey;
  cursor: pointer;
`;

const InventoryItemForm = ({
  doGetKitchen, doAddInventoryItem, kitchen, loadingKitchen, history,
}) => {
  const stockRef = React.createRef();
  const nameRef = React.createRef();
  const measurementRef = React.createRef();
  const categoryRef = React.createRef();
  const alertRef = React.createRef();
  const priceRef = React.createRef();

  const onAddInventoryItem = () => {
    const newItem = {
      item_name: nameRef.current.value,
      quantity: stockRef.current.value,
      measurement_unit: measurementRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
      kitchen_id: kitchen.id,
    };
    doAddInventoryItem(newItem, history);
  };

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

  return (
    <StyledItemFormContainer>
      <StyledBackText
        onClick={history.goBack}
      >
        Back to Inventory
      </StyledBackText>
      <StyledItemName>
        <StyledInput
          heading
          placeholder="Item Name"
          ref={nameRef}
          defaultValue={'' || ''}
        />
      </StyledItemName>
      <StyledRow
        style={{ marginTop: '15px' }}
      >
        <StyledDisplayText>
          <DisplayText primary>Current Stock:</DisplayText>
        </StyledDisplayText>
        <StyledInput
          small
          ref={stockRef}
          defaultValue={'' || ''}
          style={{ marginRight: '8px' }}
        />
        <SelectInput
          medium
          ref={measurementRef}
        >
          <option>pounds</option>
          <option>cases</option>
          <option>grams</option>
          <option>cups</option>
          <option>packages</option>
          <option>cans</option>
          <option>other...</option>
        </SelectInput>
      </StyledRow>
      <StyledRow>
        <StyledDisplayText>
          <DisplayText primary>Category:</DisplayText>
        </StyledDisplayText>
        <SelectInput
          medium
          ref={categoryRef}
        >
          <option>Produce</option>
          <option>Dry Goods</option>
          <option>Dairy</option>
          <option>Canned Goods</option>
          <option>Other...</option>
        </SelectInput>
      </StyledRow>
      <StyledRow>
        <StyledDisplayText>
          <DisplayText primary>Price per unit:</DisplayText>
        </StyledDisplayText>
        <StyledInput
          medium
          ref={priceRef}
          defaultValue={'' || ''}
        />
      </StyledRow>
      <StyledHeading
        secondary
        style={{ margin: '20px 35px' }}
      >
        Out of stock behavior:
      </StyledHeading>
      <StyledRow>
        <StyledDisplayText>
          <DisplayText primary>Alert below:</DisplayText>
        </StyledDisplayText>
        <StyledInput
          small
          ref={alertRef}
          defaultValue="2"
        />
        <DisplayText primary>units</DisplayText>
      </StyledRow>
      <StyledRow>
        <StyledDisplayText>
          <DisplayText primary>Alert Behavior:</DisplayText>
        </StyledDisplayText>
        <SelectInput large>
          <option>Email Alert</option>
          <option>Text Alert</option>
          <option>Add to re-order list</option>
          <option>Do Nothing</option>
          <option>Other...</option>
        </SelectInput>
      </StyledRow>
      <StyledButtonsContainer>
        <StyledButton save onClick={onAddInventoryItem}>Save</StyledButton>
        <StyledButton discard>Discard Item</StyledButton>
      </StyledButtonsContainer>
    </StyledItemFormContainer>
  );
};

const mapStateToProps = state => ({
  kitchen: state.user.kitchen,
  loadingKitchen: state.user.loadingKitchen,
  inventory: state.inventory.inventory,
  loadingInventory: state.inventory.loadingInventory,
});

export default
  connect(mapStateToProps, { doGetKitchen, doAddInventoryItem })(InventoryItemForm);

InventoryItemForm.defaultProps = {
  kitchen: undefined,
};

InventoryItemForm.propTypes = {
  doGetKitchen: pt.func.isRequired,
  doAddInventoryItem: pt.func.isRequired,
  kitchen: pt.shape({
    id: pt.number,
    kitchen_name: pt.string,
    location: pt.string,
    description: pt.string,
    km_id: pt.number,
  }),
  loadingKitchen: pt.bool.isRequired,
  history: pt.shape(historyPropTypes).isRequired,
};
