import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pt from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { doSignUp } from '../../../actions';
import {
  StyledButton, StyledRegisterCard, StyledHeading, HorizontalBar, StyledInput,
} from '../../atoms';

const Outer = styled.div`
  width: 55%;
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreateKitchenForm = ({
  history, error,
}) => {
  const kitchenName = React.createRef();
  const location = React.createRef();
  const website = React.createRef();
  const mission = React.createRef();

  const signUp = (event) => {
    event.preventDefault();
    const user = {
      kitchenName: kitchenName.current.value,
      location: location.current.value,
      website: website.current.value,
      mission: mission.current.value,
    };
  };

  return (
    <Outer>
      <StyledRegisterCard>
        <Inner>
          <StyledHeading
            tertiary
          >
            Tell us a little about your kitchen
          </StyledHeading>
          <HorizontalBar width="90%" />
          <Form>
            <StyledInput
              register
              placeholder="Kitchen Name"
              ref={kitchenName}
            />
            <StyledInput
              register
              placeholder="Location"
              ref={location}
            />
            <StyledInput
              register
              placeholder="Website"
              ref={website}
            />
            <StyledInput
              register
              placeholder="Mission"
              ref={mission}
            />
            <StyledButton
              secondary
              onClick={null}
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
  loadingUser: state.user.loadingUser,
  error: state.user.error,
});

export default connect(mapStateToProps, { doSignUp })(CreateKitchenForm);

CreateKitchenForm.propTypes = {
  // doSignUp: pt.func.isRequired,
  // loadingUser: pt.bool.isRequired,
  error: pt.string.isRequired,
  history: pt.shape(historyPropTypes).isRequired,
};
