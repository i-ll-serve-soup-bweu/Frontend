import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '../../molecules';
import {
  TableCell, TableHead, TableRow, StyledInput,
} from '../../atoms';

const DisplayInventory = props => (
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
);

export default DisplayInventory;
