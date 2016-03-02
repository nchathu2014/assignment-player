import React,{Component} from 'React';

class ToolTip extends Component{
	render(){
		return(
			<div>
				<a  href="#" 
					data-toggle="popover" 
					title="Popover Header" 
					data-content="Some content inside the popover">Toggle popover</a>
			</div>
		);
	}
}


export default ToolTip