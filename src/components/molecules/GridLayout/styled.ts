import styled from 'styled-components'
import {theme} from '@theme'

const WrapperLayout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 16px 1fr 16px;
  height: auto;
  width: 100%;

  @media (min-width: ${theme.breakpoint.mobileMd}px) {
    grid-template-columns: 24px 1fr 24px;
  }

  @media (min-width: ${theme.breakpoint.desktopSm}px) {
    grid-template-columns: 72px 1fr 72px;
  }

  @media (min-width: ${theme.breakpoint.desktopMd}px) {
    grid-template-columns: 1fr 1152px 1fr;
  }

  @media (min-width: ${theme.breakpoint.desktopLg}px) {
    grid-template-columns: 1fr 1292px 1fr;
  }

  & > *:nth-child(1) {
    grid-column: 2 / 3;
  }
`

export const Styled = {
    WrapperLayout,
}
