import { React } from 'react';
// import {
//     useQuery
// } from '@tanstack/react-query';
import { Axios } from "axios";

import './Card.css';
const Card = (prop) => {

    // const baseUrl = "http://localhost:8080/eTracker/";

    // const type = prop.balOrExp?"totalIncome":"totalExpense";

    // const finalUrl = baseUrl+type;

    // console.log(finalUrl);

    // const{ data} = useQuery({
    //     queryKey:["balOrExp"],
    //     queryFn: ()=>{
    //         Axios.get(finalUrl).then(response=>{
    //             console.log(response.data);
    //             return response.data;
    //         });
    //     }
    // });

    //console.log(data);


    return (
        <div style={prop.balOrExp?{background:"#107100"}:{background:"#B00000"}} className="card-container">
            <h3 className="card-header">{prop.header}</h3>
            <div className="card-details-container">
                <h2 className="card-currency-units">Rs</h2>
                <p className="card-amount">{prop.value}</p>
            </div>
        </div>
    )
}

export default Card;