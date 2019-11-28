import React, {useState, useEffect} from 'react'
import {CardStyled, NavStyle, MenuStyle} from './styled'
import Signo from './../../components/TitleSigno'
import Text from './../../components/DescriptionSigno'
import nextImg from './../../images/next.png'
import backImg from './../../images/back.png'
import api from './../../services/api'

export default () => {
    const [signs, setSigns] = useState([])
    const [current, setCurrent] = useState()
    const [isLoader, setIsLoader] = useState(true)
    const [count, setCount] = useState(0)

    const handleInformation = async () => {
        await api.get()
        .then(res => {
            setSigns(res.data)
            setCurrent(res.data[count])
            setIsLoader(false)
        })
        .catch(e => {
            alert('ERRO DE CONEXÃO')
        })
    }

    const next = () => {
        if(count >= signs.length - 1) {
            setCount(0)
            return
        }

        setCount(count + 1)
    }

    const back = () => {
        if(count <= 0) {
            setCount(signs.length - 1)
            return
        }

        setCount(count - 1)
    }

    useEffect(() => {
        handleInformation()
    }, [])

    useEffect(() => {
        setCurrent(signs[count])
    }, [count])

    if(isLoader) {
        return <div>Carregando...</div>
    }

    return (
        <CardStyled>
            <MenuStyle>
                <NavStyle src={backImg} alt='img' onClick={() => back(count - 1)} />
                <Signo signo={current.description} />
                <NavStyle src={nextImg} alt='img' onClick={() => next(count + 1)} />
            </MenuStyle>
            <Text text={current.predictions[current.predictions.length - 1].description} />
        </CardStyled>
    )
}