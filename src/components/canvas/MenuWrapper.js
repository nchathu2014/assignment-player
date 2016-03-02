import React from 'react';

export default class MenuWrapper extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div className="row">
				<div className="col-lg-12 col-md-12">
					{this.props.children}
				</div>
			</div>
		);
	}
}



