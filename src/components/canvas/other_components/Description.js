import React from 'react';

export default class Description extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div>
				<div className="text-center">
					<h4>Description&nbsp;<span className="glyphicon glyphicon-exclamation-sign"></span></h4>
				</div>
				<div>
					<textarea  rows="10" className="form-control" style={{resize:'none'}}></textarea>
				</div>
				<div>&nbsp;</div>
				<div>
					<button className="btn btn-primary pull-right">Save</button>
				</div>
			</div>
		);
	}
}



