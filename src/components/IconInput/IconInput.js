import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    'size':12
  }, 
  'large': {
    'size':16
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
        <Input type="text" placeholder={placeholder} />
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
  top:0;
`

const Label = styled.label`
  
`;

const Input = styled.input`
  width:100%;
  margin:0;
  padding:0 0 12px 24px;
  border:0;
  border-bottom:1px solid black;
`

export default IconInput;
