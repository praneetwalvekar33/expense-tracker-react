import { React } from 'react';

import './UserTransactionEntry.css';

const UserTransactionEntry = ({transaction,num}) => {
    return (
        <div className="user-entry-container" style={transaction.transactionType===1?{borderLeft: "12px solid #107100"}:{borderLeft:"12px solid #B00000"}}>
            <div className="color width align-text">{num}</div>
            <div className="color width-name align-text">{transaction.transactionName}</div>
            <div className="color width-date align-text">{transaction.transactionDate}</div>
            <div className="color width align-text">{transaction.transactionType}</div>
            <div className="color width align-text">{transaction.transactionAmount}</div>
        </div>
    )
}

export default UserTransactionEntry;