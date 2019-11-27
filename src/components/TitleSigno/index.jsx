import React from 'react'
import {TitleStyled, ImgStyled, MainStyled} from './styled'

export default (props) => (
    <MainStyled>
        <ImgStyled></ImgStyled>
        <TitleStyled>{props.signo}</TitleStyled>
    </MainStyled>
)