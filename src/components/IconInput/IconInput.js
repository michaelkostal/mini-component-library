import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    'size':12,
    'fontSize':14,
    'padding':'0 0 0 16px',
    'borderBottom':'1px'
  }, 
  'large': {
    'size':16,
    'fontSize':18,
    'padding':'0 0 0 20px',
    'borderBottom':'2px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  return <Wrapper style={{"--width":width + "px"}}>
    <TheIcon id={icon} size={styles.size}/>
    <Label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Input style={
          {
            "--fontSize":`${(styles.fontSize/16)}rem`,
            "--padding":styles.padding,
            "--borderBottom":styles.borderBottom
          }
        } 
        type="text" placeholder={placeholder} />
    </Label>
  </Wrapper>;
};

const Wrapper = styled.div`
  position:relative;
  width: var(--width);
`
const TheIcon = styled(Icon)`
  position:absolute;
  left:0;
  bottom:3px;
`

const Label = styled.label`
  
`;

const Input = styled.input`
  width:100%;
  margin:0;
  padding:var(--padding);
  border:0;
  border-bottom:var(--borderBottom) solid black;
  font-size:var(--fontSize);
`

export default IconInput;
