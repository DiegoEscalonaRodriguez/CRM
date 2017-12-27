import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import Nube from 'material-ui/svg-icons/file/cloud-queue';
import Done from 'material-ui/svg-icons/action/done';
import Reloj from 'material-ui/svg-icons/action/watch-later';
import Later from 'material-ui/svg-icons/action/update';
import {lightGreenA400, red500, amber500} from 'material-ui/styles/colors';

export default class TargetElement extends React.Component{

	constructor() {
    	super();
    	this.state = { 
    		show: false 
    	};
    	this.handleClick = this.handleClick.bind(this);
  	}

  	handleClick() {
    	this.setState({
      	show: !this.state.show
    	});
  	}

	render(){

		
		var show = {
			display: this.state.show ? "block" : "none"
		};
		console.log("Display de las etiquetas",show);


		
		return(
			
			<div>

				<RaisedButton  
				    style={ {width: 500, margin:10}}
					primary={true}
					onClick={this.handleClick}

					label={this.props.target.Company.name + " ( " +	this.props.target.TargetType.name + " ) "}
					labelPosition="before"
					icon ={(this.props.target.success== null ? <Later color={red500}/> : <Done color={lightGreenA400}/>   )}

				/>
				<p id= "valor" style={show} > 
				<Reloj color={amber500} style={{marginLeft:10, marginRight:5}}/>{this.props.target.success== null ? "Estado : Pendiente" : "Estado : Completado"}
				<br></br>
				<Nube color={amber500} style={{marginLeft:10, marginRight:5}}/>web 1: {this.props.target.Company.web1== null | this.props.target.Company.web1== ""  ? "<Vacio>" : this.props.target.Company.web1}
				<br></br>
				<Nube color={amber500} style={{marginLeft:10, marginRight:5}}/>web 2: {this.props.target.Company.web2== null | this.props.target.Company.web2== ""  ? "<Vacio>" : this.props.target.Company.web2}

				</p>

			</div>
	);	
	}
}

