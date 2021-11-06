import React from 'react'
import { Styled } from './styled'
import { Text, GridLayout } from '@components'
import {AvkLogoWhite} from "../../../icons/AvkWhite";

export const Footer = (): JSX.Element => {
    return (
        <Styled.Container>
            <GridLayout>
                <Styled.Wrapper>
                    <Styled.WrapperLink>
                        <a href="#">Автосервис</a>
                        <a href="#">Автосервис</a>
                        <a href="#">Автосервис</a>
                        <a href="#">Автосервис</a>
                    </Styled.WrapperLink>
                    <Styled.WrapperLink>
                        <a href="#">Автосервис</a>
                        <a href="#">Автосервис</a>
                        <a href="#">Автосервис</a>
                        <a href="#">Автосервис</a>
                    </Styled.WrapperLink>
                    <Text size={24}>+7 (495) 532-19-22</Text>
                    <AvkLogoWhite/>
                </Styled.Wrapper>
            </GridLayout>

        </Styled.Container>
    )
}
