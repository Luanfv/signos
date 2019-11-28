import styled from 'styled-components'

export const MainStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 210px;

    @media only screen and (max-width: 295px) {
        width: 100%;
    }

    @media only screen and (max-width: 360px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const TitleStyled = styled.p`
    width: 140px;
    text-align: center;
    font-size: 20px;
    color: #f17f01;
    font-weight: 600;

    @media only screen and (max-width: 230px) {
        width: 100%
    }
`

export const ImgStyled = styled.img`
    color: #f17f01;
    width: 50px;
    height: 50px;
`