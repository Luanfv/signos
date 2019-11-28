import styled from 'styled-components'

export const CardStyled = styled.div`
    max-width: 330px;
    min-height: 340px;
    padding: 25px;
    margin-top: 20px;
    border: #f9b502 solid 3px;
    border-radius: 5px;
    background: #fbf5c8;

    display: flex;
    flex-direction: column; 
`

export const NavStyle = styled.img`
    width: 25px;
    height: 25px;

    :hover {
        cursor: pointer;
    }
`

export const MenuStyle = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`