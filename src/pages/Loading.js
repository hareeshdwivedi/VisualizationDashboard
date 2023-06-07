import React from 'react';
import Card from '../components/Card';
import LoadingChart from '../components/LoadingChart';
import { data } from '../data/data';

const Loading = () => {
	return (
		<Card>
			<LoadingChart data={data} yaxis="Loading Trucks" />
		</Card>
	);
};

export default Loading;
