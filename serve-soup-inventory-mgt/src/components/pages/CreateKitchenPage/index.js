import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { doGetKitchen } from '../../../actions';
import { CreateKitchenForm } from '../../organisms';
import { ExternalTemplate } from '../../templates';
import { LoaderContainer } from '../../atoms';

function CreateKitchenPage({
  history, kitchen, doGetKitchen, loadingKitchen,
}) {
  useEffect(() => {
    doGetKitchen();
  }, [doGetKitchen]);

  if (loadingKitchen) {
    return (
      <LoaderContainer text="loading kitchen..." />
    );
  }
  if (kitchen) {
    return (
      <Redirect
        to="/"
      />
    );
  }
  return (
    <div>
      <ExternalTemplate>
        <CreateKitchenForm
          history={history}
        />
      </ExternalTemplate>
    </div>
  );
}

const mapStateToProps = state => ({
  kitchen: state.user.kitchen,
  loadingKitchen: state.user.loadingKitchen,
});

export default connect(mapStateToProps, { doGetKitchen })(CreateKitchenPage);


CreateKitchenPage.defaultProps = {
  kitchen: undefined,
};

CreateKitchenPage.propTypes = {
  doGetKitchen: pt.func.isRequired,
  kitchen: pt.shape({
    id: pt.number,
    kitchen_name: pt.string,
    location: pt.string,
    description: pt.string,
    km_id: pt.number,
  }),
  loadingKitchen: pt.bool.isRequired,
  history: pt.shape(historyPropTypes).isRequired,
};
