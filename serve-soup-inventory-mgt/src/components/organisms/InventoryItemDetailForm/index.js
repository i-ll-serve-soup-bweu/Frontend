import React from 'react';

import { StyledInput, DisplayText, StyledHeading, StyledButton } from '../../atoms';

const InventoryItemDetailForm = () => {
  let stockRef = React.createRef();
  let priceRef = React.createRef();
  let alertRef = React.createRef();

  return (
    <div>
      <div>
        <DisplayText primary>Current Stock</DisplayText>
        <StyledInput
          small
          ref={stockRef}
          defaultValue="7.5"
        />
        <select>
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
        <select>
          {/* map through measurement units to render options */}
          <option>Produce</option>
          <option>Dry Goods</option>
          <option>Dairy</option>
          <option>Canned Goods</option>
          <option>Other...</option>
        </select>
      </div>
      <div>
        <DisplayText primary>Price per unit</DisplayText>
        <StyledInput
          medium
          ref={priceRef}
          defaultValue="$2.11"
        />
      </div>
      <StyledHeading tertiary>Out of stock behavior</StyledHeading>
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
          {/* map through measurement units to render options */}
          <option>Email Alert</option>
          <option>Text Alert</option>
          <option>Add to re-order list</option>
          <option>Do Nothing</option>
          <option>Other...</option>
        </select>
      </div>
      <div>
        <StyledButton secondary>Save</StyledButton>
        <StyledButton primary>Discard Item</StyledButton>
      </div>
    </div>
  );
};

export default InventoryItemDetailForm;
