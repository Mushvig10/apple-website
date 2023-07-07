
const Card = (props: any) => {
    return (
        <div className={props.card.col}>
            <div className={`card-body ${props.card.classes}`}
                 style={{height: props.card.height + 'px', backgroundImage: `url(${(props.card.img)}`}}>
                <h2>{props.card.title}</h2>
                <h3>{props.card.subtitle}</h3>
                <a href={props.card.url}>{props.card.urlText}</a>
            </div>
        </div>
    )
}
export default Card;
