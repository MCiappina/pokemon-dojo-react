import React, { FC } from 'react'
import { Card, CardType } from '../Card/Card'


type CardListProps = {
  cards: Array<CardType>
}

export const CardList: FC<CardListProps> = ({ cards }) => {


  return <div className="container">
    {cards ? cards.map((card: CardType, i) => {
      return <Card key={i} card={card} />
    })
      : <p>Não existem cartas para mostrar!</p>
    }
  </div>
}
