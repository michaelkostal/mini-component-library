import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    size:12,
    fontSize:14,
    padding:'0 0 0 16px',
    borderBottom:'1px'
  }, 
  'large': {
    size:16,
    fontSize:18,
    padding:'0 0 0 24px',
    borderBottom:'2px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = SIZES[size];
  return <Wrapper>
    <TheIcon id={icon} size={styles.size}/>
        <VisuallyHidden>{label}</VisuallyHidden>
        <TextInput  
          {...delegated} 
          style={{
            "--width":width + "px",
            "--fontSize":`${(styles.fontSize/16)}rem`,
            "--padding":styles.padding,
            "--borderBottom":styles.borderBottom
          }} 
        />
    </Wrapper>
};

const Wrapper = styled.label`
    position:relative;
    color: ${COLORS.gray700};
`;

const TheIcon = styled(Icon)`
  color:inherit;
  position:absolute;
  left:0;
  bottom:3px;
`;

const TextInput = styled.input`
  width: var(--width);
  color:inherit;
  margin:0;
  padding:var(--padding);
  border:0;
  border-bottom:var(--borderBottom) solid black;
  font-size:var(--fontSize);
  font-weight:700;
  outline-offset:2px;
  &:hover{
    color:black; 
  }
  &::placeholder{
    font-weight:400;
  }
`

export default IconInput;
