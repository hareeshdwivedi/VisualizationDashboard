import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import ApexProd from '../components/ApexProd';
import { data } from '../data/data';

const Dumping = () => {
	const [
		loading,
		setLoading
	] = useState(false);
	const [
		prodData,
		setData
	] = useState([]);

	useEffect(
		() => {
			setLoading(true);
			const fetchData = async () => {
				const response = await fetch(
					'https://qds-hackathon.herokuapp.com/api/productivity'
				);
				const responseData = await response.json();
				const responseArray = responseData.map(el => el.productivity);
				setData(responseArray);
				setLoading(false);
			};
			fetchData();
		},
		[
			setLoading
		]
	);
	return (
		<Card>
			{loading ? (
				<Spinner />
			) : (
				<ApexProd
					data={data}
					prodData={prodData}
					name="Dumping"
					yaxis="Dumping Trucks"
				/>
			)}
		</Card>
	);
};

export default Dumping;
