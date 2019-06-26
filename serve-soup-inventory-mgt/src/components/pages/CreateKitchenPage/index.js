import React from 'react';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { CreateKitchenForm } from '../../organisms';
import { ExternalTemplate } from '../../templates';

export default function CreateKitchenPage({ history, location, match }) {
  return (
    <div>
      <ExternalTemplate>
        <CreateKitchenForm
          history={history}
          location={location}
          match={match}
        />
      </ExternalTemplate>
    </div>
  );
}

CreateKitchenPage.propTypes = {
  history: pt.shape(historyPropTypes).isRequired,
};
