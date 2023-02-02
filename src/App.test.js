import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import context from './core/context';

test('App', () => {
	const component = renderer.create(<App { ...context }/>).toJSON();

	expect(component.children.length).toEqual(1);
	expect(component.children[0].children[0]).toEqual('Get ready');
});
