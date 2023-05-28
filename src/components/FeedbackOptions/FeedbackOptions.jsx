import PropTypes from 'prop-types';
import React from 'react';
import { BtnList, Button } from './FeedbackOptions.styled';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <BtnList>
        {Object.keys(this.props.options).map(key => (
          <Button
            key={key}
            id={key}
            type="button"
            onClick={this.props.onLeaveFeedback}
          >
            {key}
          </Button>
        ))}
      </BtnList>
    );
  }
}

export default FeedbackOptions;
