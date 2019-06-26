import React from 'react';

import { DisplayInventory, AppNav } from '../../organisms';

export default function InventoryGrid() {
  return (
    <div>
      <AppNav loggedIn />
      <DisplayInventory />
    </div>
  );
}
