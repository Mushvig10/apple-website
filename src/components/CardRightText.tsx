import React from "react";

const Card = (props: any) => {
    return (
        <div className={props.card.col} style={{background: props.card.background}}>
            <div className={`card-body rtc ${props.card.classes}`}>
                <img src={props.card.img} style={{height: props.card.height + 'px', width: 'fit-content'}}/>
                <div className="right-text">
                    <h2>{props.card.title}</h2>
                    <h3>{props.card.subtitle}</h3>
                    <a href={props.card.url}>{props.card.urlText}</a>
                </div>
            </div>
        </div>
    )
}
export default Card;
