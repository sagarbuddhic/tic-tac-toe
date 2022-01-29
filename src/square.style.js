/* eslint-disable import/prefer-default-export */
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.cr
/** @jsxRuntime classic */
/** @jsx jsx */

import { css } from '@emotion/react';

export const square = css`
background: cadetblue;
border: 2px solid lavenderblush;
font-size: 30px;
font-weight: 800;
cursor: pointer;
outline: none;
color: navajowhite;
`;
