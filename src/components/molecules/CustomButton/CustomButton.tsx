import React, { FC } from 'react'
import { Styled } from './styled'


export const CustomButton: FC = ({ children, ...props }) => {
    return (
        <Styled.CustomLink {...props}>
            {children}
        </Styled.CustomLink>
    )
}
