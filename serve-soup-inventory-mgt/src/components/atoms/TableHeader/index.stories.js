import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledTableHeader from '.';

storiesOf('TableHeader', module)
  .add('default', () => (
    <table>
      <thead>
        <StyledTableHeader>Heading 1</StyledTableHeader>
        <StyledTableHeader>Heading 2</StyledTableHeader>
        <StyledTableHeader>Heading 3</StyledTableHeader>
      </thead>
      <tbody>
        <tr>
          <td>Content 1</td>
          <td>Content 2</td>
          <td>Content 3</td>
        </tr>
      </tbody>
    </table>
  ))
;