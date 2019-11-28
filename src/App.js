import React from 'react';
import Card from './screens/Card'
import {MainStyled, TitleStyled} from './styled'

export default () => {
  document.title = 'Horóscopos'

  return (
    <MainStyled>
      <TitleStyled>
        Signos
      </TitleStyled>
      <Card />
    </MainStyled>
  )
}