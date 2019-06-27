import React from 'react';
import { StyledHeading } from '../../atoms';

export default function Premium({ text }) {
  return (
    <div>
      <StyledHeading>{text}</StyledHeading>
      <p>
        This feature is not available on free trial.
      </p>
    </div>
  );
}
