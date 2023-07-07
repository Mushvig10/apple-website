import React from "react";
import Card from "../components/Card";
import CardTopText from "../components/CardTopText";
import CardRightText from "../components/CardRightText";
import WatchCompare from "../components/WatchCompare";
import {DeviceModel} from "../models/device-model";
import axios from "axios";

const cardsUrl = "https://run.mocky.io/v3/e29a590a-e33a-4aa6-b5b9-a82330efb977";
const devicesUrl = "https://run.mocky.io/v3/bc6dfd82-ec23-4c97-9ec0-f3332ec4ce9c";

const Iwatch = () => {

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
                            <div className="row">
                                <CardRightText card={card}/>
                            </div>
                        )
                    } else {
                        return <div className="row"></div>;
                    }
                })}
            <h2 className="text-center mt-5 mb-5">Which Apple Watch is right for you?</h2>
            <WatchCompare devices={devices} />
        </div>
    )
}
export default Iwatch;
