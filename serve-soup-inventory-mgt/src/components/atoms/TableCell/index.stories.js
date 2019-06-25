import React from 'react';
import { storiesOf } from '@storybook/react';

import TableCell from '.';

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
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </tr>
      </tbody>
    </table>
  ))
;