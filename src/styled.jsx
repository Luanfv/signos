import styled from 'styled-components'

export const MainStyled = styled.div`
    width: 350px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 350px) {
        width: 100%;
    }
`

export const TitleStyled = styled.h1`
    width: 100%;
    color: #41c96a;
    padding: 20px 0px;
    border-bottom: 2px solid #d8d8d8;
`