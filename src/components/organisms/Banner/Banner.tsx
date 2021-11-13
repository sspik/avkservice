import React, { FC, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Text } from '@components'
import { Styled } from './styled'
import { Stars } from '@icons'
import { useFormik } from 'formik'

type TBannerProps = {
    title: string
    description: string
    formTitle: string
    buttonText: string
}

export const Banner: FC<TBannerProps> = ({ title, description, formTitle, buttonText }) => {
    const [send, setSend] = useState(false)
    const formik = useFormik({
        initialValues: {
            phone: '',
            name: '',
        },
        onSubmit: values => {
            setSend(true)
            alert(JSON.stringify(values, null, 2))
            setTimeout(() => {
                setSend(false)
            }, 5000)
        },
    })

    return (
        <>
            <Styled.FormContainer>
                <Styled.CustomImage
                    src='./mersedes.png'
                    alt='logo'
                />
                <Styled.WrapperTextBlock>
                    <Styled.CustomHeading size={30} sizeMob={24} style={{ zIndex: 1 }} fontWeight={700}>
                        {title}
                    </Styled.CustomHeading>
                    <Text size={14} style={{ zIndex: 1 }} fontWeight={700}>
                        {description}
                    </Text>
                </Styled.WrapperTextBlock>
                <Styled.WrapperForm onSubmit={formik.handleSubmit} style={{ zIndex: 1 }}>
                    {!send && <><Text size={24} sizeMob={24} fontWeight={700} color='white'>
                        {formTitle}
                    </Text>
                        <TextField id='phone'
                                   name='phone'
                                   type='phone'
                                   placeholder='Ваш номер'
                                   onChange={formik.handleChange}
                                   value={formik.values.phone}
                                   style={{ backgroundColor: 'white', borderRadius: '8px' }} />
                        <TextField id='name'
                                   name='name'
                                   type='text'
                                   placeholder='Ваше имя'
                                   onChange={formik.handleChange}
                                   value={formik.values.name}
                                   style={{ backgroundColor: 'white', borderRadius: '8px' }} />
                        <Button variant='contained' type='submit' style={{ backgroundColor: 'red', padding: '16px' }}>
                            {buttonText}
                        </Button></>}
                    {send && <>
                        <Text size={24} sizeMob={24} fontWeight={700} color='white'>
                            {formik.values.name}
                        </Text>
                        <Text size={18} sizeMob={18} fontWeight={400} color='white'>
                            Ожидайте звонка оператора чтобы подтверидть запись!
                        </Text>
                        <Text size={18} sizeMob={18} fontWeight={400} color='white'>
                            на номер {formik.values.phone}
                        </Text>
                    </>}
                </Styled.WrapperForm>
                <Styled.RatingWrapper>
                    <img src='./yandex-logo.png' width={76} height={22} alt='logo' />
                    <Stars />
                    <Styled.ReviewsWrapper>
                        <Styled.CustomLink
                            href='https://yandex.ru/maps/org/avtoservis_avkautoservice/100427277081/?ll=37.490570%2C55.421889&mode=search&sctx=ZAAAAAgBEAAaKAoSCXZQiesYxUJAERVHs%2BwosktAEhIJyO4BAOAt7z8RqpWIPr%2Fi0z8iBQABAgQFKAowADimiK%2BT%2FuuOg%2BABQPtTSAFVzczMPlgAYiJleHBfaWQ9Y29udHJvbF93b3JzZV9tZXRyaWNfMV9tYXBzagJydXAAnQHNzEw9oAEAqAEA&sll=37.490570%2C55.421889&sspn=0.130485%2C0.058824&text=%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%2C%20%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81&z=13'>
                            <Text size={16} fontWeight={700} style={{ justifyItems: 'center' }}>
                                Отзывы
                            </Text>
                        </Styled.CustomLink>
                    </Styled.ReviewsWrapper>
                </Styled.RatingWrapper>
                <Styled.DesktopWrapper>
                    <Styled.PartnerWrapper>
                        <img src='./shell.png' width={92} height={24} alt='logo' />
                        <Text size={16} fontWeight={700}>официальный партнер</Text>
                    </Styled.PartnerWrapper>
                </Styled.DesktopWrapper>
            </Styled.FormContainer>
            <Styled.MobileWrapper style={{ marginBottom: '24px' }}>
                <Styled.PartnerWrapper>
                    <img src='./shell.png' width={92} height={24} alt='logo' />
                    <Text size={16} fontWeight={700} style={{ justifySelf: 'end' }}>официальный партнер</Text>
                </Styled.PartnerWrapper>
            </Styled.MobileWrapper>

        </>
    )
}
