import React,{Component} from 'react';
import PopOver from '../PopOver';

export default class Description extends Component{

	constructor(props){
		super(props);	

		
		 
	}


   _saveDescription(){
   		this.props.actions.saveDescription(this.refs.descRef.value);
   }


	render(){

		
		
		return(
			<div>
			    
				<div className="text-center" id="test">
					<PopOver  heading="Description"  icon="glyphicon glyphicon-info-sign"/>
				</div>
				<div>
					<textarea   rows="10" 
								className="form-control" 
								style={{resize:'none'}}
								ref="descRef">
					</textarea>
				</div>
				<div>&nbsp;</div>
				<div>
					<button className="btn btn-primary pull-right"
							onClick={this._saveDescription.bind(this)}>Save</button>
				</div>
			</div>
		);
	}


}



