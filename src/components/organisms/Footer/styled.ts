import styled from 'styled-components'
import { theme } from '@theme'

const Container = styled.div`
  display: grid;
  background-color: #333333;
  padding: ${theme.padding.x24}px;
  justify-items: center;
`
const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 24px;
  color: #ffffff;
  height: max-content;

  @media (min-width: ${theme.breakpoint.desktopSm}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${theme.padding.x24}px;
    grid-row-gap: 90px;
  }
`

const WrapperLink = styled.div`
  display: grid;
  grid-row-gap: 12px;
  grid-column-gap: 24px;
  height: max-content;

  @media (min-width: ${theme.breakpoint.desktopSm}px) {
    grid-template-columns: 1fr 1fr;
    grid-column-end: 2 span ;
  }
`

export const Styled = {
    Container,
    Wrapper,
    WrapperLink,
}
