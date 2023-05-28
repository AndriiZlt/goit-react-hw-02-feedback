import PropTypes from 'prop-types';
import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import { Title, StatTitle } from './Section.styled';
import Statistics from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

class Section extends React.Component {
  countTotalFeedbacks() {
    return Object.values(this.props.stats).reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedbacks() > 0
      ? Math.floor((this.props.stats.good / this.countTotalFeedbacks()) * 100) +
          '%'
      : 0 + '%';
  }

  render() {
    if (this.props.title === 'Please leave feedback') {
      return (
        <div>
          <Title>Please leave feedback</Title>
          <FeedbackOptions
            options={this.props.stats}
            onLeaveFeedback={this.props.clickHandler}
          ></FeedbackOptions>
        </div>
      );
    } else {
      return (
        <div>
          <StatTitle>Statistics</StatTitle>

          {this.countTotalFeedbacks() > 0 ? (
            <Statistics
              good={this.props.stats.good}
              neutral={this.props.stats.neutral}
              bad={this.props.stats.bad}
              total={this.countTotalFeedbacks()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </div>
      );
    }
  }
}

export default Section;
