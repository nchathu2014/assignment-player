import React,{Component} from 'react';

export default class Menu extends Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div>
				{this.props.children}
			</div>
		);
	}

	
}



