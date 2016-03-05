import React from 'react';
import {render} from 'react-dom';
import Canvas from './components/canvas/Canvas';
import configureStore from './components/redux/store';
import {Provider} from 'react-redux';

let initialState={

	userList:[
		/*{
			id:0,
			avatar:'https://avatars.githubusercontent.com/u/9334623?v=3',
			userName:'nchathu2014'
		},
		{
			id:1,
			avatar:'https://avatars.githubusercontent.com/u/9334623?v=3',
			userName:'DON'
		}*/
	]
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<Canvas/>
	</Provider>,
	document.getElementById('container')
);




