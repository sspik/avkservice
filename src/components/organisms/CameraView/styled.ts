import styled from 'styled-components'
import { theme } from '@theme'
import { Button } from '@mui/material'

const WrapperCameraView = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media (min-width: ${theme.breakpoint.mobileLg}px) {

  }

  @media (min-width: ${theme.breakpoint.tabletMd}px) {

  }
`
const AddressWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const BoxWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: '#ffffff',
    fontSize: 16,
    padding: '6px 24px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#1F1F1F',
    borderRadius: '16px',
    fontFamily: [
        'Roboto',
    ].join(','),
    '&:hover': {
        backgroundColor: theme.colors.red.step0,
        borderColor: 'theme.colors.white.step0',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: theme.colors.red.step0,
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        backgroundColor: theme.colors.red.step0,
    },
})


export const Styled = {
    WrapperCameraView,
    CustomButton,
    AddressWrapper,
    BoxWrapper,
}
