import React from 'react';

import { CreateKitchenForm } from '../../organisms';
import { ExternalTemplate } from '../../templates';

export default function CreateKitchenPage() {
  return (
    <div>
      <ExternalTemplate>
        <CreateKitchenForm />
      </ExternalTemplate>
    </div>
  );
}
