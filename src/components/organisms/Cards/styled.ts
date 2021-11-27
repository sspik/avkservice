import styled from 'styled-components'
import { theme } from '@theme'

interface IProps {
    cardColor?: string,
    columnWidthDesktop?: number,
    columnWidthTablet?: number,
}

const WrapperCards = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  margin-bottom: 48px;

  @media (min-width: ${theme.breakpoint.mobileLg}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-template-columns: repeat(6, 1fr);
  }
`
const WrapperCard = styled.a<IProps>`
  display: grid;
  padding: 16px;
  border-radius: 12px;
  grid-template-rows: min-content 100px; ;
  background: ${({ cardColor }) => cardColor || theme.colors.red.step0};
  overflow: hidden;
  text-decoration: none;
  color: black;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  grid-row-gap: 8px;

  @media (min-width: ${theme.breakpoint.mobileLg}px) {
    grid-column-end: span ${({ columnWidthTablet }) => columnWidthTablet && columnWidthTablet > 2 ? 2 : columnWidthTablet || 1};
  }

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-column-end: span ${({ columnWidthDesktop }) => columnWidthDesktop && columnWidthDesktop > 6 ? 6 : columnWidthDesktop || 1};
  }
`

export const Styled = {
    WrapperCards,
    WrapperCard,
}
