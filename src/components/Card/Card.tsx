import React, { FC, useState } from 'react'
import { Modal } from '../Modal/Modal';

export type CardType= {
    name: string;
    type: string;
}

export type CardProps = {
    card: CardType
}

export const Card: FC<CardProps> = ({ card }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <div onClick={toggleModal} className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.type}</p>
                </div>
            </div>
            {showModal && <Modal pokemon={card.name} />}
        </>
    )
}
