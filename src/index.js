// now that we have babel setup, we can use the ES6 import syntax
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

// need to create two scrips in the package json
// a script to run the webpack dev-server
// a script to build the app out into the dist folder
