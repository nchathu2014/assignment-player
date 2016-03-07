import React,{Component} from 'react';
import PopOver from '../PopOver';

export default class StudentSubmission extends Component{

	constructor(props){
		super(props);
			 
	}

	_saveStudentSubmission(){
		
	}

	_onChangeRequiured(flag){
		this.props.studentSubmissionObj.checkedRequiredVideo=!this.props.studentSubmissionObj.checkedRequiredVideo;
		this.forceUpdate();
				
	}

	_checkBoxChange(flag){

		switch(flag){
			case 'video':
				this.props.studentSubmissionObj.checkedVideo=!this.props.studentSubmissionObj.checkedVideo;
				this.props.studentSubmissionObj.checkedRequiredVideo=!this.props.studentSubmissionObj.checkedRequiredVideo;
				

				this.props.studentSubmissionObj.disabledVideo=!this.props.studentSubmissionObj.disabledVideo;
				if(this.props.studentSubmissionObj.disabledVideo){
					this.props.studentSubmissionObj.checkedRequiredVideo=false;
				}
				this.forceUpdate();
				break;

			case 'audio':
				this.props.studentSubmissionObj.checkedAudio=!this.props.studentSubmissionObj.checkedAudio;
				this.props.studentSubmissionObj.checkedRequiredAudio=!this.props.studentSubmissionObj.checkedRequiredAudio;
				this.props.studentSubmissionObj.disabledAudio=!this.props.studentSubmissionObj.disabledAudio;
				if(this.props.studentSubmissionObj.disabledAudio){
					this.props.studentSubmissionObj.checkedRequiredAudio=false;
				}
				this.forceUpdate();
				break;

			case 'image':
				this.props.studentSubmissionObj.checkedImage=!this.props.studentSubmissionObj.checkedImage;
				this.props.studentSubmissionObj.checkedRequiredImage=!this.props.studentSubmissionObj.checkedRequiredImage;
				this.props.studentSubmissionObj.disabledImage=!this.props.studentSubmissionObj.disabledImage;
				if(this.props.studentSubmissionObj.disabledImage){
					this.props.studentSubmissionObj.checkedRequiredImage=false;
				}
				this.forceUpdate();
				break;

			case 'document':
				this.props.studentSubmissionObj.checkedDocument=!this.props.studentSubmissionObj.checkedDocument;
				this.props.studentSubmissionObj.checkedRequiredDocument=!this.props.studentSubmissionObj.checkedRequiredDocument;
				this.props.studentSubmissionObj.disabledDocument=!this.props.studentSubmissionObj.disabledDocument;
				if(this.props.studentSubmissionObj.disabledDocument){
					this.props.studentSubmissionObj.checkedRequiredDocument=false;
				}
				this.forceUpdate();
				break;

		}

		
		
	}

	_checkBoxChangeRequired(flag){
		switch(flag){
			case 'video':
				this.props.studentSubmissionObj.checkedRequiredVideo=!this.props.studentSubmissionObj.checkedRequiredVideo;
				this.forceUpdate();
				break;

				case 'audio':
				this.props.studentSubmissionObj.checkedRequiredAudio=!this.props.studentSubmissionObj.checkedRequiredAudio;
				this.forceUpdate();
				break;

				case 'image':
				this.props.studentSubmissionObj.checkedRequiredImage=!this.props.studentSubmissionObj.checkedRequiredImage;
				this.forceUpdate();
				break;

				case 'document':
				this.props.studentSubmissionObj.checkedRequiredDocument=!this.props.studentSubmissionObj.checkedRequiredDocument;
				this.forceUpdate();
				break;

				
		}
	}

	render(){


		return(
			<div>
				<div className="text-center">
				    <PopOver  heading="Student Submissions"  icon="glyphicon glyphicon-info-sign"/>
				</div>
				

				<div style={{backgroundColor:'#ffffff',padding:'10px 30px'}}>
					
						<div className="row">
							<label className="pull-left">
								<input type="checkbox" 
									   onChange={this._checkBoxChange.bind(this,"video")}
									   checked={this.props.studentSubmissionObj.checkedVideo}/> Video
							</label>
							<label className="pull-right">
								<input type="checkbox"  
								       disabled={this.props.studentSubmissionObj.disabledVideo}
								       checked={this.props.studentSubmissionObj.checkedRequiredVideo}
								       onChange={this._checkBoxChangeRequired.bind(this,"video")}/> Required
							</label>
							<br/>
							<div style={{height:7}}>&nbsp;</div>
							<div className="text-left" 

							     hidden= {!this.props.studentSubmissionObj.checkedVideo}>
								 <b>Add a video</b> (Required)
								 &nbsp;<span className="glyphicon glyphicon-pencil"></span>
                                 <div style={{borderBottom:'1px solid #cccccc '}}>&nbsp;</div>
							</div>
						</div>
						<div>&nbsp;</div>
						<div className="row">
							<label className="pull-left">
								<input type="checkbox" 
								       onChange={this._checkBoxChange.bind(this,"audio")}
									   checked={this.props.studentSubmissionObj.checkedAudio}/> Audio
							</label>
							<label className="pull-right">
								<input type="checkbox"  
								       disabled={this.props.studentSubmissionObj.disabledAudio}
								       checked={this.props.studentSubmissionObj.checkedRequiredAudio}
								       onChange={this._checkBoxChangeRequired.bind(this,"audio")}/> Required
							</label>
							<br/>
							<div style={{height:7}}>&nbsp;</div>
							<div className="text-left" 
							     hidden= {!this.props.studentSubmissionObj.checkedAudio}>
								 <b>Add a audio</b> (Required)
								 &nbsp;<span className="glyphicon glyphicon-pencil"></span>
								 <div style={{borderBottom:'1px solid #cccccc '}}>&nbsp;</div>
							</div>
						</div>
						<div>&nbsp;</div>
						<div className="row">
							<label className="pull-left">
								<input type="checkbox" 
									   onChange={this._checkBoxChange.bind(this,"image")}
									   checked={this.props.studentSubmissionObj.checkedImage}/> Image
							</label>
							<label className="pull-right">
								<input type="checkbox"  
									   disabled={this.props.studentSubmissionObj.disabledImage}
								       checked={this.props.studentSubmissionObj.checkedRequiredImage}
								       onChange={this._checkBoxChangeRequired.bind(this,"image")}/> Required
							</label>
							<br/>
							<div style={{height:7}}>&nbsp;</div>
							<div className="text-left" 
							     hidden= {!this.props.studentSubmissionObj.checkedImage}>
								 <b>Add a image</b> (Required)
								 &nbsp;<span className="glyphicon glyphicon-pencil"></span>
								 <div style={{borderBottom:'1px solid #cccccc '}}>&nbsp;</div>
							</div>
						</div>
						<div>&nbsp;</div>
						<div className="row">
							<label className="pull-left">
								<input type="checkbox" 
									   onChange={this._checkBoxChange.bind(this,"document")}
									   checked={this.props.studentSubmissionObj.checkedDocument}/> Documents
							</label>
							<label className="pull-right">
								<input type="checkbox"  
									   disabled={this.props.studentSubmissionObj.disabledDocument}
								       checked={this.props.studentSubmissionObj.checkedRequiredDocument}
								       onChange={this._checkBoxChangeRequired.bind(this,"document")}/> Required
							</label>
							<br/>
							<div style={{height:7}}>&nbsp;</div>
							<div className="text-left" 
							     hidden= {!this.props.studentSubmissionObj.checkedDocument}>
								 <b>Add a document</b> (Required)
								 &nbsp;<span className="glyphicon glyphicon-pencil"></span>
								 <div style={{borderBottom:'1px solid #cccccc '}}>&nbsp;</div>
							</div>
						</div>
					

					{/*<div className = "table-responsive" style={{backgroundColor:'#ffffff',paddingTop:20}}>
					   <table className = "table">
					           
					      <tbody>
					         <tr>
					            <td style={styleRowOne}><input type="checkbox"/> Video</td>
					            <td style={styleRowTwo} className="text-right">
					            	<input type="checkbox" disabled={this.props.studentSubmissionObj.disabled}/> Required
					            </td>



					           
					         </tr>
					         
					         <tr>
					            <td style={styleRowOne}><input type="checkbox"/> Audio</td>
					            <td style={styleRowTwo} className="text-right">
					            	<input type="checkbox" disabled={this.props.studentSubmissionObj.disabled}/> Required
					            </td>
					         </tr>
					         
					         <tr>
					            <td style={styleRowOne}><input type="checkbox"/> Image</td>
					            <td style={styleRowTwo} className="text-right">
					            	<input type="checkbox" disabled={this.props.studentSubmissionObj.disabled}/> Required
					            </td>
					            
					         </tr>
					         
					         <tr>
					            <td style={styleRowOne}><input type="checkbox"/> Document</td>
					            <td style={styleRowTwo} className="text-right">
					            	<input type="checkbox" disabled={this.props.studentSubmissionObj.disabled}/> Required
					            </td>
					            </tr>
					      </tbody>
					      
					   </table>
					</div>  */}
				</div>
				<div className="spaceDiv">&nbsp;</div>	
				<div className="text-left">
					   Additional Settings<br/><br/>
                    <input type="checkbox"/> Everyone can comment on these resources
                </div>
			     <div>
					<button className="btn btn-primary pull-right" 
					        onClick={this._saveStudentSubmission.bind(this)}>Save</button>
				</div>				
			</div>
		);
	}
}



