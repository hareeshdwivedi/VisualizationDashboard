import React from 'react';
import Card from '../components/Card';
import Apex from '../components/Apex';
import { data } from '../data/data';

const Roads = () => {
	return (
		<Card>
			<Apex data={data} yaxis="Road Maintenance" />
		</Card>
	);
};

export default Roads;
