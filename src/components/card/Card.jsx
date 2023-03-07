import { React } from 'react';
import { useQuery} from '@tanstack/react-query';
import { getTotalBalanceData,getTotalExpenseData } from '../../utils/apiCallUtility';

import './Card.css';
const Card = (prop) => {

    const type = prop.balOrExp?"totalIncome":"totalExpense";

    const{ data } = useQuery([type],()=> {
        let val = 0;
        if(prop.balOrExp){
            val = getTotalBalanceData();
            return val;
        } 
        val = getTotalExpenseData();
        return val;}
    );

    return (
        <div style={prop.balOrExp?{background:"#107100"}:{background:"#B00000"}} className="card-container">
            <h3 className="card-header">{prop.header}</h3>
            <div className="card-details-container">
                <h2 className="card-currency-units">Rs</h2>
                <p className="card-amount">{data?.data}</p>
            </div>
        </div>
    )
}

export default Card;