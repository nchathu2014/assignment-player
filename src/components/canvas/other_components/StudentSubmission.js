import React,{Component} from 'react';
import PopOver from '../PopOver';

export default class StudentSubmission extends Component{

	constructor(props){
		super(props);
			 
	}

	render(){

		var {styleRowOne,styleRowTwo}={
			styleRowOne:{
				paddingLeft:20,
				border:'none'
			},
			styleRowTwo:{
				paddingRight:20,
				border:'none'
			}

		}

		return(
			<div>
				<div className="text-center">
				    <PopOver  heading="Student Submissions"  icon="glyphicon glyphicon-info-sign"/>
				</div>
				

				<div>

					<div className = "table-responsive" style={{backgroundColor:'#ffffff',paddingTop:20}}>
					   <table className = "table">
					           
					      <tbody>
					         <tr>
					            <td style={styleRowOne}><input type="checkbox"/> Video</td>
					            <td style={styleRowTwo} className="text-right"><input type="checkbox"/> Required</td>
					           
					         </tr>
					         
					         <tr>
					            <td style={styleRowOne}><input type="checkbox"/> Audio</td>
					            <td style={styleRowTwo} className="text-right"><input type="checkbox"/> Required</td>
					         </tr>
					         
					         <tr>
					            <td style={styleRowOne}><input type="checkbox"/> Image</td>
					            <td style={styleRowTwo} className="text-right"><input type="checkbox"/> Required</td>
					            
					         </tr>
					         
					         <tr>
					            <td style={styleRowOne}><input type="checkbox"/> Document</td>
					            <td style={styleRowTwo} className="text-right"><input type="checkbox"/> Required</td>
					            </tr>
					      </tbody>
					      
					   </table>
					</div>  
					<br/>
					<div className="text-left">
					   Additional Settings<br/><br/>
                    <input type="checkbox"/> Everyone can comment on these resources
                    </div>

				</div>

							
			</div>
		);
	}
}



