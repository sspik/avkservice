import type { NextPage } from 'next'

import { LayoutPage, Text } from '@components'
import styled from 'styled-components'
import { Arrow } from '../../src'
import Link from 'next/link'
import React from 'react'

const Stock: NextPage = () => {
    return (
        <LayoutPage>
            <WrapperAddress>
                <Link href={`/`} passHref><a><WrapperLinkHome><Arrow />Назад</WrapperLinkHome></a></Link>
                <Text size={18} sizeMob={18}>Идейные соображения высшего порядка, а также консультация с широким активом
                    влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Не следует,
                    однако
                    забывать, что консультация с широким активом представляет собой интересный эксперимент проверки
                    позиций,
                    занимаемых участниками в отношении поставленных задач. Товарищи! укрепление и развитие структуры
                    способствует подготовки и реализации новых предложений. Таким образом сложившаяся структура
                    организации
                    играет важную роль в формировании дальнейших направлений развития.
                    {<br />}{<br />}
                    Задача организации, в особенности же укрепление и развитие структуры в значительной степени
                    обуславливает создание форм развития. Значимость этих проблем настолько очевидна, что рамки и место
                    обучения кадров представляет собой интересный эксперимент проверки систем массового участия.
                    Товарищи!
                    реализация намеченных плановых заданий играет важную роль в формировании систем массового участия.
                    Таким
                    образом рамки и место обучения кадров позволяет выполнять важные задания по разработке существенных
                    финансовых и административных условий.
                    {<br />}{<br />}
                    Товарищи! начало повседневной работы по формированию позиции обеспечивает широкому кругу
                    (специалистов)
                    участие в формировании дальнейших направлений развития. Идейные соображения высшего порядка, а также
                    постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой
                    интересный
                    эксперимент проверки направлений прогрессивного развития. Повседневная практика показывает, что
                    сложившаяся структура организации в значительной степени обуславливает создание модели развития.
                    {<br />}{<br />}
                    Равным образом новая модель организационной деятельности представляет собой интересный эксперимент
                    проверки системы обучения кадров, соответствует насущным потребностям. Повседневная практика
                    показывает,
                    что дальнейшее развитие различных форм деятельности играет важную роль в формировании направлений
                    прогрессивного развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей
                    деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации.
                    Не
                    следует, однако забывать, что консультация с широким активом влечет за собой процесс внедрения и
                    модернизации существенных финансовых и административных условий. Повседневная практика показывает,
                    что
                    дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки
                    модели развития. Разнообразный и богатый опыт рамки и место обучения кадров требуют от нас анализа
                    модели развития.
                    {<br />}{<br />}
                    Не следует, однако забывать, что начало повседневной работы по формированию позиции играет важную
                    роль в
                    формировании направлений прогрессивного развития. Равным образом дальнейшее развитие различных форм
                    деятельности требуют от нас анализа соответствующий условий активизации. Задача организации, в
                    особенности же постоянный количественный рост и сфера нашей активности представляет собой интересный
                    эксперимент проверки форм развития. Задача организации, в особенности же реализация намеченных
                    плановых
                    заданий представляет собой интересный эксперимент проверки направлений прогрессивного развития.
                    Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности
                    позволяет
                    оценить значение систем массового участия. Идейные соображения высшего порядка, а также укрепление и
                    развитие структуры в значительной степени обуславливает создание модели развития.
                    {<br />}{<br />}
                    Таким образом рамки и место обучения кадров требуют определения и уточнения систем массового
                    участия.
                    Значимость этих проблем настолько очевидна, что сложившаяся структура организации позволяет
                    выполнять
                    важные задания по разработке модели развития. Товарищи! постоянное информационно-пропагандистское
                    обеспечение нашей деятельности способствует подготовки и реализации систем массового участия. Таким
                    образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить
                    значение дальнейших направлений развития. Товарищи! новая модель организационной деятельности
                    требуют от
                    нас анализа модели развития.</Text>
                <div style={{ height: '96px' }} />
            </WrapperAddress>
        </LayoutPage>)
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
export default Stock
