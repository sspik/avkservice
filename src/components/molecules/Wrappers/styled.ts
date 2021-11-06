import styled from 'styled-components'
import {theme} from "@theme";


export const MobileWrapper = styled.div`
  display: block;

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    display: none;
  }
`

export const DesktopWrapper = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    display: block;
  }
`
