/* eslint-disable react/jsx-filename-extension */
// import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.crea
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import { square } from './square.style';

function Square(props) {
  const { onClick, value } = props;
  return <button type="button" css={square} onClick={onClick}>{value}</button>;
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Square;
