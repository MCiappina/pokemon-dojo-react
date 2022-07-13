import React, { FC } from 'react'
import { Card, CardProps } from '../Card/Card'


type CardListProps = {
  cards: Array<CardProps>
}

export const CardList: FC<CardListProps> = ({ cards }) => {
  return <div className="container">
    {cards ? cards.map((card: CardProps) => {
      return <Card key={card.name} name={card.name} type={card.type} imgSrc={card.imgSrc} />
    })
      : <p>Não existem cartas para mostrar!</p>
    }
  </div>
}
