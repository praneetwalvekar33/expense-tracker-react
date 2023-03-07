import { useContext } from 'react';
import { transactionAddedContext } from '../../utils/contextUtil';

import "./ResponseSnackbar.css"

const ResponseSnackbar = () => {

    const transactionAddedState = useContext(transactionAddedContext);

    return (
        <div className="snackbar" id={transactionAddedState?"show":"hide"}>
            <div className="symbol">&#10003;</div>
            <div className="message">Transaction Added Successfully!</div>
        </div>
    );
}

export default ResponseSnackbar;