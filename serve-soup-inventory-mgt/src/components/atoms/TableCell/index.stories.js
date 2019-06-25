import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledTableCell from '.';

storiesOf('TableCell', module)
  .add('default', () => (
    <table>
      <thead>
        <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <StyledTableCell>Cell 1</StyledTableCell>
          <StyledTableCell>Cell 2</StyledTableCell>
          <StyledTableCell>Cell 3</StyledTableCell>
        </tr>
      </tbody>
    </table>
  ))
;