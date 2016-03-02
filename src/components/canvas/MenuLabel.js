import React from 'react';

export default class MenuLabel extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){

		var style={
			paddingTop:50,
			paddingBottom:10,
			fontWeight:'bold'
		}

		return(
			<div>
				<div className="text-center" style={style}>{this.props.title}</div>
			</div>
		);
	}
}



