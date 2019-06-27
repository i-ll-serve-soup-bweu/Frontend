import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarText from '.';

storiesOf('SidebarText', module)
  .add('default', () => <SidebarText text="Notification" />)
  .add('selected', () => <SidebarText text="Notification" selected />)
;
