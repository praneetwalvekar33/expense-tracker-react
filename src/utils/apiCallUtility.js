import { Axios } from "axios";

const transactionApi = Axios.create({
    baseURL:"http://localhost:8080/eTracker"
});

export const getTransactionData = async() => {
    return await Axios.get("/transactions").then((res)=>res.data);
}

export default transactionApi;