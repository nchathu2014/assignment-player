import React from 'react';

export default class KalturaPlayer extends React.Component{

    constructor(props){
        super(props);
        var href=null;
    }

    render(){
        
        return(
                <div id="kalturaWrapper" ref="kp">
                   <iframe src={href} width={this.props.pl_width} height={this.props.pl_height} allowFullScreen webkitallowfullscreen mozAllowFullScreen frameBorder="0"></iframe>
                </div>
            );

    }

    componentWillMount() {
            href="http://www.kaltura.com/p/"+this.props.wid+"/sp/"+this.props.wid+"00/embedIframeJs/uiconf_id/"+this.props.uiconf_id+"/partner_id/"+this.props.wid+"?iframeembed=true&playerId="+this.props.player_id+"&entry_id="+this.props.entry_id;        
    }

}
    
    