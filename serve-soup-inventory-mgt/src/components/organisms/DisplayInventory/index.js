import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { doGetInventory } from '../../../actions';
import { Table } from '../../molecules';
import {
  TableCell, TableHead, TableRow, StyledInput,
} from '../../atoms';

const StyledBadge = styled.span`
  display: inline-block;
  background: grey;
  color: white;
  padding: .2rem .5rem;
  margin-left: 1rem;
  border-radius: .5rem;
  font-size: 70%;
`;

const DisplayInventory = ({
  inventory, kitchen, loadingInventory, doGetInventory, error,
}) => {
  useEffect(() => {
    doGetInventory(kitchen.id);
  }, [doGetInventory, kitchen]);

  if (loadingInventory) {
    return (
      <Loader
        type="Circles"
        color="#8CBD53"
        height="100"
        width="100"
      />
    );
  }

  if (!inventory[0]) {
    return (
      <h3>No Inventory Items added yet. Click here to add inventory items</h3>
    );
  }
  return (
    <>
      {
      error && <p>{error}</p>
    }
      <Table>
        <thead>
          <TableRow>
            <TableHead><StyledInput type="checkbox" /></TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Category</TableHead>
            <TableHead />
          </TableRow>
        </thead>
        <tbody>
          {
            inventory.map(item => (
              <TableRow key={item.id}>
                <TableCell><StyledInput type="radio" /></TableCell>
                <TableCell>
                  {`${item.item_name}`}
                  {!item.quantity ? (<StyledBadge>Out of Stock</StyledBadge>) : ''}
                </TableCell>
                <TableCell>{`${item.quantity} ${item.measurement_unit}`}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <Link to={`/inventory/${item.id}`}>Click</Link>
                </TableCell>
              </TableRow>
            ))
          }
        </tbody>
      </Table>
    </>
  );
};


const mapStateToProps = state => ({
  kitchen: state.user.kitchen,
  inventory: state.inventory.inventory,
  loadingInventory: state.inventory.loadingInventory,
  error: state.inventory.error,
});

export default connect(mapStateToProps, { doGetInventory })(DisplayInventory);

DisplayInventory.defaultProps = {
  inventory: [],
  kitchen: undefined,
};

DisplayInventory.propTypes = {
  kitchen: pt.shape({
    id: pt.number,
    kitchen_name: pt.string,
    location: pt.string,
    description: pt.string,
    km_id: pt.number,
  }),
  inventory: pt.arrayOf(pt.object),
  error: pt.string.isRequired,
  loadingInventory: pt.bool.isRequired,
  doGetInventory: pt.func.isRequired,
};
