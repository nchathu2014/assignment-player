import React,{Component} from 'react';

export default class StudentSubmission extends Component{

	constructor(props){
		super(props);
		this.state={
			isVisible:false
		}		 
	}

	render(){
		return(
			<div>
				<div className="text-center">
					<h4>StudentSubmission&nbsp;<span className="glyphicon glyphicon-info-sign"></span></h4>
				</div>
				<div>
					<p style={{fontWeight:'bold',fontStyle:'italic',fontSize:11}}>
						First,play video and pause where you want to insert your question
					</p>
				</div>

				<div id="questionWrapper" hidden={!this.state.isVisible}>

					Questions Display in here

				
				</div>

				<div>
    
					<div className={this.state.isVisible?"text-center":"pull-left"}>
						<button className="btn btn-sm btn-primary" onClick={this._addQuestionHandle.bind(this)}>
							<span className="glyphicon glyphicon-plus">&nbsp;</span>
						     Add question
					    </button> &nbsp;

					    {this.state.isVisible && 
					    <button className="btn btn-sm btn-default">
						     Save
					    </button>}
					</div>
				</div>				
			</div>
		);
	}

	_addQuestionHandle(){
		this.setState({
			isVisible:true
		});
	}
}


