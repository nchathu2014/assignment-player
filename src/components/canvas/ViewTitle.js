import React,{Component} from 'react';

export default class ViewTitle extends Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div>
				{/*
                    <div className="row">
                        <div className="col-lg-8" style={{padding:'10px 0 0 25px',fontSize:'12px'}}>
                            {"DRMUS 811-2 < DRMUS 811-2 Violine Performance"}
                        </div>
                    </div>                  
                */}

				<div className="dash-line">
                        <div className="row">
                            <div className="col-lg-8 col-md-6 dash-horizontal" style={{wordWrap: 'break-word'}}>
                                <b>Title</b>:
                            </div>
                            
                            <div className="col-lg-4 col-md-4">
                                <b> Date : </b>12/09/2015
                            </div>
                        </div>
                    </div>
                    <div  className="dash-line">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <b> Learning Objective :</b>
                            </div>
                        </div>
                    </div>
                    <div  className="dash-line">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <b>Description :</b>
                            </div>
                        </div>
                    </div>
			</div>
		);
	}
}



