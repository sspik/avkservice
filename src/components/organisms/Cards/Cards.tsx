import React, {FC} from 'react'
import {Text} from '@components'
import {Styled} from './styled'


type TStockProps = {
    cards?: [{
        id: number,
        title: string,
        imageLink: string,
        cardColor: string,
        textColor: string,
        columnWidthDesktop: number,
        columnWidthTablet: number,
        link: string,
        alt: string,
    }]
}

export const Cards: FC<TStockProps> = ({cards}) => {

    return (
        <Styled.WrapperCards>
            {cards?.map(({
                             id,
                             title,
                             imageLink,
                             cardColor,
                             columnWidthDesktop,
                             columnWidthTablet,
                             textColor,
                             link,
                             alt
                         }) => (

                <Styled.WrapperCard href={link} key={id} cardColor={cardColor} columnWidthDesktop={columnWidthDesktop}
                                    columnWidthTablet={columnWidthTablet}>
                    <Text color={textColor} size={24} fontWeight={700}>{title}</Text>
                    <img src={imageLink} width={96} height={96} alt={alt}/>
                </Styled.WrapperCard>

            ))}
        </Styled.WrapperCards>
    )
}
