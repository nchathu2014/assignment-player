import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from './Header';
import View from './View';
import MenuWrapper from './MenuWrapper';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuLabel from './MenuLabel';

/*redux dependencies*/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';

/*2nd level components*/
import InstResources from './other_components/InstResources';
import StudentSubmission from './other_components/StudentSubmission';
import Description from './other_components/Description';
import TitleAndDueDate from './other_components/TitleAndDueDate';
import LearningObjectives from './other_components/LearningObjectives';


class Canvas extends Component{

	constructor(props){
		super(props);	    
	}

	render(){	
		return(

			<div className="container-fluid" style={{marginLeft:'-12px',marginRight:'-12px',overflow:'hidden'}}>
			<link rel="stylesheet" type="text/css" href="css/canvas-style-default.css"/>
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-3">
						<MenuWrapper>
							<Menu>
								<MenuLabel title="ASSIGNMENT DETAILS"/>
								<MenuItem menuItemOnClick={this._menuItemOnClick.bind(this,1)}>
									Title and Due Date
									<span className="star">*</span>
								</MenuItem>
								<MenuItem menuItemOnClick={this._menuItemOnClick.bind(this,2)}>
									Learning Objectives
								</MenuItem>
								<MenuItem menuItemOnClick={this._menuItemOnClick.bind(this,3)}>
									Description
								</MenuItem>
							</Menu>
							<Menu>
								<MenuLabel title="ASSIGNMENT ACTIVITIES"/>
								<MenuItem  menuItemOnClick={this._menuItemOnClick.bind(this,4)}>
									Instructor Resources
								</MenuItem>
								<MenuItem menuItemOnClick={this._menuItemOnClick.bind(this,5)}>
									Student Submissions
								</MenuItem>
							</Menu>
							{/*
								<Menu>
									<MenuLabel title="SETTINGS"/>
									<MenuItem  menuItemOnClick={this._menuItemOnClick.bind(this,6)}>
										Grading Options
									</MenuItem>
							    </Menu>
							*/}
							
						</MenuWrapper>
					</div>
					<div className="col-lg-9 col-md-9 rightDiv">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<View learningObjectivesObj={this.props.learningObjectivesObj}
								      descriptionObj={this.props.descriptionObj}
								      titleDueDateObj={this.props.titleDueDateObj}/>
							</div>	
						</div>					
					</div>
				</div>
				{/*popup modal*/}
                <div className="popUpModal" id="popUpModal">
                    <button type="button" className="close pull-left"  onClick={this._popUpClose} data-dismiss="modal" aria-hidden="true">×</button>
                	<br/>
                	<div id="popupContainer">&nbsp;</div>
                </div>
			</div>
		);
	}

	_popUpClose(){

        $(".popUpModal").show().hide("slide", {direction: "right" }, 300 );//slide animated to popup dialog
	
	}

	_menuItemOnClick(menuItem){
		
		$('.rightDiv').removeClass('expandRightDiv');//make the rightSide div to initial width
        $('.viewIcon').removeClass('rotate180Deg');//reset icon into initial state (0 deg)
        $(".popUpModal").css("width",$('.menu-btn').width()+10+'px'); //make the popup window width relative to menu item width
       
        $('.menu-span').addClass('glyphicon glyphicon-pencil');//change menu button icon when its clicked


        if(!$(".popUpModal").is(':visible')){  
 			$(".popUpModal").hide().show("slide", {direction: "right" }, 300 );//slide animated to popup dialog
        }


        switch(menuItem){
        	case 1 : render(<TitleAndDueDate actions={this.props.actions}
        									 titleDueDateObj={this.props.titleDueDateObj}/>, 
        			 document.getElementById('popupContainer'));
        			 break;

        	case 2 : render(<LearningObjectives actions={this.props.actions}
        										learningObjectivesObj={this.props.learningObjectivesObj}/>, 
        			 document.getElementById('popupContainer'));
        			 break;
        			 
        	case 3 : render(<Description actions={this.props.actions}
        								 descriptionObj={this.props.descriptionObj}/>, 
        			 document.getElementById('popupContainer'));
        			 break;

        	case 4 : render(<InstResources/>, 
        			 document.getElementById('popupContainer'));
        			 break;

        	case 5 : render(<StudentSubmission  actions={this.props.actions}
        										studentSubmissionObj={this.props.studentSubmissionObj}/>, 
        			 document.getElementById('popupContainer'));
        			
        			 

        }
	}

}

function mapToProps(state){
	return state;   //state.todos
}

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

export default connect(mapToProps,mapDispatchToProps)(Canvas)






