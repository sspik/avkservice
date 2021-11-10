import styled from 'styled-components'
import {Text} from '../../molecules/Text'
import {theme} from '@theme'

const FormContainer = styled.div`
  padding: 24px 8px;
  border-radius: 8px;
  background: linear-gradient(233.24deg, rgba(0, 0, 0, 0.8) -3.22%, rgba(235, 235, 235, 0.6) 46.91%);
  display: grid;
  position: relative;
  grid-row-gap: 8px;
  margin-bottom: 24px;

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    padding: 24px 24px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
    margin-bottom: 68px;
  }
`
const MobileWrapper = styled.div`
  display: block;

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    display: none;
  }
`

const DesktopWrapper = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    display: block;
  }
`
const WrapperForm = styled.div`
  display: grid;
  grid-row-gap: 16px;
  margin: 16px -24px;
  padding: 24px 16px;
  border-radius: 8px;
  background: linear-gradient(180deg, #e40000 0%, #333333 100%);
  box-shadow: 0px 20px 50px 2px rgba(0, 0, 0, 0.25);

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-column: 2/3;
    grid-row: 1/3;
    width: 350px;
    justify-self: flex-end;
    margin: 16px 0 -68px 0;
  }
`
const WrapperTextBlock = styled.div`

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    height: 100px;
  }
`
const CustomHeading = styled(Text)`
  width: 275px;

  @media (min-width: ${theme.breakpoint.mobileMd}px) {
    width: 275px;
  }

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    width: 373px;
  }
`
const CustomImage = styled.img`
  display: none;

  @media (min-width: ${theme.breakpoint.mobileLg}px) {
    display: block;
    position: absolute;
    width: 284px;
    height: 84px;
    top: 56px;
    right: 0;
    z-index: 0;
  }

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    width: 550px;
    height: 163px;
  }
`

const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: 76px 104px;
  justify-self: center;
  align-items: center;
  grid-column-gap: 14px;
  grid-row-gap: 24px;

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-column: 1;
    grid-row: 2;
    justify-self: start;
    align-self: start;
    grid-template-columns: 76px 104px 1fr;
  }
`
const ReviewsWrapper = styled.div`
  display: flex;
  grid-column: 1/3;
  justify-content: center;

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-column: auto;
  }
`
const PartnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 92px 1fr;
  grid-column-gap: 28px;
  align-items: center;
`
const CarsWrapper = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoint.mobileLg}px) {
    display: block;
  }
`
const CustomLink = styled.a`
  color: #006d9b;
  text-decoration: underline;
`

export const Styled = {
    FormContainer,
    DesktopWrapper,
    MobileWrapper,
    WrapperTextBlock,
    CustomLink,
    CustomHeading,
    WrapperForm,
    RatingWrapper,
    ReviewsWrapper,
    CustomImage,
    PartnerWrapper,
    CarsWrapper,
}
