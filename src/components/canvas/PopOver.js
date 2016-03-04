import React,{Component} from 'React';

class PopOver extends Component{


	_popOver(){
		$('[data-toggle="popover"]').popover(); 
		
	}

	render(){
		return(
			<div>



				<h4>
					{this.props.heading}&nbsp;
					<span className={this.props.icon}
						  onClick={this._popOver.bind(this)}></span>
					
				</h4>
				
			</div>
		);
	}
}


export default PopOver