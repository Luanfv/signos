import React from 'react'
import {CardStyled, NavStyle, MenuStyle} from './styled'
import Signo from './../../components/TitleSigno'
import Text from './../../components/DescriptionSigno'
import next from './../../images/next.png'
import back from './../../images/back.png'

export default () => {
    return (
        <CardStyled>
            <MenuStyle>
                <NavStyle src={back} alt='img' />
                <Signo signo='ÁRIES' />
                <NavStyle src={next} alt='img' />
            </MenuStyle>
            <Text text='É isso mesmo, vamo testar esse negocio' />
        </CardStyled>
    )
}