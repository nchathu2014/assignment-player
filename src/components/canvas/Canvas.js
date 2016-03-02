import React from 'react';
import {render} from 'react-dom';
import Header from './Header';
import View from './View';
import MenuWrapper from './MenuWrapper';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuLabel from './MenuLabel';

/*2nd level components*/
import AddMedia from './other_components/AddMedia';
import AddQuestion from './other_components/AddQuestion';
import GradingOptions from './other_components/GradingOptions';
import Description from './other_components/Description';
import QuizDetail from './other_components/QuizDetail';
import LearningObjectives from './other_components/LearningObjectives';



export default class Canvas extends React.Component{

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
								<View/>
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
        	case 1 : render(<QuizDetail/>, 
        			 document.getElementById('popupContainer'));
        			 break;

        	case 2 : render(<LearningObjectives/>, 
        			 document.getElementById('popupContainer'));
        			 break;
        			 
        	case 3 : render(<Description/>, 
        			 document.getElementById('popupContainer'));
        			 break;

        	case 4 : render(<AddMedia/>, 
        			 document.getElementById('popupContainer'));
        			 break;

        	case 5 : render(<AddQuestion/>, 
        			 document.getElementById('popupContainer'));
        			 break;
        			 
        	case 6 : render(<GradingOptions/>, 
        			 document.getElementById('popupContainer'));
        			 break;

        }
	}

}






