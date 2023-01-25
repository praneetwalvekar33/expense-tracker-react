import React  from "react";
import { useForm } from "react-hook-form";

import "./AddNewTransactionForm.css"

const AddNewTransactionForm = () => {
    const {register,handleSubmit, formState:{ errors }} = useForm();

    const submit = (data) =>{
        console.log(errors.transactionName);
        console.log(data)
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
                    {errors.date && <div className="error-message">{errors.date.message}</div>}
                    <div className="input-component">
                        <label htmlFor='date-input' className="label-date label">Date:</label>
                        <input type="date" placeholder='Select Date' style={errors.date?{border:"1px solid red"}:{}} className="input" id="date-input" {...register("date", {required:'This is required field',valueAsDate:true})}/>
                    </div>
                </div> 
                <div>
                    {errors.amount && <div className="error-message">{errors.amount.message}</div>}
                    <div className="input-component">
                        <label htmlFor='amount-input' className="label-amount label">Amount:</label>
                        <input type="number" placeholder='Type amount in RS' style={errors.amount?{border:"1px solid red"}:{}} className="amount-input input" id="amount-input" {...register("amount",{required:'This is required field',min:{value:0,message:'Amount cannot be less than zero'},valueAsNumber:true}   )}/>
                    </div>
                </div>
            </div>

            <input type="submit" value="Add Transaction" className="submit-input"/>
        </form>
    )
}

export default AddNewTransactionForm;