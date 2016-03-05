import React from 'react';

export default class LearningObjectives extends React.Component{

	constructor(props){
		super(props);		 
	}

	_saveLearningObjectives(){
		this.props.actions.saveLearningObjectives(this.refs.learningObjRef.value)
	}

	render(){

		var btnDrop={
			position:'relative',
			borderTop:'1px #cccccc dotted',
			top:-35,
			right:1,
			width:'100%'
		}

		return(
			<div>
				<div className="text-center">
					<h4>Learning Objectives&nbsp;<span className="glyphicon glyphicon-info-sign"></span></h4>
				</div>
				<div>
					<textarea  rows="10" 
							   className="form-control" 
							   style={{resize:'none'}}
							   ref="learningObjRef"
							   >
				    </textarea>
					
					 {/*

						<div className="row">
					 	<div className="col-lg-12 col-md-12">
					 		<div className="btn-group" style={btnDrop}>
						 		<button  type="button" className="btn btn-sm dropdown-toggle pull-right" 
						 				data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    			Add learning objective <span className="glyphicon glyphicon-menu-down"></span>
						  		</button>
								  <ul className="dropdown-menu pull-right" style={{fontSize:11,width:'100%'}}>
								    <li><a href="#">Obj1</a></li>
								    <li role="separator" className="divider"></li>
								    <li><a href="#">Obj2</a></li>
								    <li role="separator" className="divider"></li>
								    <li><a href="#">Obj3</a></li>
								    <li role="separator" className="divider"></li>
								    <li><a href="#">Obj4</a></li>
								  </ul>
							</div> 
					 	</div>
					 </div>
					 */}

				</div>
				
				<div style={{marginTop:10}}>
					<button className="btn btn-primary pull-right" 
							onClick={this._saveLearningObjectives.bind(this)}>Save</button>
				</div>
			</div>
		);
	}
}



