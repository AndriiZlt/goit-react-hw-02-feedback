import PropTypes from 'prop-types';
import React from 'react';
import { BtnUl, Button } from './BtnsList.styled';

class BtnsList extends React.Component {
  render() {
    return (
      <BtnUl>
        <Button type="button" id="good" onClick={this.props.onClick}>
          Good
        </Button>
        <Button type="button" id="neutral" onClick={this.props.onClick}>
          Neutral
        </Button>
        <Button type="button" id="bad" onClick={this.props.onClick}>
          Bad
        </Button>
      </BtnUl>
    );
  }
}

export default BtnsList;
