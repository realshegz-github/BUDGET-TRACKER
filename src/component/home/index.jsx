import React, { useState,useEffect} from 'react';
import styled from 'styled-components';
import Expense from '../expense/exp';
import Transaction from '../transaction/trans';
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px 0 10px;
	width: 360px;
	font-family: open sans;
`;

const Home = (props) => {
	const [transactions, updateTransaction] = useState([]);
	const [expense, updateExpense] = useState(0);
	const [income, updateIncome] = useState(0);

	const addTransactionValue = (payload) => {
		const transactionArray = [...transactions];
		transactionArray.push(payload);
		updateTransaction(transactionArray);
	};
	const calculateBalance = () => {
		let exp = 0;
		let inc = 0;
		transactions.map((payload) => {
			payload.type === 'EXPENSE'
				? (exp = exp + payload.amount)
				: (inc = inc + payload.amount);
		});
		updateExpense(exp);
		updateIncome(inc);
	};
	useEffect(() => calculateBalance(), [transactions]);
	return (
		<Wrapper>
			<Expense
				addTransactionValue={addTransactionValue}
				 expense={expense}
				 income={income}
			/>
			<Transaction transactions={transactions} />
		</Wrapper>
	);
};
export default Home;
