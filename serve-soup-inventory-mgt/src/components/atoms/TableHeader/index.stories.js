import React from 'react';
import { storiesOf } from '@storybook/react';

import TableHeader from '.';

storiesOf('TableHeader', module)
  .add('default', () => (
    <table>
      <thead>
        <TableHeader>Heading 1</TableHeader>
        <TableHeader>Heading 2</TableHeader>
        <TableHeader>Heading 3</TableHeader>
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