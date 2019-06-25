import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledTableRow from '.';

storiesOf('TableRow', module)
  .add('default', () => (
    <table>
      <thead>
        <StyledTableRow>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
        </StyledTableRow>
      </thead>
      <tbody>
        <StyledTableRow>
          <td>Content 1</td>
          <td>Content 2</td>
          <td>Content 3</td>
        </StyledTableRow>
        <StyledTableRow>
          <td>Content 1</td>
          <td>Content 2</td>
          <td>Content 3</td>
        </StyledTableRow>
      </tbody>
    </table>
  ))
;