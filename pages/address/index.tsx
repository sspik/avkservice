import type { NextPage } from 'next'
import { LayoutPage, Text } from '@components'
import { Styled } from './styled'

const Address: NextPage = () => (

    <LayoutPage>
        <Styled.WrapperAddress>
            <Text size={32} sizeMob={24} fontWeight={700}>Адреса</Text>
            <Text size={24} sizeMob={18} fontWeight={700}>г.Подольск, ул.Ульяновых, 12</Text>
            <iframe src='https://yandex.ru/maps/-/CCUuYSH6sD' width='100%' height='320' frameBorder='0' />
            <Text size={24} sizeMob={18} fontWeight={700}>г.Подольск, ул.43-й Армии, 16</Text>
            <iframe src='https://yandex.ru/maps/-/CCUuYSTEtB' width='100%' height='320' frameBorder='0' />
            <div style={{ height: '96px' }} />
        </Styled.WrapperAddress>
    </LayoutPage>
)

export default Address
