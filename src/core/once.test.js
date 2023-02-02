import React from 'react';
import once from './once';
import renderer from 'react-test-renderer';

test('once excutes cb once', () => {
	jest.spyOn(React, 'useEffect');
	const cb = jest.fn();

	const Anvil = () => {
		once(cb);

		return null;
	};

	renderer.create(<Anvil/>);

	expect(React.useEffect).toHaveBeenCalledWith(cb, []);
});
