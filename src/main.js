import React from 'react';
import {render} from 'react-dom';
import Canvas from './components/canvas/Canvas';
import configureStore from './components/redux/store';
import {Provider} from 'react-redux';

let initialState={

	utilityObj:{
		styleEnable:false
	},
	titleDueDateObj:{
		title:"",
		date:""
	},
	learningObjectivesObj:{
		text:""
	},
	descriptionObj:{
		text:""		
	},
	studentSubmissionObj:{
		checkedVideo:false,
		checkedRequiredVideo:false,
		disabledVideo:"disabled",

		checkedAudio:false,
		checkedRequiredAudio:false,
		disabledAudio:"disabled",

		checkedImage:false,
		checkedRequiredImage:false,
		disabledImage:"disabled",

		checkedDocument:false,
		checkedRequiredDocument:false,
		disabledDocument:"disabled"
	}
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<Canvas/>
	</Provider>,
	document.getElementById('container')
);




