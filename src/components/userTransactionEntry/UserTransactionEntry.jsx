import { React } from 'react';

import './UserTransactionEntry.css';

const UserTransactionEntry = ({transaction:{id,transactionName,transactionAmount,transactionDate,transactionType}}) => {
    return (
        <div className="user-entry-container" style={transactionType===1?{borderLeft: "12px solid #107100"}:{borderLeft:"12px solid #B00000"}}>
            <div className="color">{id}</div>
            <div className="color name-margin">{transactionName}</div>
            <div className="color margin-right">{transactionDate}</div>
            <div className="color margin-right">{transactionType}</div>
            <div className="color margin-right">{transactionAmount}</div>
        </div>
    )
}

export default UserTransactionEntry;