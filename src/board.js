/* eslint-disable react/jsx-filename-extension */
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.crea
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import propTypes from 'prop-types';
import { boardStyle } from './board.style';
import Square from './square';

function Board({ squares, handleClick }) {
  return (
    <div css={boardStyle}>
      {squares.map((square, index) => (
        <Square key={1} value={square} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
}

Board.propTypes = {
  squares: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Board;
