import { React } from 'react';

import './TransactionEntryHeader.css';

const TransactionEntryHeader = ()=>{
    return(
        <div className="entry-header-container ">
            <div className="color">No</div>
            <div className="color name-margin">Name</div>
            <div className="color margin-right">Date</div>
            <div className="color margin-right">Type</div>
            <div className="color margin-right">Amount</div>
        </div>
    )
}

export default TransactionEntryHeader;