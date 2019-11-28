import styled from 'styled-components'

export const MainStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 190px;
`
export const TitleStyled = styled.p`
    width: 145px;
    text-align: center;
    font-size: 20px;
    color: #f17f01;
    font-weight: 600;
`

export const ImgStyled = styled(TitleStyled)`
    width: 40px;
    height: 40px;
    border: red solid 2px;
`