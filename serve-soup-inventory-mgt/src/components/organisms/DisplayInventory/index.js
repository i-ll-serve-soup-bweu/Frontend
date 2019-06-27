import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import styled from 'styled-components';

import { doGetInventory, doDeleteItem } from '../../../actions';
import { Table } from '../../molecules';
import {
  TableCell, TableHead, TableRow, LoaderContainer, StyledHeading, StyledActionButton, Arrow,
} from '../../atoms';

const StyledDisplayInventoryContainer = styled.div`
  margin-top: 16px;
  padding-left: 10px;
  width: 100%;

  @media (max-width: 760px) {
    padding-left: 0;
  }
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledBadge = styled.span`
  display: inline-block;
  background: grey;
  color: white;
  padding: .2rem .5rem;
  margin-left: 1rem;
  border-radius: .5rem;
  font-size: 70%;
`;

const StyledDelete = styled.img`
  width: 1rem;
  height: auto;
`;

const DisplayInventory = ({
  inventory, kitchen, loadingInventory, doDeleteItem, doGetInventory, history,
}) => {
  useEffect(() => {
    doGetInventory(kitchen.id);
  }, [doGetInventory, kitchen]);

  const onDeleteItem = (id) => {
    doDeleteItem(id, kitchen.id, history);
  };

  if (loadingInventory) {
    return (
      <LoaderContainer text="loading inventory..." />
    );
  }


  return (
    <StyledDisplayInventoryContainer>
      <StyledHeaderContainer>
        <StyledHeading secondary>Inventory</StyledHeading>
        <Link to="/inventory/add-item"><StyledActionButton>+</StyledActionButton></Link>
      </StyledHeaderContainer>

      <Table>
        <thead>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead
              style={{ textAlign: 'center' }}
            >
              Stock
            </TableHead>
            <TableHead
              style={{ textAlign: 'right' }}
            >
              Category
            </TableHead>
            <TableHead
              style={{ width: '50px' }}
            />
            <TableHead
              style={{ width: '30px' }}
            />
          </TableRow>
        </thead>
        <tbody>
          {
            !inventory[0] && (
              <StyledHeading info>
                No Inventory Items added yet.
                  {' '}
                <Link to="/inventory/add-item">Click here</Link>
                {' '}
                to add inventory items
              </StyledHeading>
            )
          }
          {
            inventory.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  {`${item.item_name}`}
                  {!item.quantity ? (<StyledBadge>Out of Stock</StyledBadge>) : ''}
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center' }}
                >
                  {`${item.quantity} ${item.measurement_unit}`}
                </TableCell>
                <TableCell
                  style={{ textAlign: 'right' }}
                >
                  {item.category}
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center' }}
                >
                  <Link to={`/inventory/${item.id}`}><Arrow right /></Link>
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center' }}
                >
                  <StyledDelete
                    onClick={() => onDeleteItem(item.id)}
                    src="https://image.flaticon.com/icons/svg/1214/1214594.svg"
                    alt="delete"
                  />
                </TableCell>
              </TableRow>
            ))
          }
        </tbody>
      </Table>
    </StyledDisplayInventoryContainer>
  );
};


const mapStateToProps = state => ({
  kitchen: state.user.kitchen,
  inventory: state.inventory.inventory,
  loadingInventory: state.inventory.loadingInventory,
  error: state.inventory.error,
});

export default connect(mapStateToProps, { doGetInventory, doDeleteItem })(DisplayInventory);

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
  history: pt.shape(historyPropTypes).isRequired,
  loadingInventory: pt.bool.isRequired,
  doGetInventory: pt.func.isRequired,
  doDeleteItem: pt.func.isRequired,
};
