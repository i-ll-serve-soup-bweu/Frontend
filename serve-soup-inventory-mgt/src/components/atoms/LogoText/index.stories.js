import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledLogoText from './index';

storiesOf('LogoText', module)
  .add('LogoText', () => <StyledLogoText>I'll Serve Soup</StyledLogoText>)
;
