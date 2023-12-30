/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--padding": "0px",
    "--height": "8px"
  },
  medium: {
    "--padding": "0px",
    "--height": "16px"
  },
  large: {
    "--padding": "4px",
    "--height": "24px"
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <>
    <VisuallyHidden><label for="loadinglabel">Loading:</label></VisuallyHidden>
    <Progress style={styles} id="loadinglabel" max="100" value={value}></Progress>
  </>;
};

const Progress = styled.progress`
  appearance: none;
  background:none;
  border:0;
  border-radius: 8px;
  width:100%;
  height: var(--height);
  &[value]::-webkit-progress-bar {
    padding: var(--padding);
    background-color:rgba(128, 128, 128, 0.15);
    box-shadow:inset 0 2px 4px 0 rgba(128, 128, 128, 0.35);
    border-radius: 8px;
    
  }
  &[value]::-webkit-progress-value {
    background-color:${COLORS.primary};
    border-radius: ${props => (props.value >= 99) ? '4px' : '4px 0px 0px 4px'};
    
  }
`;

export default ProgressBar;
