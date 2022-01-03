import type { NextPage } from 'next'
import { LayoutPage, Text } from '@components'
import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'
import { Arrow } from '@icons'

const Address: NextPage = () => (

    <LayoutPage>
        <WrapperAddress>
            <Link href="/" passHref><a><WrapperLinkHome><Arrow />Назад</WrapperLinkHome></a></Link>
            <Text size={32} sizeMob={24} fontWeight={700}>Адреса</Text>
            <Text size={24} sizeMob={18} fontWeight={700}>г.Подольск, ул.Ульяновых, 12</Text>
            <iframe src='https://api-maps.yandex.ru/frame/v1/-/CCUuYSH6sD' width='100%' height='320' frameBorder='0' />
            <Text size={24} sizeMob={18} fontWeight={700}>г.Подольск, ул.43-й Армии, 16</Text>
            <iframe src='https://api-maps.yandex.ru/frame/v1/-/CCUuYSTEtB' width='100%' height='320' frameBorder='0' />
            <div style={{ height: '96px' }} />
        </WrapperAddress>
    </LayoutPage>
)

const WrapperAddress = styled.div`
  display: grid;
  grid-row-gap: 16px;

`
const WrapperLinkHome = styled.div`
  display: grid;
  grid-template-columns: 13px 1fr;
  grid-column-gap: 16px;

`
export default Address
