import { React } from 'react';

import './UserTransactionEntry.css';

const UserTransactionEntry = ({transaction,num}) => {
    return (
        <div className="user-entry-container" style={transaction.transactionType===1?{borderLeft: "12px solid #107100"}:{borderLeft:"12px solid #B00000"}}>
            <div className="color">{num}</div>
            <div className="color name-margin">{transaction.transactionName}</div>
            <div className="color margin-right">{transaction.transactionDate}</div>
            <div className="color margin-right">{transaction.transactionType}</div>
            <div className="color margin-right">{transaction.transactionAmount}</div>
        </div>
    )
}

export default UserTransactionEntry;