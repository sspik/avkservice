import React, {FC} from 'react'
import {Styled} from "./styled"


export const GridLayout:FC = ({ children, ...props }) => {
    return <Styled.WrapperLayout {...props}>{children}</Styled.WrapperLayout>
}
