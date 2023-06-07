import React from 'react';
import Card from '../components/Card';
import Apex2 from '../components/Apex2';
import { data3 } from '../data/data3';
import { data2 } from '../data/data2';

const Bunching = () => {
	return (
		<Card>
			<Apex2 data={data3} data2={data2} yaxis="Bunching of Trucks" />
		</Card>
	);
};

export default Bunching;
