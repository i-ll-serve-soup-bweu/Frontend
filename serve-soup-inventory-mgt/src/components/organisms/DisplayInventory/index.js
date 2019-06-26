import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';

import { doGetInventory } from '../../../actions';
import { Table } from '../../molecules';
import {
  TableCell, TableHead, TableRow, StyledInput,
} from '../../atoms';

const DisplayInventory = ({
  inventory, kitchen, loadingInventory, doGetInventory, error,
}) => {
  useEffect(() => {
    doGetInventory(kitchen.id);
  }, [doGetInventory, kitchen]);

  if (loadingInventory) {
    return (
      <p>loading inventory</p>
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
          <TableRow>
            <TableCell><StyledInput type="radio" /></TableCell>
            <TableCell>Item 1</TableCell>
            <TableCell>Stock Name</TableCell>
            <TableCell>Category here</TableCell>
            <TableCell>
              <Link to="/inventory/1">Click</Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><StyledInput type="radio" /></TableCell>
            <TableCell>Item 1</TableCell>
            <TableCell>Stock Name</TableCell>
            <TableCell>Category here</TableCell>
            <TableCell>
              <Link to="/inventory/2">Click</Link>
            </TableCell>
          </TableRow>
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
