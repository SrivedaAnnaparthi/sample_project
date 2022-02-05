import React from 'react';
import * as Components from '../components';

const SelectedComponent = ({ component }) => {
	const Comp = Components[component];
	return <Comp />;
};

export default SelectedComponent;
