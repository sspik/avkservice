import styled from 'styled-components'

const PageWrapper = styled.div`
    display: grid;
    justify-content: center;
`
const WrapperContent = styled.div`
    display: grid;
    min-height: 480px;
    max-width: 1380px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`

export const Styled = {
    PageWrapper,
    WrapperContent,
    Container,
}
