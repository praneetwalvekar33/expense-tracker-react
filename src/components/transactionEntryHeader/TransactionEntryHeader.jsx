import { React } from 'react';

import './TransactionEntryHeader.css';

const TransactionEntryHeader = ()=>{
    return(
        <div className="entry-header-container ">
            <div className="color width align-text">No</div>
            <div className="color width-name align-text">Name</div>
            <div className="color width-date align-text">Date</div>
            <div className="color width align-text">Type</div>
            <div className="color width align-text">Amount</div>
        </div>
    )
}

export default TransactionEntryHeader;