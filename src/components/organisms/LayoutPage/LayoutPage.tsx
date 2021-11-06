import React, {FC} from 'react'
import {Navigation, Footer, GridLayout} from '@components'
import {Styled} from './styled'

export const LayoutPage: FC = ({children}) => {
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
            <Navigation/>
            <GridLayout>
                {children}
            </GridLayout>
            <Footer/>
        </Styled.Container>
    )
}
