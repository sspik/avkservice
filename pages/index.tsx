import type {NextPage} from 'next'
import {Banner, Cards, LayoutPage, Stock} from '@components'
import {theme} from "../src";

const Home: NextPage = () => {
    const cards = [
        {
            id: 1,
            title: 'КОМПЬЮТЕРНАЯ ДИАГНОСТИКА',
            imageLink: './heart.png',
            cardColor: theme.colors.red.step0,
            columnWidthDesktop: 3,
            columnWidthTablet: 3,
            textColor: theme.colors.white.step0,
            link: '#',
            alt: 'awdawdawdaw',
        },
        {
            id: 2,
            title: 'РЕМОНТ ХОДОВОЙ ЧАСТИ',
            imageLink: './heart.png',
            cardColor: theme.colors.gray.step2,
            columnWidthDesktop: 3,
            link: '#',
            alt: 'awdawdawdaw',
        },
        {
            id: 3,
            title: 'РЕМОНТ КПП',
            imageLink: './heart.png',
            cardColor: theme.colors.gray.step1,
            textColor: theme.colors.white.step0,
            columnWidthDesktop: 2,
            link: '#',
            alt: 'awdawdawdaw',
        },
        {
            id: 4,
            title: 'РЕМОНТ ДВС',
            imageLink: './heart.png',
            cardColor: theme.colors.gray.step2,
            columnWidthDesktop: 2,
            link: '#',
            alt: 'awdawdawdaw',
        },
        {
            id: 5,
            title: 'ЗАМЕНА ТЕХ.ЖИДКОСТЕЙ',
            imageLink: './heart.png',
            cardColor: theme.colors.red.step0,
            textColor: theme.colors.white.step0,
            columnWidthDesktop: 2,
            link: '#',
            alt: 'awdawdawdaw',
        },
    ]
    return (
        <LayoutPage>
            <div>
                <Banner
                    title="РЕМОНТ И ОБСЛУЖИВАНИЕ"
                    description="гарантия 2 года на все услуги"
                    formTitle="ЗАПИСЬ В СЕРВИС"
                    buttonText="Отправить"
                />
                <Stock description="СКИДКА ПРИ ЗАМЕНЕ МАСЛА" imgLink="./track.png" percent="10%"/>
                <Cards cards={cards}/>
                <div style={{height: '96px'}}/>
            </div>
        </LayoutPage>
    )
}

export default Home
