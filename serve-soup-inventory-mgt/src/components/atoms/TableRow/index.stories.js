import React from 'react';
import { storiesOf } from '@storybook/react';

import TableRow from '.';

storiesOf('TableRow', module)
  .add('default', () => (
    <table>
      <thead>
        <TableRow>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <td>Content 1</td>
          <td>Content 2</td>
          <td>Content 3</td>
        </TableRow>
        <TableRow>
          <td>Content 1</td>
          <td>Content 2</td>
          <td>Content 3</td>
        </TableRow>
      </tbody>
    </table>
  ))
;