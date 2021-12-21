import React, { FC } from 'react'
import { Styled } from './styled'
import { Text, GridLayout } from '@components'
import { AvkLogoWhite } from '@icons'
import Link from 'next/link'

type TFooterProps = {
    items?: {
        id: number,
        title?: string,
        imageLink?: string,
        cardColor?: string,
        textColor?: string,
        columnWidthDesktop?: number,
        columnWidthTablet?: number,
        link?: string,
        alt?: string,
    }[]
}
export const Footer: FC<TFooterProps> = ({ items }): JSX.Element => {
    const blocks = items?.map(({ link, title, id }) => {
        return link && title &&
            <Link key={id} href={link} passHref prefetch={false}><a>{title[0].toUpperCase() + title.toLowerCase().slice(1)}</a></Link>
    })

    return (
        <Styled.Container>
            <GridLayout>
                <Styled.Wrapper>
                    <Styled.WrapperLink>
                        {blocks}
                    </Styled.WrapperLink>
                    <a href='tel:+74955321922'><Text size={24}>+7 (495) 532-19-22</Text></a>
                    <Link href='/' passHref prefetch={false}><a><AvkLogoWhite /></a></Link>
                </Styled.Wrapper>
            </GridLayout>
        </Styled.Container>
    )
}
