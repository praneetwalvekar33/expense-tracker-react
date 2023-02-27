import { React } from 'react';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

import Header from './components/header/Header';
import Card from './components/card/Card';
import AddNewTransactionForm from './components/addNewTransactionFrom/AddNewTransactionForm';
import TransactionEntryHeader from './components/transactionEntryHeader/TransactionEntryHeader';
import './App.css'
import TransactionList from './components/transactionList/TransactionList';

const App = () => {

    const client = new QueryClient();
    
    return (
        <div className="app">
            <QueryClientProvider client={client}>
                <Header/>
                <div className="cards-container">
                    <Card header="Total Balance" value={1500} balOrExp={true}/>
                    <Card header="Total Expense" value={34000} balOrExp={false}/>
                </div>
                <AddNewTransactionForm className="new-transaction" />
                <TransactionEntryHeader />
                <TransactionList/>
            </QueryClientProvider>
        </div>
    )
}

export default App;