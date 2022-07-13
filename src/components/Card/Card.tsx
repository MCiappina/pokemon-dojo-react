import React, { FC } from 'react'

export type CardProps = {
    name: string;
    type: string;
    imgSrc: string;
}

export const Card: FC<CardProps> = ({ name, type, imgSrc }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{type}</p>
                </div>
        </div>
    )
}
