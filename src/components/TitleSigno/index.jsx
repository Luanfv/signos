import React, {useState, useEffect} from 'react'
import {TitleStyled, ImgStyled, MainStyled} from './styled'
import aries from './../../images/aries.png'
import bull from './../../images/bull.png'
import gemini from './../../images/gemini.png'
import cancer from './../../images/cancer.png'
import lion from './../../images/lion.png'
import virgin from './../../images/virgin.png'
import pound from './../../images/pound.png'
import scorpio from './../../images/scorpio.png'
import sagittarius from './../../images/sagittarius.png'
import capricorn from './../../images/capricorn.png'
import aquariums from './../../images/aquariums.png'
import pisces from './../../images/pisces.png'

export default (props) => {
    const {signo, id} = props
    const [img, setImg] = useState()

    useEffect(() => {
        switch(id) {
            case 1:
                setImg(aries)
                break
            case 2:
                setImg(bull)
                break
            case 3:
                setImg(gemini)
                break
            case 4:
                setImg(cancer)
                break
            case 5:
                setImg(lion)
                break
            case 6:
                setImg(virgin)
                break
            case 7:
                setImg(pound)
                break
            case 8:
                setImg(scorpio)
                break
            case 9:
                setImg(sagittarius)
                break
            case 10:
                setImg(capricorn)
                break
            case 11:
                setImg(aquariums)
                break
            case 12:
                setImg(pisces)
                break
            default:
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