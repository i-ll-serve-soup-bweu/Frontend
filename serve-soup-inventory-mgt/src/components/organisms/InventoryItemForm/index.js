import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import Loader from 'react-loader-spinner';
import ReactRouterPropTypes from 'react-router-prop-types';

import {
  doGetKitchen, doAddInventoryItem, doUpdateInventoryItem, doDeleteItem,
} from '../../../actions';
import {
  StyledInput, DisplayText, StyledButton,
} from '../../atoms';


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
  // const alertRef = React.createRef();

  const onAddUpdateInventoryItem = (action, id) => {
    const newItem = {
      item_name: nameRef.current.value,
      quantity: stockRef.current.value,
      measurement_unit: measurementRef.current.value,
      category: categoryRef.current.value,
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
      <Loader
        type="Circles"
        color="#8CBD53"
        height="100"
        width="100"
      />
    );
  }

  const { id } = match.params;
  const isUpdate = !Number.isNaN(Number(id));
  return (
    <div>
      <div>
        <StyledInput
          heading
          placeholder="Item Name"
          ref={nameRef}
          defaultValue={'' || ''}
        />
      </div>
      <div>
        <DisplayText primary>Stock Quantity</DisplayText>
        <StyledInput
          small
          ref={stockRef}
          defaultValue={'' || ''}
        />
        <select ref={measurementRef}>
          {/* map through measurement units to render options */}
          <option>pounds</option>
          <option>cases</option>
          <option>grams</option>
          <option>cups</option>
          <option>packages</option>
          <option>cans</option>
          <option>other...</option>
        </select>
      </div>
      <div>
        <DisplayText primary>Category</DisplayText>
        <select ref={categoryRef}>
          {/* map through measurement units to render options */}
          <option>Produce</option>
          <option>Dry Goods</option>
          <option>Dairy</option>
          <option>Canned Goods</option>
          <option>Other...</option>
        </select>
      </div>
      {/* <StyledHeading tertiary>Out of stock behavior</StyledHeading>
      <div>
        <DisplayText primary>Alert when below</DisplayText>
        <StyledInput
          small
          ref={alertRef}
          defaultValue="2"
        />
        <span>units</span>
      </div>
      <div>
        <DisplayText primary>Alert Behavior</DisplayText>
        <select>
      map through measurement units to render options
      <option>Email Alert</option>
          <option>Text Alert</option>
          <option>Add to re-order list</option>
          <option>Do Nothing</option>
          <option>Other...</option>
        </select>
      </div> */}
      <div>
        <StyledButton
          secondary
          onClick={isUpdate ? () => onAddUpdateInventoryItem('update', id) : () => onAddUpdateInventoryItem('add')}
        >
          Save
        </StyledButton>
        {
          isUpdate
          && <StyledButton primary onClick={() => onDeleteItem(id)}>Discard Item</StyledButton>
        }
      </div>
    </div>
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
