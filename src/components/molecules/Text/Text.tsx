import React, {FC, HTMLAttributes, Ref} from 'react'
import {Styled} from './styled'

export interface TextProps extends Omit<HTMLAttributes<HTMLDivElement>, 'as'> {
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

export const Text: FC<TextProps> = ({children, size = 16, color, sizeMob, fontWeight, ...props}) => {
    return (
        <Styled.WrapperText size={size} sizeMob={sizeMob} fontWeight={fontWeight} color={color} {...props}>
            {children}
        </Styled.WrapperText>
    )
}
