import React from 'react';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import SignUpForm from '../../organisms/SignUpForm';
import { ExternalTemplate } from '../../templates';

export default function SignUpPage({ history, location, match }) {
  return (
    <div>
      <ExternalTemplate>
        <SignUpForm
          history={history}
          location={location}
          match={match}
        />
      </ExternalTemplate>
    </div>
  );
}

SignUpPage.propTypes = {
  history: pt.shape(historyPropTypes).isRequired,
};
