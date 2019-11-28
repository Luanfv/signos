import styled from 'styled-components'

export const MainStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
`
export const TitleStyled = styled.p`
    font-size: 16px;
    color: #f17f01;
    font-weight: 600;
`

export const ImgStyled = styled(TitleStyled)`
    width: 50px;
    height: 50px;
    border: red solid 2px;
`