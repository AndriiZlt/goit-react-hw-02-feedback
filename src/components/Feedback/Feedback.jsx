import PropTypes from 'prop-types';
import React from 'react';
import { Title, StatTitle } from './Feedback.styled';
import Statistics from 'components/Statistics/Statistics';
import BtnsList from 'components/BtnsList/BtnsList';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = e => {
    const clickedBtn = e.currentTarget.id;
    this.setState(prevState => {
      switch (clickedBtn) {
        case 'good':
          return {
            good: prevState.good + 1,
          };

        case 'neutral':
          return {
            neutral: prevState.neutral + 1,
          };

        case 'bad':
          return {
            bad: prevState.bad + 1,
          };
      }
    });
  };

  render() {
    return (
      <div>
        <Title>Please leave feedback</Title>
        <BtnsList onClick={this.clickHandler} />
        <StatTitle>Statistics</StatTitle>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default Feedback;
