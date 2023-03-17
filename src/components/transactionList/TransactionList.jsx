import { React } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getTransactionData } from '../../utils/apiCallUtility';

import UserTransactionEntry from '../userTransactionEntry/UserTransactionEntry';
import "./TransactionList.css";


const TransactionList = () =>{
    const {data,isLoading,error} = useQuery(["transactionData"],()=> getTransactionData());
    let no = 0;

    if(isLoading){
        return(
            <div className="message" style={{color:"#107100"}}>
                Please wait loading...
            </div>
        );
    }

    if(error){
        return(
            <div className="message" style={{color:"#B00000"}}>
                An error occured while loading the list.
            </div>
        )
    }

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