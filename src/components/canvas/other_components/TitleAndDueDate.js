import React,{Component} from 'react';
import PopOver from '../PopOver';

export default class TitleAndDueDate extends Component{

	constructor(props){
		super(props);		 
	}

	_saveTitleAndDueDate(){
		this.props.actions.saveTitleAndDueDate(this.refs.qpTitle.value,"123")
	}

	render(){

		

		

		return(
			<div>
				<div className="text-center">
				<PopOver  heading="Title and Due Date"  icon="glyphicon glyphicon-info-sign"/>
					
				</div>
				<div className="form-group">
				  <label forHtml="qpTitle" className="fontNormal">
				  	Title<span className="star">*</span>
				  </label>
				  <input type="text" className="form-control" ref="qpTitle" id="qpTitle"/>
				</div>
				<div className="form-group">
				  <label forHtml="qpDueDate" className="fontNormal" ref="qpDueDate" id="qpDueDate">
				  	Due date<span className="star">*</span>
				  </label>


				<div className="row">
        			<div className='col-lg-10'>
        			<div className="form-group">
        				<div className='input-group date' id='datetimepicker1' onClick={this._openDatepicker.bind(this)}>
		                <input type='text' className="form-control" style={{borderRight:'none'}}/>
		                <span className="input-group-addon" style={{backgroundColor:'white'}}>
		                	<span className="glyphicon glyphicon-calendar">
		                	</span>
		            	</span>
		        	</div>
		        	</div>
        		</div>
        		</div>
			</div>
				<div>
					<button className="btn btn-primary pull-right" 
					        onClick={this._saveTitleAndDueDate.bind(this)}>Save</button>
				</div>
			</div>
		);
	}

	_openDatepicker(){

		 
                $('#datetimepicker1').datetimepicker();

          
        
	}
}



