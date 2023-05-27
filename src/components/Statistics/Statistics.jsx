import React from 'react';
import PropTypes from 'prop-types';
import { StatList, Stat } from './Statistics.styled';

class Statistics extends React.Component {
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
      </StatList>
    );
  }
}

export default Statistics;
