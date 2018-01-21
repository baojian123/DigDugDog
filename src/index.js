<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
=======
//import test from './test'
import * as test from './test';

﻿const app =document.querySelector('#root')
app.innerHTML='智安小可爱'

console.log(test);

console.log(test.default.num);
console.log(test.default.foo());
console.log(test.default.num);
>>>>>>> 85b3f6e1fddd65c36bd9c619fadb47f69ba77c8c
