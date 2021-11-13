import React, { FC, HTMLAttributes, Ref } from 'react'
import { Styled } from './styled'

export interface TextProps extends Omit<HTMLAttributes<HTMLLinkElement>, 'as'> {
    textRef?: Ref<HTMLDivElement>
    size?: number
    sizeMob?: number
    color?: string
    capitalize?: boolean
    fontWeight?: number
    resetLineHeight?: boolean
    as?: 'div' | 'span' | 'p'
    align?: 'left' | 'center' | 'right' | 'inherit'
    checked?: boolean
    children?: React.ReactNode | React.ReactNodeArray
}
export const CustomLink: FC <TextProps> = ({ children, ...props }) => {
    return (
        <Styled.CustomLink {...props}>
            {children}
        </Styled.CustomLink>
    )
}
