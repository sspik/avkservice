import React from 'react'
import {Styled} from './styled'
import {AvkLogo, AvkMobile, Clock, Coordinate} from '@icons'
import {Text} from '@components'

export const Navigation = (): JSX.Element => (
    <Styled.CustomGridLayout>
        <Styled.WrapperContainer>
            <Styled.DesktopWrapper>
                <AvkLogo/>
            </Styled.DesktopWrapper>
            <Styled.MobileWrapper>
                <AvkMobile/>
            </Styled.MobileWrapper>
            <Styled.MobileWrapper style={{justifySelf: 'right'}}>
                <a href='tel:+74955321922'>
                    <Text size={16} fontWeight={700}>
                        +7(495)532-19-22
                    </Text>
                </a>

            </Styled.MobileWrapper>
            <Styled.MobileWrapper>
                <Styled.WrapperIconBlock>
                    <Clock/>
                    <Text size={16} fontWeight={700}>9:00 - 21:00</Text>
                </Styled.WrapperIconBlock>
            </Styled.MobileWrapper>
            <Styled.MobileWrapper style={{justifySelf: 'right'}}>
                <Styled.WrapperIconBlock>
                    <Coordinate/>
                    <Text size={16} fontWeight={700}>Наши адреса</Text>
                </Styled.WrapperIconBlock>
            </Styled.MobileWrapper>
            <div/>
            <Styled.DesktopWrapper>
                <Styled.WrapperIconBlock>
                    <Clock/>
                    <Text size={16} fontWeight={700}>9:00 - 21:00</Text>
                </Styled.WrapperIconBlock>
            </Styled.DesktopWrapper>
            <Styled.DesktopWrapper>
                <Styled.WrapperIconBlock>
                    <Coordinate/>
                    <Text size={16} fontWeight={700}>Наши адреса</Text>
                </Styled.WrapperIconBlock>
            </Styled.DesktopWrapper>
            <Styled.DesktopWrapper>
                <Text size={24} fontWeight={700}>+7(495)532-19-22</Text>
            </Styled.DesktopWrapper>
        </Styled.WrapperContainer>
    </Styled.CustomGridLayout>
)
