import React, { FC } from 'react'
import { Navigation, Footer, GridLayout } from '@components'
import { Styled } from './styled'
import { theme } from '@theme'

const items = [
    {
        id: 1,
        title: 'КОМПЬЮТЕРНАЯ ДИАГНОСТИКА',
        imageLink: './heart.png',
        cardColor: theme.colors.red.step0,
        columnWidthDesktop: 3,
        columnWidthTablet: 3,
        textColor: theme.colors.white.step0,
        link: `${process.env.BACKEND_URL}/service/1`,
        alt: 'awdawdawdaw',
    },
    {
        id: 2,
        title: 'РЕМОНТ ХОДОВОЙ ЧАСТИ',
        imageLink: './heart.png',
        cardColor: theme.colors.gray.step2,
        columnWidthDesktop: 3,
        link: `${process.env.BACKEND_URL}/service/2`,
        alt: 'awdawdawdaw',

    },
    {
        id: 3,
        title: 'РЕМОНТ КПП',
        imageLink: './heart.png',
        cardColor: theme.colors.gray.step1,
        textColor: theme.colors.white.step0,
        columnWidthDesktop: 2,
        link: `${process.env.BACKEND_URL}/service/3`,
        alt: 'awdawdawdaw',
    },
    {
        id: 4,
        title: 'РЕМОНТ ДВС',
        imageLink: './heart.png',
        cardColor: theme.colors.gray.step2,
        columnWidthDesktop: 2,
        link: `${process.env.BACKEND_URL}/service/4`,
        alt: 'awdawdawdaw',
    },
    {
        id: 5,
        title: 'ЗАМЕНА ТЕХ.ЖИДКОСТЕЙ',
        imageLink: './heart.png',
        cardColor: theme.colors.red.step0,
        textColor: theme.colors.white.step0,
        columnWidthDesktop: 2,
        link: `${process.env.BACKEND_URL}/service/5`,
        alt: 'awdawdawdaw',
    },
]
export const LayoutPage: FC = ({ children }) => {
    // const [count, setCount] = useState(0)
    // const [data, setData] = useState<null>(null)
    // const [hasError, setError] = useState<boolean>(false)
    //
    // useEffect(() => {
    //     queryAPI('http://localhost:1337/menus', setData, setError)
    // }, [])
    //
    // if (hasError) {
    //     return <div>ERROR</div>
    // }

    return (
        <Styled.Container>
            <Navigation />
            <GridLayout>
                {children}
            </GridLayout>
            <Footer items={items} />
        </Styled.Container>
    )
}
