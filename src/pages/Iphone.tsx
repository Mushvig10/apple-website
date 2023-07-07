import React from "react";

import axios from "axios";
import Card from "../components/Card";
import CardTopText from "../components/CardTopText";
import CardRightText from "../components/CardRightText";
import WatchCompare from "../components/WatchCompare";

const cardsUrl = "https://run.mocky.io/v3/5b03d19c-feb5-4800-b3e3-5d8735f74d4d";
const devicesUrl = "https://run.mocky.io/v3/c4fc48bd-84a2-498c-a2e8-08a855897222";

const Iphone = () => {
    const [cards, setCards]: any = React.useState([]);
    React.useEffect(() => {
        axios.get(`${cardsUrl}`).then((response: any) => {
            setCards(response.data.cards);
        });
    }, []);

    const [devices, setDevices]: any = React.useState([]);
    React.useEffect(() => {
        axios.get(`${devicesUrl}`).then((response: any) => {
            setDevices(response.data.devices);
        });
    }, []);


    return (
        <div className="content">

            {cards?.map((card: any, index: number) => {
                if (card.type === 1) {
                    return (
                        <div className="row">
                            <Card card={card}/>
                        </div>
                    )
                } else if (card.type === 2) {
                    return (
                        <div className="row">
                            <CardTopText card={card}/>
                        </div>
                    )
                } else if (card.type === 3) {
                    return (
                        <div className="row rtc">
                            <CardRightText card={card}/>
                        </div>
                    )
                } else {
                    return <div className="row"></div>;
                }
            })}
            <h2 className="text-center mt-5 mb-5">Which iPhone is right for you?</h2>
            <WatchCompare devices={devices} />
        </div>
    )
}
export default Iphone;
