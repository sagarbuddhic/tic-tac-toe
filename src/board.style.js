/* eslint-disable import/prefer-default-export */
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.crea
/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

export const boardStyle = css`
border: "4px solid darkblue";
border-radius: 10px;
width: 250px;
height: 250px;
margin: 50px auto;
display: grid;
grid-template: repeat(3, 1fr) / repeat(3, 1fr);
box-shadow: 2px 4px #888888;
`;
