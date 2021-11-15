import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	
	margin: 15px 0px 10px;
	padding: 5px 12px;
	font-family: open sans;
	font-size: 18px;
	gap: 10px;
	width: 100%;
	input {
		border-radius: 20px;
		padding: 10px 15px;
		background: whitesmoke;
		border: 1px solid gray;
		outline: none;
		width: 100%;
	}
	h2{
		text-align: center;
	}
`;
const Cell = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	padding: 10px 15px;
	font-size: 16px;
	border-radius: 5px;
	align-items: center;
	justify-content: space-between;
	gap: 5px;
	border: 1px solid gray;
	border-right: 4px solid ${(props) => (props.isExpense ? 'red' : 'green')};
`;

const TransactionCell = (props) => {
	return (
		<Cell isExpense={props.payload?.type === 'EXPENSE'}>
			<span>{props.payload.description}</span>
			<span>₦{props.payload.amount}</span>
		</Cell>
	);
};

const Transaction = (props) => {
	const [searchText, updateSearchText] = useState();
	const [filteredTrans, updateTrans] = useState(props.transactions);

	const filteredData = (searchText) => {
		if (!searchText || !searchText.trim().length) {
			updateTrans(props.transactions);
			return;
		}
		let trans = [...props.transactions];
		trans = trans.filter((payload) =>
			payload.description
				.toLowerCase()
				.includes(searchText.toLowerCase().trim())
		);
		updateTrans(trans);
	};
	useEffect(() => filteredData(searchText), [props.transactions]);
	return (
		<Container>
			<h2>Transaction List</h2>
			<input placeholder="search"
				value={searchText}
				onChange={(e) => {
					updateSearchText(e.target.value)
					filteredData(e.target.value);
				}}
			/>
			{filteredTrans?.length
		       ? filteredTrans.map((payload) => (
		            <TransactionCell payload={payload} />
	        ))
			: ''}
	
		</Container>
	);
};

export default Transaction;
