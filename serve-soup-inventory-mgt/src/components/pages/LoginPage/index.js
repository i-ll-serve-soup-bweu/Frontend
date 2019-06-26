import React from 'react';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import LoginForm from '../../organisms/LoginForm';
import { ExternalTemplate } from '../../templates';

export default function LoginPage({ history, location, match }) {
  return (
    <div>
      <ExternalTemplate>
        <LoginForm
          history={history}
          location={location}
          match={match}
        />
      </ExternalTemplate>
    </div>
  );
}

LoginPage.propTypes = {
  history: pt.shape(historyPropTypes).isRequired,
};
