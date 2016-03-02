import React from 'react';

export default class QuizDetail extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){

		

		

		return(
			<div>
				<div className="text-center">
					<h4>Title and Due Date&nbsp;<span className="glyphicon glyphicon-exclamation-sign"></span></h4>
				</div>
				<div className="form-group">
				  <label forHtml="qpTitle" className="fontNormal">
				  	Title<span className="star">*</span>
				  </label>
				  <input type="text" className="form-control" id="qpTitle"/>
				</div>
				<div className="form-group">
				  <label forHtml="qpDueDate" className="fontNormal">
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
					<button className="btn btn-primary pull-right">Save</button>
				</div>
			</div>
		);
	}

	_openDatepicker(){

		 
                $('#datetimepicker1').datetimepicker();

          
        
	}
}



