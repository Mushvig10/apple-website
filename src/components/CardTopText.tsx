import React from "react";

const Card = (props: any) => {
    return (
        <div className={props.card.col} style={{background: props.card.background}}>
            <div className={`card-body ${props.card.classes}`}>
                <h2>{props.card.title}</h2>
                <h3>{props.card.subtitle}</h3>
                <a href={props.card.url}>{props.card.urlText}</a>
                <img src={props.card.img} />
            </div>
        </div>
    )
}
export default Card;
