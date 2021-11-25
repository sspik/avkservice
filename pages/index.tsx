import type { NextPage } from 'next'
import { Banner, CameraView, Cards, LayoutPage, Stock } from '@components'
import { theme } from '../src'

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
            imageLink: './kpp.png',
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

    const links = [
        {
            id: 1,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-5RdSLExDJR0Obng0nX643C&camera=196608&width=&height=&lang=ru',
            boxAddress: 'ул.Ульяновых, 12',
        },
        {
            id: 2,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-5RdSLExDJR0Obng0nX643C&camera=262144&width=&height=&lang=ru',
            boxAddress: 'ул.Ульяновых, 12',
        },
        {
            id: 3,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-5RdSLExDJR0Obng0nX643C&camera=131072&width=&height=&lang=ru',
            boxAddress: 'ул.Ульяновых, 12',
        },
        {
            id: 4,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-ErDn2MEmnEPRnd6IJnHT2b&camera=524288&width=&height=&lang=ru',
            boxAddress: 'ул.43-й армии, 16',
        },
        {
            id: 5,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-ErDn2MEmnEPRnd6IJnHT2b&camera=131072&width=&height=&lang=ru',
            boxAddress: 'ул.43-й армии, 16',
        },
        {
            id: 6,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-ErDn2MEmnEPRnd6IJnHT2b&camera=655360&width=&height=&lang=ru',
            boxAddress: 'ул.43-й армии, 16',
        },
    ]
    return (
        <LayoutPage>
            <div>
                <Banner
                    title='РЕМОНТ И ОБСЛУЖИВАНИЕ'
                    description='гарантия 2 года на все услуги'
                    formTitle='ЗАПИСЬ В СЕРВИС'
                    buttonText='Отправить'
                />
                <Stock description='СКИДКА ПРИ ЗАМЕНЕ МАСЛА' imgLink='./track.png' percent='10%' alt='Все акции' />
                <CameraView links={links} />
                <Cards cards={cards} />

                <div style={{ height: '96px' }} />
            </div>
        </LayoutPage>
    )
}

export default Home
