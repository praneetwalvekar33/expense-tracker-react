import { useContext } from 'react';
import { transactionAddedContext } from '../../utils/contextUtil';

import "./ResponseSnackbar.css"

const ResponseSnackbar = () => {

    const {transactionAddedResponse,transactionSucess} = useContext(transactionAddedContext);

    return (
        <div className="snackbar" id={transactionAddedResponse?"show":"hide"} style={transactionSucess?{background:"#107100"}:{background:"#B00000"}}>
            <div className="symbol">{transactionSucess?<>&#10003;</>:<>&#215;</>}</div>
            <div className="message">{transactionSucess?"Transaction Added Successfully!":"An Error Occured!"}</div>
        </div>
    );
}

export default ResponseSnackbar;