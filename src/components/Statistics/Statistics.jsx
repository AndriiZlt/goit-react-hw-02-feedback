import React from 'react';
import PropTypes from 'prop-types';
import { StatList, Stat } from './Statistics.styled';

class Statistics extends React.Component {
  state = {
    total: 0,
  };

  render() {
    return (
      <StatList>
        <Stat>
          Good: <span>{this.props.good}</span>
        </Stat>
        <Stat>
          Neutral: <span>{this.props.neutral}</span>
        </Stat>
        <Stat>
          Bad: <span>{this.props.bad}</span>
        </Stat>
        <Stat>
          Total: <span>{this.props.total}</span>
        </Stat>
        <Stat>
          Positive feedbacks: <span>{this.props.positivePercentage}</span>
        </Stat>
      </StatList>
    );
  }
}

export default Statistics;
