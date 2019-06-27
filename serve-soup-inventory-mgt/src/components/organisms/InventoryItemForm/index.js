import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import Tooltip from 'react-simple-tooltip';

import {
  doGetKitchen, doAddInventoryItem, doUpdateInventoryItem, doDeleteItem,
} from '../../../actions';
import {
  StyledInput, DisplayText, StyledButton, LoaderContainer, SelectInput, StyledHeading, Arrow,
} from '../../atoms';

const StyledItemFormContainer = styled.div`
  margin-top: 16px;
  padding-left: 10px;
  width: 100%;

  @media (max-width: 760px) {
    padding-left: 0;
  }
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDisplayText = styled.div`
  width: 150px;
  text-align: right;
  padding-right: 8px;
  
  @media (max-width: 760px) {
    font-size: .8em;
    width: 100px;
  }
`;

const StyledItemName = styled.div`
  margin-left: 40px;

  @media (max-width: 760px) {
    margin-left: 10px;
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  @media (max-width: 760px) {
    align-items: center;
  }
`;

const StyledBackText = styled.p`
  margin-left: 10px;
  color: grey;
  cursor: pointer;
`;

const InventoryItemForm = ({
  doGetKitchen,
  doAddInventoryItem,
  doUpdateInventoryItem,
  doDeleteItem,
  kitchen,
  inventory,
  loadingKitchen,
  loadingInventory,
  history,
  match,
}) => {
  const stockRef = React.createRef();
  const nameRef = React.createRef();
  const measurementRef = React.createRef();
  const categoryRef = React.createRef();
  const alertRef = React.createRef();

  const onAddUpdateInventoryItem = (action, id) => {
    const newItem = {
      item_name: nameRef.current.value,
      quantity: stockRef.current.value,
      measurement_unit: measurementRef.current.value,
      category: categoryRef.current.value,
      // price: priceRef.current.value,
      kitchen_id: kitchen.id,
    };
    if (action === 'add') doAddInventoryItem(newItem, history);
    else doUpdateInventoryItem(newItem, id, history);
  };

  const onDeleteItem = (id) => {
    doDeleteItem(id, kitchen.id, history);
  };

  useEffect(() => {
    doGetKitchen();
  }, [doGetKitchen]);

  useEffect(() => {
    const { id } = match.params;
    let oneItem;
    if (id && inventory[0] && !Number.isNaN(Number(id))) {
      [oneItem] = inventory.filter(item => item.id === Number(id));
    }

    if (oneItem && nameRef.current) {
      nameRef.current.value = oneItem.item_name;
      stockRef.current.value = oneItem.quantity;
      measurementRef.current.value = oneItem.measurement_unit;
      categoryRef.current.value = oneItem.category;
    }
  }, [inventory, nameRef, stockRef, measurementRef, categoryRef, match]);

  if (loadingKitchen || loadingInventory) {
    return (
      <LoaderContainer text={loadingInventory ? 'loading inventory' : 'loading kitchen'} />
    );
  }

  const { id } = match.params;
  const isUpdate = !Number.isNaN(Number(id));
  return (
    <StyledItemFormContainer>
      <StyledBackText
        onClick={history.goBack}
      >
        <Arrow left />
        {' '}
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
        <Tooltip content="Available in Pro Version">
          <StyledInput
            disabled
            medium
          />
        </Tooltip>
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
        <StyledButton
          save
          onClick={isUpdate ? () => onAddUpdateInventoryItem('update', id) : () => onAddUpdateInventoryItem('add')}
        >
          Save
        </StyledButton>
        {
          isUpdate
          && <StyledButton discard onClick={() => onDeleteItem(id)}>Discard Item</StyledButton>
        }
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
connect(mapStateToProps,
  {
    doGetKitchen, doAddInventoryItem, doUpdateInventoryItem, doDeleteItem,
  })(InventoryItemForm);

InventoryItemForm.defaultProps = {
  kitchen: undefined,
  inventory: undefined,
};

InventoryItemForm.propTypes = {
  doGetKitchen: pt.func.isRequired,
  doAddInventoryItem: pt.func.isRequired,
  doUpdateInventoryItem: pt.func.isRequired,
  doDeleteItem: pt.func.isRequired,
  inventory: pt.arrayOf(pt.object),
  kitchen: pt.shape({
    id: pt.number,
    kitchen_name: pt.string,
    location: pt.string,
    description: pt.string,
    km_id: pt.number,
  }),
  loadingKitchen: pt.bool.isRequired,
  loadingInventory: pt.bool.isRequired,
  history: pt.shape(historyPropTypes).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};
