import React from "react";

const Card = (props: any) => {
    return (
        <div className="row">
            {props.devices.map((device: any, index: number) => {
                return (
                    <div className="col compare-block text-center">
                        <img className="compare-img" src={device.image}/>

                        <h2 className="compare-title">{device.title}</h2>
                        <hr/>
                        <h3 className="compare-size">{device.size}</h3>
                        {device.properties.map((property: any, index2: number) => {
                            return (
                                <div className="compare-prop">
                                    {property.img &&
                                        <img className="compare-property-img" src={property.img}/>
                                    }
                                    <label className="compare-prop-head" dangerouslySetInnerHTML={{ __html: property.head}}></label>
                                    {property.description &&
                                        <p className="compare-prop-description"  dangerouslySetInnerHTML={{__html: property.description}}></p>
                                    }
                                </div>
                            )
                        })}
                    </div>
                );
            })}
        </div>
    )
}
export default Card;
