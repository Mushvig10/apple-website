import React from "react";
import Card from "../components/Card";

import axios from "axios";

const baseURL = "https://run.mocky.io/v3/242fd9ee-9f38-47f9-b485-6759393ca283";

const Home = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseURL}`).then((response: any) => {
            setProducts(response.data.products);
        });
    }, []);
    return (
        <div className="content">
            <div className="row">
                {products?.map((product, index) => {
                    return <Card card={product}/>
                })}
            </div>
        </div>
    )
}
export default Home;
