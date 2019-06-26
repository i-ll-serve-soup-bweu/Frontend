import React from 'react';

import SignUpForm from '../../organisms/SignUpForm';
import { ExternalTemplate } from '../../templates';

export default function SignUpPage() {
  return (
    <div>
      <ExternalTemplate>
        <SignUpForm />
      </ExternalTemplate>
    </div>
  );
}
