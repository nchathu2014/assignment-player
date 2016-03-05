import React,{Component} from 'react';
import ViewTitle from './ViewTitle';
import ViewDynamic from './ViewDynamic';

export default class View extends Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div className="shadow" style={{backgroundColor: 'white'}}>
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="view-title">
							<span className="view-icon-sep" onClick={this._viewOnClickHandle.bind(this)}>
								<img className="viewIcon" src="img/icon-expand.svg" height="25" width="25"/>
							</span>
							<span>&nbsp;&nbsp;&nbsp;Student View</span>
						</div>
					</div>
					<div className="col-lg-12 col-md-12" style={{padding:'5px 20px 20px 30px'}}>
						<ViewTitle/>
						<ViewDynamic/>
				    </div>
			    </div>	
			</div>    		
		);
	}

	_viewOnClickHandle(){
		console.log("View => _viewOnClickHandle");
		
	   $('.rightDiv').toggleClass('expandRightDiv');//toggling the rightSide div width
       $('.viewIcon').toggleClass('rotate180Deg');//toggling view icon (0 to 180 deg)
	}
}



