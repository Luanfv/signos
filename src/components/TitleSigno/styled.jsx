import styled from 'styled-components'

export const MainStyled = styled.div`
    padding: 10px 0px;
    display: flex;
    justify-content: space-around;
`
export const TitleStyled = styled.p`
    font-size: 16px;
    color: #f17f01;
    font-weight: 600;
    display: inline;
`

export const ImgStyled = styled(TitleStyled)`
    width: 25px;
    height: 25px;
    border: red solid 2px;
`