import React from 'react';

import LoginForm from '../../organisms/LoginForm';
import { ExternalTemplate } from '../../templates';

export default function LoginPage() {
  return (
    <div>
      <ExternalTemplate>
        <LoginForm />
      </ExternalTemplate>
    </div>
  );
}
