import { React } from 'react';

import './UserTransactionEntry.css';

const UserTransactionEntry = (prop) => {
    return (
        <div className="user-entry-container" style={prop.prop==='1'?{borderLeft: "12px solid #107100"}:{borderLeft:"12px solid #B00000"}}>
            <div className="color">No</div>
            <div className="color name-margin">Name</div>
            <div className="color margin-right">Date</div>
            <div className="color margin-right">Type</div>
            <div className="color margin-right">Amount</div>
        </div>
    )
}

export default UserTransactionEntry;