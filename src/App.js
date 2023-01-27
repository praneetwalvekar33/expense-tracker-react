import React from 'react';

import Header from './components/header/Header';
import Card from './components/card/Card';
import AddNewTransactionForm from './components/addNewTransactionFrom/AddNewTransactionForm';
import TransactionEntryHeader from './components/transactionEntryHeader/TransactionEntryHeader';
import './App.css'

const App = () => {

    return (
        <div className="app">
            <Header/>
            <div className="cards-container">
                <Card header="Total Balance" amount={45000} balOrExp={true}/>
                <Card header="Total Expense" amount={3500} balOrExp={false}/>
            </div>

            <AddNewTransactionForm className="new-transaction" />

            <TransactionEntryHeader />
        </div>
    )
}

export default App;