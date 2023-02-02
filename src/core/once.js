import React from 'react';

const Once = (cb) => React.useEffect(cb, []);

export default Once;
