import React from 'react';
import { connect } from 'react-redux';
import { history as historyPropTypes } from 'history-prop-types';
import styled from 'styled-components';
import pt from 'prop-types';

import { doAddKitchen } from '../../../actions';
import {
  StyledButton, StyledRegisterCard, StyledHeading, HorizontalBar, StyledInput,
} from '../../atoms';

const Outer = styled.div`
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  margin: 30px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
`;

const InputField = styled(StyledInput)`
  margin: 9px 0;
`;

const CreateKitchenForm = ({
  error, doAddKitchen, history, loadingKitchen,
}) => {
  const kitchenName = React.createRef();
  const location = React.createRef();
  const description = React.createRef();

  const onAddKitchen = (event) => {
    event.preventDefault();
    const kitchen = {
      kitchen_name: kitchenName.current.value,
      location: location.current.value,
      description: description.current.value,
      km_id: localStorage.soupUserID,
    };
    doAddKitchen(kitchen, history);
  };

  if (loadingKitchen) { return <p>saving kitchen</p>; }

  return (
    <Outer>
      <StyledRegisterCard>
        <Inner>
          <StyledHeading>
            Tell us a little about your kitchen
          </StyledHeading>
          <HorizontalBar width="100%" />
          <Form>
            <InputField
              register
              placeholder="Kitchen Name"
              ref={kitchenName}
            />
            <InputField
              register
              placeholder="Location"
              ref={location}
            />
            <InputField
              register
              placeholder="Description"
              ref={description}
            />
            <StyledButton
              secondary
              onClick={onAddKitchen}
            >
              Create Kitchen
            </StyledButton>
            {
              error && <p>{error}</p>
            }
          </Form>
        </Inner>
      </StyledRegisterCard>
    </Outer>
  );
};

const mapStateToProps = state => ({
  loadingKitchen: state.user.loadingKitchen,
  error: state.user.error,
});

export default connect(mapStateToProps, { doAddKitchen })(CreateKitchenForm);

CreateKitchenForm.propTypes = {
  error: pt.string.isRequired,
  history: pt.shape(historyPropTypes).isRequired,
  loadingKitchen: pt.bool.isRequired,
  doAddKitchen: pt.func.isRequired,
};
