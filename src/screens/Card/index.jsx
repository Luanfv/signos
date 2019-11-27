import React from 'react'
import {CardStyled} from './styled'
import Signo from './../../components/TitleSigno'
import Text from './../../components/DescriptionSigno'

export default () => {
    return (
        <CardStyled>
            <Signo signo='ÁRIES' />
            <Text text='É isso mesmo, vamo testar esse negocio' />
        </CardStyled>
    )
}