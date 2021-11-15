import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px;
	width: 100%;
	font-family: open sans;
`;

const BalanceBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	color: black;
	width: 100%;

`;
const AddExpense = styled.div`
	background: green;
	color: white;
	text-align: center;
	padding: 8px 15px;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
	font-size: 14px;
	transition: 0.5s;
`;
const AddTransContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid gray;
	gap: 15px;
	padding: 15px 20px;
	margin: 20px;
	padding: 10px 20px;
	width: 100%;
	input {
		border-radius: 4px;
		border: 1px solid black;
		padding: 10px 15px;
		outline: none;
	}
`;
const RadioBox = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	input {
		margin: 0px 10px;
		color:green;
	}
`;
const ExpenseContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	
`;
const ExpenseBox = styled.div`
	display: flex;
	flex-direction: column;
    font-size:16px;
    align-items:center;
    border: 1px solid grey;
    border-radius: 4px;
    padding:10px 20px;
    gap:5px;
    margin:10px 25px ;
    width:135px;
    span{
        color:red;
        font-size:20px;
        font-weight:bold;
    }
	
`;
const IncomeBox = styled.div`
	display: flex;
	flex-direction: column;
    text-align:center;
	border: 1px solid gray;
	border-radius: 4px;
	padding: 10px 20px;
	gap: 5px;
	margin: 10px 25px;
	width: 135px;
	font-size: 16px;

	span {
		color: green;
		font-size: 20px;
		font-weight: bold;
	}
`;

const AddTransView = (props) => {
	const [amount, setAmount] = useState();
	const [description, setDescription] = useState();
	const [type, setType] = useState('EXPENSE');

    const addTransaction = () => {
        
		props.addTransactionValue({
			amount: Number(amount),
			description,
			type,
			id: Date.now(),
		});
		props.toggleAddTsn();
	};

	return (
		<AddTransContainer>
			<input
				placeholder="Amount"
                value={amount}
                type="number"
				onChange={(e) => setAmount(e.target.value)}
			/>
			<input
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<RadioBox>
				<input
					type="radio"
					id="exp"
					name="type"
					value="EXPENSE"
					checked={type === 'EXPENSE'}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor="exp">Expense</label>
				<input
					type="radio"
					id="income"
					name="type"
					value="INCOME"
					checked={type === 'INCOME'}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor="income">Income</label>
			</RadioBox>
			<AddExpense onClick={addTransaction}>Add Transaction</AddExpense>
		</AddTransContainer>
	);
};

const Expense = (props) => {
	const [isAddTsnVisible, toggleAddTsn] = useState(false);
	return (
		<Container>
			<BalanceBox>
				Balance: ₦{props.income - props.expense}
				<AddExpense onClick={() => toggleAddTsn(!isAddTsnVisible)}>
					{isAddTsnVisible ? 'CANCEL' : 'ADD'}
				</AddExpense>
			</BalanceBox>
			{isAddTsnVisible && (
				<AddTransView
					toggleAddTsn={toggleAddTsn}
					addTransactionValue={props.addTransactionValue}
				/>
			)}
			<ExpenseContainer>
				<ExpenseBox isIncome={false}>
					Expense
					<span>₦{props.expense}</span>
				</ExpenseBox>
				<IncomeBox isIncome={true}>
					Income
					<span>₦{props.income}</span>
				</IncomeBox>
			</ExpenseContainer>
		</Container>
	);
};

export default Expense;
