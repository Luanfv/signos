import styled from 'styled-components'

export const MainStyled = styled.div`
    padding: 10px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: red solid 2px;
    width: 100%;
`
export const TitleStyled = styled.p`
    font-size: 16px;
    color: #f17f01;
    font-weight: 600;
    display: inline;
`

export const ImgStyled = styled(TitleStyled)`
    width: 30px;
    height: 30px;
    border: red solid 2px;
`