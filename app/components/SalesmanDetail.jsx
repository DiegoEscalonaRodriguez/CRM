import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import Persona from 'material-ui/svg-icons/social/person';
import Email from 'material-ui/svg-icons/communication/email';
import Fono from 'material-ui/svg-icons/communication/phone';
import Maleto from 'material-ui/svg-icons/places/business-center';
import Avatar from 'material-ui/Avatar';
import {green500, red500, yellow900} from 'material-ui/styles/colors';
export default class SalesmanDetail extends React.Component{


	render(){

		return(
			
			/* Como coño se pone una imagen???? */

			<div className="salesmanDetail">
				<h3 style={{margin:10}}> <Maleto color={green500} />SALESMAN </h3>
				<Avatar size={150} style={{marginLeft:10}} src={this.props.salesman.Photo=="" | this.props.salesman.Photo== null  ? "https://image.flaticon.com/icons/png/512/1/1954.png" : this.props.salesman.Photo.url} />
				
				
				<br></br>
				<Persona color={yellow900} style={{marginLeft:10}}/><b>Name:</b>  {this.props.salesman.fullname=="" | this.props.salesman.fullname== null  ? "<Vacio>" : this.props.salesman.fullname}
				<br></br>
				<Email color={yellow900} style={{marginLeft:10}}/><b>Email:</b>  {this.props.salesman.email1=="" | this.props.salesman.email1== null ? "<Vacio>" : this.props.salesman.email1}
				<br></br>
				<Fono color={yellow900} style={{marginLeft:10}}/><b>Telefono:</b>  {this.props.salesman.phone1=="" | this.props.salesman.phone1== null ? "<Vacio>" : this.props.salesman.phone1}
				<br></br><br></br>

			</div>

			);

	}
}

