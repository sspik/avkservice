import type { GetStaticPaths, NextPage } from 'next'
import { GetStaticProps } from 'next'
import { LayoutPage, Text } from '@components'
import styled from 'styled-components'
import { Arrow } from '../../src'
import Link from 'next/link'
import React from 'react'


type TPageData = {
    meta: {
        url: string
        title: string
        pageName: string
        description?: { title?: string, linkImg?: string, text?: string }[]
    }
    seoText?: string
}

type TParams = {
    [key: string]: string
}

type TProps = {
    page: TPageData
}
type TPages = {
    [key: string]: TPageData
}
const one: TPageData = {
    seoText:
        'Компьютерная диагностика',
    meta: {
        url: '1',
        title:
            'Компьютерная диагностика',
        description: [{
            text: 'Высокотехнологичные электронные системы современного автомобиля гарантируют стабильную работу и безопасную эксплуатацию транспортного средства. Появление ошибок в работе таких систем влечет за собой серьезные поломки дорогостоящих элементов и, как следствие, высокие затраты. \n\n',
            linkImg: 'https://favorit-motors.ru/upload/resize_cache/fm/e97ab0b50635d386f30477d6adf81cf4.800.800.1.webp',
        },
            {
                title: 'Компьютерная диагностика: цели и задачи',
                text: 'Избежать программного сбоя или неисправности в функционировании элементов сложных механизмов помогает компьютерная диагностика автомобиля. В рамках диагностических мероприятий происходит считывание и обработка кодов ошибок, обнаруженных при анализе действия основных узлов и агрегатов.\n' +
                    '\n' +
                    'Диагностическое оборудование включает в себя специальные средства контроля, такие как диагностические сканеры определенной марки, многофункциональные стенды, а также переносные считыватели, известные как «ридеры». Все эти устройства подключаются к диагностическому разъему авто. Специализированная компьютерная техника позволяет не только фиксировать любые изменения в работе различных систем, но и стирать найденные коды ошибок с целью их коррекции.\n' +
                    '\n' +
                    'Узнать о возможных дефектах и текущих ошибках водитель может заблаговременно. Бортовые системы современного автомобиля оборудованы электронным блоком управления с функцией самодиагностики, анализирующим основные системы автомобиля и оповещающим водителя об их неисправности.  \n' +
                    '\n' +
                    'Автопроизводители рекомендуют регулярно проводить компьютерную диагностику авто для обеспечения безотказной работы важнейших систем машины. Только высокоточное оборудование, с помощью многочисленных электронных датчиков и чипов, способно распознать неполадку в программном обеспечении того или иного узла.  \n' +
                    '\n',
                linkImg: 'https://favorit-motors.ru/upload/medialibrary/836/8360fe0163a42a4264c31780965475ce.jpg',
            },
        ],
        pageName: '1',
    },
}
const two: TPageData = {
    seoText:
        '2',
    meta: {
        url: '2',
        title:
            'title',
        description: [], pageName: '2',
    },
}
const three: TPageData = {
    seoText:
        '3',
    meta: {
        url: '3',
        title:
            'title',
        description: [], pageName: '3',
    },
}
const four: TPageData = {
    seoText:
        '4',
    meta: {
        url: '4',
        title:
            'title',
        description: [], pageName: '1',
    },
}
const five: TPageData = {
    seoText:
        '5',
    meta: {
        url: '5',
        title:
            'title',
        description: [], pageName: '1',
    },
}

const pages: TPages = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
}
export const getStaticPaths: GetStaticPaths<TParams> = async () => {
    const paths = Object.keys(pages).map(page => ({
        params: {
            param: page /* pages keys */,
        },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<TProps, TParams> = async ctx => {
    const { params } = ctx

    return {
        props: {
            page: pages[params ? params.param : '1'] /* выбранное по ключу значение */,
            gtmConfig: '',
        },
    }
}


const Service: NextPage<TProps> = ({ page }) => {

    const content = page.meta.description?.map((item) => {
        return <>
            {item?.title && <Text size={24} sizeMob={22} fontWeight={700}
                                  style={{ whiteSpace: 'pre-line', paddingBottom: '16px' }}>{item?.title}</Text>}
            {item?.text && <Text size={18} sizeMob={18} fontWeight={700}
                                 style={{ whiteSpace: 'pre-line', paddingBottom: '16px' }}>{item?.text}</Text>}
            {item?.linkImg && <img src={item.linkImg} style={{ paddingBottom: '16px' }} alt={item?.linkImg} />}
        </>
    })

    return <LayoutPage>
        <WrapperAddress>
            <Link href={`/`} passHref><a><WrapperLinkHome><Arrow />Назад</WrapperLinkHome></a></Link>
            <Text size={32} sizeMob={24} fontWeight={700}
                  style={{ whiteSpace: 'pre-line' }}>{page.meta.title}</Text>
            <Text size={18} sizeMob={18} fontWeight={700}
                  style={{ whiteSpace: 'pre-line' }}>{content}</Text>
            <div style={{ height: '96px' }} />
        </WrapperAddress>
    </LayoutPage>
}

const WrapperAddress = styled.div`
display: grid;
grid-row-gap: 16px;

`
const WrapperLinkHome = styled.div`
display: grid;
grid-template-columns: 13px 1fr;
grid-column-gap: 16px;

`
export default Service
