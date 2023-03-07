import { React } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getTransactionData } from '../../utils/apiCallUtility';

import UserTransactionEntry from '../userTransactionEntry/UserTransactionEntry';

const TransactionList = () =>{
    const {data} = useQuery(["transactionData"],()=> getTransactionData());

    return(
        <div>
            {data?.map((transactionEntry)=>{
                return (
                    <UserTransactionEntry transaction={transactionEntry} key={transactionEntry.id}/>
                );
            })}
        </div>
    );
}

export default TransactionList;