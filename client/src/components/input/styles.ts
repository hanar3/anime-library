import styled, { css } from 'styled-components';

import { ifProp } from 'styled-tools';

export interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background: rgba(255,255,255,0.12);
  border: 0;
  width: 340px;
  height: 56px;
  border: 2px solid transparent;

  color: rgba(255,255,255,.6);
  align-items: center;
  transition: background 0.5s;
  border-radius: 7px;
  


  ${ifProp({ isFocused: true }, css`
    border:  2px solid #BB86FC;
    color: #BB86FC;
  `)}

  ${ifProp({ isFilled: true }, css`
    color: #BB86FC;
  `)}

  svg {
    margin: 0 10px;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background: transparent;
    border: 0;
    color: rgba(255,255,255,.6);
    
    &:focus {
      color: rgba(255,255,255,.8);

    }
  }
`;
