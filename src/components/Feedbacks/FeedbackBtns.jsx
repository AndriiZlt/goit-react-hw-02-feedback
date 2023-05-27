import PropTypes from 'prop-types';
import React from 'react';
import { Title, StatTitle, BtnList, Button } from './Feedbacks.styled';
import Statistics from 'components/Statistics/Statistics';
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
        <BtnList>
          <Button type="button" id="good" onClick={this.clickHandler}>
            Good
          </Button>
          <Button type="button" id="neutral" onClick={this.clickHandler}>
            Neutral
          </Button>
          <Button type="button" id="bad" onClick={this.clickHandler}>
            Bad
          </Button>
        </BtnList>
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
