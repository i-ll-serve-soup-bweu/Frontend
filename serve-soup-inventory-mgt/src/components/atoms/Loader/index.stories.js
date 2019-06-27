import React from 'react';
import { storiesOf } from '@storybook/react';

import LoaderContainer from './index';

storiesOf('Loader', module)
  .add('loader', () => <LoaderContainer />);
