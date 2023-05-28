import PropTypes from 'prop-types';
import React from 'react';
import Section from 'components/Section/Section';

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <Section
          title="Please leave feedback"
          stats={this.props.stats}
          clickHandler={this.props.clickHandler}
        />
        <Section
          title="Statistics"
          stats={this.props.stats}
          clickHandler={this.props.clickHandler}
        />
      </div>
    );
  }
}

export default Feedback;
