import styled from 'styled-components'
import { theme } from '@theme'
import { GridLayout } from '../../molecules/index'

const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 24px;

    @media (min-width: ${theme.breakpoint.desktopSm}px) {
        grid-template-columns: 1fr 1fr 1fr 1fr max-content;
        align-items: center;
        grid-column-gap: ${theme.padding.x16};
        grid-column-end: 12 span;
    }
`

const MobileWrapper = styled.div`
    display: block;

    @media (min-width: ${theme.breakpoint.desktopSm}px) {
        display: none;
    }
`

const DesktopWrapper = styled.div`
    display: none;

    @media (min-width: ${theme.breakpoint.desktopSm}px) {
        display: block;
    }
`
const WrapperIconBlock = styled.div`
    display: grid;
    grid-template-columns: 24px 1fr;
    grid-column-gap: 12px;
`
const CustomGridLayout = styled(GridLayout)`
    padding: 16px 0;

    @media (min-width: ${theme.breakpoint.desktopSm}px) {
        padding: 24px 0;
    }
`

export const Styled = {
    CustomGridLayout,
    WrapperContainer,
    WrapperIconBlock,
    DesktopWrapper,
    MobileWrapper,
}
