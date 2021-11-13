import React, { FC } from 'react'
import { Styled } from './styled'


export const CustomLink: FC = ({ children, ...props }) => {
    return (
        <Styled.CustomLink {...props}>
            {children}
        </Styled.CustomLink>
    )
}
