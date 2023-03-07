import axios from "axios";

const transactionApi = axios.create({
    baseURL:"http://localhost:8080/eTracker"
});

export const getTransactionData = async() => {
    return await transactionApi.get("/transactions").then((res)=>res.data);
}

export const getTotalBalanceData = async() => {
    return await transactionApi.get("/totalIncome");
}

export const getTotalExpenseData = async() => {
    return await transactionApi.get("/totalExpense");
}

export const addNewUserTransaction = async(transaction) => {
    await transactionApi.post("/transactions",transaction);
}

export default transactionApi;