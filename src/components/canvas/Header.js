import React,{Component} from 'react';

export default class Header extends Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div className="row">
				<div className="col-lg-3 col-md-3">
					<h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build an Assignment</h3>
				</div>
				<div className="col-lg-9 col-md-9">
					<span className="pull-right" style={{paddingTop:10,paddingRight:50}}>
						<button className="btn btn-primary" onClick={this._saveDraft.bind(this)}>Save as Draft</button>
					</span>
				</div>
			</div>
		);
	}

	

	_saveDraft(){
		console.log("_publishHandle");
	}


}





