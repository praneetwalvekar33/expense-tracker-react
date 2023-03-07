import { React,useContext }  from "react";
import { useForm } from "react-hook-form";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { addNewUserTransaction } from "../../utils/apiCallUtility"
import { transactionAddedContext } from "../../utils/contextUtil"

import "./AddNewTransactionForm.css"

const AddNewTransactionForm = () => {
    const {register,handleSubmit,reset,formState:{ errors }} = useForm({
        defaultValues: {
            transactionsName:"",
            transactionDate:"",
            transactionAmount: null ,
            transactionType: null
        }}
    );

    const queryClient = useQueryClient();

    const addMutation = useMutation(addNewUserTransaction,{
        onSuccess:()=>{
            queryClient.invalidateQueries();
            reset();
            setTransactionAddedState(true);
            setTimeout(()=>{
                setTransactionAddedState(false);
            },3000)
            
        }
    });

    const setTransactionAddedState = useContext(transactionAddedContext);

    const submit = (data) =>{
        console.log(data);
        addMutation.mutate(data);
    }
    
    return(
        <form onSubmit={handleSubmit(submit)}className="add-new-transaction-form">
            <h3 className="form-header">Add New Transaction</h3>
            <div className="first-row row column">
                <div>
                    {errors.transactionName && <div className="error-message">{errors.transactionName.message}</div>}
                    <div className="input-component">
                        <label htmlFor='name-input' className="name-label label">Name:</label>
                        <input type="text" placeholder='Type Name here' style={errors.transactionName?{border:"1px solid red"}:{}} className="input" id="name-input" {...register("transactionName", {required: 'This is a required field', pattern:{value:/^[A-Za-z]+$/i,message:'You can only enter alphabets'}})}/>
                    </div>
                </div>
                <div>
                    <div className="input-component">
                        <label htmlFor='type-select' className="label-type label">Type:</label>
                        <select className="type-input input" id="type-select" {...register("transactionType")}>
                            <option value={1}>Credit</option>
                            <option value={2}>Debit</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="second-row row column">
                 <div>  
                    {errors.transactionDate && <div className="error-message">{errors.transactionDate.message}</div>}
                    <div className="input-component">
                        <label htmlFor='date-input' className="label-date label">Date:</label>
                        <input type="date" placeholder='Select Date' style={errors.transactionDate?{border:"1px solid red"}:{}} className="input" id="date-input" {...register("transactionDate", {required:'This is required field',valueAsDate:false})}/>
                    </div>
                </div> 
                <div>
                    {errors.amount && <div className="error-message">{errors.transactionAmount.message}</div>}
                    <div className="input-component">
                        <label htmlFor='amount-input' className="label-amount label">Amount:</label>
                        <input type="number" placeholder='Type amount in RS' style={errors.transactionAmount?{border:"1px solid red"}:{}} className="amount-input input" id="amount-input" {...register("transactionAmount",{required:'This is required field',min:{value:0,message:'Amount cannot be less than zero'},valueAsNumber:true}   )}/>
                    </div>
                </div>
            </div>

            <input type="submit" value="Add Transaction" className="submit-input"/>
        </form>
    )
}

export default AddNewTransactionForm;