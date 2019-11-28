import React, {useState, useEffect} from 'react'
import {TitleStyled, ImgStyled, MainStyled} from './styled'
import aries from './../../images/aries.png'
import touro from './../../images/touro.png'
import gemeos from './../../images/gemeos.png'
import cancer from './../../images/cancer.png'
import leao from './../../images/leao.png'
import virgem from './../../images/virgem.png'
import libra from './../../images/libra.png'
import escorpiao from './../../images/escorpiao.png'
import sagitario from './../../images/sagitario.png'
import capricornio from './../../images/capricornio.png'
import aquarios from './../../images/aquarios.png'
import peixes from './../../images/peixes.png'

export default (props) => {
    const {signo, id} = props
    const [img, setImg] = useState()

    useEffect(() => {
        switch(id) {
            case 1:
                setImg(aries)
                break
            case 2:
                setImg(touro)
                break
            case 3:
                setImg(gemeos)
                break
            case 4:
                setImg(cancer)
                break
            case 5:
                setImg(leao)
                break
            case 6:
                setImg(virgem)
                break
            case 7:
                setImg(libra)
                break
            case 8:
                setImg(escorpiao)
                break
            case 9:
                setImg(sagitario)
                break
            case 10:
                setImg(capricornio)
                break
            case 11:
                setImg(aquarios)
                break
            case 12:
                setImg(peixes)
                break
        }
    }, [props.id])

    return (
        <MainStyled>
            <ImgStyled src={img} />
            <TitleStyled>{signo.toUpperCase()}</TitleStyled>
        </MainStyled>
    )
}