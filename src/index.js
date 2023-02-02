import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react';
import App from './App';
import context from './core/context';
import updateContext from '@laufire/resist';

const Entry = () => {
	const [state, setState] = useState(context.seed);

	useEffect(context.init, []);
	updateContext(context, { state, setState });

	return <App { ...context }/>;
};

registerRootComponent(Entry);
