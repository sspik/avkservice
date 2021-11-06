import styled from 'styled-components'
import {theme} from "@theme";

type TProps = {
    size?: number
    sizeMob?: number
    fontWeight?: number
}

const WrapperText = styled.div<TProps>`
  font-size: ${({sizeMob}) => sizeMob}px;
  font-weight: ${({fontWeight}) => fontWeight};
  color: ${({color}) => color};

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    font-size: ${({size}) => size}px;
  }
`

export const Styled = {
    WrapperText,
}
