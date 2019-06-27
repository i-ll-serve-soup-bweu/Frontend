import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledTable from '.';
import { TableRow, TableCell, TableHead } from '../../atoms';

storiesOf('Table', module)
  .add('default', () => (
    <StyledTable>
      <thead>
        <TableRow>
          <TableHead>Heading 1</TableHead>
          <TableHead>Heading 2</TableHead>
          <TableHead>Heading 3</TableHead>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Content 1</TableCell>
          <TableCell>Content 2</TableCell>
          <TableCell>Content 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Content 1</TableCell>
          <TableCell>Content 2</TableCell>
          <TableCell>Content 3</TableCell>
        </TableRow>
      </tbody>
    </StyledTable>
  ))
;