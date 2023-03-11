import { React,useState } from 'react';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';

import { transactionAddedContext } from './utils/contextUtil';
import Header from './components/header/Header';
import Card from './components/card/Card';
import AddNewTransactionForm from './components/addNewTransactionFrom/AddNewTransactionForm';
import TransactionEntryHeader from './components/transactionEntryHeader/TransactionEntryHeader';
import ResponseSnackbar from './components/responseSnackbar/ResponseSnackbar';
import './App.css'
import TransactionList from './components/transactionList/TransactionList';

const App = () => {

    const client = new QueryClient();
    const [transactionAddedResponse,setTransactionAddedResponse] = useState(false);
    const [transactionSucess,setTransactionSucess] = useState(false);
    
    return (
        <div className="app"> 
            <QueryClientProvider client={client}>
                <transactionAddedContext.Provider value={{transactionAddedResponse,transactionSucess}}>
                    <ResponseSnackbar/>
                </transactionAddedContext.Provider>
                <Header/>
                <div className="cards-container">
                    <Card header="Total Balance" value={1500} balOrExp={true}/>
                    <Card header="Total Expense" value={34000} balOrExp={false}/>
                </div>
                <transactionAddedContext.Provider value={{setTransactionAddedResponse,setTransactionSucess}}>
                    <AddNewTransactionForm className="new-transaction" />
                </transactionAddedContext.Provider>
                <TransactionEntryHeader />
                <TransactionList/>
            </QueryClientProvider>
        </div>
    )
}

export default App;