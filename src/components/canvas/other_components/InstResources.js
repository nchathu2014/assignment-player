import React,{Component} from 'react';
import PopOver from '../PopOver';

export default class InstResources extends Component{

	constructor(props){
		super(props);		 
	}

	_styleRendering(){
		
	}

	render(){
		var {divStyle,borderTopHide,spaceDiv,btnStyle,padding}={

			    divStyle:{
			    	border:'1px solid #cccccc',backgroundColor:'#ffffff'
			    },
			    borderTopHide:{
			    	borderTop:'none'
			    },
			    spaceDiv:{
			    	height:10
			    },
			    btnStyle:{
			    	backgroundColor:'#f8f8f8',
			    	width:120
			    },
			    padding:{
			    	padding:10
			    }
				
			
		}
		return(
			<div>
				<div className="text-center">
				    <PopOver  heading="Instructor Resources "  icon="glyphicon glyphicon-info-sign"/>

				    <ul id="myTab" className="nav nav-tabs">
					  
					  <li className="active">
					    <a href="#tab1" 
					       data-toggle="tab" 
					       className="glyphicon glyphicon-film">
					    </a>
					  </li>

					  <li className="">
					    <a href="#tab2" 
					       data-toggle="tab" 
					       className="glyphicon glyphicon-film">
					    </a>
					  </li>

					  <li className="">
					    <a href="#tab3" 
					       data-toggle="tab" 
					       className="glyphicon glyphicon-picture">
					    </a>
					  </li>

					  <li className="">
					    <a href="#tab4" 
					       data-toggle="tab" 
					       className="glyphicon glyphicon-film">
					    </a>
					  </li>

					  <li className="">
					    <a href="#tab5" 
					       data-toggle="tab" 
					       className="glyphicon glyphicon-link">
					    </a>
					  </li>

					  
					 
					</ul>

					<div id="myTabContent" className="tab-content">
					  <div className="tab-pane fade active in" style={borderTopHide,divStyle} id="tab1">
					    <div style={{padding:10}}>Video &nbsp;<span className="glyphicon glyphicon-info-sign">&nbsp;</span></div>
					    <div>
					    	<div>
						    	<button className="btn btn-default" style={btnStyle}>
						    		<span className="glyphicon glyphicon-open"></span>
						    		 &nbsp;Video
						    	</button>
					    	</div>
					    	<div style={spaceDiv}>&nbsp;</div>
					    	<div>
						    	<button className="btn btn-default" style={btnStyle}>
						    		<span className="glyphicon glyphicon-expand"></span>
						    		 &nbsp;You Tube
						    	</button>
					    	</div>
					    	<div style={spaceDiv}>&nbsp;</div>
					    	<div>
						    	<button className="btn btn-default" style={btnStyle}>
						    		<span className="glyphicon glyphicon-facetime-video"></span>
						    		 &nbsp;Record
						    	</button>
					    	</div>
					    	<div style={spaceDiv}>&nbsp;</div>
					    </div>
					  </div>
                      {/*tab2*/}
					  <div className="tab-pane fade" id="tab2" style={borderTopHide,divStyle}>

					    
					    	<div style={{padding:10}}>Audio &nbsp;<span className="glyphicon glyphicon-info-sign">&nbsp;</span></div>
					    	<div>
						    	<button className="btn btn-default" style={btnStyle}>
						    		<span className="glyphicon glyphicon-open"></span>
						    		 &nbsp;Upload
						    	</button>
					    	</div>
					    	<div style={spaceDiv}>&nbsp;</div>
					  </div>
					   {/*tab3*/}
					   <div className="tab-pane fade" id="tab3" style={borderTopHide,divStyle}>
					     <div style={{padding:10}}>Photo &nbsp;<span className="glyphicon glyphicon-info-sign">&nbsp;</span></div>
					  </div>
					   {/*tab4*/}
					   <div className="tab-pane fade" id="tab4" style={borderTopHide,divStyle}>
					     <div style={{padding:10}}>Document &nbsp;<span className="glyphicon glyphicon-info-sign">&nbsp;</span></div>
					  </div>
					   {/*tab5*/}
					   <div className="tab-pane fade" id="tab5" style={borderTopHide,divStyle}>
					     <div style={{padding:10}}>Link &nbsp;<span className="glyphicon glyphicon-info-sign">&nbsp;</span></div>
					  </div>
					</div>

					<div style={{height:10}}>&nbsp;</div>
					<div style={divStyle}>

					<ul className="list-inline" style={{paddingTop:10,height:30}}>
						<li className="pull-left" style={{paddingLeft:15}}><span className="glyphicon glyphicon-resize-vertical"></span></li>
						<li className="pull-left">
							<img className="pull-left" style={{width:37 , height:20}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CgVGg5OjY7d64jvpXLs4MsWpykLmzOa_I6ClH2zLvycZ5J2c4g"/>
						</li>
						<li className="pull-left" style={{paddingTop:'-5px',width:'40%'}}><div  style={{padding:3,textAlign:'left'}} contentEditable={true}></div></li>
						<li className="pull-right" style={{paddingRight:15}}><span className="glyphicon glyphicon-trash"></span></li>
						<li className="pull-right"><span className="glyphicon glyphicon-pencil "></span></li>
					</ul>
					</div>
					<br/>
					<div className="text-left">
					   Additional Settings<br/><br/>
                    <input type="checkbox"/> Everyone can comment on these resources
                    </div>

                    <div>
						<button className="btn btn-primary pull-right">Save</button>
				    </div>
				    
				</div>
			</div>
		);
	}
}



