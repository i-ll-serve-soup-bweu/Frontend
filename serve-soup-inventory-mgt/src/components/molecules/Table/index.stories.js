import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledTable from '.';

storiesOf('Table', module)
  .add('default', () => (
    <StyledTable>
      <thead>
        <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Content 1</td>
          <td>Content 2</td>
          <td>Content 3</td>
        </tr>
        <tr>
          <td>Content 1</td>
          <td>Content 2</td>
          <td>Content 3</td>
        </tr>
      </tbody>
    </StyledTable>
  ))
;