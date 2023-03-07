import { React } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getTransactionData } from '../../utils/apiCallUtility';

import UserTransactionEntry from '../userTransactionEntry/UserTransactionEntry';

const TransactionList = () =>{
    const {data} = useQuery(["transactionData"],()=> getTransactionData());
    let no = 0;

    return(
        <div>
            {data?.map((transactionEntry)=>{
                no++;
                return (
                    <UserTransactionEntry transaction={transactionEntry} num={no} key={transactionEntry.id}/>              
                 );
            })}
        </div>
    );
}

export default TransactionList;