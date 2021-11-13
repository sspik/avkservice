import React, {FC} from 'react'
import {Button, TextField} from '@mui/material'
import {Text} from '@components'
import {Styled} from './styled'
import {Stars} from '@icons'

type TBannerProps = {
    title: string
    description: string
    formTitle: string
    buttonText: string
}

export const Banner: FC<TBannerProps> = ({title, description, formTitle, buttonText}) => {
    return (
        <>
            <Styled.FormContainer>
                <Styled.CustomImage
                    src="./mersedes.png"
                    alt="logo"
                />
                <Styled.WrapperTextBlock>
                    <Styled.CustomHeading size={30} sizeMob={24} style={{zIndex: 1}} fontWeight={700}>
                        {title}
                    </Styled.CustomHeading>
                    <Text size={14} style={{zIndex: 1}} fontWeight={700}>
                        {description}
                    </Text>
                </Styled.WrapperTextBlock>
                <Styled.WrapperForm style={{zIndex: 1}}>
                    <Text size={24} sizeMob={24} fontWeight={700} color="white">
                        {formTitle}
                    </Text>
                    <TextField placeholder="Ваш номер" style={{backgroundColor: 'white', borderRadius: '8px'}}/>
                    <TextField placeholder="Ваше имя" style={{backgroundColor: 'white', borderRadius: '8px'}}/>
                    <Button variant="contained" style={{backgroundColor: 'red', padding: '16px'}}>
                        {buttonText}
                    </Button>
                </Styled.WrapperForm>
                <Styled.RatingWrapper>
                    <img src="./yandex-logo.png" width={76} height={22} alt="logo"/>
                    <Stars/>
                    <Styled.ReviewsWrapper>
                        <Styled.CustomLink href="https://yandex.ru/maps/org/avtoservis_avkautoservice/100427277081/?ll=37.490570%2C55.421889&mode=search&sctx=ZAAAAAgBEAAaKAoSCXZQiesYxUJAERVHs%2BwosktAEhIJyO4BAOAt7z8RqpWIPr%2Fi0z8iBQABAgQFKAowADimiK%2BT%2FuuOg%2BABQPtTSAFVzczMPlgAYiJleHBfaWQ9Y29udHJvbF93b3JzZV9tZXRyaWNfMV9tYXBzagJydXAAnQHNzEw9oAEAqAEA&sll=37.490570%2C55.421889&sspn=0.130485%2C0.058824&text=%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%2C%20%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81&z=13">
                            <Text size={16} fontWeight={700} style={{justifyItems: 'center'}}>
                                Отзывы
                            </Text>
                        </Styled.CustomLink>
                    </Styled.ReviewsWrapper>
                </Styled.RatingWrapper>
                <Styled.DesktopWrapper>
                    <Styled.PartnerWrapper>
                        <img src="./shell.png" width={92} height={24} alt="logo"/>
                        <Text size={16} fontWeight={700}>официальный партнер</Text>
                    </Styled.PartnerWrapper>
                </Styled.DesktopWrapper>
            </Styled.FormContainer>
            <Styled.MobileWrapper style={{marginBottom: '24px'}}>
                <Styled.PartnerWrapper>
                    <img src="./shell.png" width={92} height={24} alt="logo"/>
                    <Text size={16} fontWeight={700} style={{justifySelf: 'end'}}>официальный партнер</Text>
                </Styled.PartnerWrapper>
            </Styled.MobileWrapper>

        </>
    )
}
