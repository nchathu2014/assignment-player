import React from 'react';

export default class MenuItem extends React.Component{

	constructor(props){
		super(props);		
		this.state={
			glyphiconColor:'green'
		} 
	}



	render(){
		return(
			<div>
				<button className="btn btn-default menu-btn" 
						onClick={this.props.menuItemOnClick}
						onMouseOver={this._onMouseOver.bind(this)}
						onMouseOut={this._onMouseOut.bind(this)}>
				                 <span className="glyphicon glyphicon-plus"
				                 	   style={{color:this.state.glyphiconColor}} >&nbsp;</span>
				                 <span style={{paddingLeft:10}}>{this.props.children}</span>
				</button>
				<div style={{height:3}}>&nbsp;</div>
			</div>
		);
	}

	_onMouseOver(){
		this.setState({
			glyphiconColor:'white'
		});
	}

	_onMouseOut(){
		this.setState({
			glyphiconColor:'green'
		});
	}

}
